/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!***************************************!*\
  !*** ./src/ts/backend/backendPage.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
console.log("app successfully loaded");
const componentMenu = document.createElement("div");
componentMenu.classList.add("c_devMenu");
const componentArray = [];
fetch('/selectContent')
    .then(response => response.json())
    .then(data => data.forEach(e => {
    componentArray.push(e.Name);
}));
setTimeout(() => {
    console.log(componentArray.length);
    componentArray.forEach(e => {
        const cBtn = document.createElement("button");
        cBtn.classList.add("c_devBtn");
        cBtn.innerHTML = e;
        componentMenu.append(cBtn);
    });
}, 200);
document.body.append(componentMenu);


/******/ })()
;