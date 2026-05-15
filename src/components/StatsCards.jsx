import React from "react";

const stats = [
  {
    title: "MAGARI",
    value: "18,540",
    color: "text-cyan-400",
    icon: "🚗",
  },
  {
    title: "TRAFIKI",
    value: "NZURI",
    color: "text-green-400",
    icon: "✅",
  },
  {
    title: "MATUKIO",
    value: "24",
    color: "text-yellow-400",
    icon: "⚠️",
  },
  {
    title: "KAMERA",
    value: "126/150",
    color: "text-purple-400",
    icon: "📹",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((card, index) => (
        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400">{card.title}</p>
              <h2 className={`text-3xl font-bold ${card.color}`}>
                {card.value}
              </h2>
            </div>

            <div className="text-4xl">
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}