// import { HtmlDivElement } from "./HtmlElement"
import { HtmlElement } from "./HtmlElement"
import { createHTML } from "./createHtml"


const html = new createHTML("de", "./css/style.css", "Mein Title", ["./js/app.js"]);
const header = new HtmlElement("header", false, false, false, [
   new HtmlElement("nav", "navbar", false, false, [
      new HtmlElement("h3", "navTitle", false, "Patrick Kaserer", false),
      new HtmlElement("div", false, false, false, [
         new HtmlElement("button", "btn btn--second", false, "über mich", false),
         new HtmlElement("button", "btn btn--second", false, "Referenzen", false),
         new HtmlElement("button", "btn btn--main", false, "Kontakt", false)
      ])
   ])
]);


export class assambleHTML {
   getHtmlString() {
      return html.newHTML([
         header,
         new HtmlElement("div", "devBtn", false, false, false)
      ]);
   }
}