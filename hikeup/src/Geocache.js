import React from 'react';
import { useGeolocated } from 'react-geolocated';

function Geocache() {
    const geolocation = useGeolocated();

    if (!geolocation.isGeolocationAvailable) {
        return <div>Your browser does not support Geolocation</div>;
    } else if (!geolocation.isGeolocationEnabled) {
        return <div>Geolocation is not enabled</div>;
    } else if (geolocation.coords) {
        return (
            <div>
                <p>Latitude: {geolocation.coords.latitude}</p>
                <p>Longitude: {geolocation.coords.longitude}</p>
            </div>
        );
    } else {
        return <div>Getting the location data&hellip; </div>;
    }
}

export default Geocache;
