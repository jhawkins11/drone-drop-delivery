import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../../components/Map/Map";
import Wrapper from "../../components/Wrapper/Wrapper";
import addMarker from "../../helperFunctions/addMarker";
import { useAddressState } from "../../store/slices/addressSlice";
import "./DeliveryPreview.css";

const DeliveryPreview = () => {
  const navigate = useNavigate();

  const [mapMarker, setMapMarker] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const addressState = useAddressState();

  const onMapLoad = ({ map }) => {
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
        firstName: addressState.firstName,
        lastName: addressState.lastName,
        address: addressState.address,
      });
    }
  };

  const onConfirm = () => {
    setConfirmed(true);
    addMarker(mapMarker);
  };

  const getButtons = () =>
    confirmed ? (
      <>
        <Button
          variant="contained"
          className="bottomRowButton leftButton"
          onClick={() => navigate("/deliveryMap")}
        >
          See all deliveries
        </Button>
        <Button
          disabled
          variant="contained"
          className="bottomRowButton rightButton confirmed"
        >
          <FontAwesomeIcon icon={faCheck} color="green" className="checkIcon" />{" "}
          Confirmed
        </Button>
      </>
    ) : (
      <>
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
          onClick={onConfirm}
        >
          Confirm
        </Button>
      </>
    );

  return (
    <Wrapper>
      <Typography align="center" variant="h2" className="confirmLocation">
        {confirmed
          ? "Your delivery is on its way."
          : "Please confirm your location."}
      </Typography>
      <Map markers={[mapMarker]} onMapLoad={onMapLoad} />
      <Wrapper.BottomRow>{getButtons()}</Wrapper.BottomRow>
    </Wrapper>
  );
};

export default DeliveryPreview;
