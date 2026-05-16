import { useEffect, useState } from "react";

const LANES = 3;
const ROAD_WIDTH = 900;

function createCar(id) {
  return {
    id,
    lane: Math.floor(Math.random() * LANES),
    x: -Math.random() * 800,
    speed: 2 + Math.random() * 4,
    color: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"][
      Math.floor(Math.random() * 4)
    ],
    size: 20 + Math.random() * 10,
  };
}

export default function TrafficSimulation() {
  const [cars, setCars] = useState(() =>
    Array.from({ length: 25 }, (_, i) => createCar(i))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCars((prev) =>
        prev.map((car) => {
          let newX = car.x + car.speed;

          // reset loop (infinite traffic flow)
          if (newX > ROAD_WIDTH) {
            return createCar(car.id);
          }

          return { ...car, x: newX };
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[520px] rounded-3xl overflow-hidden border border-slate-700 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">

      {/* ROAD MARKINGS */}
      <div className="absolute inset-0 flex flex-col justify-center gap-20 opacity-20">
        <div className="h-[2px] bg-white w-full"></div>
        <div className="h-[2px] bg-white w-full"></div>
      </div>

      {/* CENTER ROAD DASH LINE */}
      <div className="absolute top-1/2 w-full border-t border-dashed border-white opacity-10"></div>

      {/* CARS */}
      {cars.map((car) => (
        <div
          key={car.id}
          className="absolute rounded-md shadow-lg"
          style={{
            width: `${car.size}px`,
            height: `${car.size / 2}px`,
            left: `${car.x}px`,
            top: `${90 + car.lane * 130}px`,
            backgroundColor: car.color,
            boxShadow: `0 0 12px ${car.color}`,
          }}
        />
      ))}

      {/* HUD */}
      <div className="absolute top-4 left-4 text-cyan-400 text-sm flex items-center gap-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        LIVE TRAFFIC FLOW ENGINE
      </div>

    </div>
  );
}