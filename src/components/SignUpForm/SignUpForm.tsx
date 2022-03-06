import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUpForm.css';

const SignUpForm = () => {
  const { register, handleSubmit, resetField } = useForm();
  const onSubmit = (formData) => {
    resetField('firstName');
    resetField('lastName');
    resetField('address');
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
          <TextField {...register('firstName', { required: true })} fullWidth />
        </label>
        <label>
          <span className="inputLabel">Last Name</span>
          <TextField {...register('lastName', { required: true })} fullWidth />
        </label>
        <label className="addressInput">
          <span className="inputLabel">Address</span>
          <TextField {...register('address', { required: true })} fullWidth />
        </label>
      </form>
    </div>
  );
};

export default SignUpForm;
