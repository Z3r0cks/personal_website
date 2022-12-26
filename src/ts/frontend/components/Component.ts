import Setting from '../../interfaces/Setting';
import SaveSvg from '../../svg/SaveSvg';
import CloseSvg from '../../svg/CloseSvg';
import SettingsSvg from '../../svg/SettingsSvg';
import { addErrorElement, addHtmlElement, componentWrapper, removeElement } from '../../helper/helper';
// import { html } from 'lit-html';
export interface ElementObj {
   tagName: string,
   attr: {},
   childrens: ElementObj[]
};
export interface attrtObj {
   [key: string]: string;
};

export default abstract class Component {
   protected _coseSvg: CloseSvg;
   protected _saveSVG: SaveSvg;
   protected _settingsSVG: SettingsSvg;
   protected _devTitle: string = "";
   protected _pupTitle: string = "";
   protected _innerWrapper: HTMLDivElement;
   protected _allElements: HTMLElement[];
   protected _settings: Setting;
   protected _keyWords: {};
   protected _elements: ElementObj;
   protected _descr: String = "";

   constructor() {
      this._keyWords = {};
      this._elements = { tagName: "", attr: {}, childrens: [] };
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
      this._keyWords = { obj }
   }

   setSetting(ElObjects: {}) {
      for (const [key, value] of Object.entries(ElObjects)) {
         this._innerWrapper.append(value as HTMLElement);
      }
      componentWrapper.append(this._innerWrapper);
      this._saveSVG.svg.addEventListener("click", () => {
         if (this.checkNecessaryInput(ElObjects)) {
            for (const [key, value] of Object.entries(ElObjects)) {
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
            const errorP = addErrorElement();
            this._innerWrapper.appendChild(errorP);
         }
      })

   }

   checkNecessaryInput(ElObjects: {}) {
      let inputDone: boolean = true;
      for (const [key, value] of Object.entries(ElObjects)) {
         if ((value as HTMLElement).classList[0] != "bE_form") {
            if ((value as HTMLInputElement).value == undefined || (value as HTMLInputElement).value == "") inputDone = false;
         }
      }
      return inputDone;
   }

   //INSERT INTO `personal_website`.`component`(`DEV_NAME`,`PUP_NAME`,`DESCR`) VALUES (

   postComponent() {
      fetch("/addComponent", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ DEV_NAME: this._devTitle, PUP_NAME: this._pupTitle, DESCR: this._descr })
      }).then(res => res.json())
         .then(res => {
            if (res.success) {
               console.log(res.message);
            }
            else {
               console.log(res.message);
            }
         }).catch(err => {
            console.log(err);
         })
   }


   postContent() {
      fetch("/addContent", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ DEV_NAME: this._devTitle, SETTINGS: this._settings })
      }).then();
      location.reload();
   }
}