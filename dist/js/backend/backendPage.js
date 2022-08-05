"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const C_title_1 = __importDefault(require("../frontend/components/C_title"));
const helper_1 = require("../helper/helper");
const AddSvg_1 = __importDefault(require("../svg/AddSvg"));
const CloseSvg_1 = __importDefault(require("../svg/CloseSvg"));
const loadContent_1 = __importDefault(require("./loadContent"));
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("app successfully loaded");
        // new BackendSetComponent();
        yield loadContent_1.default();
        addAddSvg();
        function addComponentMenu() {
            return __awaiter(this, void 0, void 0, function* () {
                const componentMenu = helper_1.addHtmlElement("div", "c_devMenu", "devMenu");
                const closeSvg = new CloseSvg_1.default("be_closeSvg", "be_closeSvg", "#ff5454");
                closeSvg.svg.addEventListener("click", () => {
                    componentMenu.remove();
                    addAddSvg();
                });
                let response = yield fetch('/selectContent');
                let data = yield response.json();
                data.forEach(e => {
                    const cBtn = helper_1.addHtmlElement("button", "btn btn--devBtn", "devBtn");
                    cBtn.innerHTML = e.PUP_NAME;
                    cBtn.addEventListener("click", () => { componentBtnListener(e.DEV_NAME); });
                    componentMenu.append(cBtn);
                });
                componentMenu.append(closeSvg.svg);
                helper_1.removeElement("be_addSvg");
                document.body.append(componentMenu);
            });
        }
        function addAddSvg() {
            return __awaiter(this, void 0, void 0, function* () {
                const addSVG = new AddSvg_1.default("be_addSvg", "be_addSvg", "#0f7dbd");
                addSVG.svg.addEventListener("click", yield addComponentMenu);
                document.body.append(addSVG.svg);
            });
        }
        function componentBtnListener(componentName) {
            helper_1.removeElement("devMenu");
            const closeSvg = new CloseSvg_1.default("be_closeSvg", "be_closeSvg", "#ff5454");
            closeSvg.svg.addEventListener("click", () => {
                helper_1.componentWrapper.remove();
                addAddSvg();
            });
            switch (componentName) {
                case "c_title":
                    new C_title_1.default();
                    break;
                default:
                    break;
            }
            document.body.append(helper_1.componentWrapper);
        }
    });
})();
