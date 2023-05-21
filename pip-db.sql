CREATE DATABASE pipdb;
USE pipdb;

CREATE TABLE user_info (
  user_id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(50),
  last_name VARCHAR(50),
  first_name VARCHAR(50),
  username VARCHAR(50),
  password VARCHAR(50),
  security_q VARCHAR(50), 
  security_a VARCHAR(50),
  PRIMARY KEY (user_id)
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

CREATE TABLE user_stats (
  user_id INT NOT NULL,
  film_id INT NOT NULL,
  user_rating FLOAT NOT NULL,
  review VARCHAR(1000),
  status ENUM('watched', 'not watched') NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user_info(user_id),
  FOREIGN KEY (film_id) REFERENCES movie_info(ID)
);

INSERT INTO user_info (
first_name,
last_name,
email,
username,
password,
security_q,
security_a)
VALUES
('Test', 'Test', 'test@test.com', 'test123', '123test!', 'Why did the chicken cross the road?', 'To bock traffic')
;

SELECT * FROM user_stats;
