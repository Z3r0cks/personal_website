"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../helper/helper");
const SaveSvg_1 = __importDefault(require("../../svg/SaveSvg"));
const BackendMenuTab_1 = __importDefault(require("./BackendMenuTab"));
class BackendSetComponent extends BackendMenuTab_1.default {
    constructor() {
        super("Components");
        this._delteSaveSVG = new SaveSvg_1.default("be_saveSvg be_saveSvg__tabsvg", "", "#effcef");
        this._addSaveSVG = new SaveSvg_1.default("be_saveSvg be_saveSvg__tabsvg", "", "#effcef");
        this._inputDEV_NAME = helper_1.addBackendInput("text", "DEV_NAME");
        this._inputPUP_NAME = helper_1.addBackendInput("text", "PUP_NAME");
        this._inputDESCR = helper_1.addBackendInput("text", "DESCR");
        this._descr_add = helper_1.addBackendP("Componente hinzufügen");
        this._descr_delete = helper_1.addBackendP("Component löschen");
        this._myqlDEV_NAME = "";
        this._mysqlPUP_NAME = "";
        this._mysqlDESCR = "";
        // Mind The Order
        this.createMenu([this._descr_add, this._inputDEV_NAME, this._inputPUP_NAME, this._inputDESCR, this._addSaveSVG.svg, this._descr_delete, this._delteSaveSVG.svg]);
        // put NecessaryInputElemts
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
exports.default = BackendSetComponent;
