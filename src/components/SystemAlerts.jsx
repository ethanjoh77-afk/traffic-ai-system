const alerts = [
  "Heavy congestion detected at Junction A12",
  "Accident reported near City Center",
  "AI detected abnormal traffic flow",
];

export default function SystemAlerts() {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5">
      <h2 className="text-xl font-bold mb-5">
        System Alerts
      </h2>

      <div className="space-y-4">
        {alerts.map((alert, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-700 rounded-xl p-4"
          >
            <p className="text-sm text-slate-300">
              {alert}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}