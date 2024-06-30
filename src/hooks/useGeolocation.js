import React, { useState, useEffect } from "react";
import L from "leaflet";
import { useGeolocate } from "react-map-gl";
import "leaflet/dist/leaflet.css";
import "./useGeolocation.css";

function Location() {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const { position, error } = useGeolocate();

  useEffect(() => {
    // Initialize the map when the component is mounted
    const initMap = () => {
      const initialMap = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(initialMap);

      setMap(initialMap);
    };

    initMap();
  }, []);

  useEffect(() => {
    if (position && map) {
      const { latitude, longitude } = position.coords;

      if (marker) {
        map.removeLayer(marker);
      }

      map.setView([latitude, longitude], 13);

      const newMarker = L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup("<b>You are here!</b>")
        .openPopup();

      setMarker(newMarker);
    }
  }, [position, map, marker]);

  return (
    <div className="Location">
      <h1>Geolocation Example</h1>
      {error && <p>Error: {error.message}</p>}
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
}

export default Location;
