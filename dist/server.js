"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const fs_1 = __importDefault(require("fs"));
const Page_1 = require("./Page");
const databaseName = "personal_website";
const tableName = "content";
const Port = process.env.Port || 3000;
const host = "127.0.0.1";
const app = express_1.default();
app.use('/style.css', express_1.default.static('./dist/css'));
const connection = mysql_1.default.createConnection({
    // connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: databaseName
});
const server = app.listen(Port, () => {
    console.log(`server ist starting on port ${Port}`);
});
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
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
app.get("/test", (req, res) => {
    res.send(new Page_1.assambleHTML().getHtmlString());
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUc5QixrREFBMEI7QUFDMUIsNENBQW9CO0FBQ3BCLGlDQUFzQztBQUV0QyxNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUN4QyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDNUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ3RDLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQztBQUV6QixNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUVwRCxNQUFNLFVBQVUsR0FBRyxlQUFLLENBQUMsZ0JBQWdCLENBQUM7SUFDdkMsdUJBQXVCO0lBQ3ZCLElBQUksRUFBRSxXQUFXO0lBQ2pCLElBQUksRUFBRSxNQUFNO0lBQ1osUUFBUSxFQUFFLEVBQUU7SUFDWixRQUFRLEVBQUUsWUFBWTtDQUN4QixDQUFDLENBQUE7QUFDRixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDaEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsWUFBWSxDQUFDLENBQUE7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3BDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3hDLElBQUksWUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3RDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7UUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMscUJBQXFCLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IGZzdGF0IH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCBteXNxbCBmcm9tIFwibXlzcWxcIjtcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgYXNzYW1ibGVIVE1MIH0gZnJvbSBcIi4vUGFnZVwiO1xyXG5cclxuY29uc3QgZGF0YWJhc2VOYW1lID0gXCJwZXJzb25hbF93ZWJzaXRlXCI7XHJcbmNvbnN0IHRhYmxlTmFtZSA9IFwiY29udGVudFwiO1xyXG5jb25zdCBQb3J0ID0gcHJvY2Vzcy5lbnYuUG9ydCB8fCAzMDAwO1xyXG5jb25zdCBob3N0ID0gXCIxMjcuMC4wLjFcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZSgnL3N0eWxlLmNzcycsIGV4cHJlc3Muc3RhdGljKCcuL2Rpc3QvY3NzJykpO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAvLyBjb25uZWN0aW9uTGltaXQ6IDEwLFxyXG4gICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgdXNlcjogJ3Jvb3QnLFxyXG4gICBwYXNzd29yZDogJycsXHJcbiAgIGRhdGFiYXNlOiBkYXRhYmFzZU5hbWVcclxufSlcclxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3RlbihQb3J0LCAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKGBzZXJ2ZXIgaXN0IHN0YXJ0aW5nIG9uIHBvcnQgJHtQb3J0fWApO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJuYW1lfS9pbmRleC5odG1sYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2pzL2FwcC5qc1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgcmVzLnNlbmRGaWxlKGAke19fZGlybmFtZX0vanMvYXBwLmpzYClcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2Nzcy9zdHlsZS5jc3NcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kRmlsZShgJHtfX2Rpcm5hbWV9L2Nzcy9zdHlsZS5jc3NgKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoL2Fzc2V0c1xcL2ZvbnRzXFwvLiovaSwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGlmIChmcy5leGlzdHNTeW5jKF9fZGlybmFtZSArIHJlcS5wYXRoKSkge1xyXG4gICAgICByZXMuc2VuZEZpbGUoX19kaXJuYW1lICsgcmVxLnBhdGgpO1xyXG4gICB9IGVsc2UgcmVzLnNlbmRTdGF0dXMoNDA0KTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL2Zhdmljb24uaWNvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICByZXMuc2VuZEZpbGUoYCR7X19kaXJuYW1lfS9hc3NldHMvZmF2aWNvbi5pY29gKTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL3Rlc3RcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHJlcy5zZW5kKG5ldyBhc3NhbWJsZUhUTUwoKS5nZXRIdG1sU3RyaW5nKCkpO1xyXG59KTtcclxuIl19
