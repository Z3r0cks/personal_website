/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/backend/BackendMenu/BackendMenuTab.ts":
/*!******************************************************!*\
  !*** ./src/ts/backend/BackendMenu/BackendMenuTab.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackendMenuTab)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper */ "./src/ts/helper/helper.ts");
/* harmony import */ var _svg_CloseSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/CloseSvg */ "./src/ts/svg/CloseSvg.ts");


class BackendMenuTab {
    _name;
    _wrapper;
    _closeSVG;
    constructor(name) {
        this._closeSVG = new _svg_CloseSvg__WEBPACK_IMPORTED_MODULE_1__.default("be_closeSvg be_closeSvg__tabsvg", "", "#effcef");
        this._name = name;
        this._wrapper = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addHtmlElement)("div", "be_tabWrapper");
        document.body.appendChild(this._wrapper);
    }
    createMenu(htmlElements) {
        this._wrapper.append(this._closeSVG.svg);
        htmlElements.forEach(e => {
            this._wrapper.appendChild(e);
        });
    }
    checkNecessaryInput(inputElements) {
        let inputDone = true;
        inputElements.forEach(e => {
            if (e.value == undefined || e.value == "")
                inputDone = false;
        });
        return inputDone;
    }
}


/***/ }),

/***/ "./src/ts/backend/BackendMenu/BackendSetComponents.ts":
/*!************************************************************!*\
  !*** ./src/ts/backend/BackendMenu/BackendSetComponents.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackendSetComponent)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper */ "./src/ts/helper/helper.ts");
/* harmony import */ var _svg_SaveSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/SaveSvg */ "./src/ts/svg/SaveSvg.ts");
/* harmony import */ var _BackendMenuTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackendMenuTab */ "./src/ts/backend/BackendMenu/BackendMenuTab.ts");



class BackendSetComponent extends _BackendMenuTab__WEBPACK_IMPORTED_MODULE_2__.default {
    _delteSaveSVG;
    _addSaveSVG;
    _descr_delete;
    _descr_add;
    _inputDEV_NAME;
    _inputPUP_NAME;
    _inputDESCR;
    _myqlDEV_NAME;
    _mysqlPUP_NAME;
    _mysqlDESCR;
    constructor() {
        super("Components");
        this._delteSaveSVG = new _svg_SaveSvg__WEBPACK_IMPORTED_MODULE_1__.default("be_saveSvg be_saveSvg__tabsvg", "", "#effcef");
        this._addSaveSVG = new _svg_SaveSvg__WEBPACK_IMPORTED_MODULE_1__.default("be_saveSvg be_saveSvg__tabsvg", "", "#effcef");
        this._inputDEV_NAME = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addBackendInput)("text", "DEV_NAME");
        this._inputPUP_NAME = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addBackendInput)("text", "PUP_NAME");
        this._inputDESCR = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addBackendInput)("text", "DESCR");
        this._descr_add = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addBackendP)("Componente hinzufügen");
        this._descr_delete = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addBackendP)("Component löschen");
        this._myqlDEV_NAME = "";
        this._mysqlPUP_NAME = "";
        this._mysqlDESCR = "";
        console.log("test");
        this.createMenu([this._descr_add, this._inputDEV_NAME, this._inputPUP_NAME, this._inputDESCR, this._addSaveSVG.svg, this._descr_delete, this._delteSaveSVG.svg]);
        this.addHandler([this._inputDEV_NAME, this._inputPUP_NAME, this._inputDESCR]);
    }
    addHandler(NecessaryInputElemts) {
        this._closeSVG.svg.addEventListener("click", () => {
            this._wrapper.remove();
        });
        this._addSaveSVG.svg.addEventListener("click", () => {
            if (this.checkNecessaryInput(NecessaryInputElemts)) {
                fetch("/ad", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ devName: this._inputDEV_NAME.value, pupName: this._inputPUP_NAME.value, descr: this._inputDESCR.value })
                });
            }
        });
    }
}


/***/ }),

