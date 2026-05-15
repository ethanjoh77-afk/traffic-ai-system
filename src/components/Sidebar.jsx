import {
  LayoutDashboard,
  Camera,
  Map,
  Bell,
  BrainCircuit,
  Settings,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Camera, label: "Live Cameras" },
  { icon: Map, label: "Traffic Map" },
  { icon: Bell, label: "Alerts" },
  { icon: BrainCircuit, label: "AI Insights" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#111827] border-r border-slate-800 p-5">
      <div>
        <h1 className="text-2xl font-bold text-cyan-400">
          TRAFFIC AI
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Smart Traffic Command Center
        </p>
      </div>

      <nav className="mt-10 space-y-3">
        {menu.map((item, i) => {
          const Icon = item.icon;

          return (
            <button
              key={i}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 hover:bg-cyan-500/20 transition-all text-slate-300 hover:text-cyan-400"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}