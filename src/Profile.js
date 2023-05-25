import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar.js';
import StyledButton from '@mui/material/Button';
import Box from '@mui/material/Box';

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalHoursWatched, setTotalHoursWatched] = useState(0);
  const [numFilmsWatched, setNumFilmsWatched] = useState(0);
  const [numReviews, setNumReviews] = useState(0);
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/user_get/1")
      .then((response) => response.json())
      .then((data) => {
        const user = data[0];
        setUsername(user.username);
        setEmail(user.email);
        setUserData(user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data. Please try again later: " + error.message);
        setLoading(false);
      });

    fetch("http://localhost:4000/profile_get/1/summary")
      .then((response) => response.json())
      .then((data) => {
        const { totalLength, totalWatchedFilms, totalReviews } = data;
        setTotalHoursWatched(totalLength);
        setNumFilmsWatched(totalWatchedFilms);
        setNumReviews(totalReviews);
      })
      .catch((error) => {
        console.error("Error fetching user summary:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { last_name, first_name } = userData;
  const profilePicture = "logo192.png";

  return (
    <div>
      <NavBar />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", 
          gap: "20px",
          padding: "20px",
          "@media (min-width: 1024px)": {
            gridTemplateColumns: "repeat(1, 1fr)", 
          },
        }}
      >
        <div className="box">
          <div className="user-info">
            <img src={profilePicture} alt="Profile Picture" />
            <h2>{username}</h2>
            <StyledButton text="Update Profile Picture" />
          </div>
          <div className="user-stats">
            <h2>User stats</h2>
            <h4>Total hours watched: {totalHoursWatched}</h4>
            <h4>Number of films watched: {numFilmsWatched}</h4>
            <h4>Number of reviews: {numReviews}</h4>
          </div>
        </div>
            
        <div className="box">
          <div className="account">
            <h2>Account Details</h2>
            <h4>Name: {first_name} {last_name}</h4>
            <h4>Email: {email}</h4>
            <StyledButton text="Update Email" />
            <StyledButton text="Update Password" />  
          </div>
          <div className="watched-films">
            <h2>Watched Films</h2>
            <table>
              <thead>
                <tr>
                  <th>Film Title</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {filmsData.map((film) => (
                  <tr key={film.ID}>
                    <td>{film.Title}</td>
                    <td>{film.user_rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default UserProfile;