import { wrap } from "module";
import { addHtmlElement } from "../../helper/helper";

export default class BackendMenu {
   protected _componentMenu: string;
   protected _placeholder1: string;
   protected _placeholder2: string;
   protected _placeholder3: string;
   protected _wrapper: HTMLDivElement;
   protected _menuContent: string[];

   constructor(componentMenu: string, placeholder1: string, placeholder2: string, placeholder3: string) {
      this._componentMenu = componentMenu;
      this._placeholder1 = placeholder1;
      this._placeholder2 = placeholder2;
      this._placeholder3 = placeholder3;
      this._menuContent = [componentMenu, placeholder1, placeholder2, placeholder3]
      this._wrapper = addHtmlElement("div", "be_backendMenu__wrapper", "be_backendMenu_wrapper") as HTMLDivElement;
   }

   createMenu() {
      this._menuContent.forEach(e => {
         document.createElement("a")
         const newlink: HTMLAnchorElement = addHtmlElement("a", "be_componentMenu__a") as HTMLAnchorElement;
         newlink.href = `#${e}`;
         this._wrapper.appendChild(newlink);
      })
      document.body.appendChild(this._wrapper);
   }
}