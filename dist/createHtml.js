"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html = void 0;
class Html {
    constructor(language, styleHref, title, scriptsSRCs) {
        this._language = language;
        this._styleHref = styleHref;
        this._title = title;
        this._scriptsSRCs = scriptsSRCs;
    }
    toStringChildElements(childElements) {
        let string = "";
        childElements.forEach(el => {
            string = string + el.createNewElement();
        });
        return string;
    }
    newHTML(childlements) {
        const allScripts = this.scriptToString(this._scriptsSRCs);
        const childString = this.toStringChildElements(childlements);
        let newHTML = `<!DOCTYPE html>
      <html lang="${this._language}">
      <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="${this._styleHref}">
         <title>${this._title}</title>
         ${allScripts}
      </head>
      <body>
      ${childString}
      </body>
      </html>`;
        return newHTML;
    }
    scriptToString(scriptsSRCs) {
        let outString = "";
        scriptsSRCs.forEach(el => {
            outString = outString + `<script src="${el}" defer ></script>`;
        });
        return outString;
    }
}
exports.Html = Html;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUh0bWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxJQUFJO0lBTWQsWUFBWSxRQUFnQixFQUFFLFNBQWlCLEVBQUUsS0FBYSxFQUFFLFdBQXFCO1FBQ2xGLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxhQUE0QjtRQUMvQyxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFDeEIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN4QixNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUE7SUFDaEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxZQUEyQjtRQUNoQyxNQUFNLFVBQVUsR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRSxNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckUsSUFBSSxPQUFPLEdBQVc7b0JBQ1IsSUFBSSxDQUFDLFNBQVM7Ozs7O3dDQUtNLElBQUksQ0FBQyxVQUFVO2tCQUNyQyxJQUFJLENBQUMsTUFBTTtXQUNsQixVQUFVOzs7UUFHYixXQUFXOztjQUVMLENBQUE7UUFDUixPQUFPLE9BQU8sQ0FBQztJQUNsQixDQUFDO0lBRUQsY0FBYyxDQUFDLFdBQXFCO1FBQ2pDLElBQUksU0FBUyxHQUFXLEVBQUUsQ0FBQTtRQUMxQixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3RCLFNBQVMsR0FBRyxTQUFTLEdBQUcsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUE7UUFDakUsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLFNBQVMsQ0FBQztJQUNwQixDQUFDO0NBQ0g7QUFoREQsb0JBZ0RDIiwiZmlsZSI6ImNyZWF0ZUh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gXCIuL0h0bWxFbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbCB7XHJcbiAgIHByb3RlY3RlZCBfbGFuZ3VhZ2U6IHN0cmluZztcclxuICAgcHJvdGVjdGVkIF9zdHlsZUhyZWY6IHN0cmluZztcclxuICAgcHJvdGVjdGVkIF90aXRsZTogc3RyaW5nO1xyXG4gICBwcm90ZWN0ZWQgX3NjcmlwdHNTUkNzOiBzdHJpbmdbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGxhbmd1YWdlOiBzdHJpbmcsIHN0eWxlSHJlZjogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBzY3JpcHRzU1JDczogc3RyaW5nW10pIHtcclxuICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgICAgdGhpcy5fc3R5bGVIcmVmID0gc3R5bGVIcmVmO1xyXG4gICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLl9zY3JpcHRzU1JDcyA9IHNjcmlwdHNTUkNzO1xyXG4gICB9XHJcblxyXG4gICB0b1N0cmluZ0NoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50czogSHRtbEVsZW1lbnRbXSkge1xyXG4gICAgICBsZXQgc3RyaW5nOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyBlbC5jcmVhdGVOZXdFbGVtZW50KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gc3RyaW5nXHJcbiAgIH1cclxuXHJcbiAgIG5ld0hUTUwoY2hpbGRsZW1lbnRzOiBIdG1sRWxlbWVudFtdKSB7XHJcbiAgICAgIGNvbnN0IGFsbFNjcmlwdHM6IHN0cmluZyA9IHRoaXMuc2NyaXB0VG9TdHJpbmcodGhpcy5fc2NyaXB0c1NSQ3MpO1xyXG4gICAgICBjb25zdCBjaGlsZFN0cmluZzogc3RyaW5nID0gdGhpcy50b1N0cmluZ0NoaWxkRWxlbWVudHMoY2hpbGRsZW1lbnRzKTtcclxuICAgICAgbGV0IG5ld0hUTUw6IHN0cmluZyA9IGA8IURPQ1RZUEUgaHRtbD5cclxuICAgICAgPGh0bWwgbGFuZz1cIiR7dGhpcy5fbGFuZ3VhZ2V9XCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cclxuICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCI+XHJcbiAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJHt0aGlzLl9zdHlsZUhyZWZ9XCI+XHJcbiAgICAgICAgIDx0aXRsZT4ke3RoaXMuX3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICR7YWxsU2NyaXB0c31cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgJHtjaGlsZFN0cmluZ31cclxuICAgICAgPC9ib2R5PlxyXG4gICAgICA8L2h0bWw+YFxyXG4gICAgICByZXR1cm4gbmV3SFRNTDtcclxuICAgfVxyXG5cclxuICAgc2NyaXB0VG9TdHJpbmcoc2NyaXB0c1NSQ3M6IHN0cmluZ1tdKSB7XHJcbiAgICAgIGxldCBvdXRTdHJpbmc6IHN0cmluZyA9IFwiXCJcclxuICAgICAgc2NyaXB0c1NSQ3MuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgIG91dFN0cmluZyA9IG91dFN0cmluZyArIGA8c2NyaXB0IHNyYz1cIiR7ZWx9XCIgZGVmZXIgPjwvc2NyaXB0PmBcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIG91dFN0cmluZztcclxuICAgfVxyXG59Il19
