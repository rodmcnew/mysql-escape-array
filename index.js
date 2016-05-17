var mysql = require('mysql');

/**
 * Escape arrays before putting them in mysql queries like 'where name in (\"bob\", \"joe\", \"jane\")
 *
 * @param array the javascript array to be escaped
 * @returns {string} escaped array with parentheses arround it
 */
module.exports = function (array) {
    var escapedArray = '';
    var comma = '';
    array.forEach(function (value) {
        escapedArray += comma + mysql.escape(value);
        comma = ',';
    });
    return '(' + escapedArray + ')';
};
