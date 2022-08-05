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
const helper_1 = require("../helper/helper");
const TrashSvg_1 = __importDefault(require("../svg/TrashSvg"));
function loadContent() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('/selectContent');
        let data = yield response.json();
        data.forEach(e => {
            const innerWrapper = helper_1.addHtmlElement("div", "be_innerWrapper");
            const trashSvg = new TrashSvg_1.default("be_trashSvg", "be_contentTrash", "#ff5454");
            const el = helper_1.addHtmlElement("div", false);
            trashSvg.svg.addEventListener("click", () => { trashHandler(e.ID); innerWrapper.remove(); });
            el.innerHTML = (e.DEV_NAME);
            innerWrapper.append(el, trashSvg.svg);
            helper_1.componentWrapper.append(innerWrapper);
        });
        function trashHandler(id) {
            fetch("/deleteContent", {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            }).then();
        }
    });
}
exports.default = loadContent;
