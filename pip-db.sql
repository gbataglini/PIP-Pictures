CREATE DATABASE pipdb;
USE pipdb;

CREATE TABLE user_info (
user_id INT NOT NULL AUTO_INCREMENT KEY,
email VARCHAR(50),
last_name VARCHAR(50),
first_name VARCHAR(50),
username VARCHAR(50),
password VARCHAR(50)
);