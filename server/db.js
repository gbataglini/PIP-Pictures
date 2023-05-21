const mysql = require('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    user: "user", // Enter your local server username here
    password: "password", // Enter your local server password here
    database: "pipdb",
  });

module.exports = db;