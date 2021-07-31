export abstract class HtmlElement {
   protected _tagName: string;
   protected _htmlClasses: string | false;
   protected _id: string | false;
   protected _childElements: HtmlElement[] | false;
   protected _innerText: string | false;
   protected _isCloseTag: boolean;

   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      this._tagName = "undefined";
      this._htmlClasses = htmlClasses;
      this._id = id;
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
      let openTag: string;
      if (this._htmlClasses != false) {
         openTag = (this._id != false) ? `<${this._tagName} class="${this._htmlClasses}" id="${this._id}">` : `<${this._tagName} class="${this._htmlClasses}">`;
      } else if (this._htmlClasses == false && this._id != false) {
         openTag = `<${this._tagName} id="${this._id}">`
      } else {
         openTag = `<${this._tagName}>`
      }
      const text: string = this._innerText != false ? this._innerText : "";
      const childElements: string = this._childElements != false ? this.toStringChildElements(this._childElements) : "";
      const closeTag: string = this._isCloseTag ? `</${this._tagName}>` : "";
      return openTag + text + childElements + closeTag;
   }
}


//////////////////////////////// DIV

export class HtmlDivElement extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "div";
      this._isCloseTag = true;
   }
}

//////////////////////////////// P

export class HtmlPElement extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "p";
      this._isCloseTag = true;
   }
}

//////////////////////////////// H1-H6

export class HtmlH1Element extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "h1";
      this._isCloseTag = true;
   }
}
export class HtmlH2Element extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "h2";
      this._isCloseTag = true;
   }
}
export class HtmlH3Element extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "h3";
      this._isCloseTag = true;
   }
}
export class HtmlH4Element extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "h4";
      this._isCloseTag = true;
   }
}
export class HtmlH5Element extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "h5";
      this._isCloseTag = true;
   }
}
export class HtmlH6Element extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "h6";
      this._isCloseTag = true;
   }
}

//////////////////////////////// NAV

export class HtmlNavElement extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "nav";
      this._isCloseTag = true;
   }
}

//////////////////////////////// NAV

export class HtmlButtonElement extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "button";
      this._isCloseTag = true;
   }
}


//////////////////////////////// HEADER

export class HtmlHeaderElement extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "header";
      this._isCloseTag = true;
   }
}

//////////////////////////////// MAIN

export class HtmlMainElement extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "main";
      this._isCloseTag = true;
   }
}

//////////////////////////////// footer

export class HtmlfooterElement extends HtmlElement {
   constructor(htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      super(htmlClasses, id, innerText, childElement);
      this._tagName = "footer";
      this._isCloseTag = true;
   }
}