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

CREATE TABLE movie_info (
  ID INT NOT NULL,
  Title VARCHAR (50) NOT NULL,
  Description VARCHAR (100) NOT NULL,
  Director VARCHAR (50) NOT NULL,
  Length FLOAT NOT NULL,
  Type VARCHAR (50) NOT NULL,
  Image BLOB,
  Release_date DATE,
  Rating FLOAT NOT NULL,
  Available_Platform VARCHAR (50),
  PRIMARY KEY (ID)
);
