import GoogleMapReact from "google-map-react";

import "./map.css";
import LocationPin from "../LocationPin";

// const LocationPin = (location:any) => (
//   <div className="pin">
//     <Icon icon={locationIcon} className="pin-icon" />
//     <p className="pin-text">{location.address}</p>
//   </div>
// );

const Map = (location:any, zoomLevel: any ) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={17}
      >
        <LocationPin location={location} />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
