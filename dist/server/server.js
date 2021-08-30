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
app.get("/js/app.js", (req, res) => {
    res.sendFile(`${__dirParentsName}/js/app.js`);
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
app.get("/titlename", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const backend = new Backend_1.Backend();
    const sqlCommand = JSON.parse(fs_1.default.readFileSync("sqlCommands.json").toString());
    try {
        const response = yield backend.executeSQL(sqlCommand.titleName);
        res.json({ titleName: response[0].Text_Content });
    }
    catch (error) {
        res.json({ err: true, msg: error });
    }
}));
// POST
app.post("/titlename", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const backend = new Backend_1.Backend();
    try {
        const response = yield backend.executeSQL("UPDATE `content` SET `Text_Content` = '" + req.body.titleName + "'");
    }
    catch (error) {
        res.json({ err: true, msg: error });
    }
    res.sendStatus(200);
}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLENBQUEsQ0FBQyxDQUFBIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IEJhY2tlbmQgfSBmcm9tIFwiLi9CYWNrZW5kXCI7XHJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSBcIi4vSG9tZVBhZ2VcIjtcclxuaW1wb3J0IHsgU3FsQ29tbWFuZHMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL1NxbENvbW1hbmRzXCI7XHJcbmltcG9ydCB7IFRhYmxlUGVyc29uYWxXZWJzaXRlIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9UYWJsZVBlcnNvbmFsV2Vic2l0ZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xyXG5cclxuY29uc3QgUG9ydCA9IHByb2Nlc3MuZW52LlBvcnQgfHwgMzAwMDtcclxuY29uc3QgX19kaXJQYXJlbnRzTmFtZSA9IF9fZGlybmFtZS5zbGljZSgwLCAzMyk7XHJcblxyXG4vL19fZGlybmFtZTogICAgICAgICBEOlxcUHJvamVrdGVcXHBlcnNvbmFsX3dlYnNpdGVcXGRpc3RcXHNlcnZlclxyXG4vL19fZGlyUGFyZW50c05hbWU6ICBEOlxcUHJvamVrdGVcXHBlcnNvbmFsX3dlYnNpdGVcXGRpc3RcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZSgnL3N0eWxlLmNzcycsIGV4cHJlc3Muc3RhdGljKCcuL2Rpc3QvY3NzJykpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKSAvLyA8PT09PSBwYXJzZSByZXF1ZXN0IGJvZHkgYXMgSlNPTlxyXG5cclxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3RlbihQb3J0LCAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKGBzZXJ2ZXIgaXN0IHN0YXJ0aW5nIG9uIHBvcnQgJHtQb3J0fWApO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vaW5kZXguaHRtbGApXHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9iYWNrZW5kXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vYmFja2VuZC5odG1sYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2pzL2FwcC5qc1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlyUGFyZW50c05hbWV9L2pzL2FwcC5qc2ApXHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9jc3Mvc3R5bGUuY3NzXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vY3NzL3N0eWxlLmNzc2ApXHJcbn0pO1xyXG5cclxuYXBwLmdldCgvYXNzZXRzXFwvZm9udHNcXC8uKi9pLCAocmVxLCByZXMpID0+IHtcclxuICAgaWYgKGZzLmV4aXN0c1N5bmMoX19kaXJQYXJlbnRzTmFtZSArIHJlcS5wYXRoKSkge1xyXG4gICAgICByZXMuc2VuZEZpbGUoX19kaXJQYXJlbnRzTmFtZSArIHJlcS5wYXRoKTtcclxuICAgfSBlbHNlIHJlcy5zZW5kU3RhdHVzKDQwNCk7XHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9mYXZpY29uLmljb1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlyUGFyZW50c05hbWV9L2Fzc2V0cy9mYXZpY29uLmljb2ApO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvdGVzdFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgaHRtbFBhZ2U6IFBhZ2UgPSBuZXcgSG9tZVBhZ2UoKTtcclxuICAgYXdhaXQgaHRtbFBhZ2UuYnVpbGRQYWdlKCk7XHJcbiAgIHJlcy5zZW5kKGh0bWxQYWdlLmdldEh0bWxTdHJpbmcoKSk7XHJcbn0pO1xyXG5cclxuLy8gR0VUXHJcblxyXG5hcHAuZ2V0KFwiL3RpdGxlbmFtZVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbiAgIGNvbnN0IHNxbENvbW1hbmQ6IFNxbENvbW1hbmRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcWxDb21tYW5kcy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG4gICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChzcWxDb21tYW5kLnRpdGxlTmFtZSkgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbiAgICAgIHJlcy5qc29uKHsgdGl0bGVOYW1lOiByZXNwb25zZVswXS5UZXh0X0NvbnRlbnQgfSlcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLmpzb24oeyBlcnI6IHRydWUsIG1zZzogZXJyb3IgfSk7XHJcbiAgIH1cclxufSlcclxuXHJcbi8vIFBPU1RcclxuXHJcbmFwcC5wb3N0KFwiL3RpdGxlbmFtZVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbiAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKFwiVVBEQVRFIGBjb250ZW50YCBTRVQgYFRleHRfQ29udGVudGAgPSAnXCIgKyByZXEuYm9keS50aXRsZU5hbWUgKyBcIidcIilcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLmpzb24oeyBlcnI6IHRydWUsIG1zZzogZXJyb3IgfSk7XHJcbiAgIH1cclxuICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxufSkiXX0=
