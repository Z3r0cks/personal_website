import SaveSvg from '../../svg/SaveSvg';
import CloseSvg from '../../svg/CloseSvg';
import SettingsSvg from '../../svg/SettingsSVG';
import { addErrorElement, addHtmlElement, componentWrapper, removeElement } from '../../helper/helper';
;
;
export default class ansniComponent {
    constructor() {
        this._devTitle = "";
        this._keyWords = {};
        this._elements = { tagName: "", attr: {}, childrens: [] };
        this._coseSvg = new CloseSvg("be_closeSvg", "be_closeSvg", "#ff5454");
        this._saveSVG = new SaveSvg("be_saveSvg", "be_saveSvg", "#ff5454");
        ;
        this._settingsSVG = new SettingsSvg("be_settingsSvg", "be_settingsSvg", "#ff5454");
        this._innerWrapper = addHtmlElement("div", "be_innerCompWrapper");
        this._allElements = [];
        this._settings = { color: "", content: "", type: "" };
        this.createOverlay();
    }
    createOverlay() {
        this._innerWrapper.append(this._settingsSVG.svg, this._saveSVG.svg, this._coseSvg.svg);
        componentWrapper.append(this._innerWrapper);
        this.createBackendHtmlElements();
    }
    createBackendHtmlElements() { }
    setContentKeys(obj) {
        this._keyWords = { obj };
    }
    setSetting(ElObjects) {
        for (const [key, value] of Object.entries(ElObjects)) {
            this._innerWrapper.append(value);
        }
        componentWrapper.append(this._innerWrapper);
        this._saveSVG.svg.addEventListener("click", () => {
            if (this.checkNecessaryInput(ElObjects)) {
                console.log("correct");
                for (const [key, value] of Object.entries(ElObjects)) {
                    console.log(value);
                    if (value.classList[0] == "bE_form") {
                        value.querySelectorAll(".bE_select").forEach(e => { this._settings[key] = e.value; });
                    }
                    else if (value == "" || value == undefined)
                        return;
                    else
                        this._settings[key] = value.value;
                }
                this.postContent();
            }
            else {
                if (document.getElementById("titleError")) {
                    removeElement("titleError");
                }
                console.log("Not correct");
                const errorP = addErrorElement();
                this._innerWrapper.appendChild(errorP);
            }
        });
    }
    checkNecessaryInput(ElObjects) {
        let inputDone = true;
        console.log(ElObjects);
        for (const [key, value] of Object.entries(ElObjects)) {
            if (value.classList[0] != "bE_form") {
                if (value.value == undefined || value.value == "")
                    inputDone = false;
            }
        }
        return inputDone;
    }
    postContent() {
        fetch("/addContent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ devName: this._devTitle, settings: this._settings })
        }).then();
        location.reload();
    }
}
