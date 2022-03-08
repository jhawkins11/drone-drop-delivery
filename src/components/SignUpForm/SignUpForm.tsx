import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName, useAddressState } from "../../store/slices/addressSlice";
import GoogleAutocomplete from "../GoogleAutocomplete";
import "./SignUpForm.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const addressState = useAddressState();
  const navigate = useNavigate();

  const onSubmit = ({ firstName, lastName, address }) => {
    dispatch(setName({ firstName, lastName }));
    navigate("/deliveryPreview");
  };
  return (
    <div className="signUpFormContainer">
      <form
        className="signUpForm"
        id="signUpForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          <span className="inputLabel">First Name</span>
          <TextField
            {...register("firstName", { required: true })}
            defaultValue={addressState.firstName || ""}
            fullWidth
          />
        </label>
        <label>
          <span className="inputLabel">Last Name</span>
          <TextField
            {...register("lastName", { required: true })}
            defaultValue={addressState.lastName || ""}
            fullWidth
          />
        </label>
        <label className="addressInput">
          <span className="inputLabel">Address</span>
          <GoogleAutocomplete />
        </label>
      </form>
    </div>
  );
};

export default SignUpForm;
