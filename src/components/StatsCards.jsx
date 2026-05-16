import {
  Car,
  Gauge,
  TriangleAlert,
  Ambulance,
} from "lucide-react";

const stats = [
  {
    title: "TOTAL VEHICLES",
    value: "186,758",
    sub: "Today",
    growth: "+12.5%",
    icon: Car,
    color: "bg-blue-600",
  },
  {
    title: "AVERAGE SPEED",
    value: "34 km/h",
    sub: "City Avg",
    growth: "+5.3%",
    icon: Gauge,
    color: "bg-green-600",
  },
  {
    title: "TRAFFIC DENSITY",
    value: "72%",
    sub: "High",
    growth: "+8.7%",
    icon: TriangleAlert,
    color: "bg-yellow-500",
  },
  {
    title: "ACTIVE INCIDENTS",
    value: "12",
    sub: "On Roads",
    growth: "+3.2%",
    icon: Ambulance,
    color: "bg-purple-600",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="bg-[#071426]/80 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300"
          >

            <div className="flex items-center gap-5">

              <div className={`${item.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`}>
                <Icon size={32} />
              </div>

              <div>

                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

                <div className="flex items-center gap-4 mt-3 text-sm">

                  <span className="text-slate-400">
                    {item.sub}
                  </span>

                  <span className="text-green-400">
                    {item.growth}
                  </span>

                </div>

              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}