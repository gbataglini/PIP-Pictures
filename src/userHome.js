import Navbar from './components/NavBar.js';
import React from 'react';
import './userHome.css';
import Row from './Row.js';
import requests from './requests.js';
import Banner from './userHomeBanner.js';

function UserHome() {
    return(

        
        <div className="UserHome">
            <Navbar/>
            <Banner />
          <h1>  </h1>
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Upcoming" fetchUrl={requests.fetchUpComing} />
    
        </div>
    );
}

export default UserHome;
