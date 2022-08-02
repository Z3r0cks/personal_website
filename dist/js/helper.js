/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/helper/helper.ts":
/*!*********************************!*\
  !*** ./src/ts/helper/helper.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"componentWrapper\": () => (/* binding */ componentWrapper),\n/* harmony export */   \"removeElement\": () => (/* binding */ removeElement),\n/* harmony export */   \"addHtmlElement\": () => (/* binding */ addHtmlElement),\n/* harmony export */   \"addBackendDiv\": () => (/* binding */ addBackendDiv),\n/* harmony export */   \"addBackendP\": () => (/* binding */ addBackendP),\n/* harmony export */   \"addBackendInput\": () => (/* binding */ addBackendInput),\n/* harmony export */   \"addErrorElement\": () => (/* binding */ addErrorElement),\n/* harmony export */   \"addFormElement\": () => (/* binding */ addFormElement),\n/* harmony export */   \"addSelectElement\": () => (/* binding */ addSelectElement),\n/* harmony export */   \"addLabelElement\": () => (/* binding */ addLabelElement),\n/* harmony export */   \"addBackendBtn\": () => (/* binding */ addBackendBtn),\n/* harmony export */   \"addBackendDropdownClick\": () => (/* binding */ addBackendDropdownClick)\n/* harmony export */ });\nconst componentWrapper = document.getElementById(\"componentWrapper\");\r\nfunction removeElement(elementID) {\r\n    document.getElementById(elementID)?.remove();\r\n}\r\nfunction addHtmlElement(htmlTag, className, idName) {\r\n    const newElement = document.createElement(htmlTag);\r\n    if (className)\r\n        newElement.setAttribute(\"class\", className);\r\n    if (idName)\r\n        newElement.id = idName;\r\n    return newElement;\r\n}\r\nfunction addBackendDiv() {\r\n    const div = addHtmlElement(\"div\", \"bE_div\");\r\n    return div;\r\n}\r\nfunction addBackendP(innerHTML) {\r\n    const p = addHtmlElement(\"p\", \"bE_p\");\r\n    p.innerHTML = innerHTML;\r\n    return p;\r\n}\r\nfunction addBackendInput(type, defaultValue, innerHTML) {\r\n    const input = addHtmlElement(\"input\", \"bE_input\");\r\n    input.type = type;\r\n    if (defaultValue)\r\n        input.value = defaultValue;\r\n    if (innerHTML)\r\n        input.innerHTML = innerHTML;\r\n    return input;\r\n}\r\nfunction addErrorElement() {\r\n    const el = addHtmlElement(\"P\", \"bE_errEl\");\r\n    el.innerHTML = \"Inhalt Fehlt\";\r\n    el.id = \"titleError\";\r\n    return el;\r\n}\r\nfunction addFormElement(action) {\r\n    const el = addHtmlElement(\"form\", \"bE_form\");\r\n    el.action = action;\r\n    return el;\r\n}\r\nfunction addSelectElement(name, id) {\r\n    const el = addHtmlElement(\"select\", \"bE_select\", id);\r\n    el.name = name;\r\n    return el;\r\n}\r\nfunction addLabelElement(labelText, forForm) {\r\n    const el = addHtmlElement(\"label\", \"bE_label\");\r\n    el.innerText = labelText;\r\n    if (forForm)\r\n        el.setAttribute(\"for\", forForm);\r\n    return el;\r\n}\r\nfunction addBackendBtn() {\r\n    return addHtmlElement(\"button\", \"bE_btn\");\r\n}\r\nfunction addBackendDropdownClick(elements, labelText, formFor) {\r\n    const form = addFormElement(\"#\");\r\n    const label = addLabelElement(labelText, formFor);\r\n    const select = addSelectElement(\"größe\", labelText);\r\n    elements.forEach(e => {\r\n        const el = addHtmlElement(\"option\", \"bE_option\");\r\n        el.value = e;\r\n        el.innerText = e;\r\n        select.appendChild(el);\r\n    });\r\n    form.append(label, select);\r\n    return form;\r\n}\r\n\n\n//# sourceURL=webpack://personal_website/./src/ts/helper/helper.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/helper/helper.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;