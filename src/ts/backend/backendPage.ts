import { addHtmlElement, removeElement } from "../helper/helper";
import AddSVG from "../svg/AddSvg";
import CloseSvg from "../svg/closeSvg";

(async function main() {
   console.log("app successfully loaded");
   addAddSvg();

   async function addComponentMenu() {
      const componentArray: string[] = [];
      const componentMenu: HTMLDivElement = addHtmlElement("div", "c_devMenu", "devMenu") as HTMLDivElement;
      const closeSvg: CloseSvg = new CloseSvg("be_closeSvg", "be_closeSvg", "#ff5454");
      closeSvg.svg.addEventListener("click", () => {
         componentMenu.remove();
         addAddSvg();
      })

      let response = await fetch('/selectContent')
      let data = await response.json()
      data.forEach(e => {
         componentArray.push(e.Name);
      });

      componentArray.forEach(e => {
         const cBtn: HTMLButtonElement = addHtmlElement("button", "btn btn--devBtn", "devBtn") as HTMLButtonElement;
         cBtn.innerHTML = e;
         cBtn.addEventListener("click", () => { componentBtnListener(e) })
         componentMenu.append(cBtn);
      })
      componentMenu.append(closeSvg.svg);
      removeElement("be_addSvg");
      document.body.append(componentMenu);
   }

   async function addAddSvg() {
      const addSVG: AddSVG = new AddSVG("be_addSvg", "be_addSvg", "#0f7dbd");
      addSVG.svg.addEventListener("click", await addComponentMenu);
      document.body.append(addSVG.svg);
   }

   function componentBtnListener(componentName: string) {
      removeElement("devMenu");
      const componentWrapper: HTMLDivElement = addHtmlElement("div", "be_comWrapper", "be_comWrapper") as HTMLDivElement;
      const closeSvg: CloseSvg = new CloseSvg("be_closeSvg", "be_closeSvg", "#ff5454");
      componentWrapper.append(closeSvg.svg)
      closeSvg.svg.addEventListener("click", () => {
         componentWrapper.remove();
         addAddSvg();
      })
      switch (componentName) {
         case "c_title":
            const titleInput: HTMLInputElement = addHtmlElement("input", "be_titleElement", "be_titleElement") as HTMLInputElement;
            const titleBtn: HTMLButtonElement = addHtmlElement("button", "be_titleSubmit", "be_titleSubmitt") as HTMLButtonElement;
            titleInput.type = "text";
            titleBtn.innerHTML = "submit";
            componentWrapper.append(titleInput, titleBtn)
            break;

         default:
            break;
      }
      document.body.append(componentWrapper);
   }



   // titleNameBtn.addEventListener("click", e => {
   //    fetch("/titlename", {
   //       method: 'POST',
   //       headers: {
   //          'Content-Type': 'application/json'
   //       },
   //       body: JSON.stringify({ titleName: titleName.value })
   //    }).then();
   // });
})();