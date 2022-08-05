"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
module.exports.migrateComponents = function () {
    // import all classe from src/server/Migrations
    const files = fs_1.default.readdirSync(`dist/server/Migrations`);
    for (const file of files) {
        if (file.startsWith("create_c_")) {
            const migration = require(`./Migrations/${file}`);
            console.log(Object.values(migration)[0]);
            // Obj.values(migration)
            // const migration = new Migration();
            // migration.migrate();
        }
    }
};
