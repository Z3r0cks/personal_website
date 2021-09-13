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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQXNEO0FBQ3RELDRDQUFvQjtBQUdwQiwrQ0FBZ0o7QUFHaEosTUFBc0IsSUFBSTtJQVF2QjtRQUNHLE1BQU0sUUFBUSxHQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQUUsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ3RDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7WUFDbkIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQzNCLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtZQUN2QixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7U0FDckIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVTLEtBQUssQ0FBSSxLQUFhO1FBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFpQixFQUFFLFFBQVcsRUFBRSxFQUFFO2dCQUM3RCxJQUFJLEtBQUssRUFBRTtvQkFDUixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2hCOztvQkFFRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFDSyxTQUFTOztRQUVmLENBQUM7S0FBQTtJQUFBLENBQUM7SUFFYyxVQUFVOztZQUN2QixNQUFNLFFBQVEsR0FBeUIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUF5QixDQUFDO1lBQzNHLE1BQU0sUUFBUSxHQUFrQixFQUFFLENBQUM7WUFDbkMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDakIsS0FBSyxTQUFTO3dCQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7d0JBQ3hGLE1BQU07aUJBQ1g7WUFDSixDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU8sUUFBUSxDQUFBO1FBQ2xCLENBQUM7S0FBQTtJQUVELGFBQWE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJO1NBQ1gsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFBLENBQUM7Q0FDSjtBQXRERCxvQkFzREMiLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCwgeyBDb25uZWN0aW9uLCBNeXNxbEVycm9yIH0gZnJvbSBcIm15c3FsXCI7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9kYXRhYmFzZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBIdG1sIH0gZnJvbSBcIi4vY3JlYXRlSHRtbFwiO1xyXG5pbXBvcnQgeyBIdG1sRWxlbWVudCwgSHRtbEJvZHlFbGVtZW50LCBIdG1sZm9vdGVyRWxlbWVudCwgSHRtbEhlYWRlckVsZW1lbnQsIEh0bWxNYWluRWxlbWVudCwgSHRtbEhFbGVtZW50LCBIdG1sUEVsZW1lbnQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudFwiO1xyXG5pbXBvcnQgVGFibGVQZXJzb25hbFdlYnNpdGUgZnJvbSBcIi4vaW50ZXJmYWNlcy9UYWJsZVBlcnNvbmFsV2Vic2l0ZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBhZ2Uge1xyXG4gICBwcm90ZWN0ZWQgY29ubmVjdGlvbjogQ29ubmVjdGlvbjtcclxuICAgcHJvdGVjdGVkIGh0bWw6IEh0bWw7XHJcbiAgIHByb3RlY3RlZCBib2R5OiBIdG1sQm9keUVsZW1lbnQ7XHJcbiAgIHByb3RlY3RlZCBoZWFkZXI6IEh0bWxIZWFkZXJFbGVtZW50O1xyXG4gICBwcm90ZWN0ZWQgbWFpbjogSHRtbE1haW5FbGVtZW50O1xyXG4gICBwcm90ZWN0ZWQgZm9vdGVyOiBIdG1sZm9vdGVyRWxlbWVudDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBjb25zdCBkYXRhQmFzZTogRGF0YWJhc2VDb25maWcgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcImRhdGFiYXNlQ29uZmlnLmpzb25cIikudG9TdHJpbmcoKSk7XHJcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgICAgICBob3N0OiBkYXRhQmFzZS5ob3N0LFxyXG4gICAgICAgICB1c2VyOiBkYXRhQmFzZS51c2VyLFxyXG4gICAgICAgICBwYXNzd29yZDogZGF0YUJhc2UucGFzc3dvcmQsXHJcbiAgICAgICAgIGRhdGFiYXNlOiBkYXRhQmFzZS5uYW1lLFxyXG4gICAgICAgICBwb3J0OiBkYXRhQmFzZS5wb3J0XHJcbiAgICAgIH0pXHJcbiAgIH1cclxuXHJcbiAgIHByb3RlY3RlZCBxdWVyeTxUPihxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxUIHwgTXlzcWxFcnJvcj4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICB0aGlzLmNvbm5lY3Rpb24uY29ubmVjdCgpO1xyXG4gICAgICAgICB0aGlzLmNvbm5lY3Rpb24ucXVlcnkocXVlcnksIChlcnJvcjogTXlzcWxFcnJvciwgcmVzcG9uc2U6IFQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgfVxyXG4gICBhc3luYyBidWlsZFBhZ2UoKSB7XHJcblxyXG4gICB9O1xyXG5cclxuICAgcHJvdGVjdGVkIGFzeW5jIGdldENvbnRlbnQoKTogUHJvbWlzZTxIdG1sRWxlbWVudFtdPiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBUYWJsZVBlcnNvbmFsV2Vic2l0ZSA9IGF3YWl0IHRoaXMucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIGBjb250ZW50YFwiKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuICAgICAgY29uc3QgaHRtbExpc3Q6IEh0bWxFbGVtZW50W10gPSBbXTtcclxuICAgICAgcmVzcG9uc2UuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGUuU0VUVElOR1MpO1xyXG4gICAgICAgICBzd2l0Y2ggKGUuREVWX05BTUUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNfdGl0bGVcIjpcclxuICAgICAgICAgICAgICAgaHRtbExpc3QucHVzaChuZXcgSHRtbEhFbGVtZW50KFwiY19oZWFkXCIsIGZhbHNlLCBzZXR0aW5ncy5jb250ZW50LCBmYWxzZSwgc2V0dGluZ3MudHlwZSkpXHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBodG1sTGlzdFxyXG4gICB9XHJcblxyXG4gICBnZXRIdG1sU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0bWwubmV3SFRNTChbXHJcbiAgICAgICAgIHRoaXMuYm9keVxyXG4gICAgICBdKTtcclxuICAgfTtcclxufSJdfQ==
