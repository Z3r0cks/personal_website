"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../helper/helper");
const CloseSvg_1 = __importDefault(require("../../svg/CloseSvg"));
class BackendMenuTab {
    constructor(name) {
        this._closeSVG = new CloseSvg_1.default("be_closeSvg be_closeSvg__tabsvg", "", "#effcef");
        this._name = name;
        this._wrapper = helper_1.addHtmlElement("div", "be_tabWrapper");
        document.body.appendChild(this._wrapper);
    }
    createMenu(htmlElements) {
        this._wrapper.append(this._closeSVG.svg);
        htmlElements.forEach(e => {
            this._wrapper.appendChild(e);
        });
    }
    checkNecessaryInput(inputElements) {
        let inputDone = true;
        inputElements.forEach(e => {
            if (e.value == undefined || e.value == "")
                inputDone = false;
        });
        return inputDone;
    }
}
exports.default = BackendMenuTab;
