import express from "express";
import { Request, Response } from "express";

import mysql from "mysql";

const databaseName = "personal_website";
const tableName = "content";



const app = express();
// const Port = process.env.Port || 3000


// // const server = app.listen(Port, () => {
// //    console.log(`server ist starting on port ${Port}`);
// // });


const connection = mysql.createConnection({
   // connectionLimit: 10,
   host: 'localhost',
   user: 'root',
   password: '',
   database: databaseName
})

// GET method route
// app.get('/', function (req, res) {
//    res.send('GET request to the homepage');
// });

app.post('/titlename', (req: Request, res: Response) => {
   try {
      selectAll(req.body);
      res.send('Joar')
   } catch (error) {
      res.send('Nö')
   }
});

function selectAll(res: any) {
   connection.connect();

   connection.query(`SELECT * FROM ${tableName}`, (err: any, rows: any, field: any) => {
      if (err) throw err;
      console.log(rows);
      console.log(`TABLES: ${rows}`);
   })
   connection.end();
}

