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
exports.Page = void 0;
const mysql_1 = __importDefault(require("mysql"));
const fs_1 = __importDefault(require("fs"));
const HtmlElement_1 = require("./HtmlElement");
class Page {
    constructor() {
        const dataBase = JSON.parse(fs_1.default.readFileSync("databaseConfig.json").toString());
        this.connection = mysql_1.default.createConnection({
            host: dataBase.host,
            user: dataBase.user,
            password: dataBase.password,
            database: dataBase.name,
            port: dataBase.port
        });
    }
    query(query) {
        return new Promise((resolve, reject) => {
            this.connection.connect();
            this.connection.query(query, (error, response) => {
                if (error) {
                    reject(error);
                }
                else
                    resolve(response);
            });
        });
    }
    buildPage() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    ;
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.query("SELECT * FROM `content`");
            const htmlList = [];
            response.forEach(e => {
                const settings = JSON.parse(e.SETTINGS);
                switch (e.DEV_NAME) {
                    case "c_title":
                        htmlList.push(new HtmlElement_1.HtmlHElement("c_head", false, settings.content, false, settings.type));
                        break;
                }
            });
            return htmlList;
        });
    }
    getHtmlString() {
        return this.html.newHTML([
            this.body
        ]);
    }
    ;
}
exports.Page = Page;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQXNEO0FBQ3RELDRDQUFvQjtBQUdwQiwrQ0FBa0k7QUFHbEksTUFBc0IsSUFBSTtJQVF2QjtRQUNHLE1BQU0sUUFBUSxHQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQUUsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ3RDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7WUFDbkIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQzNCLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtZQUN2QixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7U0FDckIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVTLEtBQUssQ0FBSSxLQUFhO1FBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFpQixFQUFFLFFBQVcsRUFBRSxFQUFFO2dCQUM3RCxJQUFJLEtBQUssRUFBRTtvQkFDUixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2hCOztvQkFFRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFDSyxTQUFTOztRQUVmLENBQUM7S0FBQTtJQUFBLENBQUM7SUFFYyxVQUFVOztZQUN2QixNQUFNLFFBQVEsR0FBeUIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUF5QixDQUFDO1lBQzNHLE1BQU0sUUFBUSxHQUFrQixFQUFFLENBQUM7WUFDbkMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDakIsS0FBSyxTQUFTO3dCQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7d0JBQ3hGLE1BQU07aUJBQ1g7WUFDSixDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU8sUUFBUSxDQUFBO1FBQ2xCLENBQUM7S0FBQTtJQUVELGFBQWE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJO1NBQ1gsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFBLENBQUM7Q0FDSjtBQXRERCxvQkFzREMiLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCwgeyBDb25uZWN0aW9uLCBNeXNxbEVycm9yIH0gZnJvbSBcIm15c3FsXCI7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9kYXRhYmFzZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBIdG1sIH0gZnJvbSBcIi4vY3JlYXRlSHRtbFwiO1xyXG5pbXBvcnQgeyBIdG1sRWxlbWVudCwgSHRtbEJvZHlFbGVtZW50LCBIdG1sZm9vdGVyRWxlbWVudCwgSHRtbEhlYWRlckVsZW1lbnQsIEh0bWxNYWluRWxlbWVudCwgSHRtbEhFbGVtZW50IH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRcIjtcclxuaW1wb3J0IFRhYmxlUGVyc29uYWxXZWJzaXRlIGZyb20gXCIuL2ludGVyZmFjZXMvVGFibGVQZXJzb25hbFdlYnNpdGVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQYWdlIHtcclxuICAgcHJvdGVjdGVkIGNvbm5lY3Rpb246IENvbm5lY3Rpb247XHJcbiAgIHByb3RlY3RlZCBodG1sOiBIdG1sO1xyXG4gICBwcm90ZWN0ZWQgYm9keTogSHRtbEJvZHlFbGVtZW50O1xyXG4gICBwcm90ZWN0ZWQgaGVhZGVyOiBIdG1sSGVhZGVyRWxlbWVudDtcclxuICAgcHJvdGVjdGVkIG1haW46IEh0bWxNYWluRWxlbWVudDtcclxuICAgcHJvdGVjdGVkIGZvb3RlcjogSHRtbGZvb3RlckVsZW1lbnQ7XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgY29uc3QgZGF0YUJhc2U6IERhdGFiYXNlQ29uZmlnID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJkYXRhYmFzZUNvbmZpZy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgICAgaG9zdDogZGF0YUJhc2UuaG9zdCxcclxuICAgICAgICAgdXNlcjogZGF0YUJhc2UudXNlcixcclxuICAgICAgICAgcGFzc3dvcmQ6IGRhdGFCYXNlLnBhc3N3b3JkLFxyXG4gICAgICAgICBkYXRhYmFzZTogZGF0YUJhc2UubmFtZSxcclxuICAgICAgICAgcG9ydDogZGF0YUJhc2UucG9ydFxyXG4gICAgICB9KVxyXG4gICB9XHJcblxyXG4gICBwcm90ZWN0ZWQgcXVlcnk8VD4ocXVlcnk6IHN0cmluZyk6IFByb21pc2U8VCB8IE15c3FsRXJyb3I+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmNvbm5lY3QoKTtcclxuICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnF1ZXJ5KHF1ZXJ5LCAoZXJyb3I6IE15c3FsRXJyb3IsIHJlc3BvbnNlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgIH1cclxuICAgYXN5bmMgYnVpbGRQYWdlKCkge1xyXG5cclxuICAgfTtcclxuXHJcbiAgIHByb3RlY3RlZCBhc3luYyBnZXRDb250ZW50KCk6IFByb21pc2U8SHRtbEVsZW1lbnRbXT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZTogVGFibGVQZXJzb25hbFdlYnNpdGUgPSBhd2FpdCB0aGlzLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBgY29udGVudGBcIikgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbiAgICAgIGNvbnN0IGh0bWxMaXN0OiBIdG1sRWxlbWVudFtdID0gW107XHJcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShlLlNFVFRJTkdTKTtcclxuICAgICAgICAgc3dpdGNoIChlLkRFVl9OQU1FKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjX3RpdGxlXCI6XHJcbiAgICAgICAgICAgICAgIGh0bWxMaXN0LnB1c2gobmV3IEh0bWxIRWxlbWVudChcImNfaGVhZFwiLCBmYWxzZSwgc2V0dGluZ3MuY29udGVudCwgZmFsc2UsIHNldHRpbmdzLnR5cGUpKVxyXG4gICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gaHRtbExpc3RcclxuICAgfVxyXG5cclxuICAgZ2V0SHRtbFN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy5odG1sLm5ld0hUTUwoW1xyXG4gICAgICAgICB0aGlzLmJvZHlcclxuICAgICAgXSk7XHJcbiAgIH07XHJcbn0iXX0=
