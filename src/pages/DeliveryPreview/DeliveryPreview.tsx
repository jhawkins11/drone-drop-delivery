import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../../components/Map/Map';
import Wrapper from '../../components/Wrapper/Wrapper';
import './DeliveryPreview.css';

const DeliveryPreview = () => {
  const navigate = useNavigate();

  const location = {
    lat: 41.881832,
    lng: -87.623177,
  };

  return (
    <Wrapper>
      <Typography align="left" variant="h4" className="confirmLocation">
        Confirm Location
      </Typography>
      <Map markers={[location]} />
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
          Confirm
        </Button>
      </Wrapper.BottomRow>
    </Wrapper>
  );
};

export default DeliveryPreview;
