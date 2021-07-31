import express from "express";
import { Request, Response } from "express";
import { fstat } from "fs";
import mysql from "mysql";
import fs from 'fs';
import { assambleHTML } from "./Page";

const databaseName = "personal_website";
const tableName = "content";
const Port = process.env.Port || 3000;
const host = "127.0.0.1";

const app = express();
app.use('/style.css', express.static('./dist/css'));

const connection = mysql.createConnection({
   // connectionLimit: 10,
   host: 'localhost',
   user: 'root',
   password: '',
   database: databaseName
})
const server = app.listen(Port, () => {
   console.log(`server ist starting on port ${Port}`);
});

app.get("/", (req, res) => {
   res.sendFile(`${__dirname}/index.html`)
});

app.get("/js/app.js", (req, res) => {
   res.sendFile(`${__dirname}/js/app.js`)
});

app.get("/css/style.css", (req, res) => {
   res.sendFile(`${__dirname}/css/style.css`)
});

app.get(/assets\/fonts\/.*/i, (req, res) => {
   if (fs.existsSync(__dirname + req.path)) {
      res.sendFile(__dirname + req.path);
   } else res.sendStatus(404);
});

app.get("/favicon.ico", (req, res) => {
   res.sendFile(`${__dirname}/assets/favicon.ico`);
});

app.get("/test", (req, res) => {
   res.send(new assambleHTML().getHtmlString());
});
