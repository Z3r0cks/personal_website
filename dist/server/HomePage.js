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
                // const response: TablePersonalWebsite = await this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'") as TablePersonalWebsite;
                // const titleName: string = response[0].Text_Content;
                this.html = new createHtml_1.Html("de", "./css/style.css", "Mein Title", ["./js/main.js"]);
                this.header = new HtmlElement_1.HtmlHeaderElement(false, false, false, [
                    new HtmlElement_1.HtmlNavElement("navbar", false, false, [
                        new HtmlElement_1.HtmlH3Element("navTitle", false, "Patrick Kaserer", false),
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
}
exports.HomePage = HomePage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFrSjtBQUNsSiw2Q0FBbUM7QUFDbkMsaUNBQThCO0FBRzlCLE1BQWEsUUFBUyxTQUFRLFdBQUk7SUFFL0I7UUFDRyxLQUFLLEVBQUUsQ0FBQTtJQUNWLENBQUM7SUFFSyxTQUFTOztZQUNaLElBQUk7Z0JBQ0QsMElBQTBJO2dCQUMxSSxzREFBc0Q7Z0JBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksK0JBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQ3RELElBQUksNEJBQWMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTt3QkFDeEMsSUFBSSwyQkFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDO3dCQUM5RCxJQUFJLDRCQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7NEJBQ3JDLElBQUksK0JBQWlCLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUM7NEJBQ25FLElBQUksK0JBQWlCLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7NEJBQ3BFLElBQUksK0JBQWlCLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO3lCQUNqRSxDQUFDO3FCQUNKLENBQUM7aUJBQ0osQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSw2QkFBZSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDOUU7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDekUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDZCQUFlLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7b0JBQzNELElBQUksMEJBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7aUJBQzlDLENBQUMsQ0FBQTtnQkFDRiwwSUFBMEk7YUFDNUk7UUFDSixDQUFDO0tBQUE7SUFFRCxhQUFhO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSTtTQUNYLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSDtBQXBDRCw0QkFvQ0MiLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sQm9keUVsZW1lbnQsIEh0bWxCdXR0b25FbGVtZW50LCBIdG1sRGl2RWxlbWVudCwgSHRtbEgzRWxlbWVudCwgSHRtbEhlYWRlckVsZW1lbnQsIEh0bWxOYXZFbGVtZW50LCBIdG1sUEVsZW1lbnQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudFwiXHJcbmltcG9ydCB7IEh0bWwgfSBmcm9tIFwiLi9jcmVhdGVIdG1sXCJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuL1BhZ2VcIjtcclxuaW1wb3J0IHsgVGFibGVQZXJzb25hbFdlYnNpdGUgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL1RhYmxlUGVyc29uYWxXZWJzaXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBQYWdlIHtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpXHJcbiAgIH1cclxuXHJcbiAgIGFzeW5jIGJ1aWxkUGFnZSgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgLy8gY29uc3QgcmVzcG9uc2U6IFRhYmxlUGVyc29uYWxXZWJzaXRlID0gYXdhaXQgdGhpcy5xdWVyeShcIlNFTEVDVCAqIEZST00gYGNvbnRlbnRgIFdIRVJFIGBOYW1lYCA9ICd0aXRsZV9uYW1lJ1wiKSBhcyBUYWJsZVBlcnNvbmFsV2Vic2l0ZTtcclxuICAgICAgICAgLy8gY29uc3QgdGl0bGVOYW1lOiBzdHJpbmcgPSByZXNwb25zZVswXS5UZXh0X0NvbnRlbnQ7XHJcbiAgICAgICAgIHRoaXMuaHRtbCA9IG5ldyBIdG1sKFwiZGVcIiwgXCIuL2Nzcy9zdHlsZS5jc3NcIiwgXCJNZWluIFRpdGxlXCIsIFtcIi4vanMvbWFpbi5qc1wiXSk7XHJcbiAgICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEh0bWxIZWFkZXJFbGVtZW50KGZhbHNlLCBmYWxzZSwgZmFsc2UsIFtcclxuICAgICAgICAgICAgbmV3IEh0bWxOYXZFbGVtZW50KFwibmF2YmFyXCIsIGZhbHNlLCBmYWxzZSwgW1xyXG4gICAgICAgICAgICAgICBuZXcgSHRtbEgzRWxlbWVudChcIm5hdlRpdGxlXCIsIGZhbHNlLCBcIlBhdHJpY2sgS2FzZXJlclwiLCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgIG5ldyBIdG1sRGl2RWxlbWVudChmYWxzZSwgZmFsc2UsIGZhbHNlLCBbXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBIdG1sQnV0dG9uRWxlbWVudChcImJ0biBidG4tLXNlY29uZFwiLCBmYWxzZSwgXCLDvGJlciBtaWNoXCIsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgbmV3IEh0bWxCdXR0b25FbGVtZW50KFwiYnRuIGJ0bi0tc2Vjb25kXCIsIGZhbHNlLCBcIlJlZmVyZW56ZW5cIiwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICBuZXcgSHRtbEJ1dHRvbkVsZW1lbnQoXCJidG4gYnRuLS1tYWluXCIsIGZhbHNlLCBcIktvbnRha3RcIiwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICBdKVxyXG4gICAgICAgICB0aGlzLmJvZHkgPSBuZXcgSHRtbEJvZHlFbGVtZW50KFwiYm9keUNsYXNzXCIsIFwiYm9keUlEXCIsIGZhbHNlLCBbdGhpcy5oZWFkZXJdKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICB0aGlzLmh0bWwgPSBuZXcgSHRtbChcImRlXCIsIFwiLi9jc3Mvc3R5bGUuY3NzXCIsIFwiRVJST1JcIiwgW1wiLi9qcy9tYWluLmpzXCJdKTtcclxuICAgICAgICAgdGhpcy5ib2R5ID0gbmV3IEh0bWxCb2R5RWxlbWVudChcImJvZHlDbGFzc1wiLCBcImJvZHlJRFwiLCBmYWxzZSwgW1xyXG4gICAgICAgICAgICBuZXcgSHRtbFBFbGVtZW50KGZhbHNlLCBmYWxzZSwgZXJyb3IsIGZhbHNlKVxyXG4gICAgICAgICBdKVxyXG4gICAgICAgICAvLyBjb25zdCByZXNwb25zZTogVGFibGVQZXJzb25hbFdlYnNpdGUgPSBhd2FpdCB0aGlzLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBgY29udGVudGAgV0hFUkUgYE5hbWVgID0gJ3RpdGxlX25hbWUnXCIpIGFzIFRhYmxlUGVyc29uYWxXZWJzaXRlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGdldEh0bWxTdHJpbmcoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0bWwubmV3SFRNTChbXHJcbiAgICAgICAgIHRoaXMuYm9keSxcclxuICAgICAgXSk7XHJcbiAgIH1cclxufSJdfQ==
