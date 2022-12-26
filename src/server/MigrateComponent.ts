import * as glob from "glob";
import fs from 'fs';

module.exports.migrateComponents = function () {

   const files: string[] = glob.sync("./dist/server/Migrations/*.js");
   console.log(files);
   for (const file of files) {
      const module = require(file);
      console.log(module.default);
   }
} 