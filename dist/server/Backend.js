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
    buildPage() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getHtmlString() {
        return "";
    }
}
exports.Backend = Backend;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhY2tlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQThCO0FBRTlCLE1BQWEsT0FBUSxTQUFRLFdBQUk7SUFFeEIsVUFBVSxDQUFJLEtBQWE7O1lBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQixDQUFDO0tBQUE7SUFFSyxTQUFTOzhEQUFLLENBQUM7S0FBQTtJQUNyQixhQUFhO1FBQ1YsT0FBTyxFQUFFLENBQUM7SUFDYixDQUFDO0NBQ0g7QUFWRCwwQkFVQyIsImZpbGUiOiJCYWNrZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXlzcWxFcnJvciB9IGZyb20gXCJteXNxbFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tlbmQgZXh0ZW5kcyBQYWdlIHtcclxuXHJcbiAgIGFzeW5jIGV4ZWN1dGVTUUw8VD4ocXVlcnk6IHN0cmluZyk6IFByb21pc2U8VCB8IE15c3FsRXJyb3I+IHtcclxuICAgICAgcmV0dXJuIHRoaXMucXVlcnkocXVlcnkpXHJcbiAgIH1cclxuXHJcbiAgIGFzeW5jIGJ1aWxkUGFnZSgpIHsgfVxyXG4gICBnZXRIdG1sU3RyaW5nKCkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgfVxyXG59Il19
