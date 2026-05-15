const stats = [
  {
    title: "Vehicles Today",
    value: "12,480",
    color: "text-cyan-400",
  },
  {
    title: "Congestion Level",
    value: "Moderate",
    color: "text-yellow-400",
  },
  {
    title: "Incidents",
    value: "04",
    color: "text-red-400",
  },
  {
    title: "AI Accuracy",
    value: "98.2%",
    color: "text-green-400",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-[#111827] border border-slate-800 rounded-2xl p-5"
        >
          <p className="text-slate-400 text-sm">{item.title}</p>

          <h2 className={`text-3xl font-bold mt-3 ${item.color}`}>
            {item.value}
          </h2>
}