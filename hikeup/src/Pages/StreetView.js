import React from "react";
import ReactStreetview from "react-streetview";

class Map extends React.Component {
  render() {
    const googleMapsApiKey = "AIzaSyBOlRdYQnAAxd2x_MP0GcXrBhS6PthaaDk";

    const streetViewPanoramaOptions = {
      position: { lat: 45.549083, lng: 13.727450 },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      addressControl: false,
      showRoadLabels: false,
      zoomControl: false
    };

    return (
      <div
        style={{
          width: "100%",
          height: "550px",
          backgroundColor: "#eeeeee"
        }}
      >
        <ReactStreetview
          apiKey={googleMapsApiKey}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>
    );
  }
}

export default Map;
