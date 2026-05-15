import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
import TrafficMap from "./components/TrafficMap";
import LiveCameras from "./components/LiveCameras";
import AIInsights from "./components/AIInsights";
import SystemAlerts from "./components/SystemAlerts";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      {/* SIDEBAR */}
      {sidebarOpen && <Sidebar />}

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 space-y-6">

        {/* TOP BAR */}
        <div className="flex items-center justify-between bg-slate-900 p-5 rounded-2xl border border-slate-800">

          <div>
            <h1 className="text-4xl font-bold text-cyan-400">
              🚦 SMART TRAFFIC AI
            </h1>

            <p className="text-slate-400 mt-2">
              Real-Time Government Monitoring System
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl font-bold"
          >
            ☰
          </button>
        </div>

        {/* SYSTEM STATUS */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h2 className="text-2xl font-bold text-green-400">
            🟢 SYSTEM ONLINE
          </h2>

          <p className="text-slate-400 mt-2">
            All monitoring systems operational.
          </p>
        </div>

        {/* STATS */}
        <StatsCards />

        {/* MAP + ALERTS */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* MAP */}
          <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <TrafficMap />
          </div>

          {/* ALERTS */}
          <SystemAlerts />
        </div>

        {/* CAMERAS + AI */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* LIVE CAMERAS */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              📹 LIVE CAMERAS
            </h2>

            <LiveCameras />
          </div>

          {/* AI INSIGHTS */}
          <AIInsights />
        </div>
      </div>
    </div>
  );
}

export default App;