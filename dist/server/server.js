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
    res.sendFile(`${__dirParentsName}/js/backendPage.js`);
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
    yield backend.executeSQL("INSERT INTO `personal_website`.`component`(`DEV_NAME`,`PUP_NAME`, `DESCR`) VALUES ('" + req.body.devName + "','" + req.body.pupName + "','" + req.body.descr + "')");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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OlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcbmltcG9ydCB7IEJhY2tlbmQgfSBmcm9tIFwiLi9CYWNrZW5kXCI7XHJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSBcIi4vSG9tZVBhZ2VcIjtcclxuaW1wb3J0IHsgU3FsQ29tbWFuZHMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL1NxbENvbW1hbmRzXCI7XHJcbmltcG9ydCBUYWJsZVBlcnNvbmFsV2Vic2l0ZSBmcm9tIFwiLi9pbnRlcmZhY2VzL1RhYmxlUGVyc29uYWxXZWJzaXRlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XHJcblxyXG5jb25zdCBQb3J0ID0gcHJvY2Vzcy5lbnYuUG9ydCB8fCAzMDAwO1xyXG5jb25zdCBfX2RpclBhcmVudHNOYW1lID0gX19kaXJuYW1lLnNsaWNlKDAsIDMzKTtcclxuXHJcbi8vX19kaXJuYW1lOiAgICAgICAgIEQ6XFxQcm9qZWt0ZVxccGVyc29uYWxfd2Vic2l0ZVxcZGlzdFxcc2VydmVyXHJcbi8vX19kaXJQYXJlbnRzTmFtZTogIEQ6XFxQcm9qZWt0ZVxccGVyc29uYWxfd2Vic2l0ZVxcZGlzdFxyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5hcHAudXNlKCcvc3R5bGUuY3NzJywgZXhwcmVzcy5zdGF0aWMoJy4vZGlzdC9jc3MnKSk7XHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpIC8vIDw9PT09IHBhcnNlIHJlcXVlc3QgYm9keSBhcyBKU09OXHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBhcHAubGlzdGVuKFBvcnQsICgpID0+IHtcclxuICAgY29uc29sZS5sb2coYHNlcnZlciBpc3Qgc3RhcnRpbmcgb24gcG9ydCAke1BvcnR9YCk7XHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2RpclBhcmVudHNOYW1lfS9pbmRleC5odG1sYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2JhY2tlbmRcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2RpclBhcmVudHNOYW1lfS9iYWNrZW5kLmh0bWxgKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvanMvbWFpbi5qc1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlyUGFyZW50c05hbWV9L2pzL21haW4uanNgKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvanMvYmFja2VuZFBhZ2UuanNcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2RpclBhcmVudHNOYW1lfS9qcy9iYWNrZW5kUGFnZS5qc2ApXHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9jc3Mvc3R5bGUuY3NzXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vY3NzL3N0eWxlLmNzc2ApXHJcbn0pO1xyXG5cclxuYXBwLmdldCgvYXNzZXRzXFwvZm9udHNcXC8uKi9pLCAocmVxLCByZXMpID0+IHtcclxuICAgaWYgKGZzLmV4aXN0c1N5bmMoX19kaXJQYXJlbnRzTmFtZSArIHJlcS5wYXRoKSkge1xyXG4gICAgICByZXMuc2VuZEZpbGUoX19kaXJQYXJlbnRzTmFtZSArIHJlcS5wYXRoKTtcclxuICAgfSBlbHNlIHJlcy5zZW5kU3RhdHVzKDQwNCk7XHJcbn0pO1xyXG5hcHAuZ2V0KC9hc3NldHNcXC9zdmdzXFwvLiovaSwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGlmIChmcy5leGlzdHNTeW5jKF9fZGlyUGFyZW50c05hbWUgKyByZXEucGF0aCkpIHtcclxuICAgICAgcmVzLnNlbmRGaWxlKF9fZGlyUGFyZW50c05hbWUgKyByZXEucGF0aCk7XHJcbiAgIH0gZWxzZSByZXMuc2VuZFN0YXR1cyg0MDQpO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvZmF2aWNvbi5pY29cIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2RpclBhcmVudHNOYW1lfS9hc3NldHMvZmF2aWNvbi5pY29gKTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL3Rlc3RcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGNvbnN0IGh0bWxQYWdlOiBQYWdlID0gbmV3IEhvbWVQYWdlKCk7XHJcbiAgIGF3YWl0IGh0bWxQYWdlLmJ1aWxkUGFnZSgpO1xyXG4gICByZXMuc2VuZChodG1sUGFnZS5nZXRIdG1sU3RyaW5nKCkpO1xyXG59KTtcclxuXHJcbi8vIEdFVFxyXG5cclxuLy8gYXBwLmdldChcIi90aXRsZW5hbWVcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgIGNvbnN0IGJhY2tlbmQgPSBuZXcgQmFja2VuZCgpO1xyXG4vLyAgICBjb25zdCBzcWxDb21tYW5kOiBTcWxDb21tYW5kcyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwic3FsQ29tbWFuZHMuanNvblwiKS50b1N0cmluZygpKTtcclxuLy8gICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC50aXRsZU5hbWUpIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4vLyAgICAgICByZXMuanNvbih7IHRpdGxlTmFtZTogcmVzcG9uc2VbMF0uVGV4dF9Db250ZW50IH0pXHJcbi8vICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyBmdW5jdGlvbiBzZWxlY3QodmFsdWU6IHN0cmluZykge1xyXG4vLyAgICBhcHAuZ2V0KGAke3ZhbHVlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgY29uc3Qgc3FsQ29tbWFuZDogU3FsQ29tbWFuZHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcInNxbENvbW1hbmRzLmpzb25cIikudG9TdHJpbmcoKSk7XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKHNxbENvbW1hbmRbdmFsdWVdKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuLy8gICAgICAgICAgcmVzLmpzb24oeyB0aXRsZU5hbWU6IHJlc3BvbnNlWzBdLlRleHRfQ29udGVudCB9KVxyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikgXHJcbi8vICAgICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgIH0pXHJcbi8vIH1cclxuXHJcbmNvbnN0IHBhdGhBcnJheTogc3RyaW5nW10gPSBbXCJzZWxlY3RDb21wb25lbnRzXCIsIFwic2VsZWN0Q29udGVudFwiXTtcclxuXHJcbmNvbnN0IHNxbENvbW1hbmQ6IFNxbENvbW1hbmRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcWxDb21tYW5kcy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG5cclxucGF0aEFycmF5LmZvckVhY2goZSA9PiB7XHJcbiAgIGFwcC5nZXQoYC8ke2V9YCwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJhY2tlbmQgPSBuZXcgQmFja2VuZCgpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChzcWxDb21tYW5kLnNlbGVjdFtlXSkgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbiAgICAgICAgIHJlcy5qc29uKHJlc3BvbnNlKVxyXG4gICAgICAgICAvLyByZXMuanNvbih7IE5hbWVzOiByZXNwb25zZS5mb3JFYWNoKGUgPT4geyByZXR1cm4gZS5OYW1lIH0pIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4gICAgICB9XHJcbiAgIH0pXHJcbn0pXHJcbi8vIGFwcC5nZXQoXCIvc2VsZWN0Q29tcG9uZW50c1wiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbi8vICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKHNxbENvbW1hbmQuc2VsZWN0W1wic2VsZWN0Q29tcG9uZW50c1wiXSkgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbi8vICAgICAgIHJlcy5qc29uKHJlc3BvbnNlKVxyXG4vLyAgICAgICAvLyByZXMuanNvbih7IE5hbWVzOiByZXNwb25zZS5mb3JFYWNoKGUgPT4geyByZXR1cm4gZS5OYW1lIH0pIH0pXHJcbi8vICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICB9XHJcbi8vIH0pXHJcblxyXG5hcHAucG9zdChcIi9hZGRDb250ZW50XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuICAgYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKFwiSU5TRVJUIElOVE8gYHBlcnNvbmFsX3dlYnNpdGVgLmBjb250ZW50YChgREVWX05BTUVgLGBTRVRUSU5HU2ApIFZBTFVFUyAoJ1wiICsgcmVxLmJvZHkuZGV2TmFtZSArIFwiJywnXCIgKyBKU09OLnN0cmluZ2lmeShyZXEuYm9keS5zZXR0aW5ncykgKyBcIicpXCIpXHJcbiAgIHRyeSB7XHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4gICB9XHJcbiAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbn0pXHJcblxyXG5hcHAucG9zdChcIi9kZWxldGVDb250ZW50XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuICAgYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKFwiREVMRVRFIEZST00gYGNvbnRlbnRgIFdIRVJFIGBjb250ZW50YC5gSURgID0gXCIgKyByZXEuYm9keS5pZClcclxuICAgdHJ5IHtcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLmpzb24oeyBlcnI6IHRydWUsIG1zZzogZXJyb3IgfSk7XHJcbiAgIH1cclxuICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxufSlcclxuXHJcbmFwcC5wb3N0KFwiL2FkZENvbXBvbmVudFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbiAgIGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChcIklOU0VSVCBJTlRPIGBwZXJzb25hbF93ZWJzaXRlYC5gY29tcG9uZW50YChgREVWX05BTUVgLGBQVVBfTkFNRWAsIGBERVNDUmApIFZBTFVFUyAoJ1wiICsgcmVxLmJvZHkuZGV2TmFtZSArIFwiJywnXCIgKyByZXEuYm9keS5wdXBOYW1lICsgXCInLCdcIiArIHJlcS5ib2R5LmRlc2NyICsgXCInKVwiKVxyXG4gICB0cnkge1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuICAgfVxyXG4gICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG59KVxyXG5cclxuYXBwLnBvc3QoXCIvZGVsZXRlQ29tcG9uZW50XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuICAgYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKFwiREVMRVRFIEZST00gYGNvbnRlbnRgIFdIRVJFIGBjb21wb25lbnRgLmBJRGAgPSBcIiArIHJlcS5ib2R5LmlkKVxyXG4gICB0cnkge1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuICAgfVxyXG4gICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5U2V0dGluZ3MocmVxKSB7XHJcbiAgIGxldCBzdHJpbmc6IHN0cmluZztcclxuICAgcmVxLmZvckVhY2goZSA9PiB7XHJcblxyXG4gICB9KVxyXG59XHJcblxyXG4vLyBhcHAucG9zdChcIi9hZGRDb250ZW50XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoXCJVUERBVEUgYGNvbnRlbnRgIFNFVCBgVGV4dF9Db250ZW50YCA9ICdcIiArIHJlcS5ib2R5LnRpdGxlTmFtZSArIFwiJ1wiKVxyXG4vLyAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgfVxyXG4vLyAgICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyB9KVxyXG5cclxuLy8gcGF0aEFycmF5LmZvckVhY2goZSA9PiB7XHJcbi8vICAgIGNvbnN0IHNxbENvbW1hbmQ6IFNxbENvbW1hbmRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcWxDb21tYW5kcy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG4vLyAgICBhcHAuZ2V0KGAvJHtlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC5zZWxlY3RbZV0pIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4vLyAgICAgICAgICByZXMuanNvbih7IHRpdGxlTmFtZTogcmVzcG9uc2VbMF0uVGV4dF9Db250ZW50IH0pXHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgIH0pXHJcbi8vICAgIGFwcC5wb3N0KGAvJHtlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC5wb3N0W2VdKVxyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG5cclxuXHJcbi8vIC8vIFBPU1RcclxuIl19
