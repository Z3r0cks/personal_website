"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html = void 0;
class Html {
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
exports.Html = Html;
