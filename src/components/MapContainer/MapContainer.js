import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapContainer = () => {
    return (
        <div style={{height: '100vh', width:'100%'}}>
            <h1>This is Map.</h1>
            <Map zoom={14}>
 
 <Marker 
         name={'Current location'} />

 <InfoWindow >
     
 </InfoWindow>
</Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyCaNcRVMIYhN0FO9vBLq5odogTNGawU010"
  })(MapContainer);