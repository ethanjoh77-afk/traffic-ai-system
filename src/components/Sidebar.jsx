import {
  LayoutDashboard,
  Map,
  Camera,
  Brain,
  Bell,
  BarChart3,
  FileText,
  Settings,
  Users,
  ShieldAlert,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Map, label: "Traffic Map" },
  { icon: Camera, label: "Live Cameras" },
  { icon: Brain, label: "AI Insights" },
  { icon: Bell, label: "System Alerts" },
  { icon: BarChart3, label: "Traffic Analytics" },
  { icon: FileText, label: "Reports" },
  { icon: ShieldAlert, label: "Incident Management" },
  { icon: Settings, label: "Settings" },
  { icon: Users, label: "User Management" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-[260px] h-screen bg-[#050F1F] border-r border-slate-800 flex flex-col">

      <div className="h-[88px] border-b border-slate-800 px-5 flex items-center">
        <div>
          <h1 className="text-2xl font-extrabold">
            TANZANIA TRAFFIC
          </h1>

          <p className="text-cyan-400 font-bold mt-1">
            AI SYSTEM
          </p>
        </div>
      </div>

      <div className="p-5 text-slate-500 text-xs font-semibold">
        MAIN NAVIGATION
      </div>

      <nav className="px-4 flex-1 space-y-2">

        {items.map((item, i) => {

          const Icon = item.icon;

          return (
            <button
              key={i}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >

              <Icon size={18} />

              <span className="text-sm font-medium">
                {item.label}
              </span>

            </button>
          );
        })}

      </nav>

    </aside>
  );
}