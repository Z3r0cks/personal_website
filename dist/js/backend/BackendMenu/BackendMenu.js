"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../helper/helper");
class BackendMenu {
    constructor(componentMenu, placeholder1, placeholder2, placeholder3) {
        this._componentMenu = componentMenu;
        this._placeholder1 = placeholder1;
        this._placeholder2 = placeholder2;
        this._placeholder3 = placeholder3;
        this._menuContent = [componentMenu, placeholder1, placeholder2, placeholder3];
        this._wrapper = helper_1.addHtmlElement("div", "be_backendMenu__wrapper", "be_backendMenu_wrapper");
    }
    createMenu() {
        this._menuContent.forEach(e => {
            document.createElement("a");
            const newlink = helper_1.addHtmlElement("a", "be_componentMenu__a");
            newlink.href = `#${e}`;
            this._wrapper.appendChild(newlink);
        });
        document.body.appendChild(this._wrapper);
    }
}
exports.default = BackendMenu;
