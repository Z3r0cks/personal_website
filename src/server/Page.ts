import mysql, { Connection, MysqlError } from "mysql";
import fs from 'fs';
import { DatabaseConfig } from "./interfaces/databaseConfig";
import { Html } from "./createHtml";
import { HtmlBodyElement, HtmlfooterElement, HtmlHeaderElement } from "./HtmlElement";

export abstract class Page {
   protected connection: Connection;
   protected html: Html;
   protected body: HtmlBodyElement;
   protected header: HtmlHeaderElement;
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
   abstract buildPage(): void;
   abstract getHtmlString(): string;
}