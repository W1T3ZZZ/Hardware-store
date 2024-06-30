// import React from "react";

// import { SubHeading } from "../../components";
// import { images } from "../../constants";

// import "./Findus.css";

// const FindUs = () => (
//   <div className="app__findus app__wrapper section__padding" id="contact">
//     <div className="app__wrapper_info">
//       <SubHeading title="Contact" />
//       <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
//         Find Us
//       </h1>
//       <div className="app__wrapper-content">
//         <p className="p__opensans"></p>
//         <p
//           className="p__cormorant"
//           style={{ color: "#DCCA87", margin: "2rem 0 " }}
//         >
//           Opening Hours
//         </p>
//         <p className="p__opensans">Mon - Sun: 08:00 - 24:00</p>
//       </div>
//       {Location && (
//         <button className="custom__button" style={{ marginTop: "2rem" }}>
//           Visit Us
//         </button>
//       )}
//     </div>

//     <div className="app__wrapper_img">
//       <img src={images.slika4} alt="findus" />
//     </div>
//   </div>
// );

// export default FindUs;

// import React, { useState, useEffect } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { SubHeading } from "../../components";
// import { images } from "../../constants";
// import "./FindUs.css";

// const FindUs = () => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [showMap, setShowMap] = useState(false);
//   const [position, setPosition] = useState(null);

//   useEffect(() => {
//     if (showMap && !map) {
//       const initialMap = L.map("map").setView([51.505, -0.09], 13);

//       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution: "© OpenStreetMap contributors",
//       }).addTo(initialMap);

//       setMap(initialMap);
//     }
//   }, [showMap, map]);

//   useEffect(() => {
//     if (showMap && map && position) {
//       const { latitude, longitude } = position.coords;

//       if (marker) {
//         map.removeLayer(marker);
//       }

//       map.setView([latitude, longitude], 13);

//       const newMarker = L.marker([latitude, longitude])
//         .addTo(map)
//         .bindPopup("<b>You are here!</b>")
//         .openPopup();
//       setMarker(newMarker);
//     }
//   }, [showMap, map, position, marker]);

//   const handleButtonClick = () => {
//     setShowMap(true);
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => setPosition(pos),
//         (err) => alert(`Geolocation error: ${err.message}`)
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   return (
//     <div className="app__findus app__wrapper section__padding" id="contact">
//       <div className="app__wrapper_info">
//         <SubHeading title="Contact" />
//         <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
//           Find Us
//         </h1>
//         <div className="app__wrapper-content">
//           <p className="p__opensans"></p>
//           <p
//             className="p__cormorant"
//             style={{ color: "#DCCA87", margin: "2rem 0" }}
//           >
//             Opening Hours
//           </p>
//           <p className="p__opensans">Mon - Sun: 08:00 - 24:00</p>
//         </div>
//         <button
//           className="custom__button"
//           style={{ marginTop: "2rem" }}
//           onClick={handleButtonClick}
//         >
//           Visit Us
//         </button>
//       </div>

//       <div className="app__wrapper_img">
//         <img src={images.slika4} alt="findus" />
//       </div>

//       {showMap && (
//         <div id="map" style={{ height: "500px", width: "100%" }}></div>
//       )}
//     </div>
//   );
// };

// export default FindUs;

import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./FindUs.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fixing the default icon issue in leaflet
// delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

const FindUs = () => {
  return (
    <div className="app__findus app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans"></p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Sun: 08:00 - 24:00</p>
        </div>
        {Location && (
          <button className="custom__button" style={{ marginTop: "2rem" }}>
            Visit Us
          </button>
        )}
      </div>
      <div className="app__wrapper_img">
        <img src={images.slika4} alt="findus" />
      </div>
      <MapContainer
        center={[43.31679904306188, 21.892778563183594]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[43.31679904306188, 21.892778563183594]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default FindUs;
