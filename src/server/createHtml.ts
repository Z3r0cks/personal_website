import { HtmlElement } from "./HtmlElement";

export class createHTML {
   protected _language: string;
   protected _styleHref: string;
   protected _title: string;
   protected _scriptsSRCs: string[];

   constructor(language: string, styleHref: string, title: string, scriptsSRCs: string[]) {
      this._language = language;
      this._styleHref = styleHref;
      this._title = title;
      this._scriptsSRCs = scriptsSRCs;
   }

   toStringChildElements(childElements: HtmlElement[]) {
      let string: string = "";
      childElements.forEach(el => {
         string = string + el.createNewElement();
      });
      return string
   }

   newHTML(childlements: HtmlElement[]) {
      const allScripts: string = this.scriptToString(this._scriptsSRCs);
      const childString: string = this.toStringChildElements(childlements);
      let newHTML: string = `<!DOCTYPE html>
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
      </html>`
      return newHTML;
   }

   scriptToString(scriptsSRCs: string[]) {
      let outString: string = ""
      scriptsSRCs.forEach(el => {
         outString = outString + `<script src="${el}" defer ></script>`
      })
      return outString;
   }
}