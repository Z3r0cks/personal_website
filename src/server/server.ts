const express = require('express');
const mysql = require('mysql')

const databaseName = "personal_website";
const tableName = "content";



// const app = express();
// const Port = process.env.Port || 3000


// const server = app.listen(Port, () => {
//    console.log(`server ist starting on port ${Port}`);
// });

const connection = mysql.createConnection({
   connectionLimit: 10,
   host: 'localhost',
   user: 'root',
   password: '',
   database: databaseName
})

function selectAll() {
   connection.connect();

   connection.query(`SELECT * FROM ${tableName}`, (err: any, rows: any, field: any) => {
      if (err) throw err;
      console.log(rows);
      console.log(`TABLE: ${rows}`);
   })
   connection.end();
}


module.exports.selectAll = selectAll;