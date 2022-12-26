export const componentWrapper = document.getElementById("componentWrapper");
export function removeElement(elementID) {
    var _a;
    (_a = document.getElementById(elementID)) === null || _a === void 0 ? void 0 : _a.remove();
}
export function addHtmlElement(htmlTag, className, idName) {
    const newElement = document.createElement(htmlTag);
    if (className)
        newElement.setAttribute("class", className);
    if (idName)
        newElement.id = idName;
    return newElement;
}
// BACKEND ELEMENTS
export function addBackendDiv() {
    const div = addHtmlElement("div", "bE_div");
    return div;
}
export function addBackendP(innerHTML) {
    const p = addHtmlElement("p", "bE_p");
    p.innerHTML = innerHTML;
    return p;
}
export function addBackendInput(type, defaultValue, innerHTML) {
    const input = addHtmlElement("input", "bE_input");
    input.type = type;
    if (defaultValue)
        input.value = defaultValue;
    if (innerHTML)
        input.innerHTML = innerHTML;
    return input;
}
export function addErrorElement() {
    const el = addHtmlElement("P", "bE_errEl");
    el.innerHTML = "Inhalt Fehlt";
    el.id = "titleError";
    return el;
}
export function addFormElement(action) {
    const el = addHtmlElement("form", "bE_form");
    el.action = action;
    return el;
}
export function addSelectElement(name, id) {
    const el = addHtmlElement("select", "bE_select", id);
    el.name = name;
    return el;
}
export function addLabelElement(labelText, forForm) {
    const el = addHtmlElement("label", "bE_label");
    el.innerText = labelText;
    if (forForm)
        el.setAttribute("for", forForm);
    return el;
}
export function addBackendBtn() {
    return addHtmlElement("button", "bE_btn");
}
export function addBackendDropdownClick(elements, labelText, formFor) {
    const form = addFormElement("#");
    const label = addLabelElement(labelText, formFor);
    const select = addSelectElement("größe", labelText);
    elements.forEach(e => {
        const el = addHtmlElement("option", "bE_option");
        el.value = e;
        el.innerText = e;
        select.appendChild(el);
    });
    form.append(label, select);
    return form;
}
