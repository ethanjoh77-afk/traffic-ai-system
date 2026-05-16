import { useEffect, useState } from "react";

export default function useLiveTraffic() {
  const [data, setData] = useState({
    vehicles: 0,
    congestion: "green",
    accident: false,
  });

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws");

    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };

    return () => ws.close();
  }, []);

  return data;
}