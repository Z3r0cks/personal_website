export abstract class HtmlElement {
   protected _tagName: string;
   protected _attributes: string | false;
   protected _childElements: HtmlElement[] | false;
   protected _innerText: string | false;
   protected _isCloseTag: boolean;

   constructor(attributes: string | false, innerText: string | false, childElement?: HtmlElement[] | false) {
      this._tagName = "undefined";
      this._attributes = attributes;
      this._innerText = innerText
      this._childElements = childElement;
      this._isCloseTag = false;
   }

   toStringChildElements(childElements: HtmlElement[]) {
      let string: string = "";
      childElements.forEach(el => {
         string = string + el.createNewElement();
      });
      return string
   }

   createNewElement(): string {
      const openTag: string = this._attributes ? `<${this._tagName} ${this._attributes}">` : `<${this._tagName}>`;
      const text: string = this._innerText != false ? this._innerText : "";
      const childElements: string = this._childElements ? this.toStringChildElements(this._childElements) : "";
      const closeTag: string = this._isCloseTag ? `</${this._tagName}>` : "";
      return openTag + text + childElements + closeTag;
   }
}

//////////////////////////////// DIV

export class HtmlBodyElement extends HtmlElement {
   constructor(childElement: HtmlElement[]) {
      super(false, false, childElement);
      this._tagName = "body";
      this._isCloseTag = true;
   }
}

//////////////////////////////// DIV

export class HtmlDivElement extends HtmlElement {
   constructor(attributes: string | false, innerText: string | false, childElement?: HtmlElement[] | false) {
      super(attributes, innerText, childElement);
      this._tagName = "div";
      this._isCloseTag = true;
   }
}

//////////////////////////////// P

export class HtmlPElement extends HtmlElement {
   constructor(attributes: string | false, innerText: string | false, childElement?: HtmlElement[] | false) {
      super(attributes, innerText, childElement);
      this._tagName = "p";
      this._isCloseTag = true;
   }
}

//////////////////////////////// H1-H6

export class HtmlHElement extends HtmlElement {
   constructor(attributes: string | false, innerText: string | false, type: string, childElement?: HtmlElement[] | false) {
      super(attributes, innerText, childElement);
      this._tagName = type;
      this._isCloseTag = true;
   }
}

//////////////////////////////// NAV

export class HtmlNavElement extends HtmlElement {
   constructor(attributes: string | false, innerText: string | false, childElement?: HtmlElement[] | false) {
      super(attributes, innerText, childElement);
      this._tagName = "nav";
      this._isCloseTag = true;
   }
}

//////////////////////////////// BUTTON

export class HtmlButtonElement extends HtmlElement {
   constructor(attributes: string | false, innerText: string | false, childElement?: HtmlElement[] | false) {
      super(attributes, innerText, childElement);
      this._tagName = "button";
      this._isCloseTag = true;
   }
}

//////////////////////////////// HEADER

export class HtmlHeaderElement extends HtmlElement {
   constructor(attributes: string | false, innerText: string | false, childElement?: HtmlElement[] | false) {
      super(attributes, innerText, childElement);
      this._tagName = "header";
      this._isCloseTag = true;
   }
}

//////////////////////////////// MAIN

export class HtmlMainElement extends HtmlElement {
   constructor(childElement?: HtmlElement[] | false) {
      super(false, false, childElement);
      this._tagName = "main";
      this._isCloseTag = true;
   }
}

//////////////////////////////// FOOTER

export class HtmlfooterElement extends HtmlElement {
   constructor(attributes: string | false, innerText: string | false, childElement?: HtmlElement[] | false) {
      super(attributes, innerText, childElement);
      this._tagName = "footer";
      this._isCloseTag = true;
   }
}