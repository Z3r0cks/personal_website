export class HtmlElement {
   protected _tagName: string;
   protected _htmlClasses: string | false;
   protected _id: string | false;
   protected _childElements: HtmlElement[] | false;
   protected _innerText: string | false;

   constructor(tagName: string, htmlClasses: string | false, id: string | false, innerText: string | false, childElement: HtmlElement[] | false) {
      this._tagName = tagName;
      this._htmlClasses = htmlClasses;
      this._id = id;
      this._innerText = innerText
      this._childElements = childElement;
   }

   isCloseTag(tag: string) {
      if (tag == "div" || tag == "p" || tag == "nav" || tag == "head" || tag == "h1" || tag == "h2" || tag == "h3" || tag == "h4" || tag == "h5" || tag == "h6" || tag == "footer" || tag == "main" || tag == "butto" || tag == "input") return true;
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
      const closeTag: string = this.isCloseTag(this._tagName) ? `</${this._tagName}>` : "";
      return openTag + text + childElements + closeTag;
   }
}


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
