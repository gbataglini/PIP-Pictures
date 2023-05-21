const mysql = require('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CFG2023!",
    database: "pipdb",
  });

module.exports = db;