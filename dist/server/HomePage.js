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
exports.HomePage = void 0;
const HtmlElement_1 = require("./HtmlElement");
const createHtml_1 = require("./createHtml");
const Page_1 = require("./Page");
class HomePage extends Page_1.Page {
    constructor() {
        super();
    }
    buildPage() {
        return __awaiter(this, void 0, void 0, function* () {
            let content = yield this.getContent();
            try {
                this.html = new createHtml_1.Html("de", "./css/style.css", "Mein Title", ["./js/main.js"]);
                this.header = new HtmlElement_1.HtmlHeaderElement(false, false, [
                    new HtmlElement_1.HtmlNavElement("class='navbar'", false, [
                        new HtmlElement_1.HtmlHElement("class='navTitle'", "Patrick Kaserer", "h1"),
                        new HtmlElement_1.HtmlDivElement(false, false, [
                            new HtmlElement_1.HtmlButtonElement("class='btn btn--second'", "über mich"),
                            new HtmlElement_1.HtmlButtonElement("class='btn btn--second'", "Referenzen"),
                            new HtmlElement_1.HtmlButtonElement("class='btn btn--main'", "Kontakt"),
                        ])
                    ])
                ]);
                this.main = new HtmlElement_1.HtmlMainElement(content);
                this.body = new HtmlElement_1.HtmlBodyElement([this.header, this.main]);
            }
            catch (error) {
                this.html = new createHtml_1.Html("de", "./css/style.css", "ERROR", ["./js/main.js"]);
                this.body = new HtmlElement_1.HtmlBodyElement([
                    new HtmlElement_1.HtmlPElement("class='main' id='main'", "Test")
                ]);
            }
        });
    }
}
exports.HomePage = HomePage;
