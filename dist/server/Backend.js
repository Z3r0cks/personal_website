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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backend = void 0;
const Page_1 = require("./Page");
class Backend extends Page_1.Page {
    executeSQL(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.query(query);
        });
    }
    buildPage() { }
    getHtmlString() {
        return "";
    }
}
exports.Backend = Backend;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhY2tlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQThCO0FBRTlCLE1BQWEsT0FBUSxTQUFRLFdBQUk7SUFFeEIsVUFBVSxDQUFJLEtBQWE7O1lBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQixDQUFDO0tBQUE7SUFFRCxTQUFTLEtBQUssQ0FBQztJQUNmLGFBQWE7UUFDVixPQUFPLEVBQUUsQ0FBQztJQUNiLENBQUM7Q0FDSDtBQVZELDBCQVVDIiwiZmlsZSI6IkJhY2tlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNeXNxbEVycm9yIH0gZnJvbSBcIm15c3FsXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2VuZCBleHRlbmRzIFBhZ2Uge1xyXG5cclxuICAgYXN5bmMgZXhlY3V0ZVNRTDxUPihxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxUIHwgTXlzcWxFcnJvcj4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5xdWVyeShxdWVyeSlcclxuICAgfVxyXG5cclxuICAgYnVpbGRQYWdlKCkgeyB9XHJcbiAgIGdldEh0bWxTdHJpbmcoKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICB9XHJcbn0iXX0=
