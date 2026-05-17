import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import useLiveTraffic from "../hooks/useLiveTraffic";
import { simulateVehicles } from "../simulation/gpsEngine";

export default function TrafficMap() {
  const stream = useLiveTraffic();
  const cars = simulateVehicles(stream);

  return (
    <div className="rounded-3xl overflow-hidden border border-slate-800/50 shadow-2xl">

      <MapContainer
        center={[-6.8, 39.2]}
        zoom={12}
        scrollWheelZoom={true}
        style={{
          height: "650px",
          width: "100%",
        }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cars.map((c, i) => (
          <CircleMarker
            key={i}
            center={[c.lat, c.lng]}
            radius={6 + c.intensity}
            pathOptions={{
              color: stream.congestion,
              fillColor: stream.congestion,
              fillOpacity: 0.7,
              weight: 2,
            }}
          />
        ))}

      </MapContainer>

    </div>
  );
}