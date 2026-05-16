import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCards from "./components/StatsCards";
import AIInsights from "./components/AIInsights";
import TrafficMap from "./components/TrafficMap";
import LiveCameras from "./components/LiveCameras";
import SystemAlerts from "./components/SystemAlerts";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030B1A] text-white flex overflow-hidden">

      <Sidebar />

      <main className="flex-1 ml-[260px] overflow-y-auto min-h-screen">

        <Topbar />

        <div className="p-6 space-y-6">

          <StatsCards />

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            <div className="xl:col-span-3">
              <AIInsights />
            </div>

            <div className="xl:col-span-6">
              <TrafficMap />
            </div>

            <div className="xl:col-span-3">
              <LiveCameras />
            </div>

          </div>

          <SystemAlerts />

        </div>

      </main>

    </div>
  );
}