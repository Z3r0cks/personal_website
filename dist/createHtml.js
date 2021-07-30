"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHTML = void 0;
class createHTML {
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
exports.createHTML = createHTML;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUh0bWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxVQUFVO0lBTXBCLFlBQVksUUFBZ0IsRUFBRSxTQUFpQixFQUFFLEtBQWEsRUFBRSxXQUFxQjtRQUNsRixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUJBQXFCLENBQUMsYUFBNEI7UUFDL0MsSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDeEIsTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFBO0lBQ2hCLENBQUM7SUFFRCxPQUFPLENBQUMsWUFBMkI7UUFDaEMsTUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEUsTUFBTSxXQUFXLEdBQVcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JFLElBQUksT0FBTyxHQUFXO29CQUNSLElBQUksQ0FBQyxTQUFTOzs7Ozt3Q0FLTSxJQUFJLENBQUMsVUFBVTtrQkFDckMsSUFBSSxDQUFDLE1BQU07V0FDbEIsVUFBVTs7O1FBR2IsV0FBVzs7Y0FFTCxDQUFBO1FBQ1IsT0FBTyxPQUFPLENBQUM7SUFDbEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUFxQjtRQUNqQyxJQUFJLFNBQVMsR0FBVyxFQUFFLENBQUE7UUFDMUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN0QixTQUFTLEdBQUcsU0FBUyxHQUFHLGdCQUFnQixFQUFFLG9CQUFvQixDQUFBO1FBQ2pFLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxTQUFTLENBQUM7SUFDcEIsQ0FBQztDQUNIO0FBaERELGdDQWdEQyIsImZpbGUiOiJjcmVhdGVIdG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGNyZWF0ZUhUTUwge1xyXG4gICBwcm90ZWN0ZWQgX2xhbmd1YWdlOiBzdHJpbmc7XHJcbiAgIHByb3RlY3RlZCBfc3R5bGVIcmVmOiBzdHJpbmc7XHJcbiAgIHByb3RlY3RlZCBfdGl0bGU6IHN0cmluZztcclxuICAgcHJvdGVjdGVkIF9zY3JpcHRzU1JDczogc3RyaW5nW107XHJcblxyXG4gICBjb25zdHJ1Y3RvcihsYW5ndWFnZTogc3RyaW5nLCBzdHlsZUhyZWY6IHN0cmluZywgdGl0bGU6IHN0cmluZywgc2NyaXB0c1NSQ3M6IHN0cmluZ1tdKSB7XHJcbiAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgIHRoaXMuX3N0eWxlSHJlZiA9IHN0eWxlSHJlZjtcclxuICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5fc2NyaXB0c1NSQ3MgPSBzY3JpcHRzU1JDcztcclxuICAgfVxyXG5cclxuICAgdG9TdHJpbmdDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHM6IEh0bWxFbGVtZW50W10pIHtcclxuICAgICAgbGV0IHN0cmluZzogc3RyaW5nID0gXCJcIjtcclxuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgZWwuY3JlYXRlTmV3RWxlbWVudCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHN0cmluZ1xyXG4gICB9XHJcblxyXG4gICBuZXdIVE1MKGNoaWxkbGVtZW50czogSHRtbEVsZW1lbnRbXSkge1xyXG4gICAgICBjb25zdCBhbGxTY3JpcHRzOiBzdHJpbmcgPSB0aGlzLnNjcmlwdFRvU3RyaW5nKHRoaXMuX3NjcmlwdHNTUkNzKTtcclxuICAgICAgY29uc3QgY2hpbGRTdHJpbmc6IHN0cmluZyA9IHRoaXMudG9TdHJpbmdDaGlsZEVsZW1lbnRzKGNoaWxkbGVtZW50cyk7XHJcbiAgICAgIGxldCBuZXdIVE1MOiBzdHJpbmcgPSBgPCFET0NUWVBFIGh0bWw+XHJcbiAgICAgIDxodG1sIGxhbmc9XCIke3RoaXMuX2xhbmd1YWdlfVwiPlxyXG4gICAgICA8aGVhZD5cclxuICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiPlxyXG4gICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxyXG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIiR7dGhpcy5fc3R5bGVIcmVmfVwiPlxyXG4gICAgICAgICA8dGl0bGU+JHt0aGlzLl90aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAke2FsbFNjcmlwdHN9XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICR7Y2hpbGRTdHJpbmd9XHJcbiAgICAgIDwvYm9keT5cclxuICAgICAgPC9odG1sPmBcclxuICAgICAgcmV0dXJuIG5ld0hUTUw7XHJcbiAgIH1cclxuXHJcbiAgIHNjcmlwdFRvU3RyaW5nKHNjcmlwdHNTUkNzOiBzdHJpbmdbXSkge1xyXG4gICAgICBsZXQgb3V0U3RyaW5nOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAgIHNjcmlwdHNTUkNzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICBvdXRTdHJpbmcgPSBvdXRTdHJpbmcgKyBgPHNjcmlwdCBzcmM9XCIke2VsfVwiIGRlZmVyID48L3NjcmlwdD5gXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBvdXRTdHJpbmc7XHJcbiAgIH1cclxufSJdfQ==
