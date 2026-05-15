const alerts = [
  "Accident reported at Ubungo",
  "Heavy traffic at Kariakoo",
  "Camera 12 offline",
  "Roadblock detected"
];

export default function SystemAlerts() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-red-400 mb-4">
        🚨 SYSTEM ALERTS
      </h2>

      <div className="space-y-3">

        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded-xl text-slate-300"
          >
            {alert}
          </div>
        ))}

      </div>
    </div>
  );
}