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

         this.header = new HtmlHeaderElement(false, false, [
            new HtmlNavElement("class='navbar'", false, [
               new HtmlHElement("class='navTitle'", "Patrick Kaserer", "h1"),
               new HtmlDivElement(false, false, [
                  new HtmlButtonElement("class='btn btn--second'", "über mich"),
                  new HtmlButtonElement("class='btn btn--second'", "Referenzen"),
                  new HtmlButtonElement("class='btn btn--main'", "Kontakt"),
               ])
            ])
         ])
         this.main = new HtmlMainElement(content)
         this.body = new HtmlBodyElement([this.header, this.main])
      } catch (error) {
         this.html = new Html("de", "./css/style.css", "ERROR", ["./js/main.js"]);
         this.body = new HtmlBodyElement([
            new HtmlPElement("class='main' id='main'", "Test")
         ])
      }
   }
}