import Component from "../frontend/components/Component";
import C_title from "../frontend/components/C_title";
import { addHtmlElement, removeElement } from "../helper/helper";
import AddSVG from "../svg/AddSvg";
import CloseSvg from "../svg/CloseSvg";
import SaveSvg from "../svg/SaveSvg";

(async function main() {
   console.log("app successfully loaded");
   addAddSvg();

   async function addComponentMenu() {
      const componentArray: string[][] = [];
      const componentMenu: HTMLDivElement = addHtmlElement("div", "c_devMenu", "devMenu") as HTMLDivElement;
      const closeSvg: CloseSvg = new CloseSvg("be_closeSvg", "be_closeSvg", "#ff5454");
      closeSvg.svg.addEventListener("click", () => {
         componentMenu.remove();
         addAddSvg();
      })

      let response = await fetch('/selectComponents')
      let data = await response.json()

      data.forEach(e => {
         const cBtn: HTMLButtonElement = addHtmlElement("button", "btn btn--devBtn", "devBtn") as HTMLButtonElement;
         cBtn.innerHTML = e.PUP_NAME;
         cBtn.addEventListener("click", () => { componentBtnListener(e.DEV_NAME) })
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
      const saveSVG: SaveSvg = new SaveSvg("be_saveSvg", "be_saveSvg", "#ff5454");;
      componentWrapper.append(saveSVG.svg, closeSvg.svg)
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
            const newTitle: C_title = new C_title({ color: "red", width: "50px", type: "h1" });
            saveBtnListener(newTitle, saveSVG);
            console.log(newTitle.getSetting());
            break;

         default:
            break;
      }
      document.body.append(componentWrapper);
   }


   function saveBtnListener(component: Component, saveBtn: SaveSvg) {
      saveBtn.svg.addEventListener("click", () => {
         const test = JSON.stringify({ devName: component.getDevTitle(), settings: component.getSetting() })
         fetch("/addComponent", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ devName: component.getDevTitle(), settings: component.getSetting() })
         }).then();
      });
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