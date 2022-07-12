import { addHtmlElement } from "../../helper/helper";
import CloseSvg from "../../svg/CloseSvg";
export default class BackendMenuTab {
    constructor(name) {
        this._closeSVG = new CloseSvg("be_closeSvg be_closeSvg__tabsvg", "", "#effcef");
        this._name = name;
        this._wrapper = addHtmlElement("div", "be_tabWrapper");
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
