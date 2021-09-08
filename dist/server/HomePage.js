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
            let contentElements = yield this.getContent();
            const list = new HtmlElement_1.HtmlDivElement("sdf", false, false, [new HtmlElement_1.HtmlHElement(false, false, false, false, "h1")]);
            try {
                // const response: TablePersonalWebsite = await this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'") as TablePersonalWebsite;
                // const titleName: string = response[0].Text_Content;
                this.html = new createHtml_1.Html("de", "./css/style.css", "Mein Title", ["./js/main.js"]);
                this.header = new HtmlElement_1.HtmlHeaderElement(false, false, false, [
                    new HtmlElement_1.HtmlNavElement("navbar", false, false, [
                        new HtmlElement_1.HtmlHElement("navTitle", false, "Patrick Kaserer", false, "h1"),
                        new HtmlElement_1.HtmlDivElement(false, false, false, [
                            new HtmlElement_1.HtmlButtonElement("btn btn--second", false, "über mich", false),
                            new HtmlElement_1.HtmlButtonElement("btn btn--second", false, "Referenzen", false),
                            new HtmlElement_1.HtmlButtonElement("btn btn--main", false, "Kontakt", false),
                        ])
                    ])
                ]);
                this.main = new HtmlElement_1.HtmlMainElement(false, false, false, contentElements);
                this.body = new HtmlElement_1.HtmlBodyElement(false, false, false, [this.header, this.main]);
            }
            catch (error) {
                this.html = new createHtml_1.Html("de", "./css/style.css", "ERROR", ["./js/main.js"]);
                this.body = new HtmlElement_1.HtmlBodyElement("bodyClass", "bodyID", false, [
                    new HtmlElement_1.HtmlPElement("main", "main", "Test", false)
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
            response.forEach(function (e) {
                return __awaiter(this, void 0, void 0, function* () {
                    return htmlList.push(getHTMLType(e));
                });
            });
            function getHTMLType(res) {
                const thisSettings = JSON.parse(res.SETTINGS);
                switch (res.DEV_NAME) {
                    case "c_title":
                        return new HtmlElement_1.HtmlHElement("c_title", false, "lorem Ipsum überschrift", false, thisSettings.type);
                }
            }
            return htmlList;
        });
    }
}
exports.HomePage = HomePage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2FBQUEsQ0FBQyxDQUFBO1lBQ0YsU0FBUyxXQUFXLENBQUMsR0FBRztnQkFDckIsTUFBTSxZQUFZLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hELFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRTtvQkFDbkIsS0FBSyxTQUFTO3dCQUNYLE9BQU8sSUFBSSwwQkFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEc7WUFDSixDQUFDO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDbkIsQ0FBQztLQUFBO0NBQ0g7QUExREQsNEJBMERDIiwiZmlsZSI6IkhvbWVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbEVsZW1lbnQsIEh0bWxNYWluRWxlbWVudCwgSHRtbEJvZHlFbGVtZW50LCBIdG1sQnV0dG9uRWxlbWVudCwgSHRtbERpdkVsZW1lbnQsIEh0bWxIRWxlbWVudCwgSHRtbEhlYWRlckVsZW1lbnQsIEh0bWxOYXZFbGVtZW50LCBIdG1sUEVsZW1lbnQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudFwiXHJcbmltcG9ydCB7IEh0bWwgfSBmcm9tIFwiLi9jcmVhdGVIdG1sXCJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuL1BhZ2VcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL2ludGVyZmFjZXMvU2V0dGluZ3NcIjtcclxuaW1wb3J0IFRhYmxlUGVyc29uYWxXZWJzaXRlIGZyb20gXCIuL2ludGVyZmFjZXMvVGFibGVQZXJzb25hbFdlYnNpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFBhZ2Uge1xyXG5cclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKClcclxuICAgfVxyXG5cclxuICAgYXN5bmMgYnVpbGRQYWdlKCkge1xyXG4gICAgICBsZXQgY29udGVudEVsZW1lbnRzOiBIdG1sRWxlbWVudFtdID0gYXdhaXQgdGhpcy5nZXRDb250ZW50KCk7XHJcbiAgICAgIGNvbnN0IGxpc3Q6IEh0bWxEaXZFbGVtZW50ID0gbmV3IEh0bWxEaXZFbGVtZW50KFwic2RmXCIsIGZhbHNlLCBmYWxzZSwgW25ldyBIdG1sSEVsZW1lbnQoZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIFwiaDFcIildKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgICAvLyBjb25zdCByZXNwb25zZTogVGFibGVQZXJzb25hbFdlYnNpdGUgPSBhd2FpdCB0aGlzLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBgY29udGVudGAgV0hFUkUgYE5hbWVgID0gJ3RpdGxlX25hbWUnXCIpIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4gICAgICAgICAvLyBjb25zdCB0aXRsZU5hbWU6IHN0cmluZyA9IHJlc3BvbnNlWzBdLlRleHRfQ29udGVudDtcclxuICAgICAgICAgdGhpcy5odG1sID0gbmV3IEh0bWwoXCJkZVwiLCBcIi4vY3NzL3N0eWxlLmNzc1wiLCBcIk1laW4gVGl0bGVcIiwgW1wiLi9qcy9tYWluLmpzXCJdKTtcclxuXHJcbiAgICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEh0bWxIZWFkZXJFbGVtZW50KGZhbHNlLCBmYWxzZSwgZmFsc2UsIFtcclxuICAgICAgICAgICAgbmV3IEh0bWxOYXZFbGVtZW50KFwibmF2YmFyXCIsIGZhbHNlLCBmYWxzZSwgW1xyXG4gICAgICAgICAgICAgICBuZXcgSHRtbEhFbGVtZW50KFwibmF2VGl0bGVcIiwgZmFsc2UsIFwiUGF0cmljayBLYXNlcmVyXCIsIGZhbHNlLCBcImgxXCIpLFxyXG4gICAgICAgICAgICAgICBuZXcgSHRtbERpdkVsZW1lbnQoZmFsc2UsIGZhbHNlLCBmYWxzZSwgW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgSHRtbEJ1dHRvbkVsZW1lbnQoXCJidG4gYnRuLS1zZWNvbmRcIiwgZmFsc2UsIFwiw7xiZXIgbWljaFwiLCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBIdG1sQnV0dG9uRWxlbWVudChcImJ0biBidG4tLXNlY29uZFwiLCBmYWxzZSwgXCJSZWZlcmVuemVuXCIsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgbmV3IEh0bWxCdXR0b25FbGVtZW50KFwiYnRuIGJ0bi0tbWFpblwiLCBmYWxzZSwgXCJLb250YWt0XCIsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgIHRoaXMubWFpbiA9IG5ldyBIdG1sTWFpbkVsZW1lbnQoZmFsc2UsIGZhbHNlLCBmYWxzZSwgY29udGVudEVsZW1lbnRzKVxyXG5cclxuICAgICAgICAgdGhpcy5ib2R5ID0gbmV3IEh0bWxCb2R5RWxlbWVudChmYWxzZSwgZmFsc2UsIGZhbHNlLCBbdGhpcy5oZWFkZXIsIHRoaXMubWFpbl0pXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgIHRoaXMuaHRtbCA9IG5ldyBIdG1sKFwiZGVcIiwgXCIuL2Nzcy9zdHlsZS5jc3NcIiwgXCJFUlJPUlwiLCBbXCIuL2pzL21haW4uanNcIl0pO1xyXG4gICAgICAgICB0aGlzLmJvZHkgPSBuZXcgSHRtbEJvZHlFbGVtZW50KFwiYm9keUNsYXNzXCIsIFwiYm9keUlEXCIsIGZhbHNlLCBbXHJcbiAgICAgICAgICAgIG5ldyBIdG1sUEVsZW1lbnQoXCJtYWluXCIsIFwibWFpblwiLCBcIlRlc3RcIiwgZmFsc2UpXHJcbiAgICAgICAgIF0pXHJcbiAgICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlOiBUYWJsZVBlcnNvbmFsV2Vic2l0ZSA9IGF3YWl0IHRoaXMucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIGBjb250ZW50YCBXSEVSRSBgTmFtZWAgPSAndGl0bGVfbmFtZSdcIikgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZ2V0SHRtbFN0cmluZygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHRtbC5uZXdIVE1MKFtcclxuICAgICAgICAgdGhpcy5ib2R5LFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBhc3luYyBnZXRDb250ZW50KCk6IFByb21pc2U8SHRtbEVsZW1lbnRbXT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZTogVGFibGVQZXJzb25hbFdlYnNpdGUgPSBhd2FpdCB0aGlzLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBgY29udGVudGBcIikgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbiAgICAgIGNvbnN0IGh0bWxMaXN0OiBIdG1sRWxlbWVudFtdID0gW107XHJcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgcmV0dXJuIGh0bWxMaXN0LnB1c2goZ2V0SFRNTFR5cGUoZSkpO1xyXG4gICAgICB9KVxyXG4gICAgICBmdW5jdGlvbiBnZXRIVE1MVHlwZShyZXMpIHtcclxuICAgICAgICAgY29uc3QgdGhpc1NldHRpbmdzOiBTZXR0aW5ncyA9IEpTT04ucGFyc2UocmVzLlNFVFRJTkdTKTtcclxuICAgICAgICAgc3dpdGNoIChyZXMuREVWX05BTUUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNfdGl0bGVcIjpcclxuICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBIdG1sSEVsZW1lbnQoXCJjX3RpdGxlXCIsIGZhbHNlLCBcImxvcmVtIElwc3VtIMO8YmVyc2NocmlmdFwiLCBmYWxzZSwgdGhpc1NldHRpbmdzLnR5cGUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGh0bWxMaXN0O1xyXG4gICB9XHJcbn0iXX0=
