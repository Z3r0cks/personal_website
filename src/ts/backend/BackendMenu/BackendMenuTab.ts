import { brotliDecompressSync } from "zlib";
import { addHtmlElement } from "../../helper/helper";
import CloseSvg from "../../svg/CloseSvg";
import SaveSvg from "../../svg/SaveSvg";

export default abstract class BackendMenuTab {
   protected _name: string;
   protected _wrapper: HTMLDivElement;
   protected _closeSVG: CloseSvg;

   constructor(name: string) {
      this._closeSVG = new CloseSvg("be_closeSvg be_closeSvg__tabsvg", "", "#effcef");
      this._name = name;
      this._wrapper = addHtmlElement("div", "be_tabWrapper") as HTMLDivElement;
      document.body.appendChild(this._wrapper);
   }

   createMenu(htmlElements) {
      this._wrapper.append(this._closeSVG.svg)
      htmlElements.forEach(e => {
         this._wrapper.appendChild(e);
      })
   }

   checkNecessaryInput(inputElements: HTMLInputElement[]) {
      let inputDone: boolean = true;
      inputElements.forEach(e => {
         if (e.value == undefined || e.value == "") inputDone = false;
      })
      return inputDone;
   }
}