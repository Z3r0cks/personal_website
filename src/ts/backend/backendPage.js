import C_title from "../frontend/components/C_title";
import { addHtmlElement, removeElement, componentWrapper } from "../helper/helper";
import AddSVG from "../svg/AddSvg";
import CloseSvg from "../svg/CloseSvg";
import loadContent from "./loadContent";
(async function main() {
    console.log("app successfully loaded");
    await loadContent();
    addAddSvg();
    async function addComponentMenu() {
        const componentMenu = addHtmlElement("div", "c_devMenu", "devMenu");
        const closeSvg = new CloseSvg("be_closeSvg", "be_closeSvg", "#ff5454");
        closeSvg.svg.addEventListener("click", () => {
            componentMenu.remove();
            addAddSvg();
        });
        let response = await fetch('/selectComponents');
        let data = await response.json();
        data.forEach(e => {
            const cBtn = addHtmlElement("button", "btn btn--devBtn", "devBtn");
            cBtn.innerHTML = e.PUP_NAME;
            cBtn.addEventListener("click", () => { componentBtnListener(e.DEV_NAME); });
            componentMenu.append(cBtn);
        });
        componentMenu.append(closeSvg.svg);
        removeElement("be_addSvg");
        document.body.append(componentMenu);
    }
    async function addAddSvg() {
        const addSVG = new AddSVG("be_addSvg", "be_addSvg", "#0f7dbd");
        addSVG.svg.addEventListener("click", await addComponentMenu);
        document.body.append(addSVG.svg);
    }
    function componentBtnListener(componentName) {
        removeElement("devMenu");
        const closeSvg = new CloseSvg("be_closeSvg", "be_closeSvg", "#ff5454");
        closeSvg.svg.addEventListener("click", () => {
            componentWrapper.remove();
            addAddSvg();
        });
        switch (componentName) {
            case "c_title":
                new C_title();
                break;
            default:
                break;
        }
        document.body.append(componentWrapper);
    }
})();
