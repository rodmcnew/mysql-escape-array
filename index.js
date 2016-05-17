var mysql = require('mysql');

/**
 * Escape arrays before putting them in mysql queries like 'where name in (\"bob\", \"joe\", \"jane\")
 *
 * @param array the javascript array to be escaped
 * @returns {string} escaped array with parentheses arround it
 */
module.exports = function (array) {
    var escapedInStatement = '';
    var comma = '';
    array.forEach(function (value) {
        escapedInStatement += comma + mysql.escape(value);
        comma = ',';
    });
    return '(' + escapedInStatement + ')';
};