/***/ "./src/ts/backend/loadContent.ts":
/*!***************************************!*\
  !*** ./src/ts/backend/loadContent.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContent)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ "./src/ts/helper/helper.ts");
/* harmony import */ var _svg_TrashSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/TrashSvg */ "./src/ts/svg/TrashSvg.ts");


async function loadContent() {
    let response = await fetch('/selectContent');
    let data = await response.json();
    data.forEach(e => {
        const innerWrapper = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addHtmlElement)("div", "be_innerWrapper");
        const trashSvg = new _svg_TrashSvg__WEBPACK_IMPORTED_MODULE_1__.default("be_trashSvg", "be_contentTrash", "#ff5454");
        const el = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.addHtmlElement)("div", false);
        trashSvg.svg.addEventListener("click", () => { trashHandler(e.ID); innerWrapper.remove(); });
        el.innerHTML = (e.DEV_NAME);
        innerWrapper.append(el, trashSvg.svg);
        _helper_helper__WEBPACK_IMPORTED_MODULE_0__.componentWrapper.append(innerWrapper);
    });
    function trashHandler(id) {
        fetch("/deleteContent", {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        }).then();
    }
}


/***/ }),

/***/ "./src/ts/frontend/components/C_title.ts":
/*!***********************************************!*\
  !*** ./src/ts/frontend/components/C_title.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ C_title)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/ts/frontend/components/Component.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/helper */ "./src/ts/helper/helper.ts");


class C_title extends _Component__WEBPACK_IMPORTED_MODULE_0__.default {
    _devTitle;
    constructor() {
        super();
        this._devTitle = "c_title";
    }
    createBackendHtmlElemnts() {
        const titleInput = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.addBackendInput)("text", false);
        const type = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.addBackendInput)("text", "h2", "Type");
        const color = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.addBackendInput)("text", "white", "Farbe");
        this.setSetting({ content: titleInput, type: type, color: color });
    }
}


/***/ }),

/***/ "./src/ts/frontend/components/Component.ts":
/*!*************************************************!*\
  !*** ./src/ts/frontend/components/Component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _svg_SaveSvg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg/SaveSvg */ "./src/ts/svg/SaveSvg.ts");
/* harmony import */ var _svg_CloseSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/CloseSvg */ "./src/ts/svg/CloseSvg.ts");
/* harmony import */ var _svg_SettingsSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg/SettingsSVG */ "./src/ts/svg/SettingsSVG.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/helper */ "./src/ts/helper/helper.ts");




class Component {
    _coseSvg;
    _saveSVG;
    _settingsSVG;
    _devTitle = "";
    _innerWrapper;
    _allElements;
    _settings;
    constructor() {
        this._coseSvg = new _svg_CloseSvg__WEBPACK_IMPORTED_MODULE_1__.default("be_closeSvg", "be_closeSvg", "#ff5454");
        this._saveSVG = new _svg_SaveSvg__WEBPACK_IMPORTED_MODULE_0__.default("be_saveSvg", "be_saveSvg", "#ff5454");
        ;
        this._settingsSVG = new _svg_SettingsSVG__WEBPACK_IMPORTED_MODULE_2__.default("be_settingsSvg", "be_settingsSvg", "#ff5454");
        this._innerWrapper = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.addHtmlElement)("div", "be_innerCompWrapper");
        this._allElements = [];
        this._settings = { color: "", content: "", width: "", type: "" };
        this.createOverlay();
    }
    createOverlay() {
        this._innerWrapper.append(this._settingsSVG.svg, this._saveSVG.svg, this._coseSvg.svg);
        _helper_helper__WEBPACK_IMPORTED_MODULE_3__.componentWrapper.append(this._innerWrapper);
        this.createBackendHtmlElemnts();
    }
    createBackendHtmlElemnts() { }
    setSetting(ElObjects) {
        for (const [key, value] of Object.entries(ElObjects)) {
            this._innerWrapper.append(value);
        }
        _helper_helper__WEBPACK_IMPORTED_MODULE_3__.componentWrapper.append(this._innerWrapper);
        this._saveSVG.svg.addEventListener("click", () => {
            if (this.checkNecessaryInput(ElObjects)) {
                console.log("correct");
                for (const [key, value] of Object.entries(ElObjects)) {
                    this._settings[key] = value.value;
                }
                this.postContent();
            }
            else {
                if (document.getElementById("titleError")) {
                    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.removeElement)("titleError");
                }
                console.log("Not correct");
                const errorP = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.addErrorElement)();
                this._innerWrapper.appendChild(errorP);
            }
        });
    }
    checkNecessaryInput(ElObjects) {
        let inputDone = true;
        for (const [key, value] of Object.entries(ElObjects)) {
            if (value.value == undefined || value.value == "")
                inputDone = false;
        }
        return inputDone;
    }
    postContent() {
        fetch("/addContent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ devName: this._devTitle, settings: this._settings })
        }).then();
        location.reload();
    }
}


