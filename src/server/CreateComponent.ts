import fs from 'fs';

module.exports.createComponent = function () {
   if (process.env.npm_config_name !== undefined) {
      const config_name = process.env.npm_config_name;
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

      //set string in PascalCase
      const config_name_pascal = config_name.charAt(0).toUpperCase() + config_name.slice(1);

      const Migration = `import Migration from "./Migration";

   class Create${config_name_pascal} extends Migration {
      constructor() {
         super()
         this._devTitle = "c_imageText";
         this._pupTitle = "";    //TODO: ADD PUPLIC TITLE
         this._descr = "";       //TODO: ADD DESCRIPTION
      }
   }`;

      fs.appendFile(`src/server/Migrations/create_c_${config_name}_table.ts`, Migration, function (err) {
         if (err) throw err;
         console.log(`Migration File C_${config_name} is created successfully.`);
      });

      fs.appendFile(`src/ts/frontend/components/C_${config_name}.ts`, content, function (err) {
         if (err) throw err;
         console.log(`Component C_${config_name} is created successfully.`);
      });
   } else {
      console.log("Please provide a component name with createComponent --name=name");
   }
}