"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const Backend_1 = require("./Backend");
const HomePage_1 = require("./HomePage");
const Port = process.env.Port || 3000;
const __dirParentsName = __dirname.slice(0, 33);
//__dirname:         D:\Projekte\personal_website\dist\server
//__dirParentsName:  D:\Projekte\personal_website\dist
const app = express_1.default();
app.use('/style.css', express_1.default.static('./dist/css'));
app.use(express_1.default.json()); // <==== parse request body as JSON
const server = app.listen(Port, () => {
    console.log(`server ist starting on port ${Port}`);
});
app.get("/", (req, res) => {
    res.sendFile(`${__dirParentsName}/index.html`);
});
app.get("/backend", (req, res) => {
    res.sendFile(`${__dirParentsName}/backend.html`);
});
app.get("/js/main.js", (req, res) => {
    res.sendFile(`${__dirParentsName}/js/main.js`);
});
app.get("/js/backendPage.js", (req, res) => {
    res.sendFile(`${__dirParentsName}/js/backend/backendPage.js`);
});
app.get("/css/style.css", (req, res) => {
    res.sendFile(`${__dirParentsName}/css/style.css`);
});
app.get(/assets\/fonts\/.*/i, (req, res) => {
    if (fs_1.default.existsSync(__dirParentsName + req.path)) {
        res.sendFile(__dirParentsName + req.path);
    }
    else
        res.sendStatus(404);
});
app.get(/assets\/svgs\/.*/i, (req, res) => {
    if (fs_1.default.existsSync(__dirParentsName + req.path)) {
        res.sendFile(__dirParentsName + req.path);
    }
    else
        res.sendStatus(404);
});
app.get("/favicon.ico", (req, res) => {
    res.sendFile(`${__dirParentsName}/assets/favicon.ico`);
});
app.get("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const htmlPage = new HomePage_1.HomePage();
    yield htmlPage.buildPage();
    res.send(htmlPage.getHtmlString());
}));
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
const pathArray = ["selectComponents", "selectContent"];
const sqlCommand = JSON.parse(fs_1.default.readFileSync("sqlCommands.json").toString());
pathArray.forEach(e => {
    app.get(`/${e}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const backend = new Backend_1.Backend();
        try {
            const response = yield backend.executeSQL(sqlCommand.select[e]);
            res.json(response);
            // res.json({ Names: response.forEach(e => { return e.Name }) })
        }
        catch (error) {
            res.json({ err: true, msg: error });
        }
    }));
});
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
app.post("/addContent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const backend = new Backend_1.Backend();
    yield backend.executeSQL("INSERT INTO `personal_website`.`content`(`DEV_NAME`,`SETTINGS`) VALUES ('" + req.body.devName + "','" + JSON.stringify(req.body.settings) + "')");
    try {
    }
    catch (error) {
        res.json({ err: true, msg: error });
    }
    res.sendStatus(200);
}));
app.post("/deleteContent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const backend = new Backend_1.Backend();
    yield backend.executeSQL("DELETE FROM `content` WHERE `content`.`ID` = " + req.body.id);
    try {
    }
    catch (error) {
        res.json({ err: true, msg: error });
    }
    res.sendStatus(200);
}));
app.post("/addComponent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const backend = new Backend_1.Backend();
    yield backend.executeSQL("INSERT INTO `personal_website`.`component`(`DEV_NAME`,`PUP_NAME`,`DESCR`) VALUES ('" + req.body.devName + "','" + req.body.pupName + "','" + "','" + req.body.devClasses + "','" + +req.body.descr + "')");
    try {
    }
    catch (error) {
        res.json({ err: true, msg: error });
    }
    res.sendStatus(200);
}));
app.post("/deleteComponent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const backend = new Backend_1.Backend();
    yield backend.executeSQL("DELETE FROM `content` WHERE `component`.`ID` = " + req.body.id);
    try {
    }
    catch (error) {
        res.json({ err: true, msg: error });
    }
    res.sendStatus(200);
}));
function stringifySettings(req) {
    let string;
    req.forEach(e => {
    });
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
