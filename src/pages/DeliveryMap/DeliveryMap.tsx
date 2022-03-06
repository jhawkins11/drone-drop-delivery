import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../../components/Wrapper/Wrapper';

const DeliveryMap = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>Map</div>
      <Wrapper.BottomRow>
        <Button
          variant="contained"
          className="bottomRowButton leftButton"
          onClick={() => navigate('/deliveryPreview')}
        >
          Go Back
        </Button>
      </Wrapper.BottomRow>
    </Wrapper>
  );
};

export default DeliveryMap;
