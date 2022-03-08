import { Button, Typography } from "@mui/material";
import "./Home.css";
import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Wrapper from "../../components/Wrapper/Wrapper";

const Home = () => {
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
        <Typography align="left" variant="caption">
          *Your name and address will be visible to other users.
        </Typography>
        <Wrapper.BottomRow>
          <Button
            variant="contained"
            type="submit"
            className="bottomRowButton rightButton"
            form="signUpForm"
          >
            Next
          </Button>
        </Wrapper.BottomRow>
      </div>
    </Wrapper>
  );
};

export default Home;
