import { Bell, CloudSun } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-[88px] border-b border-slate-800 bg-[#040D1C] flex items-center justify-between px-8">

      <div className="flex items-center gap-10">

        <div className="text-slate-300">
          May 27, 2024 | 10:24:36 AM
        </div>

        <div className="flex items-center gap-3 text-green-400">

          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

          <span>System Online</span>

        </div>

      </div>

      <div className="flex items-center gap-8">

        <div className="flex items-center gap-3">

          <CloudSun className="text-yellow-400" />

          <div>
            <h2>28°C</h2>
            <p className="text-xs text-slate-400">
              Dar es Salaam
            </p>
          </div>

        </div>

        <button className="relative">

          <Bell />

          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-xs flex items-center justify-center">
            7
          </span>

        </button>

      </div>

    </header>
  );
}