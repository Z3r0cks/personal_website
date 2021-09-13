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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDdEM7SUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixTQUFTLGlCQUFpQixDQUFDLEdBQUc7SUFDM0IsSUFBSSxNQUFjLENBQUM7SUFDbkIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUVoQixDQUFDLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFFRCxnREFBZ0Q7QUFDaEQsb0NBQW9DO0FBQ3BDLFdBQVc7QUFDWCx3SEFBd0g7QUFDeEgsdUJBQXVCO0FBQ3ZCLDZDQUE2QztBQUM3QyxPQUFPO0FBQ1AsMEJBQTBCO0FBQzFCLEtBQUs7QUFFTCwyQkFBMkI7QUFDM0IsaUdBQWlHO0FBQ2pHLDRDQUE0QztBQUM1Qyx1Q0FBdUM7QUFDdkMsY0FBYztBQUNkLG9HQUFvRztBQUNwRyw2REFBNkQ7QUFDN0QsMEJBQTBCO0FBQzFCLGdEQUFnRDtBQUNoRCxVQUFVO0FBQ1YsUUFBUTtBQUNSLDZDQUE2QztBQUM3Qyx1Q0FBdUM7QUFDdkMsY0FBYztBQUNkLHlFQUF5RTtBQUN6RSwwQkFBMEI7QUFDMUIsZ0RBQWdEO0FBQ2hELFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSLEtBQUs7QUFHTCxVQUFVIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBCYWNrZW5kIH0gZnJvbSBcIi4vQmFja2VuZFwiO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuL0hvbWVQYWdlXCI7XHJcbmltcG9ydCB7IFNxbENvbW1hbmRzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9TcWxDb21tYW5kc1wiO1xyXG5pbXBvcnQgVGFibGVQZXJzb25hbFdlYnNpdGUgZnJvbSBcIi4vaW50ZXJmYWNlcy9UYWJsZVBlcnNvbmFsV2Vic2l0ZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xyXG5cclxuY29uc3QgUG9ydCA9IHByb2Nlc3MuZW52LlBvcnQgfHwgMzAwMDtcclxuY29uc3QgX19kaXJQYXJlbnRzTmFtZSA9IF9fZGlybmFtZS5zbGljZSgwLCAzMyk7XHJcblxyXG4vL19fZGlybmFtZTogICAgICAgICBEOlxcUHJvamVrdGVcXHBlcnNvbmFsX3dlYnNpdGVcXGRpc3RcXHNlcnZlclxyXG4vL19fZGlyUGFyZW50c05hbWU6ICBEOlxcUHJvamVrdGVcXHBlcnNvbmFsX3dlYnNpdGVcXGRpc3RcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZSgnL3N0eWxlLmNzcycsIGV4cHJlc3Muc3RhdGljKCcuL2Rpc3QvY3NzJykpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKSAvLyA8PT09PSBwYXJzZSByZXF1ZXN0IGJvZHkgYXMgSlNPTlxyXG5cclxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3RlbihQb3J0LCAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKGBzZXJ2ZXIgaXN0IHN0YXJ0aW5nIG9uIHBvcnQgJHtQb3J0fWApO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vaW5kZXguaHRtbGApXHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9iYWNrZW5kXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vYmFja2VuZC5odG1sYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2pzL21haW4uanNcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2RpclBhcmVudHNOYW1lfS9qcy9tYWluLmpzYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2pzL2JhY2tlbmRQYWdlLmpzXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vanMvYmFja2VuZFBhZ2UuanNgKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvY3NzL3N0eWxlLmNzc1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlyUGFyZW50c05hbWV9L2Nzcy9zdHlsZS5jc3NgKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoL2Fzc2V0c1xcL2ZvbnRzXFwvLiovaSwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGlmIChmcy5leGlzdHNTeW5jKF9fZGlyUGFyZW50c05hbWUgKyByZXEucGF0aCkpIHtcclxuICAgICAgcmVzLnNlbmRGaWxlKF9fZGlyUGFyZW50c05hbWUgKyByZXEucGF0aCk7XHJcbiAgIH0gZWxzZSByZXMuc2VuZFN0YXR1cyg0MDQpO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvZmF2aWNvbi5pY29cIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2RpclBhcmVudHNOYW1lfS9hc3NldHMvZmF2aWNvbi5pY29gKTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL3Rlc3RcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGNvbnN0IGh0bWxQYWdlOiBQYWdlID0gbmV3IEhvbWVQYWdlKCk7XHJcbiAgIGF3YWl0IGh0bWxQYWdlLmJ1aWxkUGFnZSgpO1xyXG4gICByZXMuc2VuZChodG1sUGFnZS5nZXRIdG1sU3RyaW5nKCkpO1xyXG59KTtcclxuXHJcbi8vIEdFVFxyXG5cclxuLy8gYXBwLmdldChcIi90aXRsZW5hbWVcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgIGNvbnN0IGJhY2tlbmQgPSBuZXcgQmFja2VuZCgpO1xyXG4vLyAgICBjb25zdCBzcWxDb21tYW5kOiBTcWxDb21tYW5kcyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwic3FsQ29tbWFuZHMuanNvblwiKS50b1N0cmluZygpKTtcclxuLy8gICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC50aXRsZU5hbWUpIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4vLyAgICAgICByZXMuanNvbih7IHRpdGxlTmFtZTogcmVzcG9uc2VbMF0uVGV4dF9Db250ZW50IH0pXHJcbi8vICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyBmdW5jdGlvbiBzZWxlY3QodmFsdWU6IHN0cmluZykge1xyXG4vLyAgICBhcHAuZ2V0KGAke3ZhbHVlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgY29uc3Qgc3FsQ29tbWFuZDogU3FsQ29tbWFuZHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcInNxbENvbW1hbmRzLmpzb25cIikudG9TdHJpbmcoKSk7XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKHNxbENvbW1hbmRbdmFsdWVdKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuLy8gICAgICAgICAgcmVzLmpzb24oeyB0aXRsZU5hbWU6IHJlc3BvbnNlWzBdLlRleHRfQ29udGVudCB9KVxyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikgXHJcbi8vICAgICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgIH0pXHJcbi8vIH1cclxuXHJcbmNvbnN0IHBhdGhBcnJheTogc3RyaW5nW10gPSBbXCJzZWxlY3RDb21wb25lbnRzXCIsIFwic2VsZWN0Q29udGVudFwiXTtcclxuXHJcbmNvbnN0IHNxbENvbW1hbmQ6IFNxbENvbW1hbmRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcWxDb21tYW5kcy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG5cclxucGF0aEFycmF5LmZvckVhY2goZSA9PiB7XHJcbiAgIGFwcC5nZXQoYC8ke2V9YCwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJhY2tlbmQgPSBuZXcgQmFja2VuZCgpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChzcWxDb21tYW5kLnNlbGVjdFtlXSkgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbiAgICAgICAgIHJlcy5qc29uKHJlc3BvbnNlKVxyXG4gICAgICAgICAvLyByZXMuanNvbih7IE5hbWVzOiByZXNwb25zZS5mb3JFYWNoKGUgPT4geyByZXR1cm4gZS5OYW1lIH0pIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4gICAgICB9XHJcbiAgIH0pXHJcbn0pXHJcbi8vIGFwcC5nZXQoXCIvc2VsZWN0Q29tcG9uZW50c1wiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbi8vICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKHNxbENvbW1hbmQuc2VsZWN0W1wic2VsZWN0Q29tcG9uZW50c1wiXSkgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbi8vICAgICAgIHJlcy5qc29uKHJlc3BvbnNlKVxyXG4vLyAgICAgICAvLyByZXMuanNvbih7IE5hbWVzOiByZXNwb25zZS5mb3JFYWNoKGUgPT4geyByZXR1cm4gZS5OYW1lIH0pIH0pXHJcbi8vICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICB9XHJcbi8vIH0pXHJcblxyXG5hcHAucG9zdChcIi9hZGRDb250ZW50XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuICAgYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKFwiSU5TRVJUIElOVE8gYHBlcnNvbmFsX3dlYnNpdGVgLmBjb250ZW50YChgREVWX05BTUVgLGBTRVRUSU5HU2ApIFZBTFVFUyAoJ1wiICsgcmVxLmJvZHkuZGV2TmFtZSArIFwiJywnXCIgKyBKU09OLnN0cmluZ2lmeShyZXEuYm9keS5zZXR0aW5ncykgKyBcIicpXCIpXHJcbiAgIHRyeSB7XHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4gICB9XHJcbiAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbn0pXHJcblxyXG5hcHAucG9zdChcIi9kZWxldGVDb250ZW50XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuICAgYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKFwiREVMRVRFIEZST00gYGNvbnRlbnRgIFdIRVJFIGBjb250ZW50YC5gSURgID0gXCIgKyByZXEuYm9keS5pZClcclxuICAgdHJ5IHtcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLmpzb24oeyBlcnI6IHRydWUsIG1zZzogZXJyb3IgfSk7XHJcbiAgIH1cclxuICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxufSlcclxuXHJcbmFwcC5wb3N0KFwiL2FkZENvbXBvbmVudFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbiAgIGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChcIklOU0VSVCBJTlRPIGBwZXJzb25hbF93ZWJzaXRlYC5gY29tcG9uZW50YChgREVWX05BTUVgLGBQVVBfTkFNRWAsIGBERVNDUmApIFZBTFVFUyAoJ1wiICsgcmVxLmJvZHkuZGV2TmFtZSArIFwiJywnXCIgKyByZXEuYm9keS5wdXBOYW1lICsgXCInLCdcIiArIHJlcS5ib2R5LmRlc2NyICsgXCInKVwiKVxyXG4gICB0cnkge1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuICAgfVxyXG4gICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG59KVxyXG5cclxuYXBwLnBvc3QoXCIvZGVsZXRlQ29tcG9uZW50XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuICAgYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKFwiREVMRVRFIEZST00gYGNvbnRlbnRgIFdIRVJFIGBjb21wb25lbnRgLmBJRGAgPSBcIiArIHJlcS5ib2R5LmlkKVxyXG4gICB0cnkge1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuICAgfVxyXG4gICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5U2V0dGluZ3MocmVxKSB7XHJcbiAgIGxldCBzdHJpbmc6IHN0cmluZztcclxuICAgcmVxLmZvckVhY2goZSA9PiB7XHJcblxyXG4gICB9KVxyXG59XHJcblxyXG4vLyBhcHAucG9zdChcIi9hZGRDb250ZW50XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoXCJVUERBVEUgYGNvbnRlbnRgIFNFVCBgVGV4dF9Db250ZW50YCA9ICdcIiArIHJlcS5ib2R5LnRpdGxlTmFtZSArIFwiJ1wiKVxyXG4vLyAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgfVxyXG4vLyAgICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyB9KVxyXG5cclxuLy8gcGF0aEFycmF5LmZvckVhY2goZSA9PiB7XHJcbi8vICAgIGNvbnN0IHNxbENvbW1hbmQ6IFNxbENvbW1hbmRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcWxDb21tYW5kcy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG4vLyAgICBhcHAuZ2V0KGAvJHtlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC5zZWxlY3RbZV0pIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4vLyAgICAgICAgICByZXMuanNvbih7IHRpdGxlTmFtZTogcmVzcG9uc2VbMF0uVGV4dF9Db250ZW50IH0pXHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgIH0pXHJcbi8vICAgIGFwcC5wb3N0KGAvJHtlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC5wb3N0W2VdKVxyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG5cclxuXHJcbi8vIC8vIFBPU1RcclxuIl19
