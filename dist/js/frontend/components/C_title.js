import Component from './Component';
import { addBackendInput, addBackendDropdownClick } from "../../helper/helper";
export default class C_title extends Component {
    constructor() {
        super();
        this._devTitle = "c_title";
        this._pupTitle = "Titel";
        this._descr = "A Title Component";
    }
    createBackendHtmlElements() {
        // add HTML backendElements. Use the Elements in helper.ts
        const titleInput = addBackendInput("text", false);
        const type = addBackendDropdownClick(["h1", "h2", "h3", "h4", "h5", "h6", "h7"], "Größe");
        // add settings, whitch is necessary for the CMS
        this.setSetting({ content: titleInput, type: type });
        // link the input with a conten key whitch you can use with $$Key$$ in createDomElement
        this.setContentKeys({
            "content": titleInput,
        });
        this.createDOMELements();
    }
    createDOMELements() {
        const domBuild = "<div>Test</div>";
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
