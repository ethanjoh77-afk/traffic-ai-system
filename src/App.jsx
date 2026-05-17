import "./App.css";

import Sidebar from "./components/Sidebar";
import TrafficMap from "./components/TrafficMap";
import CommandCenter from "./components/CommandCenter";
import IncidentPanel from "./components/IncidentPanel";
import LiveCameras from "./components/LiveCameras";
import StatsCards from "./components/StatsCards";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020817] text-white flex overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="ml-[260px] flex-1 p-6 space-y-6">

        {/* TOP HEADER */}
        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-extrabold tracking-wide">
              TANZANIA SMART CITY AI
            </h1>

            <p className="text-slate-400 mt-1 text-sm">
              NATIONAL COMMAND CENTER
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-2xl">
            <span className="text-green-400 text-sm font-semibold">
              ● SYSTEM ONLINE
            </span>
          </div>

        </div>

        {/* STATS */}
        <StatsCards />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* LEFT PANEL */}
          <div className="xl:col-span-3 space-y-6">

            <div className="bg-[#071426]/80 border border-slate-800/50 rounded-3xl p-5 shadow-xl">
              <CommandCenter />
            </div>

            <div className="bg-[#071426]/80 border border-slate-800/50 rounded-3xl p-5 shadow-xl">
              <IncidentPanel />
            </div>

          </div>

          {/* CENTER MAP */}
          <div className="xl:col-span-6">

            <div className="bg-[#071426]/80 border border-slate-800/50 rounded-3xl p-4 shadow-2xl overflow-hidden">

              <div className="mb-4">

                <h2 className="text-2xl font-bold">
                  LIVE TRAFFIC MAP
                </h2>

                <p className="text-slate-400 text-sm">
                  Real-time vehicle monitoring and AI traffic analysis
                </p>

              </div>

              <TrafficMap />

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="xl:col-span-3">

            <div className="bg-[#071426]/80 border border-slate-800/50 rounded-3xl p-5 shadow-xl h-full">
              <LiveCameras />
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}