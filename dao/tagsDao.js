var mysql = require('mysql');
var $conf = require('../conf/db');
//var $util = require('../util');
var $sql = require('./tagsSqlMapping');
var async = require("async");

// 使用连接池，提升性能
//var pool  = mysql.createPool($util.extend({}, $conf.mysql));
var pool = mysql.createPool($conf.mysql);

// 向前台返回JSON方法的简单封装
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

module.exports = {
  add: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      // 获取前台页面传过来的参数
      var param = req.body;

      // 建立连接，向表中插入值
      // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
      console.log('contentWidth')
      console.log(param.contentWidth)
      connection.query($sql.insert, [param.name, param.type, param.contentWidth, param.options], function (err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '增加成功'
          };
        }

        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res, result);

        // 释放连接 
        connection.release();
      });
    });
  },
  delete: function (req, res, next) {
    // delete by Id

    pool.getConnection(function (err, connection) {
      var param = req.body;
      var id = +param.id;
      connection.query($sql.delete, id, function (err, result) {
        if (result.affectedRows > 0) {
          result = {
            code: 200,
            msg: '删除成功'
          };
        } else {
          result = void 0;
        }
        jsonWrite(res, result);
        connection.release();
      });
    });
  },
  update: function (req, res, next) {
    // update by id
    // 为了简单，要求同时传name和age两个参数
    var param = req.body;
    pool.getConnection(function (err, connection) {
      console.log(param)
      connection.query($sql.update, [param.name, param.type, param.contentWidth, param.options, +param.id], function (err, result) {
        // 使用页面进行跳转提示
        if (result.affectedRows > 0) {
          jsonWrite(res, result);
        } else {
          jsonWrite(res, result);
        }
        connection.release();
      });
    });

  },
  queryByIName: function (req, res, next) {
    var tableObj = {form: [], title: [], formTitle:[]}
    pool.getConnection(function (err, connection) {
      async.eachSeries(req.tableArr.title, function (item, callback) {
        connection.query($sql.queryByName, item, function(err, result) {
          console.log(item)
          console.log(result)
          if (result.length > 0) {
            if (result[0].type === 'formTitle') {
              tableObj.formTitle.push(result[0])
            } else {
              tableObj.title.push(result[0])
            }
          }
          callback();
        })
      },function(err) {
        if(err) {
          console.log(err);
        } else {
          async.eachSeries(req.tableArr.cell, function (item, callback) {
            connection.query($sql.queryByName, item, function(err, result) {
              if (result.length > 0) {
                tableObj.form.push(result[0])
              }
              callback();
            })
          },
          function (err) {
            if (err) {
              console.log(err)
            } else {
              console.log("SQL全部执行成功")
              req.tableObj = tableObj
              connection.release();
              next()
            }
          })
        }
      })
      // req.tableArr.title.forEach(item => {
      //   connection.query($sql.queryByName, item, function(err, result) {
      //     tableObj.item = result
      //   });
      // })
      // req.tableArr.cell.forEach(item => {
      //   connection.query($sql.queryByName, item, function(err, result) {
      //     tableObj.item = result
      //   });
      // })
    });
  },
  queryAll: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      connection.query($sql.queryAll, function (err, result) {
        jsonWrite(res, result);
        connection.release();
      });
    });
  },
  quaryName: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      connection.query($sql.quaryName, function (err, result) {
        jsonWrite(res, result);
        connection.release();
      });
    });
  },
  addImg: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      // 获取前台页面传过来的参数
      var url = res.url;
      var time = res.time;

      // 建立连接，向表中插入值
      // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
      connection.query($sql.addImg, [url, time], function (err, result) {
        if (result) {
          result = {
            code: 200,
            msg: {
              url: url,
              time: time
            }
          };
        }

        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res, result);

        // 释放连接 
        connection.release();
      });
    });
  },
};