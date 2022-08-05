"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __importDefault(require("./Component"));
const helper_1 = require("../../helper/helper");
const lit_html_1 = require("lit-html");
class C_title extends Component_1.default {
    constructor() {
        super();
        this._devTitle = "c_title";
        this._pupTitle = "Titel";
        this._descr = "A Title Component";
    }
    createBackendHtmlElements() {
        // add HTML backendElements. Use the Elements in helper.ts
        const titleInput = helper_1.addBackendInput("text", false);
        const type = helper_1.addBackendDropdownClick(["h1", "h2", "h3", "h4", "h5", "h6", "h7"], "Größe");
        // add settings, whitch is necessary for the CMS
        this.setSetting({ content: titleInput, type: type });
        // link the input with a conten key whitch you can use with $$Key$$ in createDomElement
        this.setContentKeys({
            "content": titleInput,
        });
        this.createDOMELements();
    }
    createDOMELements() {
        const domBuild = lit_html_1.html `
         <div class="1">
            <div class="2">
               <div class="3"></div>
            </div>
         </div>
         <div class="a">
            <div class="b">
               <div class="c"></div>
            </div>
         </div>
      `;
        this.parseDOM(domBuild);
    }
    parseDOM(domBuild) {
        const parser = new DOMParser();
        const document = parser.parseFromString(domBuild.strings[0], 'text/html');
        console.log(document);
    }
    loopDOM(el, dimension = 0) {
        let attr = {};
        const elCh = el.children;
        let testElement = { tagName: "", attr: {}, childrens: [] };
        for (let i = 0; elCh[i] || i == 0; i++) {
            if (Object.entries(el.children[i].attributes).length > 0) {
                for (const [key, value] of Object.entries(el.children[i].attributes)) {
                    attr[value.name] = value.nodeValue;
                }
            }
            // if (el.children[i].childNodes[0] &&elCh[i].childNodes[0].textContent) {
            //    let test = (el.children[i].childNodes[0].textContent as string).replace(/\s/g, '');
            //    if (test.slice(0, 2) == "$$") {
            //    }
            // }
            if (el.children[i].firstElementChild) {
                testElement = { tagName: elCh[i].tagName, attr: attr, childrens: [] };
                testElement.childrens.push(this.loopDOM(el.children[i], (dimension + 1)));
            }
            else {
                testElement = { tagName: elCh[i].tagName, attr: attr, childrens: [] };
            }
            if (elCh[i].nextElementSibling) {
                testElement;
            }
            return testElement;
        }
    }
}
exports.default = C_title;
