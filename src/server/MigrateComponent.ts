import fs from 'fs';

module.exports.migrateComponents = function () {
   // import all classe from src/server/Migrations
   const files = fs.readdirSync(`dist/server/Migrations`);
   for (const file of files) {
      if (file.startsWith("create_c_")) {
         const migration = require(`./Migrations/${file}`);
         console.log(Object.values(migration)[0]);
         // Obj.values(migration)
         // const migration = new Migration();
         // migration.migrate();
      }
 
   }
}