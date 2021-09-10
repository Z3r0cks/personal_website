"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlfooterElement = exports.HtmlMainElement = exports.HtmlHeaderElement = exports.HtmlButtonElement = exports.HtmlNavElement = exports.HtmlHElement = exports.HtmlPElement = exports.HtmlDivElement = exports.HtmlBodyElement = exports.HtmlElement = void 0;
class HtmlElement {
    constructor(htmlClasses, id, innerText, childElement) {
        this._tagName = "undefined";
        this._htmlClasses = htmlClasses;
        this._id = id;
        this._innerText = innerText;
        this._childElements = childElement;
        this._isCloseTag = false;
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
        const closeTag = this._isCloseTag ? `</${this._tagName}>` : "";
        return openTag + text + childElements + closeTag;
    }
}
exports.HtmlElement = HtmlElement;
//////////////////////////////// DIV
class HtmlBodyElement extends HtmlElement {
    constructor(childElement) {
        super(false, false, false, childElement);
        this._tagName = "body";
        this._isCloseTag = true;
    }
}
exports.HtmlBodyElement = HtmlBodyElement;
//////////////////////////////// DIV
class HtmlDivElement extends HtmlElement {
    constructor(htmlClasses, id, innerText, childElement) {
        super(htmlClasses, id, innerText, childElement);
        this._tagName = "div";
        this._isCloseTag = true;
    }
}
exports.HtmlDivElement = HtmlDivElement;
//////////////////////////////// P
class HtmlPElement extends HtmlElement {
    constructor(htmlClasses, id, innerText, childElement) {
        super(htmlClasses, id, innerText, childElement);
        this._tagName = "p";
        this._isCloseTag = true;
    }
}
exports.HtmlPElement = HtmlPElement;
//////////////////////////////// H1-H6
class HtmlHElement extends HtmlElement {
    constructor(htmlClasses, id, innerText, childElement, type) {
        super(htmlClasses, id, innerText, childElement);
        this._tagName = type;
        this._isCloseTag = true;
    }
}
exports.HtmlHElement = HtmlHElement;
//////////////////////////////// NAV
class HtmlNavElement extends HtmlElement {
    constructor(htmlClasses, id, innerText, childElement) {
        super(htmlClasses, id, innerText, childElement);
        this._tagName = "nav";
        this._isCloseTag = true;
    }
}
exports.HtmlNavElement = HtmlNavElement;
//////////////////////////////// BUTTON
class HtmlButtonElement extends HtmlElement {
    constructor(htmlClasses, id, innerText, childElement) {
        super(htmlClasses, id, innerText, childElement);
        this._tagName = "button";
        this._isCloseTag = true;
    }
}
exports.HtmlButtonElement = HtmlButtonElement;
//////////////////////////////// HEADER
class HtmlHeaderElement extends HtmlElement {
    constructor(htmlClasses, id, innerText, childElement) {
        super(htmlClasses, id, innerText, childElement);
        this._tagName = "header";
        this._isCloseTag = true;
    }
}
exports.HtmlHeaderElement = HtmlHeaderElement;
//////////////////////////////// MAIN
class HtmlMainElement extends HtmlElement {
    constructor(childElement) {
        super(false, false, false, childElement);
        this._tagName = "main";
        this._isCloseTag = true;
    }
}
exports.HtmlMainElement = HtmlMainElement;
//////////////////////////////// FOOTER
class HtmlfooterElement extends HtmlElement {
    constructor(htmlClasses, id, innerText, childElement) {
        super(htmlClasses, id, innerText, childElement);
        this._tagName = "footer";
        this._isCloseTag = true;
    }
}
exports.HtmlfooterElement = HtmlfooterElement;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMzQixDQUFDO0NBQ0g7QUFORCw4Q0FNQyIsImZpbGUiOiJIdG1sRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIdG1sRWxlbWVudCB7XHJcbiAgIHByb3RlY3RlZCBfdGFnTmFtZTogc3RyaW5nO1xyXG4gICBwcm90ZWN0ZWQgX2h0bWxDbGFzc2VzOiBzdHJpbmcgfCBmYWxzZTtcclxuICAgcHJvdGVjdGVkIF9pZDogc3RyaW5nIHwgZmFsc2U7XHJcbiAgIHByb3RlY3RlZCBfY2hpbGRFbGVtZW50czogSHRtbEVsZW1lbnRbXSB8IGZhbHNlO1xyXG4gICBwcm90ZWN0ZWQgX2lubmVyVGV4dDogc3RyaW5nIHwgZmFsc2U7XHJcbiAgIHByb3RlY3RlZCBfaXNDbG9zZVRhZzogYm9vbGVhbjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGh0bWxDbGFzc2VzOiBzdHJpbmcgfCBmYWxzZSwgaWQ6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ6IEh0bWxFbGVtZW50W10gfCBmYWxzZSkge1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gXCJ1bmRlZmluZWRcIjtcclxuICAgICAgdGhpcy5faHRtbENsYXNzZXMgPSBodG1sQ2xhc3NlcztcclxuICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgICAgdGhpcy5faW5uZXJUZXh0ID0gaW5uZXJUZXh0XHJcbiAgICAgIHRoaXMuX2NoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX2lzQ2xvc2VUYWcgPSBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgdG9TdHJpbmdDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHM6IEh0bWxFbGVtZW50W10pIHtcclxuICAgICAgbGV0IHN0cmluZzogc3RyaW5nID0gXCJcIjtcclxuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgZWwuY3JlYXRlTmV3RWxlbWVudCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHN0cmluZ1xyXG4gICB9XHJcblxyXG4gICBjcmVhdGVOZXdFbGVtZW50KCk6IHN0cmluZyB7XHJcbiAgICAgIGxldCBvcGVuVGFnOiBzdHJpbmc7XHJcbiAgICAgIGlmICh0aGlzLl9odG1sQ2xhc3NlcyAhPSBmYWxzZSkge1xyXG4gICAgICAgICBvcGVuVGFnID0gKHRoaXMuX2lkICE9IGZhbHNlKSA/IGA8JHt0aGlzLl90YWdOYW1lfSBjbGFzcz1cIiR7dGhpcy5faHRtbENsYXNzZXN9XCIgaWQ9XCIke3RoaXMuX2lkfVwiPmAgOiBgPCR7dGhpcy5fdGFnTmFtZX0gY2xhc3M9XCIke3RoaXMuX2h0bWxDbGFzc2VzfVwiPmA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5faHRtbENsYXNzZXMgPT0gZmFsc2UgJiYgdGhpcy5faWQgIT0gZmFsc2UpIHtcclxuICAgICAgICAgb3BlblRhZyA9IGA8JHt0aGlzLl90YWdOYW1lfSBpZD1cIiR7dGhpcy5faWR9XCI+YFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBvcGVuVGFnID0gYDwke3RoaXMuX3RhZ05hbWV9PmBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZXh0OiBzdHJpbmcgPSB0aGlzLl9pbm5lclRleHQgIT0gZmFsc2UgPyB0aGlzLl9pbm5lclRleHQgOiBcIlwiO1xyXG4gICAgICBjb25zdCBjaGlsZEVsZW1lbnRzOiBzdHJpbmcgPSB0aGlzLl9jaGlsZEVsZW1lbnRzICE9IGZhbHNlID8gdGhpcy50b1N0cmluZ0NoaWxkRWxlbWVudHModGhpcy5fY2hpbGRFbGVtZW50cykgOiBcIlwiO1xyXG4gICAgICBjb25zdCBjbG9zZVRhZzogc3RyaW5nID0gdGhpcy5faXNDbG9zZVRhZyA/IGA8LyR7dGhpcy5fdGFnTmFtZX0+YCA6IFwiXCI7XHJcbiAgICAgIHJldHVybiBvcGVuVGFnICsgdGV4dCArIGNoaWxkRWxlbWVudHMgKyBjbG9zZVRhZztcclxuICAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBESVZcclxuXHJcbmV4cG9ydCBjbGFzcyBIdG1sQm9keUVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGNoaWxkRWxlbWVudDogSHRtbEVsZW1lbnRbXSkge1xyXG4gICAgICBzdXBlcihmYWxzZSwgZmFsc2UsIGZhbHNlLCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gXCJib2R5XCI7XHJcbiAgICAgIHRoaXMuX2lzQ2xvc2VUYWcgPSB0cnVlO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIERJVlxyXG5cclxuZXhwb3J0IGNsYXNzIEh0bWxEaXZFbGVtZW50IGV4dGVuZHMgSHRtbEVsZW1lbnQge1xyXG4gICBjb25zdHJ1Y3RvcihodG1sQ2xhc3Nlczogc3RyaW5nIHwgZmFsc2UsIGlkOiBzdHJpbmcgfCBmYWxzZSwgaW5uZXJUZXh0OiBzdHJpbmcgfCBmYWxzZSwgY2hpbGRFbGVtZW50OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoaHRtbENsYXNzZXMsIGlkLCBpbm5lclRleHQsIGNoaWxkRWxlbWVudCk7XHJcbiAgICAgIHRoaXMuX3RhZ05hbWUgPSBcImRpdlwiO1xyXG4gICAgICB0aGlzLl9pc0Nsb3NlVGFnID0gdHJ1ZTtcclxuICAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBQXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbFBFbGVtZW50IGV4dGVuZHMgSHRtbEVsZW1lbnQge1xyXG4gICBjb25zdHJ1Y3RvcihodG1sQ2xhc3Nlczogc3RyaW5nIHwgZmFsc2UsIGlkOiBzdHJpbmcgfCBmYWxzZSwgaW5uZXJUZXh0OiBzdHJpbmcgfCBmYWxzZSwgY2hpbGRFbGVtZW50OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoaHRtbENsYXNzZXMsIGlkLCBpbm5lclRleHQsIGNoaWxkRWxlbWVudCk7XHJcbiAgICAgIHRoaXMuX3RhZ05hbWUgPSBcInBcIjtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gSDEtSDZcclxuXHJcbmV4cG9ydCBjbGFzcyBIdG1sSEVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGh0bWxDbGFzc2VzOiBzdHJpbmcgfCBmYWxzZSwgaWQ6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ6IEh0bWxFbGVtZW50W10gfCBmYWxzZSwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICAgIHN1cGVyKGh0bWxDbGFzc2VzLCBpZCwgaW5uZXJUZXh0LCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gdHlwZTtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gTkFWXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbE5hdkVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGh0bWxDbGFzc2VzOiBzdHJpbmcgfCBmYWxzZSwgaWQ6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ6IEh0bWxFbGVtZW50W10gfCBmYWxzZSkge1xyXG4gICAgICBzdXBlcihodG1sQ2xhc3NlcywgaWQsIGlubmVyVGV4dCwgY2hpbGRFbGVtZW50KTtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IFwibmF2XCI7XHJcbiAgICAgIHRoaXMuX2lzQ2xvc2VUYWcgPSB0cnVlO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEJVVFRPTlxyXG5cclxuZXhwb3J0IGNsYXNzIEh0bWxCdXR0b25FbGVtZW50IGV4dGVuZHMgSHRtbEVsZW1lbnQge1xyXG4gICBjb25zdHJ1Y3RvcihodG1sQ2xhc3Nlczogc3RyaW5nIHwgZmFsc2UsIGlkOiBzdHJpbmcgfCBmYWxzZSwgaW5uZXJUZXh0OiBzdHJpbmcgfCBmYWxzZSwgY2hpbGRFbGVtZW50OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoaHRtbENsYXNzZXMsIGlkLCBpbm5lclRleHQsIGNoaWxkRWxlbWVudCk7XHJcbiAgICAgIHRoaXMuX3RhZ05hbWUgPSBcImJ1dHRvblwiO1xyXG4gICAgICB0aGlzLl9pc0Nsb3NlVGFnID0gdHJ1ZTtcclxuICAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBIRUFERVJcclxuXHJcbmV4cG9ydCBjbGFzcyBIdG1sSGVhZGVyRWxlbWVudCBleHRlbmRzIEh0bWxFbGVtZW50IHtcclxuICAgY29uc3RydWN0b3IoaHRtbENsYXNzZXM6IHN0cmluZyB8IGZhbHNlLCBpZDogc3RyaW5nIHwgZmFsc2UsIGlubmVyVGV4dDogc3RyaW5nIHwgZmFsc2UsIGNoaWxkRWxlbWVudDogSHRtbEVsZW1lbnRbXSB8IGZhbHNlKSB7XHJcbiAgICAgIHN1cGVyKGh0bWxDbGFzc2VzLCBpZCwgaW5uZXJUZXh0LCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gXCJoZWFkZXJcIjtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gTUFJTlxyXG5cclxuZXhwb3J0IGNsYXNzIEh0bWxNYWluRWxlbWVudCBleHRlbmRzIEh0bWxFbGVtZW50IHtcclxuICAgY29uc3RydWN0b3IoY2hpbGRFbGVtZW50OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoZmFsc2UsIGZhbHNlLCBmYWxzZSwgY2hpbGRFbGVtZW50KTtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IFwibWFpblwiO1xyXG4gICAgICB0aGlzLl9pc0Nsb3NlVGFnID0gdHJ1ZTtcclxuICAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBGT09URVJcclxuXHJcbmV4cG9ydCBjbGFzcyBIdG1sZm9vdGVyRWxlbWVudCBleHRlbmRzIEh0bWxFbGVtZW50IHtcclxuICAgY29uc3RydWN0b3IoaHRtbENsYXNzZXM6IHN0cmluZyB8IGZhbHNlLCBpZDogc3RyaW5nIHwgZmFsc2UsIGlubmVyVGV4dDogc3RyaW5nIHwgZmFsc2UsIGNoaWxkRWxlbWVudDogSHRtbEVsZW1lbnRbXSB8IGZhbHNlKSB7XHJcbiAgICAgIHN1cGVyKGh0bWxDbGFzc2VzLCBpZCwgaW5uZXJUZXh0LCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gXCJmb290ZXJcIjtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufSJdfQ==
