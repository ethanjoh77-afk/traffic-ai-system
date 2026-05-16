import { Bell, CloudSun } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-[88px] border-b border-slate-800/50 bg-[#040D1C]/80 backdrop-blur-xl flex items-center justify-between px-8">

      <div className="flex items-center gap-10">

        <div className="text-slate-300">
          {new Date().toDateString()}
        </div>

        <div className="flex items-center gap-3 text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          System Online
        </div>

      </div>

      <div className="flex items-center gap-8">

        <div className="flex items-center gap-3">
          <CloudSun className="text-yellow-400" />
          <div>
            <h2>28°C</h2>
            <p className="text-xs text-slate-400">Dar es Salaam</p>
          </div>
        </div>

        <button className="relative">
          <Bell />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
            7
          </span>
        </button>

      </div>

    </header>
  );
}