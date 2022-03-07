import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../../components/Map/Map";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useAddressState } from "../../store/slices/addressSlice";
import "./DeliveryPreview.css";

const DeliveryPreview = () => {
  const navigate = useNavigate();

  const [mapMarker, setMapMarker] = useState(null);

  const addressState = useAddressState();

  const onMapLoad = (map) => {
    let request = {
      placeId: addressState.placeID,
      fields: ["geometry"],
    };
    let service = new google.maps.places.PlacesService(map);
    service.getDetails(request, callback);

    function callback(place, status) {
      setMapMarker({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  return (
    <Wrapper>
      <Typography align="left" variant="h4" className="confirmLocation">
        Confirm Location
      </Typography>
      <Map markers={[mapMarker]} onMapLoad={onMapLoad} />
      <Wrapper.BottomRow>
        <Button
          variant="contained"
          className="bottomRowButton leftButton"
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
        <Button
          variant="contained"
          className="bottomRowButton rightButton"
          onClick={() => navigate("/deliveryMap")}
        >
          Confirm
        </Button>
      </Wrapper.BottomRow>
    </Wrapper>
  );
};

export default DeliveryPreview;
