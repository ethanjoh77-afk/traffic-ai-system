import useLiveTraffic from "../hooks/useLiveTraffic";

export default function CommandCenter() {

  const stream = useLiveTraffic();

  return (
    <div className="bg-[#071426] border border-cyan-500 rounded-2xl p-5">

      <h2 className="text-cyan-400 font-bold text-xl mb-4">
        NATIONAL COMMAND CENTER
      </h2>

      <div className="space-y-3 text-sm">

        <div>
          🚗 Vehicles:
          <span className="ml-2 text-white font-bold">
            {stream.total}
          </span>
        </div>

        <div>
          🌍 Congestion:
          <span className={
            stream.congestion === "red"
              ? "text-red-500 ml-2"
              : stream.congestion === "yellow"
              ? "text-yellow-400 ml-2"
              : "text-green-400 ml-2"
          }>
            {stream.congestion}
          </span>
        </div>

        <div>
          📡 Camera Zones:
        </div>

        {Object.entries(stream.zones).map(([zone, value]) => (
          <div
            key={zone}
            className="flex justify-between bg-[#0B1D33] px-3 py-2 rounded-lg"
          >
            <span>{zone}</span>
            <span>{value}</span>
          </div>
        ))}

        {stream.accident && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 animate-pulse">
            🚨 ACCIDENT DETECTED
          </div>
        )}

      </div>

    </div>
  );
}