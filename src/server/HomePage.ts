import { HtmlBodyElement, HtmlButtonElement, HtmlDivElement, HtmlH3Element, HtmlHeaderElement, HtmlNavElement, HtmlPElement } from "./HtmlElement"
import { Html } from "./createHtml"
import { Page } from "./Page";
import { TablePersonalWebsite } from "./interfaces/TablePersonalWebsite";

export class HomePage extends Page {

   constructor() {
      super()
   }

   async buildPage() {
      try {
         // const response: TablePersonalWebsite = await this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'") as TablePersonalWebsite;
         // const titleName: string = response[0].Text_Content;
         this.html = new Html("de", "./css/style.css", "Mein Title", ["./js/main.js"]);
         this.header = new HtmlHeaderElement(false, false, false, [
            new HtmlNavElement("navbar", false, false, [
               new HtmlH3Element("navTitle", false, "Patrick Kaserer", false),
               new HtmlDivElement(false, false, false, [
                  new HtmlButtonElement("btn btn--second", false, "über mich", false),
                  new HtmlButtonElement("btn btn--second", false, "Referenzen", false),
                  new HtmlButtonElement("btn btn--main", false, "Kontakt", false),
               ])
            ])
         ])
         this.body = new HtmlBodyElement("bodyClass", "bodyID", false, [this.header])
      } catch (error) {
         this.html = new Html("de", "./css/style.css", "ERROR", ["./js/main.js"]);
         this.body = new HtmlBodyElement("bodyClass", "bodyID", false, [
            new HtmlPElement(false, false, error, false)
         ])
         // const response: TablePersonalWebsite = await this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'") as TablePersonalWebsite;
      }
   }

   getHtmlString() {
      return this.html.newHTML([
         this.body,
      ]);
   }
}