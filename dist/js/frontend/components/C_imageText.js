"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __importDefault(require("./Component"));
class C_imageText extends Component_1.default {
    constructor() {
        super();
        this._devTitle = "c_imageText";
        this._pupTitle = ""; //TODO: ADD PUPLIC TITLE
        this._descr = ""; //TODO: ADD DESCRIPTION
    }
    createBackendHtmlElements() {
    }
}
exports.default = C_imageText;
