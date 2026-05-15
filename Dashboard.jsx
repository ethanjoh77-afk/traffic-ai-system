import { useEffect, useState } from "react";
import API_URL from "./config";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Dashboard() {
  const [data, setData] = useState({ cars: 0, people: 0 });

  // WebSocket
  useEffect(() => {
    const ws = new WebSocket(`${API_URL.replace("http", "ws")}/ws`);

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      setData(msg);
    };

    return () => ws.close();
  }, []);

  // Map
  useEffect(() => {
    const map = L.map("map").setView([-6.8, 39.28], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    L.marker([-6.8, 39.28]).addTo(map)
      .bindPopup("Traffic AI Active")
      .openPopup();
  }, []);

  return (
    <div style={{ background: "#000", color: "#00ffcc", minHeight: "100vh", padding: "10px" }}>
      <h1>🚦 AI TRAFFIC SYSTEM</h1>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "10px" }}>

        {/* LIVE VIDEO */}
        <div>
          <img src={`${API_URL}/video`} alt="live" width="100%" />
        </div>

        {/* MAP */}
        <div id="map" style={{ height: "400px" }}></div>
      </div>

      {/* LIVE DATA */}
      <div>
        <h2>🚗 Cars: {data.cars}</h2>
        <h2>🚶 People: {data.people}</h2>
      </div>
    </div>
  );
}