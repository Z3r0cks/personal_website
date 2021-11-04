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
                this.main = new HtmlElement_1.HtmlMainElement(content);
                this.body = new HtmlElement_1.HtmlBodyElement([this.header, this.main]);
            }
            catch (error) {
                this.html = new createHtml_1.Html("de", "./css/style.css", "ERROR", ["./js/main.js"]);
                this.body = new HtmlElement_1.HtmlBodyElement([
                    new HtmlElement_1.HtmlPElement("main", "main", "Test", false)
                ]);
            }
        });
    }
}
exports.HomePage = HomePage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUErSztBQUMvSyw2Q0FBbUM7QUFDbkMsaUNBQThCO0FBRTlCLE1BQWEsUUFBUyxTQUFRLFdBQUk7SUFFL0I7UUFDRyxLQUFLLEVBQUUsQ0FBQTtJQUNWLENBQUM7SUFFSyxTQUFTOztZQUNaLElBQUksT0FBTyxHQUFrQixNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyRCxJQUFJO2dCQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUU5RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksK0JBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQ3RELElBQUksNEJBQWMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTt3QkFDeEMsSUFBSSwwQkFBWSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQzt3QkFDbkUsSUFBSSw0QkFBYyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFOzRCQUNyQyxJQUFJLCtCQUFpQixDQUFDLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDOzRCQUNuRSxJQUFJLCtCQUFpQixDQUFDLGlCQUFpQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDOzRCQUNwRSxJQUFJLCtCQUFpQixDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQzt5QkFDakUsQ0FBQztxQkFDSixDQUFDO2lCQUNKLENBQUMsQ0FBQTtnQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksNkJBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDZCQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2FBQzNEO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSw2QkFBZSxDQUFDO29CQUM3QixJQUFJLDBCQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO2lCQUNqRCxDQUFDLENBQUE7YUFDSjtRQUNKLENBQUM7S0FBQTtDQUNIO0FBOUJELDRCQThCQyIsImZpbGUiOiJIb21lUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0bWxFbGVtZW50LCBIdG1sTWFpbkVsZW1lbnQsIEh0bWxCb2R5RWxlbWVudCwgSHRtbEJ1dHRvbkVsZW1lbnQsIEh0bWxEaXZFbGVtZW50LCBIdG1sSEVsZW1lbnQsIEh0bWxIZWFkZXJFbGVtZW50LCBIdG1sTmF2RWxlbWVudCwgSHRtbFBFbGVtZW50IH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRcIlxyXG5pbXBvcnQgeyBIdG1sIH0gZnJvbSBcIi4vY3JlYXRlSHRtbFwiXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBQYWdlIHtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpXHJcbiAgIH1cclxuXHJcbiAgIGFzeW5jIGJ1aWxkUGFnZSgpIHtcclxuICAgICAgbGV0IGNvbnRlbnQ6IEh0bWxFbGVtZW50W10gPSBhd2FpdCB0aGlzLmdldENvbnRlbnQoKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgdGhpcy5odG1sID0gbmV3IEh0bWwoXCJkZVwiLCBcIi4vY3NzL3N0eWxlLmNzc1wiLCBcIk1laW4gVGl0bGVcIiwgW1wiLi9qcy9tYWluLmpzXCJdKTtcclxuXHJcbiAgICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEh0bWxIZWFkZXJFbGVtZW50KGZhbHNlLCBmYWxzZSwgZmFsc2UsIFtcclxuICAgICAgICAgICAgbmV3IEh0bWxOYXZFbGVtZW50KFwibmF2YmFyXCIsIGZhbHNlLCBmYWxzZSwgW1xyXG4gICAgICAgICAgICAgICBuZXcgSHRtbEhFbGVtZW50KFwibmF2VGl0bGVcIiwgZmFsc2UsIFwiUGF0cmljayBLYXNlcmVyXCIsIGZhbHNlLCBcImgxXCIpLFxyXG4gICAgICAgICAgICAgICBuZXcgSHRtbERpdkVsZW1lbnQoZmFsc2UsIGZhbHNlLCBmYWxzZSwgW1xyXG4gICAgICAgICAgICAgICAgICBuZXcgSHRtbEJ1dHRvbkVsZW1lbnQoXCJidG4gYnRuLS1zZWNvbmRcIiwgZmFsc2UsIFwiw7xiZXIgbWljaFwiLCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBIdG1sQnV0dG9uRWxlbWVudChcImJ0biBidG4tLXNlY29uZFwiLCBmYWxzZSwgXCJSZWZlcmVuemVuXCIsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgbmV3IEh0bWxCdXR0b25FbGVtZW50KFwiYnRuIGJ0bi0tbWFpblwiLCBmYWxzZSwgXCJLb250YWt0XCIsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgXSlcclxuICAgICAgICAgdGhpcy5tYWluID0gbmV3IEh0bWxNYWluRWxlbWVudChjb250ZW50KVxyXG4gICAgICAgICB0aGlzLmJvZHkgPSBuZXcgSHRtbEJvZHlFbGVtZW50KFt0aGlzLmhlYWRlciwgdGhpcy5tYWluXSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgdGhpcy5odG1sID0gbmV3IEh0bWwoXCJkZVwiLCBcIi4vY3NzL3N0eWxlLmNzc1wiLCBcIkVSUk9SXCIsIFtcIi4vanMvbWFpbi5qc1wiXSk7XHJcbiAgICAgICAgIHRoaXMuYm9keSA9IG5ldyBIdG1sQm9keUVsZW1lbnQoW1xyXG4gICAgICAgICAgICBuZXcgSHRtbFBFbGVtZW50KFwibWFpblwiLCBcIm1haW5cIiwgXCJUZXN0XCIsIGZhbHNlKVxyXG4gICAgICAgICBdKVxyXG4gICAgICB9XHJcbiAgIH1cclxufSJdfQ==
