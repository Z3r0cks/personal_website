const mysql = require('mysql');
const fs = require('fs');
const dataBase = JSON.parse(fs.readFileSync("databaseConfig.json").toString());
const con = mysql.createConnection({
    host: dataBase.host,
    user: dataBase.user,
    password: dataBase.password,
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE personal_website", function (err, result) {
        if (err)
            throw err;
        console.log("Database created");
    });
    con.query("USE personal_website", function (err, result) {
        if (err)
            throw err;
        console.log("Using personal_website");
    });
    con.query("CREATE TABLE content (id INT AUTO_INCREMENT PRIMARY KEY, DEV_NAME VARCHAR(255), SETTINGS VARCHAR(255)", function (err, result) {
        if (err)
            throw err;
        console.log("Table content created");
    });
    con.query("INSERT INTO content (DEV_NAME, SETTINGS) VALUES ('c_title', '{\"type\":\"h1\",\"content\":\"Patrick Kaserer\"}')", function (err, result) {
        if (err)
            throw err;
        console.log("Content c_title inserted");
    });
    con.query("INSERT INTO content (DEV_NAME, SETTINGS) VALUES ('c_test', '{\"type\":\"p\",\"content\":\"Test\"}')", function (err, result) {
        if (err)
            throw err;
        console.log("Content c_test inserted");
    });
    con.end();
});
