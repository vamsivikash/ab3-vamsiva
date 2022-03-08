import logo from './unicorn.svg';
import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import InfoIcon from '@mui/icons-material/Info';


function Home() {
  let navigate = useNavigate();
  const buttons = [
    <Button startIcon={<HomeIcon/>} variant="contained" size="large" key="Home" onClick={ () => navigate('/Home')}> Home</Button>,
    <Button startIcon={<LocalOfferIcon/>} variant="contained" size="large" key="Offers" onClick={ () => navigate('/Offers')}> Offers</Button>, 
    <Button startIcon={<DirectionsCarIcon/>} variant="contained" size="large" key="Ride" onClick={ () => navigate('/Ride')}> Ride</Button>,
    <Button startIcon={<BookOnlineIcon/>} variant="contained" size="large" key="Reserve" onClick={ () => navigate('/Reserve')}> Reserve</Button>, 
    <Button startIcon={<InfoIcon/>} variant="contained" size="large" key="About" onClick={ () => navigate('/About')}> About</Button> 
  ];

  return (
      <React.Fragment>
        
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
            m: 1,
            },
        }}>
        
        <ButtonGroup color="secondary" aria-label="large button group">
            {buttons}
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" /> <br/>
        </Box>

      </React.Fragment>
  );
}

export default Home;
