"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
module.exports.createComponent = function () {
    const name = process.env.npm_config_name;
    const content = `import Component from './Component';

   export default class C_imageText extends Component {
      constructor() {
         super()
         this._devTitle = "c_imageText";
         this._pupTitle = "";    //TODO: ADD PUPLIC TITLE
         this._descr = "";       //TODO: ADD DESCRIPTION
      }
   
      createBackendHtmlElements() {
   
      }
   }`;
    fs_1.default.appendFile(`src/ts/frontend/components/C_${process.env.npm_config_name}.ts`, content, function (err) {
        if (err)
            throw err;
        console.log(`File C_${name} is created successfully.`);
    });
};
