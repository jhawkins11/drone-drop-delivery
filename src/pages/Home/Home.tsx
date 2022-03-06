import { Button, Typography } from '@mui/material';
import './Home.css';
import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Wrapper from '../../components/Wrapper/Wrapper';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="homeMain">
        <Typography align="left" variant="h2">
          Hello!
        </Typography>
        <Typography align="left" variant="subtitle1">
          To begin your delivery, please enter your name and address.
        </Typography>

        <SignUpForm />
        <Wrapper.BottomRow>
          <Button
            variant="contained"
            className="bottomRowButton rightButton"
            onClick={() => navigate('/deliveryPreview')}
          >
            Next
          </Button>
        </Wrapper.BottomRow>
      </div>
    </Wrapper>
  );
};

export default Home;
