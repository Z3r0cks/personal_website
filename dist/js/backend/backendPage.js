var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import C_title from "../frontend/components/C_title";
import { addHtmlElement, removeElement, componentWrapper } from "../helper/helper";
import AddSVG from "../svg/AddSvg";
import CloseSvg from "../svg/CloseSvg";
import loadContent from "./loadContent";
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("app successfully loaded");
        // new BackendSetComponent();
        yield loadContent();
        addAddSvg();
        function addComponentMenu() {
            return __awaiter(this, void 0, void 0, function* () {
                const componentMenu = addHtmlElement("div", "c_devMenu", "devMenu");
                const closeSvg = new CloseSvg("be_closeSvg", "be_closeSvg", "#ff5454");
                closeSvg.svg.addEventListener("click", () => {
                    componentMenu.remove();
                    addAddSvg();
                });
                let response = yield fetch('/selectContent');
                let data = yield response.json();
                data.forEach(e => {
                    const cBtn = addHtmlElement("button", "btn btn--devBtn", "devBtn");
                    cBtn.innerHTML = e.PUP_NAME;
                    cBtn.addEventListener("click", () => { componentBtnListener(e.DEV_NAME); });
                    componentMenu.append(cBtn);
                });
                componentMenu.append(closeSvg.svg);
                removeElement("be_addSvg");
                document.body.append(componentMenu);
            });
        }
        function addAddSvg() {
            return __awaiter(this, void 0, void 0, function* () {
                const addSVG = new AddSVG("be_addSvg", "be_addSvg", "#0f7dbd");
                addSVG.svg.addEventListener("click", yield addComponentMenu);
                document.body.append(addSVG.svg);
            });
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
    });
})();
