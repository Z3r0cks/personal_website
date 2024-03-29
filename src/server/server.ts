import express from "express";
import fs from 'fs';
import { Backend } from "./Backend";
import { HomePage } from "./HomePage";
import { SqlCommands } from "./interfaces/SqlCommands";
import TablePersonalWebsite from "./interfaces/TablePersonalWebsite";
import { Page } from "./Page";

const Port = process.env.Port || 3000;
const __dirParentsName = __dirname.slice(0, 33);

//__dirname:         D:\Projekte\personal_website\dist\server
//__dirParentsName:  D:\Projekte\personal_website\dist

const app = express();
app.use('/style.css', express.static('./dist/css'));
app.use(express.json()) // <==== parse request body as JSON
const server = app.listen(Port, () => {
   console.log(`server ist starting on port ${Port}`);
});

function addGetRequest(url: string, filePath: string) {
   app.get(url, async (req, res) => {
      res.sendFile(`${__dirParentsName}${filePath}`);
   });
}

const svgPath: string[] = ["SVG", "AddSvg", "CloseSvg", "SettingsSvg", "SaveSvg", "TrashSvg"];
const jsPath: string[] = ["SVG", "AddSvg", "CloseSvg", "SettingsSvg", "SaveSvg", "TrashSvg"];

addGetRequest("/", "/index.html")
addGetRequest("/css/style.css", "/css/style.css")
addGetRequest("/backend", "/backend.html")
addGetRequest("/js/backendPage.js", "/js/backend/backendPage.js")
addGetRequest("/js/loadContent", "/js/backend/loadContent.js")
addGetRequest("/helper/helper", "/js/helper/helper.js")
addGetRequest("/helper/helper.js", "/js/helper/helper.js")
addGetRequest("/frontend/components/C_title", "/js/frontend/components/C_title.js")
addGetRequest("/frontend/components/component", "/js/frontend/components/component.js")
addGetRequest("/svg/SVG.js", "/js/svg/SVG.js")


svgPath.forEach(el => {
   addGetRequest(`/svg/${el}`, `/js/svg/${el}.js`)
});

app.get(/assets\/fonts\/.*/i, (req, res) => {
   if (fs.existsSync(__dirParentsName + req.path)) {
      res.sendFile(__dirParentsName + req.path);
   } else res.sendStatus(404);
});

app.get(/assets\/svgs\/.*/i, (req, res) => {
   if (fs.existsSync(__dirParentsName + req.path)) {
      res.sendFile(__dirParentsName + req.path);
   } else res.sendStatus(404);
});

app.get("/favicon.ico", (req, res) => {
   res.sendFile(`${__dirParentsName}/assets/favicon.ico`);
});

app.get("/test", async (req, res) => {
   const htmlPage: Page = new HomePage();
   await htmlPage.buildPage();
   res.send(htmlPage.getHtmlString());
});

// GET

// app.get("/titlename", async (req, res) => {
//    const backend = new Backend();
//    const sqlCommand: SqlCommands = JSON.parse(fs.readFileSync("sqlCommands.json").toString());
//    try {
//       const response = await backend.executeSQL(sqlCommand.titleName) as TablePersonalWebsite;
//       res.json({ titleName: response[0].Text_Content })
//    } catch (error) {
//       res.json({ err: true, msg: error });
//    }
// })

// function select(value: string) {
//    app.get(`${value}`, async (req, res) => {
//       const backend = new Backend();
//       const sqlCommand: SqlCommands = JSON.parse(fs.readFileSync("sqlCommands.json").toString());
//       try {
//          const response = await backend.executeSQL(sqlCommand[value]) as TablePersonalWebsite;
//          res.json({ titleName: response[0].Text_Content })
//       } catch (error) 
//          res.json({ err: true, msg: error });
//       }
//    })
// }

const pathArray: string[] = ["selectComponents", "selectContent"];

const sqlCommand: SqlCommands = JSON.parse(fs.readFileSync("sqlCommands.json").toString());

pathArray.forEach(e => {
   app.get(`/${e}`, async (req, res) => {
      const backend = new Backend();
      try {
         const response = await backend.executeSQL(sqlCommand.select[e]) as TablePersonalWebsite;
         res.json(response)
         // res.json({ Names: response.forEach(e => { return e.Name }) })
      } catch (error) {
         res.json({ err: true, msg: error });
      }
   })
})
// app.get("/selectComponents", async (req, res) => {
//    const backend = new Backend();
//    try {
//       const response = await backend.executeSQL(sqlCommand.select["selectComponents"]) as TablePersonalWebsite;
//       res.json(response)
//       // res.json({ Names: response.forEach(e => { return e.Name }) })
//    } catch (error) {
//       res.json({ err: true, msg: error });
//    }
// })

app.post("/addContent", async (req, res) => {
   const backend = new Backend();
   await backend.executeSQL("INSERT INTO `personal_website`.`content`(`DEV_NAME`,`SETTINGS`) VALUES ('" + req.body.devName + "','" + JSON.stringify(req.body.settings) + "')")
   try {
   } catch (error) {
      res.json({ err: true, msg: error });
   }
   res.sendStatus(200);
})

app.post("/deleteContent", async (req, res) => {
   const backend = new Backend();
   await backend.executeSQL("DELETE FROM `content` WHERE `content`.`ID` = " + req.body.id)
   try {
   } catch (error) {
      res.json({ err: true, msg: error });
   }
   res.sendStatus(200);
})

app.post("/addComponent", async (req, res) => {
   const backend = new Backend();
   await backend.executeSQL("INSERT INTO `personal_website`.`component`(`DEV_NAME`,`PUP_NAME`,`DESCR`) VALUES ('" + req.body.devName + "','" + req.body.pupName + "','" + "','" + req.body.devClasses + "','" + + req.body.descr + "')")
   try {
   } catch (error) {
      res.json({ err: true, msg: error });
   }
   res.sendStatus(200);
})

app.post("/deleteComponent", async (req, res) => {
   const backend = new Backend();
   await backend.executeSQL("DELETE FROM `content` WHERE `component`.`ID` = " + req.body.id)
   try {
   } catch (error) {
      res.json({ err: true, msg: error });
   }
   res.sendStatus(200);
})

function stringifySettings(req) {
   let string: string;
   req.forEach(e => {

   })
}

// app.post("/addContent", async (req, res) => {
//    const backend = new Backend();
//    try {
//       const response = await backend.executeSQL("UPDATE `content` SET `Text_Content` = '" + req.body.titleName + "'")
//    } catch (error) {
//       res.json({ err: true, msg: error });
//    }
//    res.sendStatus(200);
// })

// pathArray.forEach(e => {
//    const sqlCommand: SqlCommands = JSON.parse(fs.readFileSync("sqlCommands.json").toString());
//    app.get(`/${e}`, async (req, res) => {
//       const backend = new Backend();
//       try {
//          const response = await backend.executeSQL(sqlCommand.select[e]) as TablePersonalWebsite;
//          res.json({ titleName: response[0].Text_Content })
//       } catch (error) {
//          res.json({ err: true, msg: error });
//       }
//    })
//    app.post(`/${e}`, async (req, res) => {
//       const backend = new Backend();
//       try {
//          const response = await backend.executeSQL(sqlCommand.post[e])
//       } catch (error) {
//          res.json({ err: true, msg: error });
//       }
//       res.sendStatus(200);
//    })
// })


// // POST
