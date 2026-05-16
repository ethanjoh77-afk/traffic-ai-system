import useLiveTraffic from "../hooks/useLiveTraffic";

export default function IncidentPanel() {

  const stream = useLiveTraffic();

  const alerts = [];

  if (stream.accident) {
    alerts.push({
      type: "Crash",
      zone: "Ubungo",
      level: "HIGH"
    });
  }

  if (stream.congestion === "red") {
    alerts.push({
      type: "Extreme Traffic",
      zone: "Kariakoo",
      level: "MEDIUM"
    });
  }

  return (
    <div className="bg-[#071426] border border-red-500 rounded-2xl p-5">

      <h2 className="text-red-400 font-bold text-xl mb-4">
        INCIDENT CONTROL
      </h2>

      <div className="space-y-3">

        {alerts.length === 0 && (
          <div className="text-green-400">
            ✅ No incidents detected
          </div>
        )}

        {alerts.map((a, i) => (
          <div
            key={i}
            className="bg-[#0B1D33] p-3 rounded-lg"
          >
            🚨 {a.type} | {a.zone} | {a.level}
          </div>
        ))}

      </div>

    </div>
  );
}