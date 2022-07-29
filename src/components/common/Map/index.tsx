import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader,Marker, InfoWindow } from '@react-google-maps/api';
import { CustomMarker } from '../CustomMarker';
import useEnvVarLoader, { EnvVarLoader } from '../../../service/environmentvariable.loader';

const containerStyle = {
  width: '99%',
  height: '99%',
  margin: '2px', 
};

const center = {
  lat: -27.935696,
  lng: 153.402515
};

const marker = {
  lat: -27.935696,
  lng: 153.402515
};


function Map() {

  const [map, setMap] = React.useState(null)
  const [zoom,setZoom] = React.useState(14);
  // const [googleAPIKey] = useEnvVarLoader("GOOGLE_API_KEY");


  const {isLoaded} = 
    useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: EnvVarLoader("GOOGLE_API_KEY")
  })


  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <>
      <GoogleMap 
        mapContainerStyle={containerStyle} 
        onLoad={onLoad} 
        center={center} 
        zoom={zoom} 
        options={{
          streetViewControl: true,
          draggable: true, // make map draggable
          zoomControlOptions: { position: 9 },
          keyboardShortcuts: true, // disable keyboard shortcuts
          scaleControl: false, // allow scale controle
          scrollwheel: true, // allow scroll wheel
          // styles: mapsStyle, // change default map styles,
          zoomControl: true,
          minZoom: 3,
          maxZoom: 16,
        }}
        >
        <Marker 
          key={1} 
          position={marker} 
          animation={google.maps.Animation.DROP}
          onClick={() => setZoom(zoom+1)}>
          <InfoWindow>
            <CustomMarker/>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default React.memo(Map)