import { Circle } from "react-leaflet";
import useLiveTraffic from "../hooks/useLiveTraffic";

export default function Heatmap() {
  const stream = useLiveTraffic();

  const zones = [
    { name: "ubungo", lat: -6.785 },
    { name: "kariakoo", lat: -6.818 },
    { name: "posta", lat: -6.823 }
  ];

  return (
    <>
      {zones.map((z, i) => (
        <Circle
          key={i}
          center={[z.lat, 39.2 + i * 0.01]}
          radius={(stream.zones?.[z.name] || 0) * 80}
          pathOptions={{
            color: stream.congestion,
            fillOpacity: 0.4
          }}
        />
      ))}
    </>
  );
}