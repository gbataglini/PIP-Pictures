import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from './requests';
import "./userHomeBanner.css";


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
            );
            return request;
        }
        fetchData();
    }, []);


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "${movie?.backdrop_path}"
                    )`,
                backgroundPosition: 'center center',
            }}
        >  
            <div className="banner__contents">

            <h1 className="banner__title"> Welcome Back!</h1>

            <div className="banner__buttons">
                <button className="banner__button">Search</button>
                <button className="banner__button">My List</button>

            </div>
            


            </div>
            
            
       



        </header>

    )}

    export default Banner;