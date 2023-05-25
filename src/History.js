import * as React from 'react';
import './History.css';
import Navbar from './components/NavBar.js';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


const movies = [{
    title: 'Succession',
    rating: 5,
    review: '',
    thumbnail: 'https://deadline.com/wp-content/uploads/2021/09/Succession-season-3-key-art.jpg'
  }, {
    title: 'Desperate Housewives',
    rating: 4.5,
    review: '',
    thumbnail: 'https://m.media-amazon.com/images/I/91IH97AUuGL._AC_SL1500_.jpg'
  }, {
    title: 'White Lotus',
    rating: 3,
    review: '',
    thumbnail: 'https://flxt.tmsimg.com/assets/p22992499_b_v13_ab.jpg'
  }, {
    title: 'Test',
    rating: 2,
    review: '',
    thumbnail: 'https://i.ebayimg.com/images/g/dPkAAOSw6LZec910/s-l1600.jpg'
  }]
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
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
  
    function History() {
    
      return (
        <Box sx={{ flexGrow: 1 }}>
              <Navbar 
      />  
      <Box sx={{ flexGrow: 1, padding: 5 }}>  
  
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(movies).map((movie, index) => (
  
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>
            <div className="filmCell">
              <div classname="filmCover">
                <img src={movie.thumbnail} width='325' height='450' alt="succession"/>
              </div>
              <div className="textInfo">
                <h2>{movie.title}</h2>
                <Typography component="legend" sx={{color: 'white'}}>Rating</Typography>
                  <StyledRating
                    value={movie.rating}
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<StarIcon fontSize="inherit" />}
                  />
                <h4>Review</h4>
                <p>{movie.review}</p>
  
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
  
  
  export default History;