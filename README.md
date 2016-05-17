# mysql-escape-array
Escape arrays in mysql queries to prevent SQL injection vulnerabilities. This is escpeccially useful in MYSQL IN statments.

```js
var mysqlEscapeArray = require('mysql-escape-array');

var names = ["bob","joe","bill","Robert' DROP TABLE Students;"];

var sql = 'select * from users where name in ' + mysqlEscapeArray(names);

console.log(sql)
//select * from users where name in ('bob','joe','bill','Robert\' DROP TABLE Students;')
