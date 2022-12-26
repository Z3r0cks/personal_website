var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addHtmlElement, componentWrapper } from "../helper/helper";
import TrashSvg from "../svg/TrashSvg";
export default function loadContent() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('/selectContent');
        let data = yield response.json();
        console.log("test");
        console.log(data);
        data.forEach(e => {
            const innerWrapper = addHtmlElement("div", "be_innerWrapper");
            const trashSvg = new TrashSvg("be_trashSvg", "be_contentTrash", "#ff5454");
            const el = addHtmlElement("div", false);
            trashSvg.svg.addEventListener("click", () => { trashHandler(e.ID); innerWrapper.remove(); });
            el.innerHTML = (e.DEV_NAME);
            innerWrapper.append(el, trashSvg.svg);
            componentWrapper.append(innerWrapper);
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
