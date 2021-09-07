"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlfooterElement = exports.HtmlMainElement = exports.HtmlHeaderElement = exports.HtmlButtonElement = exports.HtmlNavElement = exports.HtmlH1Element = exports.HtmlPElement = exports.HtmlDivElement = exports.HtmlBodyElement = exports.HtmlElement = void 0;
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
    constructor(htmlClasses, id, innerText, childElement) {
        super(htmlClasses, id, innerText, childElement);
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
class HtmlH1Element extends HtmlElement {
    constructor(htmlClasses, id, innerText, childElement) {
        super(htmlClasses, id, innerText, childElement);
        this._tagName = "h1";
        this._isCloseTag = true;
    }
}
exports.HtmlH1Element = HtmlH1Element;
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
    constructor(htmlClasses, id, innerText, childElement) {
        super(htmlClasses, id, innerText, childElement);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7Q0FDSDtBQU5ELDhDQU1DIiwiZmlsZSI6Ikh0bWxFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0bWxFbGVtZW50IHtcclxuICAgcHJvdGVjdGVkIF90YWdOYW1lOiBzdHJpbmc7XHJcbiAgIHByb3RlY3RlZCBfaHRtbENsYXNzZXM6IHN0cmluZyB8IGZhbHNlO1xyXG4gICBwcm90ZWN0ZWQgX2lkOiBzdHJpbmcgfCBmYWxzZTtcclxuICAgcHJvdGVjdGVkIF9jaGlsZEVsZW1lbnRzOiBIdG1sRWxlbWVudFtdIHwgZmFsc2U7XHJcbiAgIHByb3RlY3RlZCBfaW5uZXJUZXh0OiBzdHJpbmcgfCBmYWxzZTtcclxuICAgcHJvdGVjdGVkIF9pc0Nsb3NlVGFnOiBib29sZWFuO1xyXG5cclxuICAgY29uc3RydWN0b3IoaHRtbENsYXNzZXM6IHN0cmluZyB8IGZhbHNlLCBpZDogc3RyaW5nIHwgZmFsc2UsIGlubmVyVGV4dDogc3RyaW5nIHwgZmFsc2UsIGNoaWxkRWxlbWVudDogSHRtbEVsZW1lbnRbXSB8IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuX3RhZ05hbWUgPSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICB0aGlzLl9odG1sQ2xhc3NlcyA9IGh0bWxDbGFzc2VzO1xyXG4gICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgICB0aGlzLl9pbm5lclRleHQgPSBpbm5lclRleHRcclxuICAgICAgdGhpcy5fY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudDtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICB0b1N0cmluZ0NoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50czogSHRtbEVsZW1lbnRbXSkge1xyXG4gICAgICBsZXQgc3RyaW5nOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyBlbC5jcmVhdGVOZXdFbGVtZW50KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gc3RyaW5nXHJcbiAgIH1cclxuICAgY3JlYXRlTmV3RWxlbWVudCgpOiBzdHJpbmcge1xyXG4gICAgICBsZXQgb3BlblRhZzogc3RyaW5nO1xyXG4gICAgICBpZiAodGhpcy5faHRtbENsYXNzZXMgIT0gZmFsc2UpIHtcclxuICAgICAgICAgb3BlblRhZyA9ICh0aGlzLl9pZCAhPSBmYWxzZSkgPyBgPCR7dGhpcy5fdGFnTmFtZX0gY2xhc3M9XCIke3RoaXMuX2h0bWxDbGFzc2VzfVwiIGlkPVwiJHt0aGlzLl9pZH1cIj5gIDogYDwke3RoaXMuX3RhZ05hbWV9IGNsYXNzPVwiJHt0aGlzLl9odG1sQ2xhc3Nlc31cIj5gO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2h0bWxDbGFzc2VzID09IGZhbHNlICYmIHRoaXMuX2lkICE9IGZhbHNlKSB7XHJcbiAgICAgICAgIG9wZW5UYWcgPSBgPCR7dGhpcy5fdGFnTmFtZX0gaWQ9XCIke3RoaXMuX2lkfVwiPmBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgb3BlblRhZyA9IGA8JHt0aGlzLl90YWdOYW1lfT5gXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGV4dDogc3RyaW5nID0gdGhpcy5faW5uZXJUZXh0ICE9IGZhbHNlID8gdGhpcy5faW5uZXJUZXh0IDogXCJcIjtcclxuICAgICAgY29uc3QgY2hpbGRFbGVtZW50czogc3RyaW5nID0gdGhpcy5fY2hpbGRFbGVtZW50cyAhPSBmYWxzZSA/IHRoaXMudG9TdHJpbmdDaGlsZEVsZW1lbnRzKHRoaXMuX2NoaWxkRWxlbWVudHMpIDogXCJcIjtcclxuICAgICAgY29uc3QgY2xvc2VUYWc6IHN0cmluZyA9IHRoaXMuX2lzQ2xvc2VUYWcgPyBgPC8ke3RoaXMuX3RhZ05hbWV9PmAgOiBcIlwiO1xyXG4gICAgICByZXR1cm4gb3BlblRhZyArIHRleHQgKyBjaGlsZEVsZW1lbnRzICsgY2xvc2VUYWc7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gRElWXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbEJvZHlFbGVtZW50IGV4dGVuZHMgSHRtbEVsZW1lbnQge1xyXG4gICBjb25zdHJ1Y3RvcihodG1sQ2xhc3Nlczogc3RyaW5nIHwgZmFsc2UsIGlkOiBzdHJpbmcgfCBmYWxzZSwgaW5uZXJUZXh0OiBzdHJpbmcgfCBmYWxzZSwgY2hpbGRFbGVtZW50OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoaHRtbENsYXNzZXMsIGlkLCBpbm5lclRleHQsIGNoaWxkRWxlbWVudCk7XHJcbiAgICAgIHRoaXMuX3RhZ05hbWUgPSBcImJvZHlcIjtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gRElWXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbERpdkVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGh0bWxDbGFzc2VzOiBzdHJpbmcgfCBmYWxzZSwgaWQ6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ6IEh0bWxFbGVtZW50W10gfCBmYWxzZSkge1xyXG4gICAgICBzdXBlcihodG1sQ2xhc3NlcywgaWQsIGlubmVyVGV4dCwgY2hpbGRFbGVtZW50KTtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IFwiZGl2XCI7XHJcbiAgICAgIHRoaXMuX2lzQ2xvc2VUYWcgPSB0cnVlO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFBcclxuXHJcbmV4cG9ydCBjbGFzcyBIdG1sUEVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGh0bWxDbGFzc2VzOiBzdHJpbmcgfCBmYWxzZSwgaWQ6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ6IEh0bWxFbGVtZW50W10gfCBmYWxzZSkge1xyXG4gICAgICBzdXBlcihodG1sQ2xhc3NlcywgaWQsIGlubmVyVGV4dCwgY2hpbGRFbGVtZW50KTtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IFwicFwiO1xyXG4gICAgICB0aGlzLl9pc0Nsb3NlVGFnID0gdHJ1ZTtcclxuICAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBIMS1INlxyXG5cclxuZXhwb3J0IGNsYXNzIEh0bWxIMUVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGh0bWxDbGFzc2VzOiBzdHJpbmcgfCBmYWxzZSwgaWQ6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ6IEh0bWxFbGVtZW50W10gfCBmYWxzZSkge1xyXG4gICAgICBzdXBlcihodG1sQ2xhc3NlcywgaWQsIGlubmVyVGV4dCwgY2hpbGRFbGVtZW50KTtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IFwiaDFcIjtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gTkFWXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbE5hdkVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGh0bWxDbGFzc2VzOiBzdHJpbmcgfCBmYWxzZSwgaWQ6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ6IEh0bWxFbGVtZW50W10gfCBmYWxzZSkge1xyXG4gICAgICBzdXBlcihodG1sQ2xhc3NlcywgaWQsIGlubmVyVGV4dCwgY2hpbGRFbGVtZW50KTtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IFwibmF2XCI7XHJcbiAgICAgIHRoaXMuX2lzQ2xvc2VUYWcgPSB0cnVlO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEJVVFRPTlxyXG5cclxuZXhwb3J0IGNsYXNzIEh0bWxCdXR0b25FbGVtZW50IGV4dGVuZHMgSHRtbEVsZW1lbnQge1xyXG4gICBjb25zdHJ1Y3RvcihodG1sQ2xhc3Nlczogc3RyaW5nIHwgZmFsc2UsIGlkOiBzdHJpbmcgfCBmYWxzZSwgaW5uZXJUZXh0OiBzdHJpbmcgfCBmYWxzZSwgY2hpbGRFbGVtZW50OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoaHRtbENsYXNzZXMsIGlkLCBpbm5lclRleHQsIGNoaWxkRWxlbWVudCk7XHJcbiAgICAgIHRoaXMuX3RhZ05hbWUgPSBcImJ1dHRvblwiO1xyXG4gICAgICB0aGlzLl9pc0Nsb3NlVGFnID0gdHJ1ZTtcclxuICAgfVxyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gSEVBREVSXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbEhlYWRlckVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGh0bWxDbGFzc2VzOiBzdHJpbmcgfCBmYWxzZSwgaWQ6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ6IEh0bWxFbGVtZW50W10gfCBmYWxzZSkge1xyXG4gICAgICBzdXBlcihodG1sQ2xhc3NlcywgaWQsIGlubmVyVGV4dCwgY2hpbGRFbGVtZW50KTtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IFwiaGVhZGVyXCI7XHJcbiAgICAgIHRoaXMuX2lzQ2xvc2VUYWcgPSB0cnVlO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIE1BSU5cclxuXHJcbmV4cG9ydCBjbGFzcyBIdG1sTWFpbkVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGh0bWxDbGFzc2VzOiBzdHJpbmcgfCBmYWxzZSwgaWQ6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ6IEh0bWxFbGVtZW50W10gfCBmYWxzZSkge1xyXG4gICAgICBzdXBlcihodG1sQ2xhc3NlcywgaWQsIGlubmVyVGV4dCwgY2hpbGRFbGVtZW50KTtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IFwibWFpblwiO1xyXG4gICAgICB0aGlzLl9pc0Nsb3NlVGFnID0gdHJ1ZTtcclxuICAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBGT09URVJcclxuXHJcbmV4cG9ydCBjbGFzcyBIdG1sZm9vdGVyRWxlbWVudCBleHRlbmRzIEh0bWxFbGVtZW50IHtcclxuICAgY29uc3RydWN0b3IoaHRtbENsYXNzZXM6IHN0cmluZyB8IGZhbHNlLCBpZDogc3RyaW5nIHwgZmFsc2UsIGlubmVyVGV4dDogc3RyaW5nIHwgZmFsc2UsIGNoaWxkRWxlbWVudDogSHRtbEVsZW1lbnRbXSB8IGZhbHNlKSB7XHJcbiAgICAgIHN1cGVyKGh0bWxDbGFzc2VzLCBpZCwgaW5uZXJUZXh0LCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gXCJmb290ZXJcIjtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufSJdfQ==
