import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../../components/Wrapper/Wrapper';

const DeliveryPreview = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>Preview</div>
      <Wrapper.BottomRow>
        <Button
          variant="contained"
          className="bottomRowButton leftButton"
          onClick={() => navigate('/')}
        >
          Go Back
        </Button>
        <Button
          variant="contained"
          className="bottomRowButton rightButton"
          onClick={() => navigate('/deliveryMap')}
        >
          Next
        </Button>
      </Wrapper.BottomRow>
    </Wrapper>
  );
};

export default DeliveryPreview;
