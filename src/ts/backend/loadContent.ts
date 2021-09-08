import { METHODS } from "http";
import { addHtmlElement, removeElement } from "../helper/helper";
import TrashSvg from "../svg/TrashSvg";

export default async function loadContent() {
   let response = await fetch('/selectContent')
   let data = await response.json()

   const contentWrapper: HTMLDivElement = addHtmlElement("div", false, "be_contentWrapper") as HTMLDivElement

   data.forEach(e => {
      const innerWrapper: HTMLDivElement = addHtmlElement("div", "be_innerWrapper") as HTMLDivElement
      const trashSvg: TrashSvg = new TrashSvg("be_trashSvg", "be_contentTrash", "#ff5454");
      const el: HTMLDivElement = addHtmlElement("div", false) as HTMLDivElement
      trashSvg.svg.addEventListener("click", () => { trashHandler(e.ID); innerWrapper.remove() })

      el.innerHTML = (e.DEV_NAME);
      innerWrapper.append(el, trashSvg.svg)
      contentWrapper.append(innerWrapper);
   });

   function trashHandler(id: number) {
      fetch("/deleteComponent", {
         method: 'Post',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ id: id })
      }).then();
   }

   document.body.appendChild(contentWrapper);
}
