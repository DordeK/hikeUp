

// import { GoogleMap, Marker, useLoadScript, DirectionsRenderer } from "@react-google-maps/api";
// import { useMemo } from "react";
// import "../Styles/map.css";

// const App = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyBnmFrbjUTQ-d5MlHi_gktAVGvERHeTryg',
//   });
//   const center = useMemo(() => ({ lat: 45.5490, lng: 13.7276 }), []);
  
//   return (
//     <div className="App">
//       {!isLoaded ? (
//         <h1>Loading...</h1>
//       ) : (
//         <GoogleMap
//           mapContainerClassName="map-container"
//           center={center}
//           zoom={20}
//         >
//             {directions && <DirectionsRenderer directions={directions} />}
//           {/* <Marker position={{ lat: 45.549083, lng: 13.727450 }} /> */}
//         </GoogleMap>
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';
// class Map extends Component {
//    render() {
//    const GoogleMapExample = withGoogleMap(props => (
//       <GoogleMap
//         defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
//         defaultZoom = { 13 }
//       >
//       <DirectionsRenderer
//             directions={{ lat: 40.756795, lng: -74.954298 }}
//       />
//       </GoogleMap>
//    ));
//    return(
//       <div>
//         <GoogleMapExample
//           containerElement={ <div style={{ height: `500px`, width: '800px' }} /> }
//           mapElement={ <div style={{ height: `100%` }} /> }
//         />
//       </div>
//    );
//    }
// };
// export default Map;

// /* global google */
// import React, { useEffect, useState } from 'react';
// import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

// const Map = () => {
//   const [directions, setDirections] = useState(null);

//   useEffect(() => {
//     const directionsService = new google.maps.DirectionsService();
//     const origin = { lat: 41.85073, lng: -87.65126 };
//     const destination = { lat: 41.85258, lng: -87.65141 };

//     directionsService.route(
//       {
//         origin,
//         destination,
//         travelMode: google.maps.TravelMode.DRIVING
//       },
//       (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           setDirections(result);
//         } else {
//           console.error(`Error fetching directions: ${status}`);
//         }
//       }
//     );
//   }, []);

//   return (
//     <GoogleMap
//       center={{ lat: 41.85258, lng: -87.65141 }}
//       zoom={12}
//       mapContainerStyle={{ height: '400px', width: '100%' }}
//     >
//       {directions && <DirectionsRenderer directions={directions} />}
//     </GoogleMap>
//   );
// };

// export default Map;

/* global google */
import React, { useEffect, useState } from 'react';
import { GoogleMap, DirectionsService, useLoadScript, DirectionsRenderer } from '@react-google-maps/api';

const Map = () => {

  const [directions, setDirections] = useState(null);
  useEffect(() => {
    const directionsService = new google.maps.DirectionsService();
    const origin = { lat: 45.549083, lng: 13.727450 };
    const destination = { lat: 45.549208, lng: 13.724475 };


    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.WALKING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  }, []);

  return (
    <GoogleMap
      center={{ lat: 45.549083, lng: 13.727450 }}
      zoom={12}
      mapContainerStyle={{ height: '400px', width: '100%' }}
    >
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default Map;
