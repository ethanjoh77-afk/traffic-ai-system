import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

const TrafficMap = () => {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[-6.7924, 39.2083]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[-6.7924, 39.2083]}>
          <Popup>Dar es Salaam Traffic System</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default TrafficMap;