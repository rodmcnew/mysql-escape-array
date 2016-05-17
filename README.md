# MySQL Escape Array
Escape arrays in MySQL queries to prevent SQL injection vulnerabilities. This is vulnerabilities useful in MySQL IN statments.

```js
var mysqlEscapeArray = require('mysql-escape-array');

var names = ["bob", "joe", "bill", "Robert' DROP TABLE Students;"];

var sql = 'SELECT * FROM users WHERE name IN ' + mysqlEscapeArray(names);

console.log(sql)
//SELECT * FROM users WHERE name IN ('bob','joe','bill','Robert\' DROP TABLE Students;')
```

https://www.npmjs.com/package/mysql-escape-array
