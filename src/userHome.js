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
          
          <Row 
          title="Trending Now" 
          fetchUrl={requests.fetchTrending} 
          isLargeRow
          />
          
          <Row title="Top Rated" 
          fetchUrl={requests.fetchTopRated} 
          isLargeRow
          />

          <Row title="Upcoming" 
          fetchUrl={requests.fetchUpComing} 
          isLargeRow
          />
    
        </div>
    );
}

export default UserHome;
