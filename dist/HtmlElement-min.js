"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HtmlElement=void 0;class HtmlElement{constructor(t,e,s,i,h){this._tagName=t,this._htmlClasses=e,this._id=s,this._innerText=i,this._childElements=h}isCloseTag(t){if("div"==t||"p"==t||"nav"==t||"head"==t||"h1"==t||"h2"==t||"h3"==t||"h4"==t||"h5"==t||"h6"==t||"footer"==t||"main"==t||"butto"==t||"input"==t)return!0}toStringChildElements(t){let e="";return t.forEach(t=>{e+=t.createNewElement()}),e}createNewElement(){let t;return(t=0!=this._htmlClasses?0!=this._id?`<${this._tagName} class="${this._htmlClasses}" id="${this._id}">`:`<${this._tagName} class="${this._htmlClasses}">`:0==this._htmlClasses&&0!=this._id?`<${this._tagName} id="${this._id}">`:`<${this._tagName}>`)+(0!=this._innerText?this._innerText:"")+(0!=this._childElements?this.toStringChildElements(this._childElements):"")+(this.isCloseTag(this._tagName)?`</${this._tagName}>`:"")}}exports.HtmlElement=HtmlElement;