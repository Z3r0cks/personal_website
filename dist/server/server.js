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
const pathArray = ["selectContent"];
const sqlCommand = JSON.parse(fs_1.default.readFileSync("sqlCommands.json").toString());
app.get("/selectContent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const backend = new Backend_1.Backend();
    try {
        const response = yield backend.executeSQL(sqlCommand.select["selectContent"]);
        res.json(response);
        // res.json({ Names: response.forEach(e => { return e.Name }) })
    }
    catch (error) {
        res.json({ err: true, msg: error });
    }
}));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFFLENBQUMsQ0FBQztLQUN0QztBQUNKLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRiwyQkFBMkI7QUFDM0IsaUdBQWlHO0FBQ2pHLDRDQUE0QztBQUM1Qyx1Q0FBdUM7QUFDdkMsY0FBYztBQUNkLG9HQUFvRztBQUNwRyw2REFBNkQ7QUFDN0QsMEJBQTBCO0FBQzFCLGdEQUFnRDtBQUNoRCxVQUFVO0FBQ1YsUUFBUTtBQUNSLDZDQUE2QztBQUM3Qyx1Q0FBdUM7QUFDdkMsY0FBYztBQUNkLHlFQUF5RTtBQUN6RSwwQkFBMEI7QUFDMUIsZ0RBQWdEO0FBQ2hELFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSLEtBQUs7QUFHTCxVQUFVIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IEJhY2tlbmQgfSBmcm9tIFwiLi9CYWNrZW5kXCI7XHJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSBcIi4vSG9tZVBhZ2VcIjtcclxuaW1wb3J0IHsgU3FsQ29tbWFuZHMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL1NxbENvbW1hbmRzXCI7XHJcbmltcG9ydCB7IFRhYmxlUGVyc29uYWxXZWJzaXRlIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9UYWJsZVBlcnNvbmFsV2Vic2l0ZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xyXG5cclxuY29uc3QgUG9ydCA9IHByb2Nlc3MuZW52LlBvcnQgfHwgMzAwMDtcclxuY29uc3QgX19kaXJQYXJlbnRzTmFtZSA9IF9fZGlybmFtZS5zbGljZSgwLCAzMyk7XHJcblxyXG4vL19fZGlybmFtZTogICAgICAgICBEOlxcUHJvamVrdGVcXHBlcnNvbmFsX3dlYnNpdGVcXGRpc3RcXHNlcnZlclxyXG4vL19fZGlyUGFyZW50c05hbWU6ICBEOlxcUHJvamVrdGVcXHBlcnNvbmFsX3dlYnNpdGVcXGRpc3RcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZSgnL3N0eWxlLmNzcycsIGV4cHJlc3Muc3RhdGljKCcuL2Rpc3QvY3NzJykpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKSAvLyA8PT09PSBwYXJzZSByZXF1ZXN0IGJvZHkgYXMgSlNPTlxyXG5cclxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3RlbihQb3J0LCAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKGBzZXJ2ZXIgaXN0IHN0YXJ0aW5nIG9uIHBvcnQgJHtQb3J0fWApO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vaW5kZXguaHRtbGApXHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9iYWNrZW5kXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vYmFja2VuZC5odG1sYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2pzL21haW4uanNcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2RpclBhcmVudHNOYW1lfS9qcy9tYWluLmpzYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2pzL2JhY2tlbmRQYWdlLmpzXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vanMvYmFja2VuZFBhZ2UuanNgKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvY3NzL3N0eWxlLmNzc1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlyUGFyZW50c05hbWV9L2Nzcy9zdHlsZS5jc3NgKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoL2Fzc2V0c1xcL2ZvbnRzXFwvLiovaSwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGlmIChmcy5leGlzdHNTeW5jKF9fZGlyUGFyZW50c05hbWUgKyByZXEucGF0aCkpIHtcclxuICAgICAgcmVzLnNlbmRGaWxlKF9fZGlyUGFyZW50c05hbWUgKyByZXEucGF0aCk7XHJcbiAgIH0gZWxzZSByZXMuc2VuZFN0YXR1cyg0MDQpO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvZmF2aWNvbi5pY29cIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2RpclBhcmVudHNOYW1lfS9hc3NldHMvZmF2aWNvbi5pY29gKTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL3Rlc3RcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGNvbnN0IGh0bWxQYWdlOiBQYWdlID0gbmV3IEhvbWVQYWdlKCk7XHJcbiAgIGF3YWl0IGh0bWxQYWdlLmJ1aWxkUGFnZSgpO1xyXG4gICByZXMuc2VuZChodG1sUGFnZS5nZXRIdG1sU3RyaW5nKCkpO1xyXG59KTtcclxuXHJcbi8vIEdFVFxyXG5cclxuLy8gYXBwLmdldChcIi90aXRsZW5hbWVcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgIGNvbnN0IGJhY2tlbmQgPSBuZXcgQmFja2VuZCgpO1xyXG4vLyAgICBjb25zdCBzcWxDb21tYW5kOiBTcWxDb21tYW5kcyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwic3FsQ29tbWFuZHMuanNvblwiKS50b1N0cmluZygpKTtcclxuLy8gICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC50aXRsZU5hbWUpIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4vLyAgICAgICByZXMuanNvbih7IHRpdGxlTmFtZTogcmVzcG9uc2VbMF0uVGV4dF9Db250ZW50IH0pXHJcbi8vICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyBmdW5jdGlvbiBzZWxlY3QodmFsdWU6IHN0cmluZykge1xyXG4vLyAgICBhcHAuZ2V0KGAke3ZhbHVlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgY29uc3Qgc3FsQ29tbWFuZDogU3FsQ29tbWFuZHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcInNxbENvbW1hbmRzLmpzb25cIikudG9TdHJpbmcoKSk7XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKHNxbENvbW1hbmRbdmFsdWVdKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuLy8gICAgICAgICAgcmVzLmpzb24oeyB0aXRsZU5hbWU6IHJlc3BvbnNlWzBdLlRleHRfQ29udGVudCB9KVxyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikgXHJcbi8vICAgICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgIH0pXHJcbi8vIH1cclxuXHJcbmNvbnN0IHBhdGhBcnJheTogc3RyaW5nW10gPSBbXCJzZWxlY3RDb250ZW50XCJdO1xyXG5cclxuY29uc3Qgc3FsQ29tbWFuZDogU3FsQ29tbWFuZHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcInNxbENvbW1hbmRzLmpzb25cIikudG9TdHJpbmcoKSk7XHJcblxyXG5hcHAuZ2V0KFwiL3NlbGVjdENvbnRlbnRcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGNvbnN0IGJhY2tlbmQgPSBuZXcgQmFja2VuZCgpO1xyXG4gICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChzcWxDb21tYW5kLnNlbGVjdFtcInNlbGVjdENvbnRlbnRcIl0pIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4gICAgICByZXMuanNvbihyZXNwb25zZSlcclxuICAgICAgLy8gcmVzLmpzb24oeyBOYW1lczogcmVzcG9uc2UuZm9yRWFjaChlID0+IHsgcmV0dXJuIGUuTmFtZSB9KSB9KVxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuICAgfVxyXG59KVxyXG5cclxuLy8gcGF0aEFycmF5LmZvckVhY2goZSA9PiB7XHJcbi8vICAgIGNvbnN0IHNxbENvbW1hbmQ6IFNxbENvbW1hbmRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcWxDb21tYW5kcy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG4vLyAgICBhcHAuZ2V0KGAvJHtlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC5zZWxlY3RbZV0pIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4vLyAgICAgICAgICByZXMuanNvbih7IHRpdGxlTmFtZTogcmVzcG9uc2VbMF0uVGV4dF9Db250ZW50IH0pXHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgIH0pXHJcbi8vICAgIGFwcC5wb3N0KGAvJHtlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC5wb3N0W2VdKVxyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG5cclxuXHJcbi8vIC8vIFBPU1RcclxuIl19
