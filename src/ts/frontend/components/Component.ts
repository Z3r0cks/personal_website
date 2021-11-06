import Setting from '../../interfaces/Setting';
import SaveSvg from '../../svg/SaveSvg';
import CloseSvg from '../../svg/CloseSvg';
import SettingsSvg from '../../svg/SettingsSVG';
import { addErrorElement, addHtmlElement, componentWrapper, removeElement } from '../../helper/helper';
import { html } from 'lit-html';
// interface keyObject {
//    [key: string]: HTMLElement
// }
export default abstract class ansniComponent {
   protected _coseSvg: CloseSvg;
   protected _saveSVG: SaveSvg;
   protected _settingsSVG: SettingsSvg;
   protected _devTitle: string = "";
   protected _innerWrapper: HTMLDivElement;
   protected _allElements: HTMLElement[];
   protected _settings: Setting;
   protected __keyWords: {};

   constructor() {
      this.__keyWords = {};
      this._coseSvg = new CloseSvg("be_closeSvg", "be_closeSvg", "#ff5454");
      this._saveSVG = new SaveSvg("be_saveSvg", "be_saveSvg", "#ff5454");;
      this._settingsSVG = new SettingsSvg("be_settingsSvg", "be_settingsSvg", "#ff5454");
      this._innerWrapper = addHtmlElement("div", "be_innerCompWrapper") as HTMLDivElement;
      this._allElements = [];
      this._settings = { color: "", content: "", type: "" }
      this.createOverlay();
   }

   createOverlay() {
      this._innerWrapper.append(this._settingsSVG.svg, this._saveSVG.svg, this._coseSvg.svg)
      componentWrapper.append(this._innerWrapper);
      this.createBackendHtmlElements();
   }

   createBackendHtmlElements() { }

   setContentKeys(obj: {}) {
      this.__keyWords = { obj }
   }

   setSetting(ElObjects: {}) {
      for (const [key, value] of Object.entries(ElObjects)) {
         this._innerWrapper.append(value as HTMLElement);
      }
      componentWrapper.append(this._innerWrapper);
      this._saveSVG.svg.addEventListener("click", () => {
         if (this.checkNecessaryInput(ElObjects)) {
            console.log("correct");
            for (const [key, value] of Object.entries(ElObjects)) {
               console.log(value);
               if ((value as HTMLElement).classList[0] == "bE_form") {
                  (value as HTMLFormElement).querySelectorAll(".bE_select").forEach(e => { this._settings[key] = (e as HTMLSelectElement).value });
               } else if (value == "" || value == undefined)
                  return
               else
                  this._settings[key] = (value as HTMLInputElement).value
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
      })

   }

   checkNecessaryInput(ElObjects: {}) {
      let inputDone: boolean = true;
      console.log(ElObjects);
      for (const [key, value] of Object.entries(ElObjects)) {
         if ((value as HTMLElement).classList[0] != "bE_form") {
            if ((value as HTMLInputElement).value == undefined || (value as HTMLInputElement).value == "") inputDone = false;
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