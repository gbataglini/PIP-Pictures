import React, { useEffect, useState } from "react";
import './History.css';
import './Profile.css'
import Navbar from './components/NavBar.js';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const PrettoSlider = styled(Slider)({
    marginLeft: '10px',
    color: '#FFEC3E',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      backgroundColor: '#FFEC3E',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      color: 'black',
      lineHeight: 1.2,
      fontSize: 14,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#FFEC3E',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });
  
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#FFEC3E',
    },
    '& .MuiRating-iconHover': {
      color: '#FFEC3E',
    },
  
    '& .MuiRating-iconEmpty': {
      color: 'grey'
    }
  });

export default function ToWatch() {
    const [ToWatch, SetToWatch] = useState([])
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        fetch("http://localhost:4000/all-toWatch/1/")
        .then((response) => response.json())
        .then((ToWatch) => {
          SetToWatch(ToWatch);
        });
      }, []);

      const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#FFEC3E',
        }
    })

    return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar /> 

    <Box sx={{ flexGrow: 1, padding: 5 }}>  

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(ToWatch).map((movie, index) => (

          <Grid xs={2} sm={4} md={4} key={index}>
          <Item>
          <div className="filmCell">
            <div classname="filmCover">
              <img src={movie.thumbnail} width='325' height='450' alt="movie cover"/>
            </div>
            <div className="textInfo">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
            <div className="horizontal">
                <StyledRating name="read-only" 
                value={1}
                max={1} />
                <Typography component="legend" sx={{color: 'white'}}><b>IMDB Rating:</b> {movie.rating}</Typography>
            </div>
            <div className="horizontal">
              <p><b>Runtime: </b>{movie.length} mins</p>
            </div>
            <Box sx={{ m: 0.5}} />
                <Typography>Progress: </Typography>
                <PrettoSlider
                sx={{width: '80%'}}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={movie.progress}
                  onChange={(event, newValue) => {
                    if (typeof newValue === 'number') {
                      fetch(`http://localhost:4000/update-stats/1/${movie.movieId}`, {
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json"
                        },
                        method: "PATCH",	
                        body: JSON.stringify({
                          progress: newValue
                        })
                      })
                      .then (() => setProgress(newValue)
                      )
                    }
                  }}
                />
                </div>
            </div>
            </Item>
          </Grid>
        ))}
            </Grid>
        </Box>  
    </Box>

    );
}