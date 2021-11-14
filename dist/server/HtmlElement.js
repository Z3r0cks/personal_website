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
