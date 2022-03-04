import { Paper, Typography } from '@mui/material';
import './Home.css';
import React from 'react';

const Home = () => {
  return (
    <Paper className="paper gradientBorder" elevation={3}>
      <div className="mainText">
        <Typography align="left" variant="h2">
          Hello!
        </Typography>
        <Typography align="left" variant="subtitle1">
          To begin your delivery, please enter your name and address.
        </Typography>
      </div>
    </Paper>
  );
};

export default Home;
