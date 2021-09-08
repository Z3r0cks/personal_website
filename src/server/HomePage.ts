import { HtmlElement, HtmlMainElement, HtmlBodyElement, HtmlButtonElement, HtmlDivElement, HtmlHElement, HtmlHeaderElement, HtmlNavElement, HtmlPElement } from "./HtmlElement"
import { Html } from "./createHtml"
import { Page } from "./Page";
import Settings from "./interfaces/Settings";
import TablePersonalWebsite from "./interfaces/TablePersonalWebsite";

export class HomePage extends Page {

   constructor() {
      super()
   }

   async buildPage() {
      let contentElements: HtmlElement[] = await this.getContent();
      const list: HtmlDivElement = new HtmlDivElement("sdf", false, false, [new HtmlHElement(false, false, false, false, "h1")])
      try {
         // const response: TablePersonalWebsite = await this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'") as TablePersonalWebsite;
         // const titleName: string = response[0].Text_Content;
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

         this.main = new HtmlMainElement(false, false, false, contentElements)

         this.body = new HtmlBodyElement(false, false, false, [this.header, this.main])
      } catch (error) {
         this.html = new Html("de", "./css/style.css", "ERROR", ["./js/main.js"]);
         this.body = new HtmlBodyElement("bodyClass", "bodyID", false, [
            new HtmlPElement("main", "main", "Test", false)
         ])
         // const response: TablePersonalWebsite = await this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'") as TablePersonalWebsite;
      }
   }

   getHtmlString() {
      return this.html.newHTML([
         this.body,
      ]);
   }

   private async getContent(): Promise<HtmlElement[]> {
      const response: TablePersonalWebsite = await this.query("SELECT * FROM `content`") as TablePersonalWebsite;
      const htmlList: HtmlElement[] = [];
      response.forEach(async function (e) {
         return htmlList.push(getHTMLType(e));
      })
      function getHTMLType(res) {
         const thisSettings: Settings = JSON.parse(res.SETTINGS);
         switch (res.DEV_NAME) {
            case "c_title":
               return new HtmlHElement("c_title", false, "lorem Ipsum überschrift", false, thisSettings.type);
         }
      }
      return htmlList;
   }
}