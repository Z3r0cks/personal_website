import { HtmlBodyElement, HtmlButtonElement, HtmlDivElement, HtmlH1Element, HtmlHeaderElement, HtmlNavElement, HtmlPElement } from "./HtmlElement"
import { Html } from "./createHtml"
import { Page } from "./Page";
import TablePersonalWebsite from "./interfaces/TablePersonalWebsite";
import { HtmlElement } from "../../dist/server/HtmlElement";

export class HomePage extends Page {

   constructor() {
      super()
   }

   async buildPage() {
      const list: HtmlDivElement = new HtmlDivElement("sdf", false, false, [new HtmlH1Element(false, false, false, false)])
      try {
         // const response: TablePersonalWebsite = await this.query("SELECT * FROM `content` WHERE `Name` = 'title_name'") as TablePersonalWebsite;
         // const titleName: string = response[0].Text_Content;
         // const HTMLList: HtmlElement = this.getContent();
         // console.log(HTMLList);
         this.html = new Html("de", "./css/style.css", "Mein Title", ["./js/main.js"]);
         this.header = new HtmlHeaderElement(false, false, false, [
            new HtmlNavElement("navbar", false, false, [
               new HtmlH1Element("navTitle", false, "Patrick Kaserer", false, "h1"),
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

   private async getContent(): Promise<HtmlElement[]> {
      const response: TablePersonalWebsite = await this.query("SELECT * FROM `content`") as TablePersonalWebsite;
      const htmlList: HtmlElement[] = [];
      console.log(htmlList);
      response.forEach(async function (e) {
         return htmlList.push(getHTMLType(e));
      })

      function getHTMLType(res) {
         switch (res.DEV_NAME) {
            case "c_title":
               return new HtmlH1Element("c_title", false, "lorem Ipsum überschrift", false, "h1");
         }
      }
      return htmlList;
   }
}