import { useEffect, useState } from "react";

export default function useIncidents(stream) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (stream.accident) {
      const newAlert = {
        id: Date.now(),
        type: "ACCIDENT",
        level: "CRITICAL",
        time: new Date().toLocaleTimeString(),
      };

      setAlerts((prev) => [newAlert, ...prev.slice(0, 10)]);
    }
  }, [stream.accident]);

  return alerts;
}