/***/ }),

/***/ "./src/ts/helper/helper.ts":
/*!*********************************!*\
  !*** ./src/ts/helper/helper.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentWrapper": () => (/* binding */ componentWrapper),
/* harmony export */   "removeElement": () => (/* binding */ removeElement),
/* harmony export */   "addHtmlElement": () => (/* binding */ addHtmlElement),
/* harmony export */   "addBackendDiv": () => (/* binding */ addBackendDiv),
/* harmony export */   "addBackendP": () => (/* binding */ addBackendP),
/* harmony export */   "addBackendInput": () => (/* binding */ addBackendInput),
/* harmony export */   "addErrorElement": () => (/* binding */ addErrorElement)
/* harmony export */ });
const componentWrapper = document.getElementById("componentWrapper");
function removeElement(elementID) {
    document.getElementById(elementID)?.remove();
}
function addHtmlElement(htmlTag, className, idName) {
    const newElement = document.createElement(htmlTag);
    if (className)
        newElement.setAttribute("class", className);
    if (idName)
        newElement.id = idName;
    return newElement;
}
function addBackendDiv() {
    const div = addHtmlElement("div", "be_div");
    return div;
}
function addBackendP(innerHTML) {
    const p = addHtmlElement("p", "be_p");
    p.innerHTML = innerHTML;
    return p;
}
function addBackendInput(type, defaultValue, innerHTML) {
    const input = addHtmlElement("input", "be_input");
    input.type = type;
    if (defaultValue)
        input.value = defaultValue;
    if (innerHTML)
        input.innerHTML = innerHTML;
    return input;
}
function addErrorElement() {
    const ErrorEl = addHtmlElement("P", "be_errEl");
    ErrorEl.innerHTML = "Inhalt Fehlt";
    ErrorEl.id = "titleError";
    return ErrorEl;
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
    constructor(className, id, fill) {
        super(className, id, fill);
        this.path.setAttributeNS(null, "d", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddSVG);


/***/ }),

/***/ "./src/ts/svg/CloseSvg.ts":
/*!********************************!*\
  !*** ./src/ts/svg/CloseSvg.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloseSvg)
/* harmony export */ });
/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVG */ "./src/ts/svg/SVG.ts");

class CloseSvg extends _SVG__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(className, id, fill) {
        super(className, id, fill);
        this.path.setAttributeNS(null, "d", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z");
    }
}


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
    constructor(className, id, fill) {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
        this.svg.setAttribute("viewBox", "0 0 512 512");
        this.path.setAttribute("fill", fill);
        this.svg.setAttribute("class", className);
        this.svg.id = id;
        this.path.setAttribute("fill", fill);
        this.svg.appendChild(this.path);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SVG);


/***/ }),

/***/ "./src/ts/svg/SaveSvg.ts":
/*!*******************************!*\
  !*** ./src/ts/svg/SaveSvg.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveSvg)
/* harmony export */ });
/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVG */ "./src/ts/svg/SVG.ts");

class SaveSvg extends _SVG__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(className, id, fill) {
        super(className, id, fill);
        this.path.setAttributeNS(null, "d", "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z");
    }
}


/***/ }),

/***/ "./src/ts/svg/SettingsSVG.ts":
/*!***********************************!*\
  !*** ./src/ts/svg/SettingsSVG.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsSvg)
/* harmony export */ });
/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVG */ "./src/ts/svg/SVG.ts");

