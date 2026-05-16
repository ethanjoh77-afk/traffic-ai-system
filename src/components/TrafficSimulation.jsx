import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Circle,
  Popup,
  Marker,
} from "react-leaflet";

import L from "leaflet";

const carIcon = new L.DivIcon({
  html: `
    <div style="
      width:14px;
      height:14px;
      background:#00ff88;
      border-radius:999px;
      box-shadow:0 0 12px #00ff88;
      border:2px solid white;
    "></div>
  `,
  className: "",
});

const cameraIcon = new L.DivIcon({
  html: `
    <div style="
      width:16px;
      height:16px;
      background:#3b82f6;
      border-radius:999px;
      box-shadow:0 0 12px #3b82f6;
      border:2px solid white;
    "></div>
  `,
  className: "",
});

export default function TrafficSimulation() {
  const [vehicles, setVehicles] = useState([
    { id: 1, lat: -6.7924, lng: 39.2083 },
    { id: 2, lat: -6.801, lng: 39.25 },
    { id: 3, lat: -6.775, lng: 39.22 },
    { id: 4, lat: -6.81, lng: 39.29 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles((prev) =>
        prev.map((v) => ({
          ...v,
          lat: v.lat + (Math.random() - 0.5) * 0.002,
          lng: v.lng + (Math.random() - 0.5) * 0.002,
        }))
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[600px] rounded-3xl overflow-hidden border border-slate-700 relative">

      {/* HUD */}
      <div className="absolute z-[1000] top-4 left-4 bg-[#071426]/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-500">

        <h2 className="text-cyan-400 font-bold text-sm">
          LIVE SMART TRAFFIC GRID
        </h2>

        <div className="mt-2 space-y-1 text-xs text-slate-300">
          <p>🟢 Smooth Flow</p>
          <p>🟡 Moderate Traffic</p>
          <p>🔴 Congestion Detected</p>
        </div>

      </div>

      <MapContainer
        center={[-6.7924, 39.2083]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* GREEN ZONE */}
        <Circle
          center={[-6.79, 39.22]}
          radius={700}
          pathOptions={{
            color: "green",
            fillColor: "green",
            fillOpacity: 0.25,
          }}
        >
          <Popup>Traffic Flow Stable</Popup>
        </Circle>

        {/* YELLOW ZONE */}
        <Circle
          center={[-6.805, 39.27]}
          radius={600}
          pathOptions={{
            color: "yellow",
            fillColor: "yellow",
            fillOpacity: 0.3,
          }}
        >
          <Popup>Moderate Congestion</Popup>
        </Circle>

        {/* RED ZONE */}
        <Circle
          center={[-6.8161, 39.2803]}
          radius={500}
          pathOptions={{
            color: "red",
            fillColor: "red",
            fillOpacity: 0.4,
          }}
        >
          <Popup>
            AI ALERT: Heavy Congestion Detected
          </Popup>
        </Circle>

        {/* INCIDENT HOTSPOT */}
        <Circle
          center={[-6.7841, 39.2061]}
          radius={250}
          pathOptions={{
            color: "#ff00ff",
            fillColor: "#ff00ff",
            fillOpacity: 0.45,
          }}
        >
          <Popup>
            🚨 AI INCIDENT DETECTED
          </Popup>
        </Circle>

        {/* LIVE CAMERAS */}
        <Marker
          position={[-6.799, 39.24]}
          icon={cameraIcon}
        >
          <Popup>
            📹 Camera Node — Kariakoo
          </Popup>
        </Marker>

        <Marker
          position={[-6.81, 39.21]}
          icon={cameraIcon}
        >
          <Popup>
            📹 Camera Node — Posta
          </Popup>
        </Marker>

        {/* MOVING VEHICLES */}
        {vehicles.map((vehicle) => (
          <Marker
            key={vehicle.id}
            position={[vehicle.lat, vehicle.lng]}
            icon={carIcon}
          >
            <Popup>
              🚗 AI Vehicle Tracking Active
            </Popup>
          </Marker>
        ))}

      </MapContainer>

    </div>
  );
}