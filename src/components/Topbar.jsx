import { Bell, ShieldCheck } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold">
          Traffic Monitoring Dashboard
        </h1>

        <p className="text-slate-400 mt-1">
          Real-time AI traffic surveillance and analytics.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-slate-900 px-4 py-3 rounded-xl border border-slate-800 flex items-center gap-2">
          <ShieldCheck className="text-green-400" size={18} />
          <span className="text-sm">System Secure</span>
        </div>

        <button className="relative bg-slate-900 p-3 rounded-xl border border-slate-800">
          <Bell size={18} />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
}