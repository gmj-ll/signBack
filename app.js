
var express = require('express');
const child_process = require('child_process');
var multer = require('multer')

var tagsRouter = require('./routes/tags');

var bodyParser = require('body-parser');

var tagsDao = require('./dao/tagsDao')

var tempWordMessage = {}
var fileName = ''

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '47.94.228.127',
  user: 'root',
  password: 'GMJgao12138-',
  database: 'sign',
});

var storage = multer.diskStorage({
  //设置上传后文件路径，uploads文件夹会自动创建。
  destination: function (req, file, cb) {
    return cb(null, './uploads');
  },
  //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    var fileName = new Date().getTime() + '-' + file.originalname
    req.fileName = fileName
    fileName = fileName
    cb(null, fileName);
  }
});


var upload = multer({
  storage: storage
});

connection.connect(function (err) {
  if (err) {
    console.log('connecting error');
    return;
  }
  console.log('connecting success');
})

var app = express();
app.use(bodyParser());
var allowCors = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
app.use(function (req, res, next) {
  req.connection = connection;
  next();
});
app.use(allowCors);//使用跨域中间件

// app.get('/', function (req, res) {
//   console.log("主页 GET 请求");
//   res.send('Hello GET');
// })

// app.post('/', function (req, res) {
//   console.log("主页 POST 请求");
//   res.send('Hello POST');
// })

// app.get('/get', function (req, res) {
//   console.log("主页 GET 请求");
//   res.send('Hello GET get');
// })
app.use(express.static('public'));
app.post('/uploadImg', function(req, res, next){
  var fs = require('fs');
  //接收前台POST过来的base64
  var imgData = req.body.imgData;
  var timeStemp = new Date().getTime()
  //过滤data:URL
  var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
  var dataBuffer = Buffer.from(base64Data, 'base64'); // 这是另一种写法
  fs.writeFile(`./public/image-${timeStemp}.png`, dataBuffer, function(err) {
      if(err){
        res.send(err);
      }else{
        res.url = `image-${timeStemp}.png`
        res.time = timeStemp
        tagsDao.addImg(req, res, next)
      }
  })
})

var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json({
      code: 200,
      data: ret
    });
  }
};

app.use(upload.single('file'));
app.post('/upload', function (req, res, next) {
  var workerProcess = child_process.exec('python3 wordHandler.py ' + './uploads/' + req.fileName, function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    var obj = JSON.parse(stdout);
    req.tableArr = obj.title.concat(obj.cell);
    req.tableArr = JSON.parse(stdout)
    next();
    // res.send(jsonWrite(res, JSON.parse(stdout)));
  });
  workerProcess.on('exit', function (code) {
    console.log('子进程已退出，退出码 ' + code);
  });
}, function (req, res, next) {
  tagsDao.queryByIName(req, res, next)
}, function (req, res) {
  req.tableObj.fileName = req.fileName
  res.send(jsonWrite(res, req.tableObj))
})

app.use('/tags', tagsRouter);

app.post('/save', function (req, res, next) {
  let cellData = {}
  Object.keys(req.body.data).forEach(key => {
    if (req.body.data[key].value.match(/^data:image\/png;base64,/)) {
      base64Data = req.body.data[key].value.replace(/^data:image\/png;base64,/,"")
      binaryData = new Buffer(base64Data, 'base64').toString('binary');
      require("fs").writeFile(`./public/${req.body.fileName}.png`, binaryData, "binary", function(err) {
        console.log(err); // writes out file without error, but it's not a valid image
      })
      req.body.data[key].value = `./public/${req.body.fileName}.png`
    }
    cellData[req.body.data[key].name] = req.body.data[key].value
    
  })
  let titleData = {}
  Object.keys(req.body.formTitle).forEach(key => {
    titleData[req.body.formTitle[key].name] = req.body.formTitle[key].value
  })
  var workerProcess = child_process.exec('python3 wordHandlerWrite.py ' + './uploads/' + req.body.fileName + ` '${JSON.stringify(cellData)}'` + ` '${JSON.stringify(titleData)}'`, function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    console.log('修改成功')
    res.send(jsonWrite(res, {
      msg: req.body.fileName
    }))
    // var obj = JSON.parse(stdout);
    // req.tableArr = obj.title.concat(obj.cell);
    // res.send(jsonWrite(res, JSON.parse(stdout)));
  });
  workerProcess.on('exit', function (code) {
    console.log('子进程已退出，退出码 ' + code);
  })

  // tempWordMessage[fileName] = req.body
  // console.log(tempWordMessage)
})

app.get('/download', function (req, res, next) {
  res.download('demo.docx')
})

// app.get('/getTags', function (req, res) {
//   var connection = req.connection
//   let tagsList = []
//   connection.query('SELECT * FROM tags',function(err, rows, fields) {
//     if (err) throw err;
//     tagsList = rows
//     res.send(tagsList);
//   })
//   // connection.end();
//   res.send(tagsList);
// })




module.exports = app;
