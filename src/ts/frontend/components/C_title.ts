import Component from './Component'
import { addBackendInput, addBackendDropdownClick } from "../../helper/helper";
import { html } from 'lit-html'

export default class C_title extends Component {

   constructor() {
      super()
      this._devTitle = "c_title";
   }

   createBackendHtmlElements() {
      // add HTML backendElements. Use the Elements in helper.ts
      const titleInput = addBackendInput("text", false)
      const type = addBackendDropdownClick(["h1", "h2", "h3", "h4", "h5", "h6", "h7"], "Größe")

      // add settings, whitch is necessary for the CMS
      this.setSetting({ content: titleInput, type: type })

      // link the input with a conten key whitch you can use with $$Key$$ in createDomElement
      this.setContentKeys({
         "content": titleInput,
      });
      this.createDOMELements();
   }

   createDOMELements() {
      const domBuild = html`
         <div class="container">
            <h1>
               <span></span>
            </h1>
            <h2>test
               <div>
                  <span>
                     <a> $$content </a>
                  </span>
               </div>
            </h2>
            <h3>
               <div>$$content
                  <span>
                     <a> </a>
                  </span>
               </div>
            </h3>
         </div>
      `

      this.parseDOM(domBuild)
   }

   parseDOM(domBuild) {
      const parser = new DOMParser();
      const document = parser.parseFromString(domBuild.strings[0], 'text/html');

      console.log(document.body);
      this.loopDOM(document.body, 0)
   }

   loopDOM(el: HTMLElement, dimension: number) {
      let obJ;
      for (let i = 0; el.children[i]; i++) {
         if (el.children[i].childNodes[0]) {
            let test = el.children[i].childNodes[0].textContent.replace(/\s/g, '');
            if (test.slice(0, 2) == "$$") {
               console.log(test);
            }
         }
         if (el.children[i].firstElementChild) {
            this.loopDOM(el.children[i] as HTMLElement, (dimension + 1));
         }
      }
   }
}