"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Migration {
    constructor() {
        this._devTitle = "";
        this._pupTitle = "";
        this._descr = "";
        this._devTitle = "";
        this._pupTitle = "";
        this._descr = "";
    }
    migrate() {
        fetch("/addComponent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ DEV_NAME: this._devTitle, PUP_NAME: this._pupTitle, DESCR: this._descr })
        }).then(res => res.json())
            .then(res => {
            if (res.success) {
                console.log(res.message);
            }
            else {
                console.log(res.message);
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
exports.default = Migration;
