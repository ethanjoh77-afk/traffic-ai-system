import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import useLiveTraffic from "../hooks/useLiveTraffic";
import { simulateVehicles } from "../simulation/gpsEngine";

export default function TrafficMap() {
  const stream = useLiveTraffic();
  const cars = simulateVehicles(stream);

  return (
    <MapContainer center={[-6.8,39.2]} zoom={12} style={{height:"500px"}}>

      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      {cars.map((c,i)=>(
        <CircleMarker
          key={i}
          center={[c.lat,c.lng]}
          radius={6 + c.intensity}
          pathOptions={{
            color: stream.congestion,
            fillOpacity: 0.6
          }}
        />
      ))}

    </MapContainer>
  );
}