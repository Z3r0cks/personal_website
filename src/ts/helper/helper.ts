export const componentWrapper: HTMLDivElement = document.getElementById("componentWrapper") as HTMLDivElement;

export function removeElement(elementID: string) {
   document.getElementById(elementID)?.remove()
}

export function addHtmlElement(htmlTag: string, className: string | false, idName?: string): HTMLElement {
   const newElement = document.createElement(htmlTag);
   if (className) newElement.setAttribute("class", className);
   if (idName) newElement.id = idName;
   return newElement;
}

// BACKEND COMPONENTS

export function addBackendDiv(): HTMLDivElement {
   const div: HTMLDivElement = addHtmlElement("div", "be_div") as HTMLDivElement
   return div
}

export function addBackendInput(type: string, defaultValue: string | false, innerHTML?: string): HTMLInputElement {
   const input: HTMLInputElement = addHtmlElement("input", "be_input") as HTMLInputElement
   input.type = type;
   if (defaultValue) input.value = defaultValue;
   if (innerHTML) input.innerHTML = innerHTML;
   return input
}

export function addErrorElement(): HTMLParagraphElement {
   const ErrorEl = addHtmlElement("P", "be_errEl") as HTMLParagraphElement;
   ErrorEl.innerHTML = "Inhalt Fehlt";
   ErrorEl.id = "titleError";
   return ErrorEl;
}