"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Migration_1 = __importDefault(require("./Migration"));
class CreateImageText extends Migration_1.default {
    constructor() {
        super();
        this._devTitle = "c_imageText";
        this._pupTitle = ""; //TODO: ADD PUPLIC TITLE
        this._descr = ""; //TODO: ADD DESCRIPTION
    }
}
exports.default = CreateImageText;
