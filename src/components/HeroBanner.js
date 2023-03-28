import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../assets/css/styles.css';
import { width } from '@mui/system';

const RoundImage = ({ src }) => (
  <div className="round-image">
    <img src={src} alt="" />
  </div>
);

const HeroBanner = () => (
  <Box position="relative" p="20px" width={"100%"} height={"650px"} color={"black"}>
      <Stack 
      marginTop={"150px"}
      marginLeft={"5px"}
      direction={"row"}
      width={"1600px"}>
      <div class="card" style={{ color: 'white', padding: '5rem 0 0rem', maxWidth: '35ch', borderRadius: '19px', overflow: 'hidden', transition: 'transform 500ms ease' }}>
        <div class="card-content">
          <h2 class="card-title">Reminder</h2>
          <p class="card-body">Don\'t miss your daily workout schedule.</p>
          <a href="TrendingPlaylist.HTML"><button class="button">Check out</button></a>
        </div>
      </div>
      <div class="card" style={{ color: 'white', marginLeft:"30px",padding: '5rem 0 0rem', maxWidth: '35ch', borderRadius: '19px', overflow: 'hidden', transition: 'transform 500ms ease' }}>
        <div class="card-content">
          <h2 class="card-title">DietCharts</h2>
          <p class="card-body">Workout is not the only way to get fit , control your diet and be more fit.</p>
          <a href="TrendingPlaylist.HTML"><button class="button">Check out</button></a>
        </div>
      </div>
      <div class="card" style={{ color: 'white',marginLeft:"30px", padding: '5rem 0 0rem', maxWidth: '35ch', borderRadius: '19px', overflow: 'hidden', transition: 'transform 500ms ease' }}>
        <div class="card-content">
          <h2 class="card-title">Local Groups</h2>
          <p class="card-body">Join Local groups nearby to be part of community and be fit together.</p>
          <a href="TrendingPlaylist.HTML"><button class="button">Check out</button></a>
        </div>
      </div>
      <div class="card" style={{ color: 'white', marginLeft:"30px",padding: '5rem 0 0rem', maxWidth: '35ch', borderRadius: '19px', overflow: 'hidden', transition: 'transform 500ms ease' }}>
        <div class="card-content">
          <h2 class="card-title">Trainer</h2>
          <p class="card-body">Want guidence check out for a trainer and get the best workout plan.</p>
          <a href="TrendingPlaylist.HTML"><button class="button">Check out</button></a>
      </div>
      </div>
      <div class="card" style={{ color: 'white', marginLeft:"30px",padding: '5rem 0 0rem', maxWidth: '35ch', borderRadius: '19px', overflow: 'hidden', transition: 'transform 500ms ease' }}>
        <div class="card-content">
          <h2 class="card-title">Trainer</h2>
          <p class="card-body">Give your Feedback to let us improve your.</p>
          <a href="TrendingPlaylist.HTML"><button class="button">Check out</button></a>
      </div>
      </div>
      </Stack>
  </Box>
);

export default HeroBanner;