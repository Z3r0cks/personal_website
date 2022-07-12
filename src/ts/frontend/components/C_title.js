import Component from './Component';
import { addBackendInput, addBackendDropdownClick } from "../../helper/helper";
import { html } from 'lit-html';
export default class C_title extends Component {
    constructor() {
        super();
        this._devTitle = "c_title";
    }
    createBackendHtmlElements() {
        const titleInput = addBackendInput("text", false);
        const type = addBackendDropdownClick(["h1", "h2", "h3", "h4", "h5", "h6", "h7"], "Größe");
        this.setSetting({ content: titleInput, type: type });
        this.setContentKeys({
            "content": titleInput,
        });
        this.createDOMELements();
    }
    createDOMELements() {
        const domBuild = html `
         <div class="1">
            <div class="2">
               <div class="3"></div>
            </div>
            <div class="a">
               <div class="b">
                  <div class="c  "></div>
               </div>
            </div>
      `;
        this.parseDOM(domBuild);
    }
    parseDOM(domBuild) {
        const parser = new DOMParser();
        const document = parser.parseFromString(domBuild.strings[0], 'text/html');
        console.log(document.body);
        console.log(this.loopDOM(document.body));
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
