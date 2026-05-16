import useLiveTraffic from "../hooks/useLiveTraffic";

export default function SOCPanel() {
  const stream = useLiveTraffic();

  return (
    <div className="bg-[#071426] p-4 rounded-xl border border-cyan-500">

      <h2 className="text-cyan-400 font-bold mb-3">
        NATIONAL TRAFFIC COMMAND CENTER
      </h2>

      <p>🚗 Vehicles: {stream.vehicles}</p>

      <p>
        Status:{" "}
        <span className={
          stream.congestion === "red"
            ? "text-red-500"
            : stream.congestion === "yellow"
            ? "text-yellow-400"
            : "text-green-400"
        }>
          {stream.congestion}
        </span>
      </p>

      {stream.accident && (
        <div className="text-red-500 animate-pulse mt-2">
          🚨 ACCIDENT DETECTED - RESPONSE UNIT ALERTED
        </div>
      )}

    </div>
  );
}