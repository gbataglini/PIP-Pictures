const db = require('./db');

const express = require("express");
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}))
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// Route to get user info
app.get('/user_get/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    console.log(user_id);
    db.query('SELECT * FROM user_info WHERE user_id = ?', [user_id], (err, results, fields) => {
      if (err) throw err;
      res.json(results[0]);
    });
});

// Route to get user ID, username and password
app.get('/username_get/:username', (req, res) => {
  const username = req.params.username;
  db.query('SELECT user_id, username, password FROM user_info WHERE username = ?', [username], (err, results, fields) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Route to get security question and answer
app.get('/security_get/:email', (req, res) => {
  const email = req.params.email;
  db.query('SELECT user_id, security_q, security_a FROM user_info WHERE username = ?', [email], (err, results, fields) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Route to create a new user
app.post('/user_new', (req, res) => {
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    console.log(`Adding user...`);
    db.query('INSERT INTO user_info (first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)', [fname, lname, email, username, password], (err, results, fields) => {
      if (err) throw err;
      res.json({ message: `User has been added` });
    });
});

// Route to delete user ID
app.delete('/user_del/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    db.query('DELETE FROM user_stats WHERE user_id = ?', [user_id], (err, results, fields) => {
        if (err) throw err;
        db.query('DELETE FROM user_info WHERE user_id = ?', [user_id], (err, results, fields) => {
            if (err) throw err;
            res.json({ message: `User has been deleted` });
        });
    });
});
  
// Route to update user
app.post('/user_update/:user_id', (req, res) => {
    const user_id = req.params.user_id
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        'UPDATE user_info SET user_info.first_name = ?, user_info.last_name = ?, user_info.email = ?, user_info.username = ?, user_info.password = ? WHERE user_info.user_id = ?', [fname, lname, email, username, password], (err, results, fields) => {
      if (err) throw err;
      res.json({ message: `User, ${user_id}, updated successfully` });
    });
});

// Route to get all user stats
app.get('/stats_get/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    db.query('SELECT * FROM user_stats WHERE user_id = ?', [user_id], (err, results, fields) => {
      if (err) throw err;
      res.json(results[0]);
    });
});

// Route to get all movie info by user and watched/not watched
app.get('/film_get/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    const status = req.body.status;
    db.query('SELECT * FROM movie_info WHERE ID in (SELECT film_id from user_stats WHERE user_id = ? AND status = ?)', [user_id, status], (err, results, fields) => {
      if (err) throw err;
      res.json(results[0]);
    });
});

// Route to delete a movie from user stats
app.delete('/film_del/:film_id', (req, res) => {
    const user_id = req.params.user_id;
    db.query('DELETE FROM user_stats WHERE film_id in (SELECT film_id from user_stats WHERE user_id = ? AND status = ?', [film_id, user_id], (err, results, fields) => {
        if (err) throw err;
        res.json({ message: `Film has been removed.` });
        });
    });

// Route to add movie data to movie table
app.post('/film_new/:film_id', (req, res) => {
    const film_id = req.params.film_id
    const title = req.body.title;
    const description = req.body.description;
    const director = req.body.director;
    const length = req.body.length;
    const type = req.body.type;
    const image = req.body.image;
    const release_date = req.body.releaseDate;
    const rating = req.body.rating;
    const platform = req.body.platform;
    db.query(
        'UPDATE movie_info SET movie_info.film_id = ?, movie_info.title = ?, movie_info.description = ?, movie_info.director = ?, movie_info.length = ?, movie_info.type = ?, movie_info.image = ?, movie_info.release_date = ?, movie_info.rating = ?, movie_info.available_platform = ?', [film_id, title, description, director, length, type, image, release_date, rating, platform], (err, results, fields) => {
      if (err) throw err;
      res.json({ message: `Film added successfully` });
    });
});

// Route to fetch stats
app.get('/profile_get/:user_id/summary', (req, res) => {
  const user_id = req.params.user_id;

  const totalsQuery = `
    SELECT
      SUM(mi.Length) AS totalLength,
      COUNT(us.film_id) AS totalWatchedFilms,
      COUNT(us.review) AS totalReviews
    FROM movie_info AS mi
    JOIN user_stats AS us ON mi.ID = us.film_id
    WHERE us.user_id = ? AND us.status = 'watched'
  `;

  db.query(totalsQuery, [user_id], (err, results, fields) => {
    if (err) throw err;

    const {
      totalLength = 0,
      totalWatchedFilms = 0,
      totalReviews = 0,
    } = results[0];

    res.json({
      totalLength,
      totalWatchedFilms,
      totalReviews,
    });
  });
});

// Route to see rating (used in History)
app.get('/get-rating/:user_id/:film_id/', (req, res) => {
  const user_id = req.params.user_id;
  const film_id = req.params.film_id;
  db.query(
    `SELECT user_rating AS userRating, review AS userReview FROM user_stats 
    WHERE user_id = ? AND film_id = ? AND status = 'watched'`, [user_id, film_id], (err, results, fields) => {
      if (err) throw err;
      const {
        userRating = 0,
        userReview = '',
      } = results[0];
      
      res.status(200).json({
        userRating, 
        userReview
      });

     });
  });

// Route to post/update rating (used in History)

  app.patch('/update-rating/:user_id/:film_id', (req, res) => {
    const user_id = req.params.user_id;
    const film_id = req.params.film_id;
    const user_rating = req.body.rating;
    const user_review = req.body.review;

    db.query(
      `UPDATE user_stats 
      SET user_rating = IFNULL(?, user_rating), review = IFNULL(?, review)
      WHERE user_id = ? AND film_id = ? AND status = 'watched'`, [user_rating, user_review, user_id, film_id], (err, results, fields) => {
    
      res.status(200).json({
        message: `Review/Rating for film ${film_id} updated successfully.`
     });

   });
 }); 

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});