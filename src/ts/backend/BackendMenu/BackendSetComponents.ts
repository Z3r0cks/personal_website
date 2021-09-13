import { addBackendInput, addBackendP } from "../../helper/helper";
import SaveSvg from "../../svg/SaveSvg";
import BackendMenuTab from "./BackendMenuTab";

export default class BackendSetComponent extends BackendMenuTab {
   protected _delteSaveSVG: SaveSvg;
   protected _addSaveSVG: SaveSvg;
   protected _descr_delete: HTMLParagraphElement;
   protected _descr_add: HTMLParagraphElement;
   protected _inputDEV_NAME: HTMLInputElement;
   protected _inputPUP_NAME: HTMLInputElement;
   protected _inputDESCR: HTMLInputElement;
   protected _myqlDEV_NAME: string;
   protected _mysqlPUP_NAME: string;
   protected _mysqlDESCR: string;

   constructor() {
      super("Components");
      this._delteSaveSVG = new SaveSvg("be_saveSvg be_saveSvg__tabsvg", "", "#effcef")
      this._addSaveSVG = new SaveSvg("be_saveSvg be_saveSvg__tabsvg", "", "#effcef")
      this._inputDEV_NAME = addBackendInput("text", "DEV_NAME") as HTMLInputElement;
      this._inputPUP_NAME = addBackendInput("text", "PUP_NAME") as HTMLInputElement;
      this._inputDESCR = addBackendInput("text", "DESCR") as HTMLInputElement;
      this._descr_add = addBackendP("Componente hinzufügen");
      this._descr_delete = addBackendP("Component löschen");
      this._myqlDEV_NAME = "";
      this._mysqlPUP_NAME = "";
      this._mysqlDESCR = "";
      // Mind The Order
      console.log("test");
      this.createMenu([this._descr_add, this._inputDEV_NAME, this._inputPUP_NAME, this._inputDESCR, this._addSaveSVG.svg, this._descr_delete, this._delteSaveSVG.svg]);

      // put NecessaryInputElemts
      this.addHandler([this._inputDEV_NAME, this._inputPUP_NAME, this._inputDESCR])
   }

   addHandler(NecessaryInputElemts: HTMLInputElement[]) {
      this._closeSVG.svg.addEventListener("click", () => {
         this._wrapper.remove();
      })

      this._addSaveSVG.svg.addEventListener("click", () => {
         if (this.checkNecessaryInput(NecessaryInputElemts)) {
            fetch("/ad", {
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({ devName: this._inputDEV_NAME.value, pupName: this._inputPUP_NAME.value, descr: this._inputDESCR.value })
            })
         }
      })
   }
}