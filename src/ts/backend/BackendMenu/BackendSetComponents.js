import { addBackendInput, addBackendP } from "../../helper/helper";
import SaveSvg from "../../svg/SaveSvg";
import BackendMenuTab from "./BackendMenuTab";
export default class BackendSetComponent extends BackendMenuTab {
    constructor() {
        super("Components");
        this._delteSaveSVG = new SaveSvg("be_saveSvg be_saveSvg__tabsvg", "", "#effcef");
        this._addSaveSVG = new SaveSvg("be_saveSvg be_saveSvg__tabsvg", "", "#effcef");
        this._inputDEV_NAME = addBackendInput("text", "DEV_NAME");
        this._inputPUP_NAME = addBackendInput("text", "PUP_NAME");
        this._inputDESCR = addBackendInput("text", "DESCR");
        this._descr_add = addBackendP("Componente hinzufügen");
        this._descr_delete = addBackendP("Component löschen");
        this._myqlDEV_NAME = "";
        this._mysqlPUP_NAME = "";
        this._mysqlDESCR = "";
        console.log("test");
        this.createMenu([this._descr_add, this._inputDEV_NAME, this._inputPUP_NAME, this._inputDESCR, this._addSaveSVG.svg, this._descr_delete, this._delteSaveSVG.svg]);
        this.addHandler([this._inputDEV_NAME, this._inputPUP_NAME, this._inputDESCR]);
    }
    addHandler(NecessaryInputElemts) {
        this._closeSVG.svg.addEventListener("click", () => {
            this._wrapper.remove();
        });
        this._addSaveSVG.svg.addEventListener("click", () => {
            if (this.checkNecessaryInput(NecessaryInputElemts)) {
                fetch("/ad", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ devName: this._inputDEV_NAME.value, pupName: this._inputPUP_NAME.value, descr: this._inputDESCR.value })
                });
            }
        });
    }
}
