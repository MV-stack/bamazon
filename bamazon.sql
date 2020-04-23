DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(60) NULL,
    department_name VARCHAR(60) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Hand Sanitizer (67.6 fl.oz.)", "Cleaning Supplies", 25.00, 1000), 
("Bleach (121 oz.)", "Cleaning Supplies", 15.00, 2500), 
("Toilet Paper (30 ct.)", "Cleaning Supplies", 25.00, 3000), 
("N95 mask (1 ct.)", "Safety", 10.00, 2500), 
("Surgical Masks (50 ct.)", "Safety", 40.00, 2000),
("Ramen Noodle Soup (1 ct.)", "Groceries", 1.25, 10000),
("Avon M50 CBRN Gas Mask (1 ct)", "Safety", 230.00, 2500),
("M50 Gas Mask Primary Filter Set (2 ct.)", "Safety", 45.00, 6500),
("Hershey Chocolate Bar (1 ct.)", "Groceries", 2.00, 10000),
("Clorox Wipes (75 ct.)", "Cleaning Supplies", 10.00, 2500);



