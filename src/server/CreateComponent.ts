import fs from 'fs';

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

   fs.appendFile(`src/ts/frontend/components/C_${process.env.npm_config_name}.ts`, content, function (err) {
      if (err) throw err;
      console.log(`File C_${name} is created successfully.`);
   });
}