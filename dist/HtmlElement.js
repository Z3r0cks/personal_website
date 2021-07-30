"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlElement = void 0;
class HtmlElement {
    constructor(tagName, htmlClasses, id, innerText, childElement) {
        this._tagName = tagName;
        this._htmlClasses = htmlClasses;
        this._id = id;
        this._innerText = innerText;
        this._childElements = childElement;
    }
    isCloseTag(tag) {
        if (tag == "div" || tag == "p" || tag == "nav" || tag == "head" || tag == "h1" || tag == "h2" || tag == "h3" || tag == "h4" || tag == "h5" || tag == "h6" || tag == "footer" || tag == "main" || tag == "butto" || tag == "input")
            return true;
    }
    toStringChildElements(childElements) {
        let string = "";
        childElements.forEach(el => {
            string = string + el.createNewElement();
        });
        return string;
    }
    createNewElement() {
        let openTag;
        if (this._htmlClasses != false) {
            openTag = (this._id != false) ? `<${this._tagName} class="${this._htmlClasses}" id="${this._id}">` : `<${this._tagName} class="${this._htmlClasses}">`;
        }
        else if (this._htmlClasses == false && this._id != false) {
            openTag = `<${this._tagName} id="${this._id}">`;
        }
        else {
            openTag = `<${this._tagName}>`;
        }
        const text = this._innerText != false ? this._innerText : "";
        const childElements = this._childElements != false ? this.toStringChildElements(this._childElements) : "";
        const closeTag = this.isCloseTag(this._tagName) ? `</${this._tagName}>` : "";
        return openTag + text + childElements + closeTag;
    }
}
exports.HtmlElement = HtmlElement;
//////////////////////////////// DIV
// export class HtmlDivElement extends HtmlElement {
//    protected _childElements: HtmlElement[] | boolean;
//    protected _innerText: string;
//    constructor(htmlClasses: string, innerText: string, childElemet: HtmlElement[] | boolean) {
//       const closeTag = true;
//       super(htmlClasses, closeTag);
//       this._innerText = innerText;
//       this._childElements = childElemet;
//    }
//    add(): string {
//       const elementTag: string = this._htmlClasses == "" ? "<tagName>" : `<div class="${this._htmlClasses}">`
//       const childString: string = this._childElements == true || this._childElements == false ? "" : this.toStringChildElements(this._childElements);
//       let elementInnerText: string = this._innerText;
//       const elementCloseTag: string = "</div>";
//       return elementTag + childString + elementInnerText + elementCloseTag;
//    }
// }
// //////////////////////////////// H1-H6
// export class HtmlHeadElement extends HtmlElement {
//    protected _childElements: HtmlElement[] | boolean;
//    protected _innerText: string;
//    protected _headSize: string;
//    constructor(htmlClasses: string, headsize: string, innerText: string, childElemet: HtmlElement[] | boolean) {
//       const closeTag = true;
//       super(htmlClasses, closeTag);
//       this._headSize = headsize;
//       this._innerText = innerText;
//       this._childElements = childElemet;
//    }
//    add(): string {
//       const elementTag: string = this._htmlClasses == "" ? `<h${this._headSize}>` : `<h${this._headSize} class="${this._htmlClasses}">`
//       const childString: string = this._childElements == true || this._childElements == false ? "" : this.toStringChildElements(this._childElements);
//       let elementInnerText: string = this._innerText;
//       const elementCloseTag: string = `</h${this._headSize}>`;
//       return elementTag + childString + elementInnerText + elementCloseTag;
//    }
// }
// //////////////////////////////// HEADER
// export class HtmlHeader extends HtmlElement {
//    protected _childElements: HtmlElement[] | boolean;
//    constructor(htmlClasses: string, innerText: string, childElemet: HtmlElement[] | boolean) {
//       const closeTag = true;
//       super(htmlClasses, closeTag);
//       this._childElements = childElemet;
//    }
//    add(): string {
//       const elementTag: string = '<header>'
//       const childString: string = this._childElements == true || this._childElements == false ? "" : this.toStringChildElements(this._childElements);
//       const elementCloseTag: string = "</header>";
//       return elementTag + childString + elementCloseTag;
//    }
// }
// //////////////////////////////// NAV
// export class HtmlNavElement extends HtmlElement {
//    protected _childElements: HtmlElement[] | boolean;
//    constructor(htmlClasses: string, innerText: string, childElemet: HtmlElement[] | boolean) {
//       const closeTag = true;
//       super(htmlClasses, closeTag);
//       this._childElements = childElemet;
//    }
//    add(): string {
//       const elementTag: string = '<nav>'
//       const childString: string = this._childElements == true || this._childElements == false ? "" : this.toStringChildElements(this._childElements);
//       const elementCloseTag: string = "</nav>";
//       return elementTag + childString + elementCloseTag;
//    }
// }

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RDtBQUNwRCx3REFBd0Q7QUFDeEQsbUNBQW1DO0FBRW5DLGlHQUFpRztBQUNqRywrQkFBK0I7QUFDL0Isc0NBQXNDO0FBQ3RDLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsT0FBTztBQUVQLHFCQUFxQjtBQUNyQixnSEFBZ0g7QUFDaEgsd0pBQXdKO0FBQ3hKLHdEQUF3RDtBQUN4RCxrREFBa0Q7QUFDbEQsOEVBQThFO0FBQzlFLE9BQU87QUFDUCxJQUFJO0FBR0oseUNBQXlDO0FBRXpDLHFEQUFxRDtBQUNyRCx3REFBd0Q7QUFDeEQsbUNBQW1DO0FBQ25DLGtDQUFrQztBQUVsQyxtSEFBbUg7QUFDbkgsK0JBQStCO0FBQy9CLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkMscUNBQXFDO0FBQ3JDLDJDQUEyQztBQUMzQyxPQUFPO0FBRVAscUJBQXFCO0FBQ3JCLDBJQUEwSTtBQUMxSSx3SkFBd0o7QUFDeEosd0RBQXdEO0FBQ3hELGlFQUFpRTtBQUNqRSw4RUFBOEU7QUFDOUUsT0FBTztBQUNQLElBQUk7QUFJSiwwQ0FBMEM7QUFFMUMsZ0RBQWdEO0FBQ2hELHdEQUF3RDtBQUV4RCxpR0FBaUc7QUFDakcsK0JBQStCO0FBQy9CLHNDQUFzQztBQUN0QywyQ0FBMkM7QUFDM0MsT0FBTztBQUVQLHFCQUFxQjtBQUNyQiw4Q0FBOEM7QUFDOUMsd0pBQXdKO0FBQ3hKLHFEQUFxRDtBQUNyRCwyREFBMkQ7QUFDM0QsT0FBTztBQUNQLElBQUk7QUFHSix1Q0FBdUM7QUFFdkMsb0RBQW9EO0FBQ3BELHdEQUF3RDtBQUV4RCxpR0FBaUc7QUFDakcsK0JBQStCO0FBQy9CLHNDQUFzQztBQUN0QywyQ0FBMkM7QUFDM0MsT0FBTztBQUVQLHFCQUFxQjtBQUNyQiwyQ0FBMkM7QUFDM0Msd0pBQXdKO0FBQ3hKLGtEQUFrRDtBQUNsRCwyREFBMkQ7QUFDM0QsT0FBTztBQUNQLElBQUkiLCJmaWxlIjoiSHRtbEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSHRtbEVsZW1lbnQge1xyXG4gICBwcm90ZWN0ZWQgX3RhZ05hbWU6IHN0cmluZztcclxuICAgcHJvdGVjdGVkIF9odG1sQ2xhc3Nlczogc3RyaW5nIHwgZmFsc2U7XHJcbiAgIHByb3RlY3RlZCBfaWQ6IHN0cmluZyB8IGZhbHNlO1xyXG4gICBwcm90ZWN0ZWQgX2NoaWxkRWxlbWVudHM6IEh0bWxFbGVtZW50W10gfCBmYWxzZTtcclxuICAgcHJvdGVjdGVkIF9pbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlO1xyXG5cclxuICAgY29uc3RydWN0b3IodGFnTmFtZTogc3RyaW5nLCBodG1sQ2xhc3Nlczogc3RyaW5nIHwgZmFsc2UsIGlkOiBzdHJpbmcgfCBmYWxzZSwgaW5uZXJUZXh0OiBzdHJpbmcgfCBmYWxzZSwgY2hpbGRFbGVtZW50OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IHRhZ05hbWU7XHJcbiAgICAgIHRoaXMuX2h0bWxDbGFzc2VzID0gaHRtbENsYXNzZXM7XHJcbiAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICAgIHRoaXMuX2lubmVyVGV4dCA9IGlubmVyVGV4dFxyXG4gICAgICB0aGlzLl9jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50O1xyXG4gICB9XHJcblxyXG4gICBpc0Nsb3NlVGFnKHRhZzogc3RyaW5nKSB7XHJcbiAgICAgIGlmICh0YWcgPT0gXCJkaXZcIiB8fCB0YWcgPT0gXCJwXCIgfHwgdGFnID09IFwibmF2XCIgfHwgdGFnID09IFwiaGVhZFwiIHx8IHRhZyA9PSBcImgxXCIgfHwgdGFnID09IFwiaDJcIiB8fCB0YWcgPT0gXCJoM1wiIHx8IHRhZyA9PSBcImg0XCIgfHwgdGFnID09IFwiaDVcIiB8fCB0YWcgPT0gXCJoNlwiIHx8IHRhZyA9PSBcImZvb3RlclwiIHx8IHRhZyA9PSBcIm1haW5cIiB8fCB0YWcgPT0gXCJidXR0b1wiIHx8IHRhZyA9PSBcImlucHV0XCIpIHJldHVybiB0cnVlO1xyXG4gICB9XHJcblxyXG4gICB0b1N0cmluZ0NoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50czogSHRtbEVsZW1lbnRbXSkge1xyXG4gICAgICBsZXQgc3RyaW5nOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyBlbC5jcmVhdGVOZXdFbGVtZW50KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gc3RyaW5nXHJcbiAgIH1cclxuICAgY3JlYXRlTmV3RWxlbWVudCgpOiBzdHJpbmcge1xyXG4gICAgICBsZXQgb3BlblRhZzogc3RyaW5nO1xyXG4gICAgICBpZiAodGhpcy5faHRtbENsYXNzZXMgIT0gZmFsc2UpIHtcclxuICAgICAgICAgb3BlblRhZyA9ICh0aGlzLl9pZCAhPSBmYWxzZSkgPyBgPCR7dGhpcy5fdGFnTmFtZX0gY2xhc3M9XCIke3RoaXMuX2h0bWxDbGFzc2VzfVwiIGlkPVwiJHt0aGlzLl9pZH1cIj5gIDogYDwke3RoaXMuX3RhZ05hbWV9IGNsYXNzPVwiJHt0aGlzLl9odG1sQ2xhc3Nlc31cIj5gO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2h0bWxDbGFzc2VzID09IGZhbHNlICYmIHRoaXMuX2lkICE9IGZhbHNlKSB7XHJcbiAgICAgICAgIG9wZW5UYWcgPSBgPCR7dGhpcy5fdGFnTmFtZX0gaWQ9XCIke3RoaXMuX2lkfVwiPmBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgb3BlblRhZyA9IGA8JHt0aGlzLl90YWdOYW1lfT5gXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGV4dDogc3RyaW5nID0gdGhpcy5faW5uZXJUZXh0ICE9IGZhbHNlID8gdGhpcy5faW5uZXJUZXh0IDogXCJcIjtcclxuICAgICAgY29uc3QgY2hpbGRFbGVtZW50czogc3RyaW5nID0gdGhpcy5fY2hpbGRFbGVtZW50cyAhPSBmYWxzZSA/IHRoaXMudG9TdHJpbmdDaGlsZEVsZW1lbnRzKHRoaXMuX2NoaWxkRWxlbWVudHMpIDogXCJcIjtcclxuICAgICAgY29uc3QgY2xvc2VUYWc6IHN0cmluZyA9IHRoaXMuaXNDbG9zZVRhZyh0aGlzLl90YWdOYW1lKSA/IGA8LyR7dGhpcy5fdGFnTmFtZX0+YCA6IFwiXCI7XHJcbiAgICAgIHJldHVybiBvcGVuVGFnICsgdGV4dCArIGNoaWxkRWxlbWVudHMgKyBjbG9zZVRhZztcclxuICAgfVxyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gRElWXHJcblxyXG4vLyBleHBvcnQgY2xhc3MgSHRtbERpdkVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbi8vICAgIHByb3RlY3RlZCBfY2hpbGRFbGVtZW50czogSHRtbEVsZW1lbnRbXSB8IGJvb2xlYW47XHJcbi8vICAgIHByb3RlY3RlZCBfaW5uZXJUZXh0OiBzdHJpbmc7XHJcblxyXG4vLyAgICBjb25zdHJ1Y3RvcihodG1sQ2xhc3Nlczogc3RyaW5nLCBpbm5lclRleHQ6IHN0cmluZywgY2hpbGRFbGVtZXQ6IEh0bWxFbGVtZW50W10gfCBib29sZWFuKSB7XHJcbi8vICAgICAgIGNvbnN0IGNsb3NlVGFnID0gdHJ1ZTtcclxuLy8gICAgICAgc3VwZXIoaHRtbENsYXNzZXMsIGNsb3NlVGFnKTtcclxuLy8gICAgICAgdGhpcy5faW5uZXJUZXh0ID0gaW5uZXJUZXh0O1xyXG4vLyAgICAgICB0aGlzLl9jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZXQ7XHJcbi8vICAgIH1cclxuXHJcbi8vICAgIGFkZCgpOiBzdHJpbmcge1xyXG4vLyAgICAgICBjb25zdCBlbGVtZW50VGFnOiBzdHJpbmcgPSB0aGlzLl9odG1sQ2xhc3NlcyA9PSBcIlwiID8gXCI8dGFnTmFtZT5cIiA6IGA8ZGl2IGNsYXNzPVwiJHt0aGlzLl9odG1sQ2xhc3Nlc31cIj5gXHJcbi8vICAgICAgIGNvbnN0IGNoaWxkU3RyaW5nOiBzdHJpbmcgPSB0aGlzLl9jaGlsZEVsZW1lbnRzID09IHRydWUgfHwgdGhpcy5fY2hpbGRFbGVtZW50cyA9PSBmYWxzZSA/IFwiXCIgOiB0aGlzLnRvU3RyaW5nQ2hpbGRFbGVtZW50cyh0aGlzLl9jaGlsZEVsZW1lbnRzKTtcclxuLy8gICAgICAgbGV0IGVsZW1lbnRJbm5lclRleHQ6IHN0cmluZyA9IHRoaXMuX2lubmVyVGV4dDtcclxuLy8gICAgICAgY29uc3QgZWxlbWVudENsb3NlVGFnOiBzdHJpbmcgPSBcIjwvZGl2PlwiO1xyXG4vLyAgICAgICByZXR1cm4gZWxlbWVudFRhZyArIGNoaWxkU3RyaW5nICsgZWxlbWVudElubmVyVGV4dCArIGVsZW1lbnRDbG9zZVRhZztcclxuLy8gICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gSDEtSDZcclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBIdG1sSGVhZEVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbi8vICAgIHByb3RlY3RlZCBfY2hpbGRFbGVtZW50czogSHRtbEVsZW1lbnRbXSB8IGJvb2xlYW47XHJcbi8vICAgIHByb3RlY3RlZCBfaW5uZXJUZXh0OiBzdHJpbmc7XHJcbi8vICAgIHByb3RlY3RlZCBfaGVhZFNpemU6IHN0cmluZztcclxuXHJcbi8vICAgIGNvbnN0cnVjdG9yKGh0bWxDbGFzc2VzOiBzdHJpbmcsIGhlYWRzaXplOiBzdHJpbmcsIGlubmVyVGV4dDogc3RyaW5nLCBjaGlsZEVsZW1ldDogSHRtbEVsZW1lbnRbXSB8IGJvb2xlYW4pIHtcclxuLy8gICAgICAgY29uc3QgY2xvc2VUYWcgPSB0cnVlO1xyXG4vLyAgICAgICBzdXBlcihodG1sQ2xhc3NlcywgY2xvc2VUYWcpO1xyXG4vLyAgICAgICB0aGlzLl9oZWFkU2l6ZSA9IGhlYWRzaXplO1xyXG4vLyAgICAgICB0aGlzLl9pbm5lclRleHQgPSBpbm5lclRleHQ7XHJcbi8vICAgICAgIHRoaXMuX2NoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1ldDtcclxuLy8gICAgfVxyXG5cclxuLy8gICAgYWRkKCk6IHN0cmluZyB7XHJcbi8vICAgICAgIGNvbnN0IGVsZW1lbnRUYWc6IHN0cmluZyA9IHRoaXMuX2h0bWxDbGFzc2VzID09IFwiXCIgPyBgPGgke3RoaXMuX2hlYWRTaXplfT5gIDogYDxoJHt0aGlzLl9oZWFkU2l6ZX0gY2xhc3M9XCIke3RoaXMuX2h0bWxDbGFzc2VzfVwiPmBcclxuLy8gICAgICAgY29uc3QgY2hpbGRTdHJpbmc6IHN0cmluZyA9IHRoaXMuX2NoaWxkRWxlbWVudHMgPT0gdHJ1ZSB8fCB0aGlzLl9jaGlsZEVsZW1lbnRzID09IGZhbHNlID8gXCJcIiA6IHRoaXMudG9TdHJpbmdDaGlsZEVsZW1lbnRzKHRoaXMuX2NoaWxkRWxlbWVudHMpO1xyXG4vLyAgICAgICBsZXQgZWxlbWVudElubmVyVGV4dDogc3RyaW5nID0gdGhpcy5faW5uZXJUZXh0O1xyXG4vLyAgICAgICBjb25zdCBlbGVtZW50Q2xvc2VUYWc6IHN0cmluZyA9IGA8L2gke3RoaXMuX2hlYWRTaXplfT5gO1xyXG4vLyAgICAgICByZXR1cm4gZWxlbWVudFRhZyArIGNoaWxkU3RyaW5nICsgZWxlbWVudElubmVyVGV4dCArIGVsZW1lbnRDbG9zZVRhZztcclxuLy8gICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEhFQURFUlxyXG5cclxuLy8gZXhwb3J0IGNsYXNzIEh0bWxIZWFkZXIgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbi8vICAgIHByb3RlY3RlZCBfY2hpbGRFbGVtZW50czogSHRtbEVsZW1lbnRbXSB8IGJvb2xlYW47XHJcblxyXG4vLyAgICBjb25zdHJ1Y3RvcihodG1sQ2xhc3Nlczogc3RyaW5nLCBpbm5lclRleHQ6IHN0cmluZywgY2hpbGRFbGVtZXQ6IEh0bWxFbGVtZW50W10gfCBib29sZWFuKSB7XHJcbi8vICAgICAgIGNvbnN0IGNsb3NlVGFnID0gdHJ1ZTtcclxuLy8gICAgICAgc3VwZXIoaHRtbENsYXNzZXMsIGNsb3NlVGFnKTtcclxuLy8gICAgICAgdGhpcy5fY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWV0O1xyXG4vLyAgICB9XHJcblxyXG4vLyAgICBhZGQoKTogc3RyaW5nIHtcclxuLy8gICAgICAgY29uc3QgZWxlbWVudFRhZzogc3RyaW5nID0gJzxoZWFkZXI+J1xyXG4vLyAgICAgICBjb25zdCBjaGlsZFN0cmluZzogc3RyaW5nID0gdGhpcy5fY2hpbGRFbGVtZW50cyA9PSB0cnVlIHx8IHRoaXMuX2NoaWxkRWxlbWVudHMgPT0gZmFsc2UgPyBcIlwiIDogdGhpcy50b1N0cmluZ0NoaWxkRWxlbWVudHModGhpcy5fY2hpbGRFbGVtZW50cyk7XHJcbi8vICAgICAgIGNvbnN0IGVsZW1lbnRDbG9zZVRhZzogc3RyaW5nID0gXCI8L2hlYWRlcj5cIjtcclxuLy8gICAgICAgcmV0dXJuIGVsZW1lbnRUYWcgKyBjaGlsZFN0cmluZyArIGVsZW1lbnRDbG9zZVRhZztcclxuLy8gICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gTkFWXHJcblxyXG4vLyBleHBvcnQgY2xhc3MgSHRtbE5hdkVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbi8vICAgIHByb3RlY3RlZCBfY2hpbGRFbGVtZW50czogSHRtbEVsZW1lbnRbXSB8IGJvb2xlYW47XHJcblxyXG4vLyAgICBjb25zdHJ1Y3RvcihodG1sQ2xhc3Nlczogc3RyaW5nLCBpbm5lclRleHQ6IHN0cmluZywgY2hpbGRFbGVtZXQ6IEh0bWxFbGVtZW50W10gfCBib29sZWFuKSB7XHJcbi8vICAgICAgIGNvbnN0IGNsb3NlVGFnID0gdHJ1ZTtcclxuLy8gICAgICAgc3VwZXIoaHRtbENsYXNzZXMsIGNsb3NlVGFnKTtcclxuLy8gICAgICAgdGhpcy5fY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWV0O1xyXG4vLyAgICB9XHJcblxyXG4vLyAgICBhZGQoKTogc3RyaW5nIHtcclxuLy8gICAgICAgY29uc3QgZWxlbWVudFRhZzogc3RyaW5nID0gJzxuYXY+J1xyXG4vLyAgICAgICBjb25zdCBjaGlsZFN0cmluZzogc3RyaW5nID0gdGhpcy5fY2hpbGRFbGVtZW50cyA9PSB0cnVlIHx8IHRoaXMuX2NoaWxkRWxlbWVudHMgPT0gZmFsc2UgPyBcIlwiIDogdGhpcy50b1N0cmluZ0NoaWxkRWxlbWVudHModGhpcy5fY2hpbGRFbGVtZW50cyk7XHJcbi8vICAgICAgIGNvbnN0IGVsZW1lbnRDbG9zZVRhZzogc3RyaW5nID0gXCI8L25hdj5cIjtcclxuLy8gICAgICAgcmV0dXJuIGVsZW1lbnRUYWcgKyBjaGlsZFN0cmluZyArIGVsZW1lbnRDbG9zZVRhZztcclxuLy8gICAgfVxyXG4vLyB9XHJcbiJdfQ==
