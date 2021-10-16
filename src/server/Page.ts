import mysql, { Connection, MysqlError } from "mysql";
import fs from 'fs';
import { DatabaseConfig } from "./interfaces/databaseConfig";
import { Html } from "./createHtml";
import { HtmlElement, HtmlBodyElement, HtmlfooterElement, HtmlHeaderElement, HtmlMainElement, HtmlHElement, HtmlPElement } from "./HtmlElement";
import TablePersonalWebsite from "./interfaces/TablePersonalWebsite";

export abstract class Page {
   protected connection: Connection;
   protected html: Html;
   protected body: HtmlBodyElement;
   protected header: HtmlHeaderElement;
   protected main: HtmlMainElement;
   protected footer: HtmlfooterElement;

   constructor() {
      const dataBase: DatabaseConfig = JSON.parse(fs.readFileSync("databaseConfig.json").toString());
      this.connection = mysql.createConnection({
         host: dataBase.host,
         user: dataBase.user,
         password: dataBase.password,
         database: dataBase.name,
         port: dataBase.port
      })
   }

   protected query<T>(query: string): Promise<T | MysqlError> {
      return new Promise((resolve, reject) => {
         this.connection.connect();
         this.connection.query(query, (error: MysqlError, response: T) => {
            if (error) {
               reject(error);
            }
            else
               resolve(response);
         })
      })
   }
   async buildPage() {

   };

   protected async getContent(): Promise<HtmlElement[]> {
      const response: TablePersonalWebsite = await this.query("SELECT * FROM `content`") as TablePersonalWebsite;
      const htmlList: HtmlElement[] = [];
      response.forEach(e => {
         const settings = JSON.parse(e.SETTINGS);
         switch (e.DEV_NAME) {
            case "c_title":
               htmlList.push(new HtmlHElement("c_head", false, settings.content, false, settings.type))
               break;
            case "c_test":
               
               break;
         }
      })
      return htmlList
   }

   getHtmlString(): string {
      return this.html.newHTML([
         this.body
      ]);
   };
}