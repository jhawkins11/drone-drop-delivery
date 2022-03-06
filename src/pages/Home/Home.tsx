import { Button, Paper, Typography } from '@mui/material';
import './Home.css';
import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Wrapper from '../../components/Wrapper/Wrapper';

const Home = () => {
  return (
    <Wrapper>
      <div className="mainText">
        <Typography align="left" variant="h2">
          Hello!
        </Typography>
        <Typography align="left" variant="subtitle1">
          To begin your delivery, please enter your name and address.
        </Typography>
      </div>
      <SignUpForm />
      <Wrapper.BottomRow>
        <Button variant="contained" className="nextButton" type="submit">
          Next
        </Button>
      </Wrapper.BottomRow>
    </Wrapper>
  );
};

export default Home;
