import { motion } from "framer-motion";
import { Car, Gauge, TriangleAlert, Ambulance } from "lucide-react";

const stats = [
  { title: "TOTAL VEHICLES", value: "186,758", icon: Car, color: "bg-blue-600" },
  { title: "AVERAGE SPEED", value: "34 km/h", icon: Gauge, color: "bg-green-600" },
  { title: "TRAFFIC DENSITY", value: "72%", icon: TriangleAlert, color: "bg-yellow-500" },
  { title: "ACTIVE INCIDENTS", value: "12", icon: Ambulance, color: "bg-purple-600" },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-[#071426]/80 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-6 shadow-lg"
          >

            <div className="flex items-center gap-5">

              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                <Icon />
              </div>

              <div>
                <p className="text-slate-400 text-sm">{item.title}</p>
                <h2 className="text-3xl font-bold">{item.value}</h2>
              </div>

            </div>

          </motion.div>
        );
      })}

    </div>
  );
}