class SettingsSvg extends _SVG__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(className, id, fill) {
        super(className, id, fill);
        const secondPath = document.createElementNS('http://www.w3.org/2000/svg', "path");
        secondPath.setAttribute("fill", fill);
        secondPath.setAttributeNS(null, "d", "M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8 c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2 c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8 c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1 c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8 c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5 l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6 c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1 l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1 C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9 c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8 c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42 c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8 c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8 c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2 c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42 c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6 c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1 c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8 c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7 c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z");
        this.path.setAttributeNS(null, "d", "M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z");
        this.svg.append(this.path, secondPath);
    }
}


/***/ }),

/***/ "./src/ts/svg/TrashSvg.ts":
/*!********************************!*\
  !*** ./src/ts/svg/TrashSvg.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrashSvg)
/* harmony export */ });
/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVG */ "./src/ts/svg/SVG.ts");

class TrashSvg extends _SVG__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(className, id, fill) {
        super(className, id, fill);
        this.path.setAttributeNS(null, "d", "M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z");
    }
}


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
/* harmony import */ var _frontend_components_C_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frontend/components/C_title */ "./src/ts/frontend/components/C_title.ts");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper */ "./src/ts/helper/helper.ts");
/* harmony import */ var _svg_AddSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/AddSvg */ "./src/ts/svg/AddSvg.ts");
/* harmony import */ var _svg_CloseSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/CloseSvg */ "./src/ts/svg/CloseSvg.ts");
/* harmony import */ var _BackendMenu_BackendSetComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BackendMenu/BackendSetComponents */ "./src/ts/backend/BackendMenu/BackendSetComponents.ts");
/* harmony import */ var _loadContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadContent */ "./src/ts/backend/loadContent.ts");






(async function main() {
    console.log("app successfully loaded");
    const test = new _BackendMenu_BackendSetComponents__WEBPACK_IMPORTED_MODULE_4__.default();
    await (0,_loadContent__WEBPACK_IMPORTED_MODULE_5__.default)();
    addAddSvg();
    async function addComponentMenu() {
        const componentMenu = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.addHtmlElement)("div", "c_devMenu", "devMenu");
        const closeSvg = new _svg_CloseSvg__WEBPACK_IMPORTED_MODULE_3__.default("be_closeSvg", "be_closeSvg", "#ff5454");
        closeSvg.svg.addEventListener("click", () => {
            componentMenu.remove();
            addAddSvg();
        });
        let response = await fetch('/selectComponents');
        let data = await response.json();
        data.forEach(e => {
            const cBtn = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.addHtmlElement)("button", "btn btn--devBtn", "devBtn");
            cBtn.innerHTML = e.PUP_NAME;
            cBtn.addEventListener("click", () => { componentBtnListener(e.DEV_NAME); });
            componentMenu.append(cBtn);
        });
        componentMenu.append(closeSvg.svg);
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.removeElement)("be_addSvg");
        document.body.append(componentMenu);
    }
    async function addAddSvg() {
        const addSVG = new _svg_AddSvg__WEBPACK_IMPORTED_MODULE_2__.default("be_addSvg", "be_addSvg", "#0f7dbd");
        addSVG.svg.addEventListener("click", await addComponentMenu);
        document.body.append(addSVG.svg);
    }
    function componentBtnListener(componentName) {
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.removeElement)("devMenu");
        const closeSvg = new _svg_CloseSvg__WEBPACK_IMPORTED_MODULE_3__.default("be_closeSvg", "be_closeSvg", "#ff5454");
        closeSvg.svg.addEventListener("click", () => {
            _helper_helper__WEBPACK_IMPORTED_MODULE_1__.componentWrapper.remove();
            addAddSvg();
        });
        switch (componentName) {
            case "c_title":
                new _frontend_components_C_title__WEBPACK_IMPORTED_MODULE_0__.default();
                break;
            default:
                break;
        }
        document.body.append(_helper_helper__WEBPACK_IMPORTED_MODULE_1__.componentWrapper);
    }
})();

})();

/******/ })()
;