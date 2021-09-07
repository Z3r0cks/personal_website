// Update

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;


// inser Into

INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');


//
SELECT * FROM `content` WHERE `Name` = "title_name"

INSERT INTO `personal_website`.`content`(`ID`,`DEV_NAME`,`SETTINGS`) VALUES ('1','test','{"screen": "50 inch"}')

INSERT INTO `personal_website`.`content`(`ID`,`DEV_NAME`,`SETTINGS`) VALUES ('3','c_title','{"color":"red","width":"50px"}')

INSERT INTO `personal_website`.`content`(`DEV_NAME`,`SETTINGS`) VALUES ('c_title','{"color":"red","width":"50px"}')
