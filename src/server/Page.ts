import { HtmlButtonElement, HtmlDivElement, HtmlH3Element, HtmlHeaderElement, HtmlNavElement } from "./HtmlElement"
import { createHTML } from "./createHtml"

const html = new createHTML("de", "./css/style.css", "Mein Title", ["./js/app.js"]);
const header = new HtmlHeaderElement(false, false, false, [
   new HtmlNavElement("navbar", false, false, [
      new HtmlH3Element("navTitle", false, "Patrick Kaserer", false),
      new HtmlDivElement(false, false, false, [
         new HtmlButtonElement("btn btn--second", false, "über mich", false),
         new HtmlButtonElement("btn btn--second", false, "Referenzen", false),
         new HtmlButtonElement("btn btn--main", false, "Kontakt", false),
      ])
   ])
])

export class assambleHTML {
   getHtmlString() {
      console.log(html.newHTML([header]));
      return html.newHTML([
         header,
      ]);
   }
}