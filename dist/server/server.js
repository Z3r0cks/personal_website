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
const pathArray = ["selectComponents"];
const sqlCommand = JSON.parse(fs_1.default.readFileSync("sqlCommands.json").toString());
app.get("/selectComponents", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const backend = new Backend_1.Backend();
    try {
        const response = yield backend.executeSQL(sqlCommand.select["selectComponents"]);
        res.json(response);
        // res.json({ Names: response.forEach(e => { return e.Name }) })
    }
    catch (error) {
        res.json({ err: true, msg: error });
    }
}));
app.post("/addComponent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const backend = new Backend_1.Backend();
    // console.log(JSON.stringify(req.body));
    // console.log("INSERT INTO `personal_website`.`content`(`DEV_NAME`,`SETTINGS`) VALUES ('" + req.body.devName + "','" + JSON.stringify(req.body.settings) + "')");
    yield backend.executeSQL("INSERT INTO `personal_website`.`content`(`DEV_NAME`,`SETTINGS`) VALUES ('" + req.body.devName + "','" + JSON.stringify(req.body.settings) + "')");
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
// app.post("/addComponent", async (req, res) => {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5Qiw0Q0FBb0I7QUFFcEIsdUNBQW9DO0FBQ3BDLHlDQUFzQztBQUt0QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdEMsTUFBTSxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVoRCw2REFBNkQ7QUFDN0Qsc0RBQXNEO0FBRXRELE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUMsbUNBQW1DO0FBRTNELE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGdCQUFnQixhQUFhLENBQUMsQ0FBQTtBQUNqRCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzlCLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxnQkFBZ0IsZUFBZSxDQUFDLENBQUE7QUFDbkQsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNqQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsZ0JBQWdCLGFBQWEsQ0FBQyxDQUFBO0FBQ2pELENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN4QyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsZ0JBQWdCLG9CQUFvQixDQUFDLENBQUE7QUFDeEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3BDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxnQkFBZ0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUNwRCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDeEMsSUFBSSxZQUFFLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM3QyxHQUFHLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qzs7UUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGdCQUFnQixxQkFBcUIsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDakMsTUFBTSxRQUFRLEdBQVMsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFDdEMsTUFBTSxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsTUFBTTtBQUVOLDhDQUE4QztBQUM5QyxvQ0FBb0M7QUFDcEMsaUdBQWlHO0FBQ2pHLFdBQVc7QUFDWCxpR0FBaUc7QUFDakcsMERBQTBEO0FBQzFELHVCQUF1QjtBQUN2Qiw2Q0FBNkM7QUFDN0MsT0FBTztBQUNQLEtBQUs7QUFFTCxtQ0FBbUM7QUFDbkMsK0NBQStDO0FBQy9DLHVDQUF1QztBQUN2QyxvR0FBb0c7QUFDcEcsY0FBYztBQUNkLGlHQUFpRztBQUNqRyw2REFBNkQ7QUFDN0QseUJBQXlCO0FBQ3pCLGdEQUFnRDtBQUNoRCxVQUFVO0FBQ1YsUUFBUTtBQUNSLElBQUk7QUFFSixNQUFNLFNBQVMsR0FBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFakQsTUFBTSxVQUFVLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFFM0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM3QyxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUM5QixJQUFJO1FBQ0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBeUIsQ0FBQztRQUN6RyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xCLGdFQUFnRTtLQUNsRTtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDdEM7QUFDSixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDMUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7SUFDOUIseUNBQXlDO0lBQ3pDLGtLQUFrSztJQUNsSyxNQUFNLE9BQU8sQ0FBQyxVQUFVLENBQUMsMkVBQTJFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUMzSyxJQUFJO0tBQ0g7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHO0lBQzNCLElBQUksTUFBYyxDQUFDO0lBQ25CLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFFaEIsQ0FBQyxDQUFDLENBQUE7QUFDTCxDQUFDO0FBRUQsa0RBQWtEO0FBQ2xELG9DQUFvQztBQUNwQyxXQUFXO0FBQ1gsd0hBQXdIO0FBQ3hILHVCQUF1QjtBQUN2Qiw2Q0FBNkM7QUFDN0MsT0FBTztBQUNQLDBCQUEwQjtBQUMxQixLQUFLO0FBRUwsMkJBQTJCO0FBQzNCLGlHQUFpRztBQUNqRyw0Q0FBNEM7QUFDNUMsdUNBQXVDO0FBQ3ZDLGNBQWM7QUFDZCxvR0FBb0c7QUFDcEcsNkRBQTZEO0FBQzdELDBCQUEwQjtBQUMxQixnREFBZ0Q7QUFDaEQsVUFBVTtBQUNWLFFBQVE7QUFDUiw2Q0FBNkM7QUFDN0MsdUNBQXVDO0FBQ3ZDLGNBQWM7QUFDZCx5RUFBeUU7QUFDekUsMEJBQTBCO0FBQzFCLGdEQUFnRDtBQUNoRCxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUixLQUFLO0FBR0wsVUFBVSIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuaW1wb3J0IHsgQmFja2VuZCB9IGZyb20gXCIuL0JhY2tlbmRcIjtcclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi9Ib21lUGFnZVwiO1xyXG5pbXBvcnQgeyBTcWxDb21tYW5kcyB9IGZyb20gXCIuL2ludGVyZmFjZXMvU3FsQ29tbWFuZHNcIjtcclxuaW1wb3J0IFRhYmxlUGVyc29uYWxXZWJzaXRlIGZyb20gXCIuL2ludGVyZmFjZXMvVGFibGVQZXJzb25hbFdlYnNpdGVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuL1BhZ2VcIjtcclxuXHJcbmNvbnN0IFBvcnQgPSBwcm9jZXNzLmVudi5Qb3J0IHx8IDMwMDA7XHJcbmNvbnN0IF9fZGlyUGFyZW50c05hbWUgPSBfX2Rpcm5hbWUuc2xpY2UoMCwgMzMpO1xyXG5cclxuLy9fX2Rpcm5hbWU6ICAgICAgICAgRDpcXFByb2pla3RlXFxwZXJzb25hbF93ZWJzaXRlXFxkaXN0XFxzZXJ2ZXJcclxuLy9fX2RpclBhcmVudHNOYW1lOiAgRDpcXFByb2pla3RlXFxwZXJzb25hbF93ZWJzaXRlXFxkaXN0XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmFwcC51c2UoJy9zdHlsZS5jc3MnLCBleHByZXNzLnN0YXRpYygnLi9kaXN0L2NzcycpKTtcclxuYXBwLnVzZShleHByZXNzLmpzb24oKSkgLy8gPD09PT0gcGFyc2UgcmVxdWVzdCBib2R5IGFzIEpTT05cclxuXHJcbmNvbnN0IHNlcnZlciA9IGFwcC5saXN0ZW4oUG9ydCwgKCkgPT4ge1xyXG4gICBjb25zb2xlLmxvZyhgc2VydmVyIGlzdCBzdGFydGluZyBvbiBwb3J0ICR7UG9ydH1gKTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlyUGFyZW50c05hbWV9L2luZGV4Lmh0bWxgKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvYmFja2VuZFwiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlyUGFyZW50c05hbWV9L2JhY2tlbmQuaHRtbGApXHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9qcy9tYWluLmpzXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vanMvbWFpbi5qc2ApXHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9qcy9iYWNrZW5kUGFnZS5qc1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlyUGFyZW50c05hbWV9L2pzL2JhY2tlbmRQYWdlLmpzYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2Nzcy9zdHlsZS5jc3NcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2RpclBhcmVudHNOYW1lfS9jc3Mvc3R5bGUuY3NzYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KC9hc3NldHNcXC9mb250c1xcLy4qL2ksIChyZXEsIHJlcykgPT4ge1xyXG4gICBpZiAoZnMuZXhpc3RzU3luYyhfX2RpclBhcmVudHNOYW1lICsgcmVxLnBhdGgpKSB7XHJcbiAgICAgIHJlcy5zZW5kRmlsZShfX2RpclBhcmVudHNOYW1lICsgcmVxLnBhdGgpO1xyXG4gICB9IGVsc2UgcmVzLnNlbmRTdGF0dXMoNDA0KTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2Zhdmljb24uaWNvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJQYXJlbnRzTmFtZX0vYXNzZXRzL2Zhdmljb24uaWNvYCk7XHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi90ZXN0XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBodG1sUGFnZTogUGFnZSA9IG5ldyBIb21lUGFnZSgpO1xyXG4gICBhd2FpdCBodG1sUGFnZS5idWlsZFBhZ2UoKTtcclxuICAgcmVzLnNlbmQoaHRtbFBhZ2UuZ2V0SHRtbFN0cmluZygpKTtcclxufSk7XHJcblxyXG4vLyBHRVRcclxuXHJcbi8vIGFwcC5nZXQoXCIvdGl0bGVuYW1lXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgY29uc3Qgc3FsQ29tbWFuZDogU3FsQ29tbWFuZHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcInNxbENvbW1hbmRzLmpzb25cIikudG9TdHJpbmcoKSk7XHJcbi8vICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZC5leGVjdXRlU1FMKHNxbENvbW1hbmQudGl0bGVOYW1lKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuLy8gICAgICAgcmVzLmpzb24oeyB0aXRsZU5hbWU6IHJlc3BvbnNlWzBdLlRleHRfQ29udGVudCB9KVxyXG4vLyAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gZnVuY3Rpb24gc2VsZWN0KHZhbHVlOiBzdHJpbmcpIHtcclxuLy8gICAgYXBwLmdldChgJHt2YWx1ZX1gLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICAgICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbi8vICAgICAgIGNvbnN0IHNxbENvbW1hbmQ6IFNxbENvbW1hbmRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcWxDb21tYW5kcy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG4vLyAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhY2tlbmQuZXhlY3V0ZVNRTChzcWxDb21tYW5kW3ZhbHVlXSkgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbi8vICAgICAgICAgIHJlcy5qc29uKHsgdGl0bGVOYW1lOiByZXNwb25zZVswXS5UZXh0X0NvbnRlbnQgfSlcclxuLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIFxyXG4vLyAgICAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICB9KVxyXG4vLyB9XHJcblxyXG5jb25zdCBwYXRoQXJyYXk6IHN0cmluZ1tdID0gW1wic2VsZWN0Q29tcG9uZW50c1wiXTtcclxuXHJcbmNvbnN0IHNxbENvbW1hbmQ6IFNxbENvbW1hbmRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcWxDb21tYW5kcy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG5cclxuYXBwLmdldChcIi9zZWxlY3RDb21wb25lbnRzXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC5zZWxlY3RbXCJzZWxlY3RDb21wb25lbnRzXCJdKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuICAgICAgcmVzLmpzb24ocmVzcG9uc2UpXHJcbiAgICAgIC8vIHJlcy5qc29uKHsgTmFtZXM6IHJlc3BvbnNlLmZvckVhY2goZSA9PiB7IHJldHVybiBlLk5hbWUgfSkgfSlcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLmpzb24oeyBlcnI6IHRydWUsIG1zZzogZXJyb3IgfSk7XHJcbiAgIH1cclxufSlcclxuXHJcbmFwcC5wb3N0KFwiL2FkZENvbXBvbmVudFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgYmFja2VuZCA9IG5ldyBCYWNrZW5kKCk7XHJcbiAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSk7XHJcbiAgIC8vIGNvbnNvbGUubG9nKFwiSU5TRVJUIElOVE8gYHBlcnNvbmFsX3dlYnNpdGVgLmBjb250ZW50YChgREVWX05BTUVgLGBTRVRUSU5HU2ApIFZBTFVFUyAoJ1wiICsgcmVxLmJvZHkuZGV2TmFtZSArIFwiJywnXCIgKyBKU09OLnN0cmluZ2lmeShyZXEuYm9keS5zZXR0aW5ncykgKyBcIicpXCIpO1xyXG4gICBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoXCJJTlNFUlQgSU5UTyBgcGVyc29uYWxfd2Vic2l0ZWAuYGNvbnRlbnRgKGBERVZfTkFNRWAsYFNFVFRJTkdTYCkgVkFMVUVTICgnXCIgKyByZXEuYm9keS5kZXZOYW1lICsgXCInLCdcIiArIEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5LnNldHRpbmdzKSArIFwiJylcIilcclxuICAgdHJ5IHtcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLmpzb24oeyBlcnI6IHRydWUsIG1zZzogZXJyb3IgfSk7XHJcbiAgIH1cclxuICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeVNldHRpbmdzKHJlcSkge1xyXG4gICBsZXQgc3RyaW5nOiBzdHJpbmc7XHJcbiAgIHJlcS5mb3JFYWNoKGUgPT4ge1xyXG5cclxuICAgfSlcclxufVxyXG5cclxuLy8gYXBwLnBvc3QoXCIvYWRkQ29tcG9uZW50XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoXCJVUERBVEUgYGNvbnRlbnRgIFNFVCBgVGV4dF9Db250ZW50YCA9ICdcIiArIHJlcS5ib2R5LnRpdGxlTmFtZSArIFwiJ1wiKVxyXG4vLyAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgfVxyXG4vLyAgICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyB9KVxyXG5cclxuLy8gcGF0aEFycmF5LmZvckVhY2goZSA9PiB7XHJcbi8vICAgIGNvbnN0IHNxbENvbW1hbmQ6IFNxbENvbW1hbmRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcWxDb21tYW5kcy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG4vLyAgICBhcHAuZ2V0KGAvJHtlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC5zZWxlY3RbZV0pIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4vLyAgICAgICAgICByZXMuanNvbih7IHRpdGxlTmFtZTogcmVzcG9uc2VbMF0uVGV4dF9Db250ZW50IH0pXHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgIHJlcy5qc29uKHsgZXJyOiB0cnVlLCBtc2c6IGVycm9yIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgIH0pXHJcbi8vICAgIGFwcC5wb3N0KGAvJHtlfWAsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgICAgICBjb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBiYWNrZW5kLmV4ZWN1dGVTUUwoc3FsQ29tbWFuZC5wb3N0W2VdKVxyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgICByZXMuanNvbih7IGVycjogdHJ1ZSwgbXNnOiBlcnJvciB9KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG5cclxuXHJcbi8vIC8vIFBPU1RcclxuIl19
