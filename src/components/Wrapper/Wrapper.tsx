import { Paper } from '@mui/material';
import React from 'react';
import BottomRow from '../BottomRow/BottomRow';
import './Wrapper.css';

const Wrapper = ({ children }) => {
  return (
    <Paper className="paper gradientBorder" elevation={3}>
      {children}
    </Paper>
  );
};

Wrapper.BottomRow = BottomRow;

export default Wrapper;
