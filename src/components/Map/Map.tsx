import React from 'react';
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '20rem',
};

type MapMarker = {
  lat: number
  lng: number
};

const Map = ({markers}: {markers: MapMarker[]}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const renderMap = () => {
    return (
      <GoogleMap mapContainerStyle={containerStyle} center={markers[0]} zoom={10}>
          {markers.map(marker => {
              return <Marker position={marker} />
          })}
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <p>Loading...</p>;
};

export default React.memo(Map);
