import express from "express";
import fs from 'fs';
import { Backend } from "./Backend";
import { HomePage } from "./HomePage";
import { SqlCommands } from "./interfaces/SqlCommands";
import { TablePersonalWebsite } from "./interfaces/TablePersonalWebsite";
import { Page } from "./Page";

const Port = process.env.Port || 3000;

const app = express();
app.use('/style.css', express.static('./dist/css'));
app.use(express.json()) // <==== parse request body as JSON

const server = app.listen(Port, () => {
   console.log(`server ist starting on port ${Port}`);
});

app.get("/", (req, res) => {
   res.sendFile(`${__dirname}/index.html`)
});

app.get("/backend", (req, res) => {
   res.sendFile(`${__dirname}/backend.html`)
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

app.get("/test", async (req, res) => {
   const htmlPage: Page = new HomePage();
   await htmlPage.buildPage();
   res.send(htmlPage.getHtmlString());
});

// GET

app.get("/titlename", async (req, res) => {
   const backend = new Backend();
   const sqlCommand: SqlCommands = JSON.parse(fs.readFileSync("sqlCommands.json").toString());
   try {
      const response = await backend.executeSQL(sqlCommand.titleName) as TablePersonalWebsite;
      res.json({ titleName: response[0].Text_Content })
   } catch (error) {
      res.json({ err: true, msg: error });
   }
})

// POST

app.post("/titlename", async (req, res) => {
   const backend = new Backend();
   try {
      const response = await backend.executeSQL("UPDATE `content` SET `Text_Content` = '" + req.body.titleName + "'")
   } catch (error) {
      res.json({ err: true, msg: error });
   }
   res.sendStatus(200);
})