import { addHtmlElement, componentWrapper } from "../helper/helper";
import TrashSvg from "../svg/TrashSvg";
export default async function loadContent() {
    let response = await fetch('/selectContent');
    let data = await response.json();
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
}
