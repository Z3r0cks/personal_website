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
const app = express_1.default();
app.use('/style.css', express_1.default.static('./dist/css'));
app.use(express_1.default.json()); // <==== parse request body as JSON
const server = app.listen(Port, () => {
    console.log(`server ist starting on port ${Port}`);
});
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});
app.get("/backend", (req, res) => {
    res.sendFile(`${__dirname}/backend.html`);
});
app.get("/js/app.js", (req, res) => {
    res.sendFile(`${__dirname}/js/app.js`);
});
app.get("/css/style.css", (req, res) => {
    res.sendFile(`${__dirname}/css/style.css`);
});
app.get(/assets\/fonts\/.*/i, (req, res) => {
    if (fs_1.default.existsSync(__dirname + req.path)) {
        res.sendFile(__dirname + req.path);
    }
    else
        res.sendStatus(404);
});
app.get("/favicon.ico", (req, res) => {
    res.sendFile(`${__dirname}/assets/favicon.ico`);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUM5QixNQUFNLFVBQVUsR0FBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFFLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMzRixJQUFJO1FBQ0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQXlCLENBQUM7UUFDeEYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQTtLQUNuRDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDdEM7QUFDSixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsT0FBTztBQUVQLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0lBQzlCLElBQUk7UUFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxVQUFVLENBQUMseUNBQXlDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUE7S0FDakg7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUEsQ0FBQyxDQUFBIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IEJhY2tlbmQgfSBmcm9tIFwiLi9CYWNrZW5kXCI7XHJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSBcIi4vSG9tZVBhZ2VcIjtcclxuaW1wb3J0IHsgU3FsQ29tbWFuZHMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL1NxbENvbW1hbmRzXCI7XHJcbmltcG9ydCB7IFRhYmxlUGVyc29uYWxXZWJzaXRlIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9UYWJsZVBlcnNvbmFsV2Vic2l0ZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xyXG5cclxuY29uc3QgUG9ydCA9IHByb2Nlc3MuZW52LlBvcnQgfHwgMzAwMDtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZSgnL3N0eWxlLmNzcycsIGV4cHJlc3Muc3RhdGljKCcuL2Rpc3QvY3NzJykpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKSAvLyA8PT09PSBwYXJzZSByZXF1ZXN0IGJvZHkgYXMgSlNPTlxyXG5cclxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3RlbihQb3J0LCAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKGBzZXJ2ZXIgaXN0IHN0YXJ0aW5nIG9uIHBvcnQgJHtQb3J0fWApO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJuYW1lfS9pbmRleC5odG1sYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2JhY2tlbmRcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2Rpcm5hbWV9L2JhY2tlbmQuaHRtbGApXHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9qcy9hcHAuanNcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2Rpcm5hbWV9L2pzL2FwcC5qc2ApXHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9jc3Mvc3R5bGUuY3NzXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJuYW1lfS9jc3Mvc3R5bGUuY3NzYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KC9hc3NldHNcXC9mb250c1xcLy4qL2ksIChyZXEsIHJlcykgPT4ge1xyXG4gICBpZiAoZnMuZXhpc3RzU3luYyhfX2Rpcm5hbWUgKyByZXEucGF0aCkpIHtcclxuICAgICAgcmVzLnNlbmRGaWxlKF9fZGlybmFtZSArIHJlcS5wYXRoKTtcclxuICAgfSBlbHNlIHJlcy5zZW5kU3RhdHVzKDQwNCk7XHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9mYXZpY29uLmljb1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlybmFtZX0vYXNzZXRzL2Zhdmljb24uaWNvYCk7XHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi90ZXN0XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBodG1sUGFnZTogUGFnZSA9IG5ldyBIb21lUGFnZSgpO1xyXG4gICBhd2FpdCBodG1sUGFnZS5idWlsZFBhZ2UoKTtcclxuICAgcmVzLnNlbmQoaHRtbFBhZ2UuZ2V0SHRtbFN0cmluZygpKTtcclxufSk7XHJcblxyXG4vLyBHRVRcclxuXHJcbmFwcC5nZXQoXCIvdGl0bGVuYW1lXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuICAgY29uc3Qgc3FsQ29tbWFuZDogU3FsQ29tbWFuZHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcInNxbENvbW1hbmRzLmpzb25cIikudG9TdHJpbmcoKSk7XHJcbiAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKHNxbENvbW1hbmQudGl0bGVOYW1lKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuICAgICAgcmVzLmpzb24oeyB0aXRsZU5hbWU6IHJlc3BvbnNlWzBdLlRleHRfQ29udGVudCB9KVxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuICAgfVxyXG59KVxyXG5cclxuLy8gUE9TVFxyXG5cclxuYXBwLnBvc3QoXCIvdGl0bGVuYW1lXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoXCJVUERBVEUgYGNvbnRlbnRgIFNFVCBgVGV4dF9Db250ZW50YCA9ICdcIiArIHJlcS5ib2R5LnRpdGxlTmFtZSArIFwiJ1wiKVxyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuICAgfVxyXG4gICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG59KSJdfQ==
