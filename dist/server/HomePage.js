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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUErSztBQUMvSyw2Q0FBbUM7QUFDbkMsaUNBQThCO0FBRTlCLE1BQWEsUUFBUyxTQUFRLFdBQUk7SUFFL0I7UUFDRyxLQUFLLEVBQUUsQ0FBQTtJQUNWLENBQUM7SUFFSyxTQUFTOztZQUNaLElBQUksT0FBTyxHQUFrQixNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyRCxJQUFJO2dCQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUU5RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksK0JBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFDL0MsSUFBSSw0QkFBYyxDQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRTt3QkFDekMsSUFBSSwwQkFBWSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQzt3QkFDN0QsSUFBSSw0QkFBYyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7NEJBQzlCLElBQUksK0JBQWlCLENBQUMseUJBQXlCLEVBQUUsV0FBVyxDQUFDOzRCQUM3RCxJQUFJLCtCQUFpQixDQUFDLHlCQUF5QixFQUFFLFlBQVksQ0FBQzs0QkFDOUQsSUFBSSwrQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLENBQUM7eUJBQzNELENBQUM7cUJBQ0osQ0FBQztpQkFDSixDQUFDLENBQUE7Z0JBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDZCQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSw2QkFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTthQUMzRDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksNkJBQWUsQ0FBQztvQkFDN0IsSUFBSSwwQkFBWSxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQztpQkFDcEQsQ0FBQyxDQUFBO2FBQ0o7UUFDSixDQUFDO0tBQUE7Q0FDSDtBQTlCRCw0QkE4QkMiLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sRWxlbWVudCwgSHRtbE1haW5FbGVtZW50LCBIdG1sQm9keUVsZW1lbnQsIEh0bWxCdXR0b25FbGVtZW50LCBIdG1sRGl2RWxlbWVudCwgSHRtbEhFbGVtZW50LCBIdG1sSGVhZGVyRWxlbWVudCwgSHRtbE5hdkVsZW1lbnQsIEh0bWxQRWxlbWVudCB9IGZyb20gXCIuL0h0bWxFbGVtZW50XCJcclxuaW1wb3J0IHsgSHRtbCB9IGZyb20gXCIuL2NyZWF0ZUh0bWxcIlxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUGFnZSB7XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKVxyXG4gICB9XHJcblxyXG4gICBhc3luYyBidWlsZFBhZ2UoKSB7XHJcbiAgICAgIGxldCBjb250ZW50OiBIdG1sRWxlbWVudFtdID0gYXdhaXQgdGhpcy5nZXRDb250ZW50KCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIHRoaXMuaHRtbCA9IG5ldyBIdG1sKFwiZGVcIiwgXCIuL2Nzcy9zdHlsZS5jc3NcIiwgXCJNZWluIFRpdGxlXCIsIFtcIi4vanMvbWFpbi5qc1wiXSk7XHJcblxyXG4gICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdG1sSGVhZGVyRWxlbWVudChmYWxzZSwgZmFsc2UsIFtcclxuICAgICAgICAgICAgbmV3IEh0bWxOYXZFbGVtZW50KFwiY2xhc3M9J25hdmJhcidcIiwgZmFsc2UsIFtcclxuICAgICAgICAgICAgICAgbmV3IEh0bWxIRWxlbWVudChcImNsYXNzPSduYXZUaXRsZSdcIiwgXCJQYXRyaWNrIEthc2VyZXJcIiwgXCJoMVwiKSxcclxuICAgICAgICAgICAgICAgbmV3IEh0bWxEaXZFbGVtZW50KGZhbHNlLCBmYWxzZSwgW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgSHRtbEJ1dHRvbkVsZW1lbnQoXCJjbGFzcz0nYnRuIGJ0bi0tc2Vjb25kJ1wiLCBcIsO8YmVyIG1pY2hcIiksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBIdG1sQnV0dG9uRWxlbWVudChcImNsYXNzPSdidG4gYnRuLS1zZWNvbmQnXCIsIFwiUmVmZXJlbnplblwiKSxcclxuICAgICAgICAgICAgICAgICAgbmV3IEh0bWxCdXR0b25FbGVtZW50KFwiY2xhc3M9J2J0biBidG4tLW1haW4nXCIsIFwiS29udGFrdFwiKSxcclxuICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgXSlcclxuICAgICAgICAgdGhpcy5tYWluID0gbmV3IEh0bWxNYWluRWxlbWVudChjb250ZW50KVxyXG4gICAgICAgICB0aGlzLmJvZHkgPSBuZXcgSHRtbEJvZHlFbGVtZW50KFt0aGlzLmhlYWRlciwgdGhpcy5tYWluXSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgdGhpcy5odG1sID0gbmV3IEh0bWwoXCJkZVwiLCBcIi4vY3NzL3N0eWxlLmNzc1wiLCBcIkVSUk9SXCIsIFtcIi4vanMvbWFpbi5qc1wiXSk7XHJcbiAgICAgICAgIHRoaXMuYm9keSA9IG5ldyBIdG1sQm9keUVsZW1lbnQoW1xyXG4gICAgICAgICAgICBuZXcgSHRtbFBFbGVtZW50KFwiY2xhc3M9J21haW4nIGlkPSdtYWluJ1wiLCBcIlRlc3RcIilcclxuICAgICAgICAgXSlcclxuICAgICAgfVxyXG4gICB9XHJcbn0iXX0=
