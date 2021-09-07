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
            const list = new HtmlElement_1.HtmlDivElement("sdf", false, false, [new HtmlElement_1.HtmlH1Element(false, false, false, false)]);
            try {
                // const response: TablePersonalWebsite = await this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'") as TablePersonalWebsite;
                // const titleName: string = response[0].Text_Content;
                // const HTMLList: HtmlElement = this.getContent();
                // console.log(HTMLList);
                this.html = new createHtml_1.Html("de", "./css/style.css", "Mein Title", ["./js/main.js"]);
                this.header = new HtmlElement_1.HtmlHeaderElement(false, false, false, [
                    new HtmlElement_1.HtmlNavElement("navbar", false, false, [
                        new HtmlElement_1.HtmlH1Element("navTitle", false, "Patrick Kaserer", false, "h1"),
                        new HtmlElement_1.HtmlDivElement(false, false, false, [
                            new HtmlElement_1.HtmlButtonElement("btn btn--second", false, "über mich", false),
                            new HtmlElement_1.HtmlButtonElement("btn btn--second", false, "Referenzen", false),
                            new HtmlElement_1.HtmlButtonElement("btn btn--main", false, "Kontakt", false),
                        ])
                    ])
                ]);
                this.body = new HtmlElement_1.HtmlBodyElement("bodyClass", "bodyID", false, [this.header]);
            }
            catch (error) {
                this.html = new createHtml_1.Html("de", "./css/style.css", "ERROR", ["./js/main.js"]);
                this.body = new HtmlElement_1.HtmlBodyElement("bodyClass", "bodyID", false, [
                    new HtmlElement_1.HtmlPElement(false, false, error, false)
                ]);
                // const response: TablePersonalWebsite = await this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'") as TablePersonalWebsite;
            }
        });
    }
    getHtmlString() {
        return this.html.newHTML([
            this.body,
        ]);
    }
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.query("SELECT * FROM `content`");
            const htmlList = [];
            console.log(htmlList);
            response.forEach(function (e) {
                return __awaiter(this, void 0, void 0, function* () {
                    return htmlList.push(getHTMLType(e));
                });
            });
            function getHTMLType(res) {
                switch (res.DEV_NAME) {
                    case "c_title":
                        return new HtmlElement_1.HtmlH1Element("c_title", false, "lorem Ipsum überschrift", false, "h1");
                }
            }
            return htmlList;
        });
    }
}
exports.HomePage = HomePage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Z0JBQ3JCLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRTtvQkFDbkIsS0FBSyxTQUFTO3dCQUNYLE9BQU8sSUFBSSwyQkFBYSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN4RjtZQUNKLENBQUM7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNuQixDQUFDO0tBQUE7Q0FDSDtBQXhERCw0QkF3REMiLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sQm9keUVsZW1lbnQsIEh0bWxCdXR0b25FbGVtZW50LCBIdG1sRGl2RWxlbWVudCwgSHRtbEgxRWxlbWVudCwgSHRtbEhlYWRlckVsZW1lbnQsIEh0bWxOYXZFbGVtZW50LCBIdG1sUEVsZW1lbnQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudFwiXHJcbmltcG9ydCB7IEh0bWwgfSBmcm9tIFwiLi9jcmVhdGVIdG1sXCJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuL1BhZ2VcIjtcclxuaW1wb3J0IFRhYmxlUGVyc29uYWxXZWJzaXRlIGZyb20gXCIuL2ludGVyZmFjZXMvVGFibGVQZXJzb25hbFdlYnNpdGVcIjtcclxuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vZGlzdC9zZXJ2ZXIvSHRtbEVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFBhZ2Uge1xyXG5cclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKClcclxuICAgfVxyXG5cclxuICAgYXN5bmMgYnVpbGRQYWdlKCkge1xyXG4gICAgICBjb25zdCBsaXN0OiBIdG1sRGl2RWxlbWVudCA9IG5ldyBIdG1sRGl2RWxlbWVudChcInNkZlwiLCBmYWxzZSwgZmFsc2UsIFtuZXcgSHRtbEgxRWxlbWVudChmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSldKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgICAvLyBjb25zdCByZXNwb25zZTogVGFibGVQZXJzb25hbFdlYnNpdGUgPSBhd2FpdCB0aGlzLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBgY29udGVudGAgV0hFUkUgYE5hbWVgID0gJ3RpdGxlX25hbWUnXCIpIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4gICAgICAgICAvLyBjb25zdCB0aXRsZU5hbWU6IHN0cmluZyA9IHJlc3BvbnNlWzBdLlRleHRfQ29udGVudDtcclxuICAgICAgICAgLy8gY29uc3QgSFRNTExpc3Q6IEh0bWxFbGVtZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKEhUTUxMaXN0KTtcclxuICAgICAgICAgdGhpcy5odG1sID0gbmV3IEh0bWwoXCJkZVwiLCBcIi4vY3NzL3N0eWxlLmNzc1wiLCBcIk1laW4gVGl0bGVcIiwgW1wiLi9qcy9tYWluLmpzXCJdKTtcclxuICAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHRtbEhlYWRlckVsZW1lbnQoZmFsc2UsIGZhbHNlLCBmYWxzZSwgW1xyXG4gICAgICAgICAgICBuZXcgSHRtbE5hdkVsZW1lbnQoXCJuYXZiYXJcIiwgZmFsc2UsIGZhbHNlLCBbXHJcbiAgICAgICAgICAgICAgIG5ldyBIdG1sSDFFbGVtZW50KFwibmF2VGl0bGVcIiwgZmFsc2UsIFwiUGF0cmljayBLYXNlcmVyXCIsIGZhbHNlLCBcImgxXCIpLFxyXG4gICAgICAgICAgICAgICBuZXcgSHRtbERpdkVsZW1lbnQoZmFsc2UsIGZhbHNlLCBmYWxzZSwgW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgSHRtbEJ1dHRvbkVsZW1lbnQoXCJidG4gYnRuLS1zZWNvbmRcIiwgZmFsc2UsIFwiw7xiZXIgbWljaFwiLCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBIdG1sQnV0dG9uRWxlbWVudChcImJ0biBidG4tLXNlY29uZFwiLCBmYWxzZSwgXCJSZWZlcmVuemVuXCIsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgbmV3IEh0bWxCdXR0b25FbGVtZW50KFwiYnRuIGJ0bi0tbWFpblwiLCBmYWxzZSwgXCJLb250YWt0XCIsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgXSlcclxuICAgICAgICAgdGhpcy5ib2R5ID0gbmV3IEh0bWxCb2R5RWxlbWVudChcImJvZHlDbGFzc1wiLCBcImJvZHlJRFwiLCBmYWxzZSwgW3RoaXMuaGVhZGVyXSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgdGhpcy5odG1sID0gbmV3IEh0bWwoXCJkZVwiLCBcIi4vY3NzL3N0eWxlLmNzc1wiLCBcIkVSUk9SXCIsIFtcIi4vanMvbWFpbi5qc1wiXSk7XHJcbiAgICAgICAgIHRoaXMuYm9keSA9IG5ldyBIdG1sQm9keUVsZW1lbnQoXCJib2R5Q2xhc3NcIiwgXCJib2R5SURcIiwgZmFsc2UsIFtcclxuICAgICAgICAgICAgbmV3IEh0bWxQRWxlbWVudChmYWxzZSwgZmFsc2UsIGVycm9yLCBmYWxzZSlcclxuICAgICAgICAgXSlcclxuICAgICAgICAgLy8gY29uc3QgcmVzcG9uc2U6IFRhYmxlUGVyc29uYWxXZWJzaXRlID0gYXdhaXQgdGhpcy5xdWVyeShcIlNFTEVDVCAqIEZST00gYGNvbnRlbnRgIFdIRVJFIGBOYW1lYCA9ICd0aXRsZV9uYW1lJ1wiKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBnZXRIdG1sU3RyaW5nKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odG1sLm5ld0hUTUwoW1xyXG4gICAgICAgICB0aGlzLmJvZHksXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGFzeW5jIGdldENvbnRlbnQoKTogUHJvbWlzZTxIdG1sRWxlbWVudFtdPiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBUYWJsZVBlcnNvbmFsV2Vic2l0ZSA9IGF3YWl0IHRoaXMucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIGBjb250ZW50YFwiKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuICAgICAgY29uc3QgaHRtbExpc3Q6IEh0bWxFbGVtZW50W10gPSBbXTtcclxuICAgICAgY29uc29sZS5sb2coaHRtbExpc3QpO1xyXG4gICAgICByZXNwb25zZS5mb3JFYWNoKGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgIHJldHVybiBodG1sTGlzdC5wdXNoKGdldEhUTUxUeXBlKGUpKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGdldEhUTUxUeXBlKHJlcykge1xyXG4gICAgICAgICBzd2l0Y2ggKHJlcy5ERVZfTkFNRSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY190aXRsZVwiOlxyXG4gICAgICAgICAgICAgICByZXR1cm4gbmV3IEh0bWxIMUVsZW1lbnQoXCJjX3RpdGxlXCIsIGZhbHNlLCBcImxvcmVtIElwc3VtIMO8YmVyc2NocmlmdFwiLCBmYWxzZSwgXCJoMVwiKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBodG1sTGlzdDtcclxuICAgfVxyXG59Il19
