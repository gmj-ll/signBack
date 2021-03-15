var tags = {
	insert:'insert into tags(name, type, contentWidth, options) values(?,?,?,?);',
	update:'update tags set name=?, type=?,contentWidth=?, options=?  where id=?;',
	delete: 'delete from tags where id=?;',
	queryById: 'select * from tags where id=?;',
	queryAll: 'select * from tags;',
	queryByName: 'select * from tags where name=?;',
	quaryName: 'select name from tags where key=?',
	addImg: 'insert into imgs(url, time) values(?,?);'
};
 
module.exports = tags;