CREATE DATABASE afeinvoice;
USE afeinvoice;

CREATE TABLE product (
id_product INT PRIMARY KEY auto_increment,
code VARCHAR(8) UNIQUE NOT NULL,
name VARCHAR (50) NOT NULL,
description VARCHAR(150) NOT NULL,
quantity INT NOT NULL,
unity_price DOUBLE NOT NULL
);

