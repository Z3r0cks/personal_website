import { addHtmlElement, componentWrapper } from "../helper/helper";
import TrashSvg from "../svg/TrashSvg";

export default async function loadContent() {
   let response = await fetch('/selectContent')
   let data = await response.json()
   console.log("test");
   console.log(data);

   data.forEach(e => {
      const innerWrapper: HTMLDivElement = addHtmlElement("div", "be_innerWrapper") as HTMLDivElement
      const trashSvg: TrashSvg = new TrashSvg("be_trashSvg", "be_contentTrash", "#ff5454");
      const el: HTMLDivElement = addHtmlElement("div", false) as HTMLDivElement
      trashSvg.svg.addEventListener("click", () => { trashHandler(e.ID); innerWrapper.remove();     })
      el.innerHTML = (e.DEV_NAME);
      innerWrapper.append(el, trashSvg.svg)
      componentWrapper.append(innerWrapper);
   });

   function trashHandler(id: number) {
      fetch("/deleteContent", {
         method: 'Post',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ id: id })
      }).then();
   }
}
