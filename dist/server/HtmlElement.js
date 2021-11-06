"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlfooterElement = exports.HtmlMainElement = exports.HtmlHeaderElement = exports.HtmlButtonElement = exports.HtmlNavElement = exports.HtmlHElement = exports.HtmlPElement = exports.HtmlDivElement = exports.HtmlBodyElement = exports.HtmlElement = void 0;
class HtmlElement {
    constructor(attributes, innerText, childElement) {
        this._tagName = "undefined";
        this._attributes = attributes;
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
        const openTag = this._attributes ? `<${this._tagName} ${this._attributes}">` : `<${this._tagName}>`;
        const text = this._innerText != false ? this._innerText : "";
        const childElements = this._childElements ? this.toStringChildElements(this._childElements) : "";
        const closeTag = this._isCloseTag ? `</${this._tagName}>` : "";
        return openTag + text + childElements + closeTag;
    }
}
exports.HtmlElement = HtmlElement;
//////////////////////////////// DIV
class HtmlBodyElement extends HtmlElement {
    constructor(childElement) {
        super(false, false, childElement);
        this._tagName = "body";
        this._isCloseTag = true;
    }
}
exports.HtmlBodyElement = HtmlBodyElement;
//////////////////////////////// DIV
class HtmlDivElement extends HtmlElement {
    constructor(attributes, innerText, childElement) {
        super(attributes, innerText, childElement);
        this._tagName = "div";
        this._isCloseTag = true;
    }
}
exports.HtmlDivElement = HtmlDivElement;
//////////////////////////////// P
class HtmlPElement extends HtmlElement {
    constructor(attributes, innerText, childElement) {
        super(attributes, innerText, childElement);
        this._tagName = "p";
        this._isCloseTag = true;
    }
}
exports.HtmlPElement = HtmlPElement;
//////////////////////////////// H1-H6
class HtmlHElement extends HtmlElement {
    constructor(attributes, innerText, type, childElement) {
        super(attributes, innerText, childElement);
        this._tagName = type;
        this._isCloseTag = true;
    }
}
exports.HtmlHElement = HtmlHElement;
//////////////////////////////// NAV
class HtmlNavElement extends HtmlElement {
    constructor(attributes, innerText, childElement) {
        super(attributes, innerText, childElement);
        this._tagName = "nav";
        this._isCloseTag = true;
    }
}
exports.HtmlNavElement = HtmlNavElement;
//////////////////////////////// BUTTON
class HtmlButtonElement extends HtmlElement {
    constructor(attributes, innerText, childElement) {
        super(attributes, innerText, childElement);
        this._tagName = "button";
        this._isCloseTag = true;
    }
}
exports.HtmlButtonElement = HtmlButtonElement;
//////////////////////////////// HEADER
class HtmlHeaderElement extends HtmlElement {
    constructor(attributes, innerText, childElement) {
        super(attributes, innerText, childElement);
        this._tagName = "header";
        this._isCloseTag = true;
    }
}
exports.HtmlHeaderElement = HtmlHeaderElement;
//////////////////////////////// MAIN
class HtmlMainElement extends HtmlElement {
    constructor(childElement) {
        super(false, false, childElement);
        this._tagName = "main";
        this._isCloseTag = true;
    }
}
exports.HtmlMainElement = HtmlMainElement;
//////////////////////////////// FOOTER
class HtmlfooterElement extends HtmlElement {
    constructor(attributes, innerText, childElement) {
        super(attributes, innerText, childElement);
        this._tagName = "footer";
        this._isCloseTag = true;
    }
}
exports.HtmlfooterElement = HtmlfooterElement;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QW9DO1FBQzdDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7Q0FDSDtBQU5ELDBDQU1DO0FBRUQsdUNBQXVDO0FBRXZDLE1BQWEsaUJBQWtCLFNBQVEsV0FBVztJQUMvQyxZQUFZLFVBQTBCLEVBQUUsU0FBeUIsRUFBRSxZQUFvQztRQUNwRyxLQUFLLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0NBQ0g7QUFORCw4Q0FNQyIsImZpbGUiOiJIdG1sRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIdG1sRWxlbWVudCB7XHJcbiAgIHByb3RlY3RlZCBfdGFnTmFtZTogc3RyaW5nO1xyXG4gICBwcm90ZWN0ZWQgX2F0dHJpYnV0ZXM6IHN0cmluZyB8IGZhbHNlO1xyXG4gICBwcm90ZWN0ZWQgX2NoaWxkRWxlbWVudHM6IEh0bWxFbGVtZW50W10gfCBmYWxzZTtcclxuICAgcHJvdGVjdGVkIF9pbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlO1xyXG4gICBwcm90ZWN0ZWQgX2lzQ2xvc2VUYWc6IGJvb2xlYW47XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzOiBzdHJpbmcgfCBmYWxzZSwgaW5uZXJUZXh0OiBzdHJpbmcgfCBmYWxzZSwgY2hpbGRFbGVtZW50PzogSHRtbEVsZW1lbnRbXSB8IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuX3RhZ05hbWUgPSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcclxuICAgICAgdGhpcy5faW5uZXJUZXh0ID0gaW5uZXJUZXh0XHJcbiAgICAgIHRoaXMuX2NoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX2lzQ2xvc2VUYWcgPSBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgdG9TdHJpbmdDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHM6IEh0bWxFbGVtZW50W10pIHtcclxuICAgICAgbGV0IHN0cmluZzogc3RyaW5nID0gXCJcIjtcclxuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgZWwuY3JlYXRlTmV3RWxlbWVudCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHN0cmluZ1xyXG4gICB9XHJcblxyXG4gICBjcmVhdGVOZXdFbGVtZW50KCk6IHN0cmluZyB7XHJcbiAgICAgIGNvbnN0IG9wZW5UYWc6IHN0cmluZyA9IHRoaXMuX2F0dHJpYnV0ZXMgPyBgPCR7dGhpcy5fdGFnTmFtZX0gJHt0aGlzLl9hdHRyaWJ1dGVzfVwiPmAgOiBgPCR7dGhpcy5fdGFnTmFtZX0+YDtcclxuICAgICAgY29uc3QgdGV4dDogc3RyaW5nID0gdGhpcy5faW5uZXJUZXh0ICE9IGZhbHNlID8gdGhpcy5faW5uZXJUZXh0IDogXCJcIjtcclxuICAgICAgY29uc3QgY2hpbGRFbGVtZW50czogc3RyaW5nID0gdGhpcy5fY2hpbGRFbGVtZW50cyA/IHRoaXMudG9TdHJpbmdDaGlsZEVsZW1lbnRzKHRoaXMuX2NoaWxkRWxlbWVudHMpIDogXCJcIjtcclxuICAgICAgY29uc3QgY2xvc2VUYWc6IHN0cmluZyA9IHRoaXMuX2lzQ2xvc2VUYWcgPyBgPC8ke3RoaXMuX3RhZ05hbWV9PmAgOiBcIlwiO1xyXG4gICAgICByZXR1cm4gb3BlblRhZyArIHRleHQgKyBjaGlsZEVsZW1lbnRzICsgY2xvc2VUYWc7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gRElWXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbEJvZHlFbGVtZW50IGV4dGVuZHMgSHRtbEVsZW1lbnQge1xyXG4gICBjb25zdHJ1Y3RvcihjaGlsZEVsZW1lbnQ6IEh0bWxFbGVtZW50W10pIHtcclxuICAgICAgc3VwZXIoZmFsc2UsIGZhbHNlLCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gXCJib2R5XCI7XHJcbiAgICAgIHRoaXMuX2lzQ2xvc2VUYWcgPSB0cnVlO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIERJVlxyXG5cclxuZXhwb3J0IGNsYXNzIEh0bWxEaXZFbGVtZW50IGV4dGVuZHMgSHRtbEVsZW1lbnQge1xyXG4gICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzOiBzdHJpbmcgfCBmYWxzZSwgaW5uZXJUZXh0OiBzdHJpbmcgfCBmYWxzZSwgY2hpbGRFbGVtZW50PzogSHRtbEVsZW1lbnRbXSB8IGZhbHNlKSB7XHJcbiAgICAgIHN1cGVyKGF0dHJpYnV0ZXMsIGlubmVyVGV4dCwgY2hpbGRFbGVtZW50KTtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IFwiZGl2XCI7XHJcbiAgICAgIHRoaXMuX2lzQ2xvc2VUYWcgPSB0cnVlO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFBcclxuXHJcbmV4cG9ydCBjbGFzcyBIdG1sUEVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXM6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ/OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoYXR0cmlidXRlcywgaW5uZXJUZXh0LCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gXCJwXCI7XHJcbiAgICAgIHRoaXMuX2lzQ2xvc2VUYWcgPSB0cnVlO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEgxLUg2XHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbEhFbGVtZW50IGV4dGVuZHMgSHRtbEVsZW1lbnQge1xyXG4gICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzOiBzdHJpbmcgfCBmYWxzZSwgaW5uZXJUZXh0OiBzdHJpbmcgfCBmYWxzZSwgdHlwZTogc3RyaW5nLCBjaGlsZEVsZW1lbnQ/OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoYXR0cmlidXRlcywgaW5uZXJUZXh0LCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gdHlwZTtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gTkFWXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbE5hdkVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXM6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ/OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoYXR0cmlidXRlcywgaW5uZXJUZXh0LCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gXCJuYXZcIjtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQlVUVE9OXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbEJ1dHRvbkVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXM6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ/OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoYXR0cmlidXRlcywgaW5uZXJUZXh0LCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gXCJidXR0b25cIjtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gSEVBREVSXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbEhlYWRlckVsZW1lbnQgZXh0ZW5kcyBIdG1sRWxlbWVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXM6IHN0cmluZyB8IGZhbHNlLCBpbm5lclRleHQ6IHN0cmluZyB8IGZhbHNlLCBjaGlsZEVsZW1lbnQ/OiBIdG1sRWxlbWVudFtdIHwgZmFsc2UpIHtcclxuICAgICAgc3VwZXIoYXR0cmlidXRlcywgaW5uZXJUZXh0LCBjaGlsZEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl90YWdOYW1lID0gXCJoZWFkZXJcIjtcclxuICAgICAgdGhpcy5faXNDbG9zZVRhZyA9IHRydWU7XHJcbiAgIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gTUFJTlxyXG5cclxuZXhwb3J0IGNsYXNzIEh0bWxNYWluRWxlbWVudCBleHRlbmRzIEh0bWxFbGVtZW50IHtcclxuICAgY29uc3RydWN0b3IoY2hpbGRFbGVtZW50PzogSHRtbEVsZW1lbnRbXSB8IGZhbHNlKSB7XHJcbiAgICAgIHN1cGVyKGZhbHNlLCBmYWxzZSwgY2hpbGRFbGVtZW50KTtcclxuICAgICAgdGhpcy5fdGFnTmFtZSA9IFwibWFpblwiO1xyXG4gICAgICB0aGlzLl9pc0Nsb3NlVGFnID0gdHJ1ZTtcclxuICAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBGT09URVJcclxuXHJcbmV4cG9ydCBjbGFzcyBIdG1sZm9vdGVyRWxlbWVudCBleHRlbmRzIEh0bWxFbGVtZW50IHtcclxuICAgY29uc3RydWN0b3IoYXR0cmlidXRlczogc3RyaW5nIHwgZmFsc2UsIGlubmVyVGV4dDogc3RyaW5nIHwgZmFsc2UsIGNoaWxkRWxlbWVudD86IEh0bWxFbGVtZW50W10gfCBmYWxzZSkge1xyXG4gICAgICBzdXBlcihhdHRyaWJ1dGVzLCBpbm5lclRleHQsIGNoaWxkRWxlbWVudCk7XHJcbiAgICAgIHRoaXMuX3RhZ05hbWUgPSBcImZvb3RlclwiO1xyXG4gICAgICB0aGlzLl9pc0Nsb3NlVGFnID0gdHJ1ZTtcclxuICAgfVxyXG59Il19
