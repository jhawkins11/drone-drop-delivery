import { Paper } from '@mui/material';
import React from 'react';
import './Wrapper.css';

const Wrapper = ({ children }) => {
  return (
    <Paper className="paper gradientBorder" elevation={3}>
      {children}
    </Paper>
  );
};

export default Wrapper;
