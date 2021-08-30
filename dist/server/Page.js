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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQXNEO0FBQ3RELDRDQUFvQjtBQUtwQixNQUFzQixJQUFJO0lBT3ZCO1FBQ0csTUFBTSxRQUFRLEdBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBRSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDdEMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtZQUNuQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7WUFDM0IsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ3ZCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtTQUNyQixDQUFDLENBQUE7SUFDTCxDQUFDO0lBRVMsS0FBSyxDQUFJLEtBQWE7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQWlCLEVBQUUsUUFBVyxFQUFFLEVBQUU7Z0JBQzdELElBQUksS0FBSyxFQUFFO29CQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEI7O29CQUVFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUdIO0FBaENELG9CQWdDQyIsImZpbGUiOiJQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsLCB7IENvbm5lY3Rpb24sIE15c3FsRXJyb3IgfSBmcm9tIFwibXlzcWxcIjtcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgRGF0YWJhc2VDb25maWcgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2RhdGFiYXNlQ29uZmlnXCI7XHJcbmltcG9ydCB7IEh0bWwgfSBmcm9tIFwiLi9jcmVhdGVIdG1sXCI7XHJcbmltcG9ydCB7IEh0bWxCb2R5RWxlbWVudCwgSHRtbGZvb3RlckVsZW1lbnQsIEh0bWxIZWFkZXJFbGVtZW50IH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQYWdlIHtcclxuICAgcHJvdGVjdGVkIGNvbm5lY3Rpb246IENvbm5lY3Rpb247XHJcbiAgIHByb3RlY3RlZCBodG1sOiBIdG1sO1xyXG4gICBwcm90ZWN0ZWQgYm9keTogSHRtbEJvZHlFbGVtZW50O1xyXG4gICBwcm90ZWN0ZWQgaGVhZGVyOiBIdG1sSGVhZGVyRWxlbWVudDtcclxuICAgcHJvdGVjdGVkIGZvb3RlcjogSHRtbGZvb3RlckVsZW1lbnQ7XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgY29uc3QgZGF0YUJhc2U6IERhdGFiYXNlQ29uZmlnID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJkYXRhYmFzZUNvbmZpZy5qc29uXCIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgICAgaG9zdDogZGF0YUJhc2UuaG9zdCxcclxuICAgICAgICAgdXNlcjogZGF0YUJhc2UudXNlcixcclxuICAgICAgICAgcGFzc3dvcmQ6IGRhdGFCYXNlLnBhc3N3b3JkLFxyXG4gICAgICAgICBkYXRhYmFzZTogZGF0YUJhc2UubmFtZSxcclxuICAgICAgICAgcG9ydDogZGF0YUJhc2UucG9ydFxyXG4gICAgICB9KVxyXG4gICB9XHJcblxyXG4gICBwcm90ZWN0ZWQgcXVlcnk8VD4ocXVlcnk6IHN0cmluZyk6IFByb21pc2U8VCB8IE15c3FsRXJyb3I+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmNvbm5lY3QoKTtcclxuICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnF1ZXJ5KHF1ZXJ5LCAoZXJyb3I6IE15c3FsRXJyb3IsIHJlc3BvbnNlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgIH1cclxuICAgYWJzdHJhY3QgYnVpbGRQYWdlKCk6IHZvaWQ7XHJcbiAgIGFic3RyYWN0IGdldEh0bWxTdHJpbmcoKTogc3RyaW5nO1xyXG59Il19
