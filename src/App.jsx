import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCards from "./components/StatsCards";
import AIInsights from "./components/AIInsights";
import TrafficSimulation from "./components/TrafficSimulation";
import SystemAlerts from "./components/SystemAlerts";

import useLiveTraffic from "./hooks/useLiveTraffic";

export default function App() {
  // 🔴 LIVE DATA HOOK (backend WebSocket)
  const stream = useLiveTraffic();

  return (
    <div className="min-h-screen bg-[#030B1A] text-white flex overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <main className="flex-1 ml-[260px] overflow-y-auto min-h-screen">

        <Topbar />

        <div className="p-6 space-y-6">

          <StatsCards />

          {/* 🔥 LIVE OPS PANEL */}
          <div className="bg-[#071426] border border-slate-800 rounded-2xl p-5">

            <h2 className="text-cyan-400 font-bold mb-4 text-lg">
              LIVE TRAFFIC OPS CENTER
            </h2>

            {/* VEHICLES */}
            <p className="text-white text-base mb-2">
              🚗 Vehicles:{" "}
              <span className="text-cyan-400 font-bold">
                {stream.vehicles}
              </span>
            </p>

            {/* CONGESTION */}
            <p className="text-white text-base mb-2">
              Status:{" "}
              <span
                className={
                  stream.congestion === "red"
                    ? "text-red-500 font-bold"
                    : stream.congestion === "yellow"
                    ? "text-yellow-400 font-bold"
                    : "text-green-400 font-bold"
                }
              >
                {stream.congestion.toUpperCase()}
              </span>
            </p>

            {/* ACCIDENT ALERT */}
            {stream.accident && (
              <p className="text-red-500 font-bold animate-pulse">
                🚨 ACCIDENT DETECTED
              </p>
            )}

          </div>

          {/* DASHBOARD GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            {/* AI INSIGHTS */}
            <div className="xl:col-span-3">
              <AIInsights />
            </div>

            {/* MAP / SIMULATION */}
            <div className="xl:col-span-6">
              <TrafficSimulation />
            </div>

            {/* ALERTS */}
            <div className="xl:col-span-3">
              <SystemAlerts />
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}