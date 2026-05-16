import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";

export default function TrafficSimulation() {
  const dar = [-6.7924, 39.2083];

  return (
    <div className="h-[520px] rounded-3xl overflow-hidden border border-slate-700">

      <div className="absolute z-[1000] m-4 bg-[#071426]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-cyan-500 text-cyan-400 text-sm font-semibold">
        LIVE TRAFFIC MAP — DAR ES SALAAM
      </div>

      <MapContainer
        center={dar}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Ubungo */}
        <Marker position={[-6.7841, 39.2061]}>
          <Popup>
            Heavy Traffic Detected — Ubungo
          </Popup>
        </Marker>

        {/* Kariakoo */}
        <Circle
          center={[-6.8161, 39.2803]}
          radius={500}
          pathOptions={{
            color: "red",
            fillColor: "red",
            fillOpacity: 0.4,
          }}
        />

        {/* Posta */}
        <Circle
          center={[-6.8222, 39.2699]}
          radius={400}
          pathOptions={{
            color: "yellow",
            fillColor: "yellow",
            fillOpacity: 0.3,
          }}
        />

      </MapContainer>

    </div>
  );
}