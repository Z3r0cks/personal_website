"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBackendDropdownClick = exports.addBackendBtn = exports.addLabelElement = exports.addSelectElement = exports.addFormElement = exports.addErrorElement = exports.addBackendInput = exports.addBackendP = exports.addBackendDiv = exports.addHtmlElement = exports.removeElement = exports.componentWrapper = void 0;
exports.componentWrapper = document.getElementById("componentWrapper");
function removeElement(elementID) {
    var _a;
    (_a = document.getElementById(elementID)) === null || _a === void 0 ? void 0 : _a.remove();
}
exports.removeElement = removeElement;
function addHtmlElement(htmlTag, className, idName) {
    const newElement = document.createElement(htmlTag);
    if (className)
        newElement.setAttribute("class", className);
    if (idName)
        newElement.id = idName;
    return newElement;
}
exports.addHtmlElement = addHtmlElement;
// BACKEND ELEMENTS
function addBackendDiv() {
    const div = addHtmlElement("div", "bE_div");
    return div;
}
exports.addBackendDiv = addBackendDiv;
function addBackendP(innerHTML) {
    const p = addHtmlElement("p", "bE_p");
    p.innerHTML = innerHTML;
    return p;
}
exports.addBackendP = addBackendP;
function addBackendInput(type, defaultValue, innerHTML) {
    const input = addHtmlElement("input", "bE_input");
    input.type = type;
    if (defaultValue)
        input.value = defaultValue;
    if (innerHTML)
        input.innerHTML = innerHTML;
    return input;
}
exports.addBackendInput = addBackendInput;
function addErrorElement() {
    const el = addHtmlElement("P", "bE_errEl");
    el.innerHTML = "Inhalt Fehlt";
    el.id = "titleError";
    return el;
}
exports.addErrorElement = addErrorElement;
function addFormElement(action) {
    const el = addHtmlElement("form", "bE_form");
    el.action = action;
    return el;
}
exports.addFormElement = addFormElement;
function addSelectElement(name, id) {
    const el = addHtmlElement("select", "bE_select", id);
    el.name = name;
    return el;
}
exports.addSelectElement = addSelectElement;
function addLabelElement(labelText, forForm) {
    const el = addHtmlElement("label", "bE_label");
    el.innerText = labelText;
    if (forForm)
        el.setAttribute("for", forForm);
    return el;
}
exports.addLabelElement = addLabelElement;
function addBackendBtn() {
    return addHtmlElement("button", "bE_btn");
}
exports.addBackendBtn = addBackendBtn;
function addBackendDropdownClick(elements, labelText, formFor) {
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
exports.addBackendDropdownClick = addBackendDropdownClick;
