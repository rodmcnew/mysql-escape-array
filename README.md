# mysql-escape-array
Escape arrays in mysql queries to prevent SQL injection vulnerabilities. This is vulnerabilities useful in MYSQL IN statments.

```js
var mysqlEscapeArray = require('mysql-escape-array');

var names = ["bob", "joe", "bill", "Robert' DROP TABLE Students;"];

var sql = 'SELECT * FROM users WHERE name IN ' + mysqlEscapeArray(names);

console.log(sql)
//SELECT * FROM users WHERE name IN ('bob','joe','bill','Robert\' DROP TABLE Students;')

(https://www.npmjs.com/package/mysql-escape-array)[https://www.npmjs.com/package/mysql-escape-array]
