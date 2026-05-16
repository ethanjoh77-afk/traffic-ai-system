import {
  LayoutDashboard,
  Camera,
  Map,
  Bell,
  BrainCircuit,
  Shield,
  Activity,
  Settings,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Camera, label: "Live Surveillance" },
  { icon: Map, label: "Traffic Network" },
  { icon: Bell, label: "Incidents & Alerts" },
  { icon: BrainCircuit, label: "AI Analytics" },
  { icon: Activity, label: "Traffic Reports" },
  { icon: Shield, label: "Security Center" },
  { icon: Settings, label: "System Settings" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-[#0F172A] border-r border-slate-800 flex flex-col">

      <div className="p-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold tracking-wide text-cyan-400">
          TRAFFIC AI
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Government Smart Traffic Monitoring Infrastructure
        </p>
      </div>

      <nav className="flex-1 p-5 space-y-3 overflow-y-auto">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <button
              key={i}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-cyan-500/20 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 ${
                i === 0
                  ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                  : ""
              }`}
            >
              <Icon size={20} />

              <span className="font-medium text-sm tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}