import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCards from "./components/StatsCards";
import LiveCameras from "./components/LiveCameras";
import TrafficMap from "./components/TrafficMap";
import SystemAlerts from "./components/SystemAlerts";
import AIInsights from "./components/AIInsights";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 ml-72 h-screen overflow-y-auto">
        <Topbar />

        <div className="p-6 space-y-6">
          <StatsCards />

          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">
            <div className="2xl:col-span-2 space-y-6">
              <LiveCameras />
              <TrafficMap />
            </div>

            <div className="space-y-6">
              <SystemAlerts />
              <AIInsights />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}