import { useEffect, useState } from "react";

export default function useLiveTraffic() {

  const [stream, setStream] = useState({
    total: 0,
    congestion: "green",
    accident: false,
    zones: {}
  });

  useEffect(() => {

    const ws = new WebSocket("ws://127.0.0.1:8000/ws");

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