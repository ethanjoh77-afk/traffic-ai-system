import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCards from "./components/StatsCards";
import AIInsights from "./components/AIInsights";
import TrafficSimulation from "./components/TrafficSimulation";
import SystemAlerts from "./components/SystemAlerts";

import useTrafficStream from "./hooks/useTrafficStream";

export default function App() {
  // 🔵 LIVE DATA HOOK (HAPA NDANI YA COMPONENT)
  const stream = useTrafficStream();

  return (
    <div className="min-h-screen bg-[#030B1A] text-white flex overflow-hidden">

      <Sidebar />

      <main className="flex-1 ml-[260px] overflow-y-auto min-h-screen">

        <Topbar />

        <div className="p-6 space-y-6">

          <StatsCards />

          {/* 🔥 LIVE STATUS PANEL (HII NDIYO ULIKUWA UNATAKA) */}
          <div className="bg-[#071426] border border-slate-800 rounded-3xl p-5">
            
            <h2 className="text-xl font-bold mb-4">
              LIVE TRAFFIC STREAM
            </h2>

            <div className="text-white p-4 space-y-2">

              <h2 className="text-lg">
                🚗 Live Vehicles:{" "}
                <span className="text-cyan-400 font-bold">
                  {stream.vehicles}
                </span>
              </h2>

              <h3 className="text-lg">
                Congestion:{" "}
                <span
                  className={
                    stream.congestion === "red"
                      ? "text-red-500"
                      : stream.congestion === "yellow"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }
                >
                  {stream.congestion.toUpperCase()}
                </span>
              </h3>

              {stream.incidents.length > 0 && (
                <div className="text-red-500 font-bold animate-pulse">
                  🚨 Accident Detected
                </div>
              )}

            </div>
          </div>

          {/* MAP / SIMULATION */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            <div className="xl:col-span-3">
              <AIInsights />
            </div>

            <div className="xl:col-span-6">
              <TrafficSimulation />
            </div>

            <div className="xl:col-span-3">
              <SystemAlerts />
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}