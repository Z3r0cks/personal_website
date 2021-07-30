"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assambleHTML = void 0;
// import { HtmlDivElement } from "./HtmlElement"
const HtmlElement_1 = require("./HtmlElement");
const createHtml_1 = require("./createHtml");
const html = new createHtml_1.createHTML("de", "./css/style.css", "Mein Title", ["./js/app.js"]);
const header = new HtmlElement_1.HtmlElement("header", false, false, false, [
    new HtmlElement_1.HtmlElement("nav", "navbar", false, false, [
        new HtmlElement_1.HtmlElement("h3", "navTitle", false, "Patrick Kaserer", false),
        new HtmlElement_1.HtmlElement("div", false, false, false, [
            new HtmlElement_1.HtmlElement("button", "btn btn--second", false, "über mich", false),
            new HtmlElement_1.HtmlElement("button", "btn btn--second", false, "Referenzen", false),
            new HtmlElement_1.HtmlElement("button", "btn btn--main", false, "Kontakt", false)
        ])
    ])
]);
class assambleHTML {
    getHtmlString() {
        return html.newHTML([
            header,
            new HtmlElement_1.HtmlElement("div", "devBtn", false, false, false)
        ]);
    }
}
exports.assambleHTML = assambleHTML;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQWlEO0FBQ2pELCtDQUEyQztBQUMzQyw2Q0FBeUM7QUFHekMsTUFBTSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLE1BQU0sTUFBTSxHQUFHLElBQUkseUJBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0QsSUFBSSx5QkFBVyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtRQUM1QyxJQUFJLHlCQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDO1FBQ2xFLElBQUkseUJBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDekMsSUFBSSx5QkFBVyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQztZQUN2RSxJQUFJLHlCQUFXLENBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDO1lBQ3hFLElBQUkseUJBQVcsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO1NBQ3JFLENBQUM7S0FDSixDQUFDO0NBQ0osQ0FBQyxDQUFDO0FBR0gsTUFBYSxZQUFZO0lBQ3RCLGFBQWE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDakIsTUFBTTtZQUNOLElBQUkseUJBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1NBQ3ZELENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSDtBQVBELG9DQU9DIiwiZmlsZSI6IlBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBIdG1sRGl2RWxlbWVudCB9IGZyb20gXCIuL0h0bWxFbGVtZW50XCJcclxuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudFwiXHJcbmltcG9ydCB7IGNyZWF0ZUhUTUwgfSBmcm9tIFwiLi9jcmVhdGVIdG1sXCJcclxuXHJcblxyXG5jb25zdCBodG1sID0gbmV3IGNyZWF0ZUhUTUwoXCJkZVwiLCBcIi4vY3NzL3N0eWxlLmNzc1wiLCBcIk1laW4gVGl0bGVcIiwgW1wiLi9qcy9hcHAuanNcIl0pO1xyXG5jb25zdCBoZWFkZXIgPSBuZXcgSHRtbEVsZW1lbnQoXCJoZWFkZXJcIiwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgW1xyXG4gICBuZXcgSHRtbEVsZW1lbnQoXCJuYXZcIiwgXCJuYXZiYXJcIiwgZmFsc2UsIGZhbHNlLCBbXHJcbiAgICAgIG5ldyBIdG1sRWxlbWVudChcImgzXCIsIFwibmF2VGl0bGVcIiwgZmFsc2UsIFwiUGF0cmljayBLYXNlcmVyXCIsIGZhbHNlKSxcclxuICAgICAgbmV3IEh0bWxFbGVtZW50KFwiZGl2XCIsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIFtcclxuICAgICAgICAgbmV3IEh0bWxFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnRuIGJ0bi0tc2Vjb25kXCIsIGZhbHNlLCBcIsO8YmVyIG1pY2hcIiwgZmFsc2UpLFxyXG4gICAgICAgICBuZXcgSHRtbEVsZW1lbnQoXCJidXR0b25cIiwgXCJidG4gYnRuLS1zZWNvbmRcIiwgZmFsc2UsIFwiUmVmZXJlbnplblwiLCBmYWxzZSksXHJcbiAgICAgICAgIG5ldyBIdG1sRWxlbWVudChcImJ1dHRvblwiLCBcImJ0biBidG4tLW1haW5cIiwgZmFsc2UsIFwiS29udGFrdFwiLCBmYWxzZSlcclxuICAgICAgXSlcclxuICAgXSlcclxuXSk7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIGFzc2FtYmxlSFRNTCB7XHJcbiAgIGdldEh0bWxTdHJpbmcoKSB7XHJcbiAgICAgIHJldHVybiBodG1sLm5ld0hUTUwoW1xyXG4gICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgIG5ldyBIdG1sRWxlbWVudChcImRpdlwiLCBcImRldkJ0blwiLCBmYWxzZSwgZmFsc2UsIGZhbHNlKVxyXG4gICAgICBdKTtcclxuICAgfVxyXG59Il19
