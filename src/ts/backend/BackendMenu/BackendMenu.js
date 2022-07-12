import { addHtmlElement } from "../../helper/helper";
export default class BackendMenu {
    constructor(componentMenu, placeholder1, placeholder2, placeholder3) {
        this._componentMenu = componentMenu;
        this._placeholder1 = placeholder1;
        this._placeholder2 = placeholder2;
        this._placeholder3 = placeholder3;
        this._menuContent = [componentMenu, placeholder1, placeholder2, placeholder3];
        this._wrapper = addHtmlElement("div", "be_backendMenu__wrapper", "be_backendMenu_wrapper");
    }
    createMenu() {
        console.log("test");
        this._menuContent.forEach(e => {
            document.createElement("a");
            const newlink = addHtmlElement("a", "be_componentMenu__a");
            newlink.href = `#${e}`;
            this._wrapper.appendChild(newlink);
        });
        document.body.appendChild(this._wrapper);
    }
}
