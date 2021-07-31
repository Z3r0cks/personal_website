"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assambleHTML = void 0;
const HtmlElement_1 = require("./HtmlElement");
const createHtml_1 = require("./createHtml");
const html = new createHtml_1.createHTML("de", "./css/style.css", "Mein Title", ["./js/app.js"]);
const header = new HtmlElement_1.HtmlHeaderElement(false, false, false, [
    new HtmlElement_1.HtmlNavElement("navbar", false, false, [
        new HtmlElement_1.HtmlH3Element("navTitle", false, "Patrick Kaserer", false),
        new HtmlElement_1.HtmlDivElement(false, false, false, [
            new HtmlElement_1.HtmlButtonElement("btn btn--second", false, "über mich", false),
            new HtmlElement_1.HtmlButtonElement("btn btn--second", false, "Referenzen", false),
            new HtmlElement_1.HtmlButtonElement("btn btn--main", false, "Kontakt", false),
        ])
    ])
]);
class assambleHTML {
    getHtmlString() {
        console.log(html.newHTML([header]));
        return html.newHTML([
            header,
        ]);
    }
}
exports.assambleHTML = assambleHTML;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQW1IO0FBQ25ILDZDQUF5QztBQUV6QyxNQUFNLElBQUksR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDcEYsTUFBTSxNQUFNLEdBQUcsSUFBSSwrQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUN2RCxJQUFJLDRCQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7UUFDeEMsSUFBSSwyQkFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDO1FBQzlELElBQUksNEJBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNyQyxJQUFJLCtCQUFpQixDQUFDLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDO1lBQ25FLElBQUksK0JBQWlCLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7WUFDcEUsSUFBSSwrQkFBaUIsQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUM7U0FDakUsQ0FBQztLQUNKLENBQUM7Q0FDSixDQUFDLENBQUE7QUFFRixNQUFhLFlBQVk7SUFDdEIsYUFBYTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDakIsTUFBTTtTQUNSLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSDtBQVBELG9DQU9DIiwiZmlsZSI6IlBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sQnV0dG9uRWxlbWVudCwgSHRtbERpdkVsZW1lbnQsIEh0bWxIM0VsZW1lbnQsIEh0bWxIZWFkZXJFbGVtZW50LCBIdG1sTmF2RWxlbWVudCB9IGZyb20gXCIuL0h0bWxFbGVtZW50XCJcclxuaW1wb3J0IHsgY3JlYXRlSFRNTCB9IGZyb20gXCIuL2NyZWF0ZUh0bWxcIlxyXG5cclxuY29uc3QgaHRtbCA9IG5ldyBjcmVhdGVIVE1MKFwiZGVcIiwgXCIuL2Nzcy9zdHlsZS5jc3NcIiwgXCJNZWluIFRpdGxlXCIsIFtcIi4vanMvYXBwLmpzXCJdKTtcclxuY29uc3QgaGVhZGVyID0gbmV3IEh0bWxIZWFkZXJFbGVtZW50KGZhbHNlLCBmYWxzZSwgZmFsc2UsIFtcclxuICAgbmV3IEh0bWxOYXZFbGVtZW50KFwibmF2YmFyXCIsIGZhbHNlLCBmYWxzZSwgW1xyXG4gICAgICBuZXcgSHRtbEgzRWxlbWVudChcIm5hdlRpdGxlXCIsIGZhbHNlLCBcIlBhdHJpY2sgS2FzZXJlclwiLCBmYWxzZSksXHJcbiAgICAgIG5ldyBIdG1sRGl2RWxlbWVudChmYWxzZSwgZmFsc2UsIGZhbHNlLCBbXHJcbiAgICAgICAgIG5ldyBIdG1sQnV0dG9uRWxlbWVudChcImJ0biBidG4tLXNlY29uZFwiLCBmYWxzZSwgXCLDvGJlciBtaWNoXCIsIGZhbHNlKSxcclxuICAgICAgICAgbmV3IEh0bWxCdXR0b25FbGVtZW50KFwiYnRuIGJ0bi0tc2Vjb25kXCIsIGZhbHNlLCBcIlJlZmVyZW56ZW5cIiwgZmFsc2UpLFxyXG4gICAgICAgICBuZXcgSHRtbEJ1dHRvbkVsZW1lbnQoXCJidG4gYnRuLS1tYWluXCIsIGZhbHNlLCBcIktvbnRha3RcIiwgZmFsc2UpLFxyXG4gICAgICBdKVxyXG4gICBdKVxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIGFzc2FtYmxlSFRNTCB7XHJcbiAgIGdldEh0bWxTdHJpbmcoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGh0bWwubmV3SFRNTChbaGVhZGVyXSkpO1xyXG4gICAgICByZXR1cm4gaHRtbC5uZXdIVE1MKFtcclxuICAgICAgICAgaGVhZGVyLFxyXG4gICAgICBdKTtcclxuICAgfVxyXG59Il19
