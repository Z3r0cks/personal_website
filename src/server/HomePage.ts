import { HtmlElement, HtmlMainElement, HtmlBodyElement, HtmlButtonElement, HtmlDivElement, HtmlHElement, HtmlHeaderElement, HtmlNavElement, HtmlPElement } from "./HtmlElement"
import { Html } from "./createHtml"
import { Page } from "./Page";

export class HomePage extends Page {

   constructor() {
      super()
   }

   async buildPage() {
      let content: HtmlElement[] = await this.getContent();
      try {
         this.html = new Html("de", "./css/style.css", "Mein Title", ["./js/main.js"]);

         this.header = new HtmlHeaderElement(false, false, false, [
            new HtmlNavElement("navbar", false, false, [
               new HtmlHElement("navTitle", false, "Patrick Kaserer", false, "h1"),
               new HtmlDivElement(false, false, false, [
                  new HtmlButtonElement("btn btn--second", false, "über mich", false),
                  new HtmlButtonElement("btn btn--second", false, "Referenzen", false),
                  new HtmlButtonElement("btn btn--main", false, "Kontakt", false),
               ])
            ])
         ])

         this.main = new HtmlMainElement(content)
         this.body = new HtmlBodyElement([this.header, this.main])
      } catch (error) {
         this.html = new Html("de", "./css/style.css", "ERROR", ["./js/main.js"]);
         this.body = new HtmlBodyElement([
            new HtmlPElement("main", "main", "Test", false)
         ])
      }
   }
}