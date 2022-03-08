import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../../components/Map/Map";
import Wrapper from "../../components/Wrapper/Wrapper";
import fetchMarkers from "../../helperFunctions/fetchMarkers";

const DeliveryMap = () => {
  const navigate = useNavigate();

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    async function getMarkers() {
      const data = await fetchMarkers();
      setMarkers(data.markers);
    }
    getMarkers();
  }, []);

  return (
    <Wrapper>
      <Typography align="center" variant="h2" className="confirmLocation">
        Viewing all deliveries.
      </Typography>
      <Map markers={markers} />
      <Wrapper.BottomRow>
        <Button
          variant="contained"
          className="bottomRowButton leftButton"
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
      </Wrapper.BottomRow>
    </Wrapper>
  );
};

export default DeliveryMap;
