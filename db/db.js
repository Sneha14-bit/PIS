//connection part is to be done here
//to export database
const mysql = require('mysql2');
const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password: 'Sneha@16',
    database: 'pis'
})

  module.exports = db.promise()
//promise() - fulfil , reject
//not line by line execution, 
//if a paricular line takes time, it would execute the next line.