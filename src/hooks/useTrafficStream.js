import { useEffect, useState } from "react";

export default function useTrafficStream() {
  const [data, setData] = useState({
    vehicles: 20,
    congestion: "green",
    incidents: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.random();

      let congestion = "green";
      if (rand > 0.6) congestion = "yellow";
      if (rand > 0.85) congestion = "red";

      const newIncident =
        rand > 0.92
          ? {
              id: Date.now(),
              type: "ACCIDENT",
              severity: "HIGH",
            }
          : null;

      setData({
        vehicles: Math.floor(10 + Math.random() * 200),
        congestion,
        incidents: newIncident
          ? [newIncident]
          : [],
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return data;
}