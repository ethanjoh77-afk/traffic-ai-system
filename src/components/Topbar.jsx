import {
  Bell,
  ShieldCheck,
  Globe,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#020617]/95 backdrop-blur border-b border-slate-800 px-6 py-5">

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

        <div>
          <h1 className="text-4xl font-bold tracking-wide">
            National Traffic Operations Center
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            AI-powered surveillance and traffic management system.
          </p>
        </div>

        <div className="flex items-center gap-4">

          <div className="bg-[#111827] border border-slate-700 rounded-2xl px-4 py-3 flex items-center gap-3">
            <Globe className="text-cyan-400" size={18} />

            <span className="text-sm text-slate-300">
              Dar es Salaam Smart Grid
            </span>
          </div>

          <div className="bg-[#111827] border border-slate-700 rounded-2xl px-4 py-3 flex items-center gap-3">
            <ShieldCheck className="text-green-400" size={18} />

            <span className="text-sm text-slate-300">
              Secure Infrastructure
            </span>
          </div>

          <button className="relative bg-[#111827] border border-slate-700 p-4 rounded-2xl">
            <Bell size={20} />

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>

        </div>
      </div>
    </header>
  );
}