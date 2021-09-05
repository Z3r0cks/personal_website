/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/helper/helper.ts":
/*!*********************************!*\
  !*** ./src/ts/helper/helper.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeElement": () => (/* binding */ removeElement),
/* harmony export */   "addHtmlElement": () => (/* binding */ addHtmlElement)
/* harmony export */ });
function removeElement(elementID) {
    document.getElementById(elementID)?.remove();
}
function addHtmlElement(htmlTag, className, idName) {
    const newElement = document.createElement(htmlTag);
    newElement.setAttribute("class", className);
    if (idName)
        newElement.id = idName;
    return newElement;
}


/***/ }),

/***/ "./src/ts/svg/AddSvg.ts":
/*!******************************!*\
  !*** ./src/ts/svg/AddSvg.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVG */ "./src/ts/svg/SVG.ts");

class AddSVG extends _SVG__WEBPACK_IMPORTED_MODULE_0__.default {
    _id;
    constructor(className, id, fill) {
        super(className, fill);
        this._id = id;
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.classList.add(className);
        this.svg.id = id;
        this.svg.setAttribute("viewBox", "0 0 512 512");
        this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
        this.path.setAttribute("fill", fill);
        this.path.setAttributeNS(null, "d", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z");
        this.svg.appendChild(this.path);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddSVG);


/***/ }),

/***/ "./src/ts/svg/SVG.ts":
/*!***************************!*\
  !*** ./src/ts/svg/SVG.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SVG {
    svg;
    path;
    constructor(className, fill) {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("class", className);
        this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
        this.path.setAttribute("fill", fill);
        this.svg.appendChild(this.path);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SVG);


/***/ }),

/***/ "./src/ts/svg/closeSvg.ts":
/*!********************************!*\
  !*** ./src/ts/svg/closeSvg.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVG */ "./src/ts/svg/SVG.ts");

class CloseSvg extends _SVG__WEBPACK_IMPORTED_MODULE_0__.default {
    _id;
    constructor(className, id, fill) {
        super(className, fill);
        this._id = id;
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.classList.add(className);
        this.svg.id = id;
        this.svg.setAttribute("viewBox", "0 0 512 512");
        this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
        this.path.setAttribute("fill", fill);
        this.path.setAttributeNS(null, "d", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z");
        this.svg.appendChild(this.path);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseSvg);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/ts/backend/backendPage.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ "./src/ts/helper/helper.ts");
/* harmony import */ var _svg_AddSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/AddSvg */ "./src/ts/svg/AddSvg.ts");
/* harmony import */ var _svg_closeSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/closeSvg */ "./src/ts/svg/closeSvg.ts");



(async function main() {
    console.log("app successfully loaded");
    addAddSvg();
    async function addComponentMenu() {
        const componentArray = [];
        const componentMenu = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addHtmlElement)("div", "c_devMenu", "devMenu");
        const closeSvg = new _svg_closeSvg__WEBPACK_IMPORTED_MODULE_2__.default("be_closeSvg", "be_closeSvg", "#ff5454");
        closeSvg.svg.addEventListener("click", () => {
            componentMenu.remove();
            addAddSvg();
        });
        let response = await fetch('/selectContent');
        let data = await response.json();
        data.forEach(e => {
            componentArray.push(e.Name);
        });
        componentArray.forEach(e => {
            const cBtn = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addHtmlElement)("button", "btn btn--devBtn", "devBtn");
            cBtn.innerHTML = e;
            cBtn.addEventListener("click", () => { componentBtnListener(e); });
            componentMenu.append(cBtn);
        });
        componentMenu.append(closeSvg.svg);
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.removeElement)("be_addSvg");
        document.body.append(componentMenu);
    }
    async function addAddSvg() {
        const addSVG = new _svg_AddSvg__WEBPACK_IMPORTED_MODULE_1__.default("be_addSvg", "be_addSvg", "#0f7dbd");
        addSVG.svg.addEventListener("click", await addComponentMenu);
        document.body.append(addSVG.svg);
    }
    function componentBtnListener(componentName) {
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.removeElement)("devMenu");
        const componentWrapper = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addHtmlElement)("div", "be_comWrapper", "be_comWrapper");
        const closeSvg = new _svg_closeSvg__WEBPACK_IMPORTED_MODULE_2__.default("be_closeSvg", "be_closeSvg", "#ff5454");
        componentWrapper.append(closeSvg.svg);
        closeSvg.svg.addEventListener("click", () => {
            componentWrapper.remove();
            addAddSvg();
        });
        switch (componentName) {
            case "c_title":
                const titleInput = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addHtmlElement)("input", "be_titleElement", "be_titleElement");
                const titleBtn = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addHtmlElement)("button", "be_titleSubmit", "be_titleSubmitt");
                titleInput.type = "text";
                titleBtn.innerHTML = "submit";
                componentWrapper.append(titleInput, titleBtn);
                break;
            default:
                break;
        }
        document.body.append(componentWrapper);
    }
})();

})();

/******/ })()
;