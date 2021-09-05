export function removeElement(elementID: string) {
   document.getElementById(elementID)?.remove()
}

export function addHtmlElement(htmlTag: string, className: string, idName?: string): HTMLElement {
   const newElement = document.createElement(htmlTag);
   newElement.setAttribute("class", className);
   if (idName)
      newElement.id = idName;
   return newElement;
}