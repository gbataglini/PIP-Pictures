import Navbar from './components/NavBar.js';
import React from 'react';
import './userHome.css';
import Row from './Row.js';
import requests from './requests.js';

function userHome() {
    return(
        <div className="UserHome">
          <h1> Welcome Back! </h1>
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Upcoming" fetchUrl={requests.fetchNewMovies} />
            
            <Navbar/>



            
        </div>
    );
}

export default userHome;
