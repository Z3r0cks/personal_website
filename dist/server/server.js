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
    yield backend.executeSQL("INSERT INTO `personal_website`.`component`(`DEV_NAME`,`PUP_NAME`,`PUP_NAME`,`DESCR`) VALUES ('" + req.body.devName + "','" + req.body.pupName + "','" + "','" + req.body.devClasses + "','" + +req.body.descr + "')");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUNSLEtBQUs7QUFHTCxVQUFVIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBCYWNrZW5kIH0gZnJvbSBcIi4vQmFja2VuZFwiO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuL0hvbWVQYWdlXCI7XHJcbmltcG9ydCB7IFNxbENvbW1hbmRzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9TcWxDb21tYW5kc1wiO1xyXG5pbXBvcnQgVGFibGVQZXJzb25hbFdlYnNpdGUgZnJvbSBcIi4vaW50ZXJmYWNlcy9UYWJsZVBlcnNvbmFsV2Vic2l0ZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xyXG5cclxuY29uc3QgUG9ydCA9IHByb2Nlc3MuZW52LlBvcnQgfHwgMzAwMDtcclxuY29uc3QgX19kaXJQYXJlbnRzTmFtZSA9IF9fZGlybmFtZS5zbGljZSgwLCAzMyk7XHJcblxyXG4vL19fZGlybmFtZTogICAgICAgICBEOlxcUHJvamVrdGVcXHBlcnNvbmFsX3dlYnNpdGVcXGRpc3RcXHNlcnZlclxyXG4vL19fZGlyUGFyZW50c05hbWU6ICBEOlxcUHJvamVrdGVcXHBlcnNvbmFsX3dlYnNpdGVcXGRpc3RcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZSgnL3N0eWxlLmNzcycsIGV4cHJlc3Muc3RhdGljKCcuL2Rpc3QvY3NzJykpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKSAvLyA8PT09PSBwYXJzZSByZXF1ZXN0IGJvZHkgYXMgSlNPTlxyXG5cclxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3RlbihQb3J0LCAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKGBzZXJ2ZXIgaXN0IHN0YXJ0aW5nIG9uIHBvcnQgJHtQb3J0fWApO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vaW5kZXguaHRtbGApXHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9iYWNrZW5kXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vYmFja2VuZC5odG1sYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2pzL21haW4uanNcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2RpclBhcmVudHNOYW1lfS9qcy9tYWluLmpzYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2pzL2JhY2tlbmRQYWdlLmpzXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vanMvYmFja2VuZFBhZ2UuanNgKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvY3NzL3N0eWxlLmNzc1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlyUGFyZW50c05hbWV9L2Nzcy9zdHlsZS5jc3NgKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoL2Fzc2V0c1xcL2ZvbnRzXFwvLiovaSwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGlmIChmcy5leGlzdHNTeW5jKF9fZGlyUGFyZW50c05hbWUgKyByZXEucGF0aCkpIHtcclxuICAgICAgcmVzLnNlbmRGaWxlKF9fZGlyUGFyZW50c05hbWUgKyByZXEucGF0aCk7XHJcbiAgIH0gZWxzZSByZXMuc2VuZFN0YXR1cyg0MDQpO1xyXG59KTtcclxuYXBwLmdldCgvYXNzZXRzXFwvc3Znc1xcLy4qL2ksIChyZXEsIHJlcykgPT4ge1xyXG4gICBpZiAoZnMuZXhpc3RzU3luYyhfX2RpclBhcmVudHNOYW1lICsgcmVxLnBhdGgpKSB7XHJcbiAgICAgIHJlcy5zZW5kRmlsZShfX2RpclBhcmVudHNOYW1lICsgcmVxLnBhdGgpO1xyXG4gICB9IGVsc2UgcmVzLnNlbmRTdGF0dXMoNDA0KTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2Zhdmljb24uaWNvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vYXNzZXRzL2Zhdmljb24uaWNvYCk7XHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi90ZXN0XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBodG1sUGFnZTogUGFnZSA9IG5ldyBIb21lUGFnZSgpO1xyXG4gICBhd2FpdCBodG1sUGFnZS5idWlsZFBhZ2UoKTtcclxuICAgcmVzLnNlbmQoaHRtbFBhZ2UuZ2V0SHRtbFN0cmluZygpKTtcclxufSk7XHJcblxyXG4vLyBHRVRcclxuXHJcbi8vIGFwcC5nZXQoXCIvdGl0bGVuYW1lXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgY29uc3Qgc3FsQ29tbWFuZDogU3FsQ29tbWFuZHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcInNxbENvbW1hbmRzLmpzb25cIikudG9TdHJpbmcoKSk7XHJcbi8vICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKHNxbENvbW1hbmQudGl0bGVOYW1lKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuLy8gICAgICAgcmVzLmpzb24oeyB0aXRsZU5hbWU6IHJlc3BvbnNlWzBdLlRleHRfQ29udGVudCB9KVxyXG4vLyAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gZnVuY3Rpb24gc2VsZWN0KHZhbHVlOiBzdHJpbmcpIHtcclxuLy8gICAgYXBwLmdldChgJHt2YWx1ZX1gLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICAgICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbi8vICAgICAgIGNvbnN0IHNxbENvbW1hbmQ6IFNxbENvbW1hbmRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcWxDb21tYW5kcy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG4vLyAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChzcWxDb21tYW5kW3ZhbHVlXSkgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbi8vICAgICAgICAgIHJlcy5qc29uKHsgdGl0bGVOYW1lOiByZXNwb25zZVswXS5UZXh0X0NvbnRlbnQgfSlcclxuLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIFxyXG4vLyAgICAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICB9KVxyXG4vLyB9XHJcblxyXG5jb25zdCBwYXRoQXJyYXk6IHN0cmluZ1tdID0gW1wic2VsZWN0Q29tcG9uZW50c1wiLCBcInNlbGVjdENvbnRlbnRcIl07XHJcblxyXG5jb25zdCBzcWxDb21tYW5kOiBTcWxDb21tYW5kcyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwic3FsQ29tbWFuZHMuanNvblwiKS50b1N0cmluZygpKTtcclxuXHJcbnBhdGhBcnJheS5mb3JFYWNoKGUgPT4ge1xyXG4gICBhcHAuZ2V0KGAvJHtlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC5zZWxlY3RbZV0pIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4gICAgICAgICByZXMuanNvbihyZXNwb25zZSlcclxuICAgICAgICAgLy8gcmVzLmpzb24oeyBOYW1lczogcmVzcG9uc2UuZm9yRWFjaChlID0+IHsgcmV0dXJuIGUuTmFtZSB9KSB9KVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuICAgICAgfVxyXG4gICB9KVxyXG59KVxyXG4vLyBhcHAuZ2V0KFwiL3NlbGVjdENvbXBvbmVudHNcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgIGNvbnN0IGJhY2tlbmQgPSBuZXcgQmFja2VuZCgpO1xyXG4vLyAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChzcWxDb21tYW5kLnNlbGVjdFtcInNlbGVjdENvbXBvbmVudHNcIl0pIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4vLyAgICAgICByZXMuanNvbihyZXNwb25zZSlcclxuLy8gICAgICAgLy8gcmVzLmpzb24oeyBOYW1lczogcmVzcG9uc2UuZm9yRWFjaChlID0+IHsgcmV0dXJuIGUuTmFtZSB9KSB9KVxyXG4vLyAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgfVxyXG4vLyB9KVxyXG5cclxuYXBwLnBvc3QoXCIvYWRkQ29udGVudFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbiAgIGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChcIklOU0VSVCBJTlRPIGBwZXJzb25hbF93ZWJzaXRlYC5gY29udGVudGAoYERFVl9OQU1FYCxgU0VUVElOR1NgKSBWQUxVRVMgKCdcIiArIHJlcS5ib2R5LmRldk5hbWUgKyBcIicsJ1wiICsgSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkuc2V0dGluZ3MpICsgXCInKVwiKVxyXG4gICB0cnkge1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuICAgfVxyXG4gICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG59KVxyXG5cclxuYXBwLnBvc3QoXCIvZGVsZXRlQ29udGVudFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbiAgIGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChcIkRFTEVURSBGUk9NIGBjb250ZW50YCBXSEVSRSBgY29udGVudGAuYElEYCA9IFwiICsgcmVxLmJvZHkuaWQpXHJcbiAgIHRyeSB7XHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4gICB9XHJcbiAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbn0pXHJcblxyXG5hcHAucG9zdChcIi9hZGRDb21wb25lbnRcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGNvbnN0IGJhY2tlbmQgPSBuZXcgQmFja2VuZCgpO1xyXG4gICBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoXCJJTlNFUlQgSU5UTyBgcGVyc29uYWxfd2Vic2l0ZWAuYGNvbXBvbmVudGAoYERFVl9OQU1FYCxgUFVQX05BTUVgLGBQVVBfTkFNRWAsYERFU0NSYCkgVkFMVUVTICgnXCIgKyByZXEuYm9keS5kZXZOYW1lICsgXCInLCdcIiArIHJlcS5ib2R5LnB1cE5hbWUgKyBcIicsJ1wiICsgXCInLCdcIiArIHJlcS5ib2R5LmRldkNsYXNzZXMgKyBcIicsJ1wiICsgKyByZXEuYm9keS5kZXNjciArIFwiJylcIilcclxuICAgdHJ5IHtcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLmpzb24oeyBlcnI6IHRydWUsIG1zZzogZXJyb3IgfSk7XHJcbiAgIH1cclxuICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxufSlcclxuXHJcbmFwcC5wb3N0KFwiL2RlbGV0ZUNvbXBvbmVudFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbiAgIGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChcIkRFTEVURSBGUk9NIGBjb250ZW50YCBXSEVSRSBgY29tcG9uZW50YC5gSURgID0gXCIgKyByZXEuYm9keS5pZClcclxuICAgdHJ5IHtcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLmpzb24oeyBlcnI6IHRydWUsIG1zZzogZXJyb3IgfSk7XHJcbiAgIH1cclxuICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeVNldHRpbmdzKHJlcSkge1xyXG4gICBsZXQgc3RyaW5nOiBzdHJpbmc7XHJcbiAgIHJlcS5mb3JFYWNoKGUgPT4ge1xyXG5cclxuICAgfSlcclxufVxyXG5cclxuLy8gYXBwLnBvc3QoXCIvYWRkQ29udGVudFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbi8vICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKFwiVVBEQVRFIGBjb250ZW50YCBTRVQgYFRleHRfQ29udGVudGAgPSAnXCIgKyByZXEuYm9keS50aXRsZU5hbWUgKyBcIidcIilcclxuLy8gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgcmVzLmpzb24oeyBlcnI6IHRydWUsIG1zZzogZXJyb3IgfSk7XHJcbi8vICAgIH1cclxuLy8gICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxuLy8gfSlcclxuXHJcbi8vIHBhdGhBcnJheS5mb3JFYWNoKGUgPT4ge1xyXG4vLyAgICBjb25zdCBzcWxDb21tYW5kOiBTcWxDb21tYW5kcyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwic3FsQ29tbWFuZHMuanNvblwiKS50b1N0cmluZygpKTtcclxuLy8gICAgYXBwLmdldChgLyR7ZX1gLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICAgICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKHNxbENvbW1hbmQuc2VsZWN0W2VdKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuLy8gICAgICAgICAgcmVzLmpzb24oeyB0aXRsZU5hbWU6IHJlc3BvbnNlWzBdLlRleHRfQ29udGVudCB9KVxyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICB9KVxyXG4vLyAgICBhcHAucG9zdChgLyR7ZX1gLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICAgICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKHNxbENvbW1hbmQucG9zdFtlXSlcclxuLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICAgcmVzLmpzb24oeyBlcnI6IHRydWUsIG1zZzogZXJyb3IgfSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxuLy8gICAgfSlcclxuLy8gfSlcclxuXHJcblxyXG4vLyAvLyBQT1NUXHJcbiJdfQ==
