USE pipdb;

CREATE TABLE user_stats (
    user_id INT NOT NULL,
    film_id INT NOT NULL,
    user_rating FLOAT NOT NULL,
    status ENUM('watched', 'not watched') NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_info(user_id)
);
