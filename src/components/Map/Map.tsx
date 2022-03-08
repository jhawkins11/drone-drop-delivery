import React, { FC } from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import { Box, Fade, Popper } from "@mui/material";
import "./Map.css";
import { useAddressState } from "../../store/slices/addressSlice";

const containerStyle = {
  width: "100%",
  height: "24rem",
};

type MapMarker = {
  firstName: string;
  lastName: string;
  address: string;
  lat: number;
  lng: number;
};

type MarkerProps = {
  firstName: string;
  lastName: string;
  address: string;
  lat: number | string;
  lng: number | string;
};

const Map = ({
  markers,
  onMapLoad,
}: {
  markers: MapMarker[];
  onMapLoad?: (map) => void;
}) => {
  const addressState = useAddressState();

  const Marker: FC<MarkerProps> = (props) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;

    return (
      <div>
        <FontAwesomeIcon
          icon={faMapPin}
          size="3x"
          onClick={handleClick}
          className={
            addressState.address === props.address
              ? "pinIcon currentLocation"
              : "pinIcon"
          }
        />
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          className="iconPopper"
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={200}>
              <Box>
                {`${props.firstName} ${props.lastName}`}
                <br />
                {props.address}
              </Box>
            </Fade>
          )}
        </Popper>
      </div>
    );
  };

  return (
    <div style={containerStyle}>
      <GoogleMapReact
        mapContainerStyle={containerStyle}
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={{ lat: 41.881832, lng: -87.623177 }}
        center={markers[0]}
        zoom={markers.length > 1 ? 6 : 17}
        onGoogleApiLoaded={onMapLoad}
      >
        {markers?.map((location) => (
          <Marker
            key={uuid()}
            lat={location?.lat}
            lng={location?.lng}
            firstName={location?.firstName}
            lastName={location?.lastName}
            address={location?.address}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default React.memo(Map);
