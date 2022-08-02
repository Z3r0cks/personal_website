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

/***/ "./src/ts/backend/loadContent.ts":
/*!***************************************!*\
  !*** ./src/ts/backend/loadContent.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContent)\n/* harmony export */ });\n/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ \"./src/ts/helper/helper.ts\");\n/* harmony import */ var _svg_TrashSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/TrashSvg */ \"./src/ts/svg/TrashSvg.ts\");\n\r\n\r\nasync function loadContent() {\r\n    let response = await fetch('/selectContent');\r\n    let data = await response.json();\r\n    data.forEach(e => {\r\n        const innerWrapper = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addHtmlElement)(\"div\", \"be_innerWrapper\");\r\n        const trashSvg = new _svg_TrashSvg__WEBPACK_IMPORTED_MODULE_1__.default(\"be_trashSvg\", \"be_contentTrash\", \"#ff5454\");\r\n        const el = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addHtmlElement)(\"div\", false);\r\n        trashSvg.svg.addEventListener(\"click\", () => { trashHandler(e.ID); innerWrapper.remove(); });\r\n        el.innerHTML = (e.DEV_NAME);\r\n        innerWrapper.append(el, trashSvg.svg);\r\n        _helper_helper__WEBPACK_IMPORTED_MODULE_0__.componentWrapper.append(innerWrapper);\r\n    });\r\n    function trashHandler(id) {\r\n        fetch(\"/deleteContent\", {\r\n            method: 'Post',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({ id: id })\r\n        }).then();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://personal_website/./src/ts/backend/loadContent.ts?");

/***/ }),

/***/ "./src/ts/helper/helper.ts":
/*!*********************************!*\
  !*** ./src/ts/helper/helper.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"componentWrapper\": () => (/* binding */ componentWrapper),\n/* harmony export */   \"removeElement\": () => (/* binding */ removeElement),\n/* harmony export */   \"addHtmlElement\": () => (/* binding */ addHtmlElement),\n/* harmony export */   \"addBackendDiv\": () => (/* binding */ addBackendDiv),\n/* harmony export */   \"addBackendP\": () => (/* binding */ addBackendP),\n/* harmony export */   \"addBackendInput\": () => (/* binding */ addBackendInput),\n/* harmony export */   \"addErrorElement\": () => (/* binding */ addErrorElement),\n/* harmony export */   \"addFormElement\": () => (/* binding */ addFormElement),\n/* harmony export */   \"addSelectElement\": () => (/* binding */ addSelectElement),\n/* harmony export */   \"addLabelElement\": () => (/* binding */ addLabelElement),\n/* harmony export */   \"addBackendBtn\": () => (/* binding */ addBackendBtn),\n/* harmony export */   \"addBackendDropdownClick\": () => (/* binding */ addBackendDropdownClick)\n/* harmony export */ });\nconst componentWrapper = document.getElementById(\"componentWrapper\");\r\nfunction removeElement(elementID) {\r\n    document.getElementById(elementID)?.remove();\r\n}\r\nfunction addHtmlElement(htmlTag, className, idName) {\r\n    const newElement = document.createElement(htmlTag);\r\n    if (className)\r\n        newElement.setAttribute(\"class\", className);\r\n    if (idName)\r\n        newElement.id = idName;\r\n    return newElement;\r\n}\r\nfunction addBackendDiv() {\r\n    const div = addHtmlElement(\"div\", \"bE_div\");\r\n    return div;\r\n}\r\nfunction addBackendP(innerHTML) {\r\n    const p = addHtmlElement(\"p\", \"bE_p\");\r\n    p.innerHTML = innerHTML;\r\n    return p;\r\n}\r\nfunction addBackendInput(type, defaultValue, innerHTML) {\r\n    const input = addHtmlElement(\"input\", \"bE_input\");\r\n    input.type = type;\r\n    if (defaultValue)\r\n        input.value = defaultValue;\r\n    if (innerHTML)\r\n        input.innerHTML = innerHTML;\r\n    return input;\r\n}\r\nfunction addErrorElement() {\r\n    const el = addHtmlElement(\"P\", \"bE_errEl\");\r\n    el.innerHTML = \"Inhalt Fehlt\";\r\n    el.id = \"titleError\";\r\n    return el;\r\n}\r\nfunction addFormElement(action) {\r\n    const el = addHtmlElement(\"form\", \"bE_form\");\r\n    el.action = action;\r\n    return el;\r\n}\r\nfunction addSelectElement(name, id) {\r\n    const el = addHtmlElement(\"select\", \"bE_select\", id);\r\n    el.name = name;\r\n    return el;\r\n}\r\nfunction addLabelElement(labelText, forForm) {\r\n    const el = addHtmlElement(\"label\", \"bE_label\");\r\n    el.innerText = labelText;\r\n    if (forForm)\r\n        el.setAttribute(\"for\", forForm);\r\n    return el;\r\n}\r\nfunction addBackendBtn() {\r\n    return addHtmlElement(\"button\", \"bE_btn\");\r\n}\r\nfunction addBackendDropdownClick(elements, labelText, formFor) {\r\n    const form = addFormElement(\"#\");\r\n    const label = addLabelElement(labelText, formFor);\r\n    const select = addSelectElement(\"größe\", labelText);\r\n    elements.forEach(e => {\r\n        const el = addHtmlElement(\"option\", \"bE_option\");\r\n        el.value = e;\r\n        el.innerText = e;\r\n        select.appendChild(el);\r\n    });\r\n    form.append(label, select);\r\n    return form;\r\n}\r\n\n\n//# sourceURL=webpack://personal_website/./src/ts/helper/helper.ts?");

/***/ }),

/***/ "./src/ts/svg/SVG.ts":
/*!***************************!*\
  !*** ./src/ts/svg/SVG.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SVG {\r\n    svg;\r\n    path;\r\n    constructor(className, id, fill) {\r\n        this.svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n        this.path = document.createElementNS('http://www.w3.org/2000/svg', \"path\");\r\n        this.svg.setAttribute(\"viewBox\", \"0 0 512 512\");\r\n        this.path.setAttribute(\"fill\", fill);\r\n        this.svg.setAttribute(\"class\", className);\r\n        this.svg.id = id;\r\n        this.path.setAttribute(\"fill\", fill);\r\n        this.svg.appendChild(this.path);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SVG);\r\n\n\n//# sourceURL=webpack://personal_website/./src/ts/svg/SVG.ts?");

/***/ }),

/***/ "./src/ts/svg/TrashSvg.ts":
/*!********************************!*\
  !*** ./src/ts/svg/TrashSvg.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TrashSvg)\n/* harmony export */ });\n/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVG */ \"./src/ts/svg/SVG.ts\");\n\r\nclass TrashSvg extends _SVG__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(className, id, fill) {\r\n        super(className, id, fill);\r\n        this.path.setAttributeNS(null, \"d\", \"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://personal_website/./src/ts/svg/TrashSvg.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/backend/loadContent.ts");
/******/ 	
/******/ })()
;