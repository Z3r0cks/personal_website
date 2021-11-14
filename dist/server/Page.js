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
                        htmlList.push(new HtmlElement_1.HtmlHElement("class='c_head' id='c_head'", settings.content, settings.type));
                        break;
                    case "c_test":
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
