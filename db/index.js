// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     user:'root',
//     password: 'password',
//     database: 'addtobag'
// });

// connection.connect((err) => {
//     if (err) {
//         console.log('Error connecting to DB:', err.sqlMessage, err.message,err.code)
//     } else {
//         console.log('Successfully connected to DB!');
//     }
// })


// module.exports = {
// }


var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://username:password@host:port/database')

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })