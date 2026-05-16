import { useEffect, useState } from "react";

export default function useLiveTraffic() {

  const [stream, setStream] = useState({
    total: 0,
    congestion: "green",
    accident: false,
    zones: {}
  });

  useEffect(() => {

    const ws = new WebSocket(
  "wss://YOUR-BACKEND.up.railway.app/ws"
);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setStream(data);
    };

    ws.onerror = () => {
      console.log("WebSocket Error");
    };

    return () => ws.close();

  }, []);

  return stream;
}