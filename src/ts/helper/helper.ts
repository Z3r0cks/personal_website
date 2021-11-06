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

// BACKEND ELEMENTS

export function addBackendDiv(): HTMLDivElement {
   const div: HTMLDivElement = addHtmlElement("div", "bE_div") as HTMLDivElement
   return div
}

export function addBackendP(innerHTML: string): HTMLParagraphElement {
   const p: HTMLParagraphElement = addHtmlElement("p", "bE_p") as HTMLParagraphElement;
   p.innerHTML = innerHTML;
   return p;
}

export function addBackendInput(type: string, defaultValue: string | false, innerHTML?: string): HTMLInputElement {
   const input: HTMLInputElement = addHtmlElement("input", "bE_input") as HTMLInputElement
   input.type = type;
   if (defaultValue) input.value = defaultValue;
   if (innerHTML) input.innerHTML = innerHTML;
   return input
}

export function addErrorElement(): HTMLParagraphElement {
   const el = addHtmlElement("P", "bE_errEl") as HTMLParagraphElement;
   el.innerHTML = "Inhalt Fehlt";
   el.id = "titleError";
   return el;
}

export function addFormElement(action: string): HTMLFormElement {
   const el = addHtmlElement("form", "bE_form") as HTMLFormElement;
   el.action = action;
   return el;
}

export function addSelectElement(name: string, id: string): HTMLSelectElement {
   const el = addHtmlElement("select", "bE_select", id) as HTMLSelectElement
   el.name = name;
   return el;
}

export function addLabelElement(labelText: string, forForm?: string): HTMLLabelElement {
   const el = addHtmlElement("label", "bE_label") as HTMLLabelElement;
   el.innerText = labelText;
   if (forForm)
      el.setAttribute("for", forForm);
   return el;
}

export function addBackendBtn(): HTMLButtonElement {
   return addHtmlElement("button", "bE_btn") as HTMLButtonElement;
}

export function addBackendDropdownClick(elements: string[], labelText: string, formFor?: string): HTMLFormElement {
   const form = addFormElement("#");
   const label = addLabelElement(labelText, formFor);
   const select = addSelectElement("größe", labelText);
   elements.forEach(e => {
      const el = addHtmlElement("option", "bE_option") as HTMLOptionElement;
      el.value = e;
      el.innerText = e;
      select.appendChild(el);
   })
   form.append(label, select);
   return form;
}