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
            try {
                const response = yield this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'");
                const titleName = response[0].Text_Content;
                this.html = new createHtml_1.Html("de", "./css/style.css", "Mein Title", ["./js/main.js"]);
                this.header = new HtmlElement_1.HtmlHeaderElement(false, false, false, [
                    new HtmlElement_1.HtmlNavElement("navbar", false, false, [
                        new HtmlElement_1.HtmlH3Element("navTitle", false, titleName, false),
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
                const response = yield this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'");
                console.log(response[0]);
            }
        });
    }
    getHtmlString() {
        return this.html.newHTML([
            this.body,
        ]);
    }
}
exports.HomePage = HomePage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFrSjtBQUNsSiw2Q0FBbUM7QUFDbkMsaUNBQThCO0FBRzlCLE1BQWEsUUFBUyxTQUFRLFdBQUk7SUFFL0I7UUFDRyxLQUFLLEVBQUUsQ0FBQTtJQUNWLENBQUM7SUFFSyxTQUFTOztZQUNaLElBQUk7Z0JBQ0QsTUFBTSxRQUFRLEdBQXlCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBeUIsQ0FBQztnQkFDdkksTUFBTSxTQUFTLEdBQVcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwrQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFDdEQsSUFBSSw0QkFBYyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO3dCQUN4QyxJQUFJLDJCQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO3dCQUN0RCxJQUFJLDRCQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7NEJBQ3JDLElBQUksK0JBQWlCLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUM7NEJBQ25FLElBQUksK0JBQWlCLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7NEJBQ3BFLElBQUksK0JBQWlCLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO3lCQUNqRSxDQUFDO3FCQUNKLENBQUM7aUJBQ0osQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSw2QkFBZSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDOUU7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDekUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDZCQUFlLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7b0JBQzNELElBQUksMEJBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7aUJBQzlDLENBQUMsQ0FBQTtnQkFDRixNQUFNLFFBQVEsR0FBeUIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUF5QixDQUFDO2dCQUN2SSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1FBQ0osQ0FBQztLQUFBO0lBRUQsYUFBYTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUk7U0FDWCxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0g7QUFyQ0QsNEJBcUNDIiwiZmlsZSI6IkhvbWVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbEJvZHlFbGVtZW50LCBIdG1sQnV0dG9uRWxlbWVudCwgSHRtbERpdkVsZW1lbnQsIEh0bWxIM0VsZW1lbnQsIEh0bWxIZWFkZXJFbGVtZW50LCBIdG1sTmF2RWxlbWVudCwgSHRtbFBFbGVtZW50IH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRcIlxyXG5pbXBvcnQgeyBIdG1sIH0gZnJvbSBcIi4vY3JlYXRlSHRtbFwiXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XHJcbmltcG9ydCB7IFRhYmxlUGVyc29uYWxXZWJzaXRlIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9UYWJsZVBlcnNvbmFsV2Vic2l0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUGFnZSB7XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKVxyXG4gICB9XHJcblxyXG4gICBhc3luYyBidWlsZFBhZ2UoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBUYWJsZVBlcnNvbmFsV2Vic2l0ZSA9IGF3YWl0IHRoaXMucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIGBjb250ZW50YCBXSEVSRSBgTmFtZWAgPSAndGl0bGVfbmFtZSdcIikgYXMgVGFibGVQZXJzb25hbFdlYnNpdGU7XHJcbiAgICAgICAgIGNvbnN0IHRpdGxlTmFtZTogc3RyaW5nID0gcmVzcG9uc2VbMF0uVGV4dF9Db250ZW50O1xyXG4gICAgICAgICB0aGlzLmh0bWwgPSBuZXcgSHRtbChcImRlXCIsIFwiLi9jc3Mvc3R5bGUuY3NzXCIsIFwiTWVpbiBUaXRsZVwiLCBbXCIuL2pzL21haW4uanNcIl0pO1xyXG4gICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdG1sSGVhZGVyRWxlbWVudChmYWxzZSwgZmFsc2UsIGZhbHNlLCBbXHJcbiAgICAgICAgICAgIG5ldyBIdG1sTmF2RWxlbWVudChcIm5hdmJhclwiLCBmYWxzZSwgZmFsc2UsIFtcclxuICAgICAgICAgICAgICAgbmV3IEh0bWxIM0VsZW1lbnQoXCJuYXZUaXRsZVwiLCBmYWxzZSwgdGl0bGVOYW1lLCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgIG5ldyBIdG1sRGl2RWxlbWVudChmYWxzZSwgZmFsc2UsIGZhbHNlLCBbXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBIdG1sQnV0dG9uRWxlbWVudChcImJ0biBidG4tLXNlY29uZFwiLCBmYWxzZSwgXCLDvGJlciBtaWNoXCIsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgbmV3IEh0bWxCdXR0b25FbGVtZW50KFwiYnRuIGJ0bi0tc2Vjb25kXCIsIGZhbHNlLCBcIlJlZmVyZW56ZW5cIiwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgSHRtbEJ1dHRvbkVsZW1lbnQoXCJidG4gYnRuLS1tYWluXCIsIGZhbHNlLCBcIktvbnRha3RcIiwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICBdKVxyXG4gICAgICAgICB0aGlzLmJvZHkgPSBuZXcgSHRtbEJvZHlFbGVtZW50KFwiYm9keUNsYXNzXCIsIFwiYm9keUlEXCIsIGZhbHNlLCBbdGhpcy5oZWFkZXJdKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICB0aGlzLmh0bWwgPSBuZXcgSHRtbChcImRlXCIsIFwiLi9jc3Mvc3R5bGUuY3NzXCIsIFwiRVJST1JcIiwgW1wiLi9qcy9tYWluLmpzXCJdKTtcclxuICAgICAgICAgdGhpcy5ib2R5ID0gbmV3IEh0bWxCb2R5RWxlbWVudChcImJvZHlDbGFzc1wiLCBcImJvZHlJRFwiLCBmYWxzZSwgW1xyXG4gICAgICAgICAgICBuZXcgSHRtbFBFbGVtZW50KGZhbHNlLCBmYWxzZSwgZXJyb3IsIGZhbHNlKVxyXG4gICAgICAgICBdKVxyXG4gICAgICAgICBjb25zdCByZXNwb25zZTogVGFibGVQZXJzb25hbFdlYnNpdGUgPSBhd2FpdCB0aGlzLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBgY29udGVudGAgV0hFUkUgYE5hbWVgID0gJ3RpdGxlX25hbWUnXCIpIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZVswXSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZ2V0SHRtbFN0cmluZygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHRtbC5uZXdIVE1MKFtcclxuICAgICAgICAgdGhpcy5ib2R5LFxyXG4gICAgICBdKTtcclxuICAgfVxyXG59Il19
