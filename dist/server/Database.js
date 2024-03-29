const mysql = require('mysql');
const fs = require('fs');
const dataBase = JSON.parse(fs.readFileSync("databaseConfig.json").toString());
const con = mysql.createConnection({
    host: dataBase.host,
    user: dataBase.user,
    password: dataBase.password,
});
// migrate database
module.exports.migrateDataBase = function () {
    con.connect(function (err) {
        if (err)
            throw err;
        con.query(`CREATE DATABASE ${dataBase.name}`, function (err, result) {
            if (err)
                throw err;
            console.log("Database created");
        });
        con.query(`USE ${dataBase.name}`, function (err, result) {
            if (err)
                throw err;
        });
        con.query(`CREATE TABLE component (ID INT AUTO_INCREMENT PRIMARY KEY, DEV_NAME VARCHAR(255) NOT NULL, PUP_NAME VARCHAR(255) NOT NULL, DESCR VARCHAR(255))`, function (err, result) {
            if (err)
                throw err;
            console.log("Table component created");
        });
        con.query(`CREATE TABLE content (ID INT AUTO_INCREMENT PRIMARY KEY, COMPONENT_ID INT NOT NULL, SETTINGS varchar(225) NOT NULL, CONSTRAINT fk_component FOREIGN KEY (COMPONENT_ID) REFERENCES component(ID) ON DELETE CASCADE ON UPDATE CASCADE)`, function (err, result) {
            if (err)
                throw err;
            console.log("Table content created");
        });
        // con.query("INSERT INTO content (PUP_NAME, DEV_NAME, SETTINGS) VALUES ('Titel', 'c_title', '{\"type\":\"h1\",\"content\":\"Patrick Kaserer\"}')", function (err, result) {
        //    if (err) throw err;
        //    console.log("Content c_title inserted");
        // });
        // con.query("INSERT INTO content (PUP_NAME, DEV_NAME, SETTINGS) VALUES ('Test', 'c_test', '{\"type\":\"p\",\"content\":\"Test\"}')", function (err, result) {
        //    if (err) throw err;
        //    console.log("Content c_test inserted");
        // });
        con.end();
    });
};
// drop database
module.exports.dropDatabase = function () {
    con.connect(function (err) {
        if (err)
            throw err;
        console.log("Connected!");
        con.query("DROP DATABASE personal_website", function (err, result) {
            if (err)
                throw err;
            console.log("Database dropped");
        });
        con.end();
    });
};
