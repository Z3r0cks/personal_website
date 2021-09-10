import { MysqlError } from "mysql";
import { Page } from "./Page";

export class Backend extends Page {

   async executeSQL<T>(query: string): Promise<T | MysqlError> {
      return this.query(query)
   }

   async buildPage() { }
   getHtmlString() {
      return "";
   }
}