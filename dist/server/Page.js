"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const mysql_1 = __importDefault(require("mysql"));
const fs_1 = __importDefault(require("fs"));
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
}
exports.Page = Page;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQXNEO0FBQ3RELDRDQUFvQjtBQUtwQixNQUFzQixJQUFJO0lBUXZCO1FBQ0csTUFBTSxRQUFRLEdBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBRSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDdEMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtZQUNuQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7WUFDM0IsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ3ZCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtTQUNyQixDQUFDLENBQUE7SUFDTCxDQUFDO0lBRVMsS0FBSyxDQUFJLEtBQWE7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQWlCLEVBQUUsUUFBVyxFQUFFLEVBQUU7Z0JBQzdELElBQUksS0FBSyxFQUFFO29CQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEI7O29CQUVFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUdIO0FBakNELG9CQWlDQyIsImZpbGUiOiJQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsLCB7IENvbm5lY3Rpb24sIE15c3FsRXJyb3IgfSBmcm9tIFwibXlzcWxcIjtcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgRGF0YWJhc2VDb25maWcgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2RhdGFiYXNlQ29uZmlnXCI7XHJcbmltcG9ydCB7IEh0bWwgfSBmcm9tIFwiLi9jcmVhdGVIdG1sXCI7XHJcbmltcG9ydCB7IEh0bWxCb2R5RWxlbWVudCwgSHRtbGZvb3RlckVsZW1lbnQsIEh0bWxIZWFkZXJFbGVtZW50LCBIdG1sTWFpbkVsZW1lbnQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBhZ2Uge1xyXG4gICBwcm90ZWN0ZWQgY29ubmVjdGlvbjogQ29ubmVjdGlvbjtcclxuICAgcHJvdGVjdGVkIGh0bWw6IEh0bWw7XHJcbiAgIHByb3RlY3RlZCBib2R5OiBIdG1sQm9keUVsZW1lbnQ7XHJcbiAgIHByb3RlY3RlZCBoZWFkZXI6IEh0bWxIZWFkZXJFbGVtZW50O1xyXG4gICBwcm90ZWN0ZWQgbWFpbjogSHRtbE1haW5FbGVtZW50O1xyXG4gICBwcm90ZWN0ZWQgZm9vdGVyOiBIdG1sZm9vdGVyRWxlbWVudDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBjb25zdCBkYXRhQmFzZTogRGF0YWJhc2VDb25maWcgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcImRhdGFiYXNlQ29uZmlnLmpzb25cIikudG9TdHJpbmcoKSk7XHJcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgICAgICBob3N0OiBkYXRhQmFzZS5ob3N0LFxyXG4gICAgICAgICB1c2VyOiBkYXRhQmFzZS51c2VyLFxyXG4gICAgICAgICBwYXNzd29yZDogZGF0YUJhc2UucGFzc3dvcmQsXHJcbiAgICAgICAgIGRhdGFiYXNlOiBkYXRhQmFzZS5uYW1lLFxyXG4gICAgICAgICBwb3J0OiBkYXRhQmFzZS5wb3J0XHJcbiAgICAgIH0pXHJcbiAgIH1cclxuXHJcbiAgIHByb3RlY3RlZCBxdWVyeTxUPihxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxUIHwgTXlzcWxFcnJvcj4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICB0aGlzLmNvbm5lY3Rpb24uY29ubmVjdCgpO1xyXG4gICAgICAgICB0aGlzLmNvbm5lY3Rpb24ucXVlcnkocXVlcnksIChlcnJvcjogTXlzcWxFcnJvciwgcmVzcG9uc2U6IFQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgfVxyXG4gICBhYnN0cmFjdCBidWlsZFBhZ2UoKTogdm9pZDtcclxuICAgYWJzdHJhY3QgZ2V0SHRtbFN0cmluZygpOiBzdHJpbmc7XHJcbn0iXX0=
