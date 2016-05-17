var mysqlEscapeArray = require('../index.js');
var names = ["bob","joe","bill","Robert' DROP TABLE Students;"];
var sql = 'select * from users where name in ' + mysqlEscapeArray(names);
console.log(sql);
//Returns: select * from users where name in ('bob','joe','bill','Robert\' DROP TABLE Students;')
