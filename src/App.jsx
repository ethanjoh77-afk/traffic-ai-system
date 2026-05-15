import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCards from "./components/StatsCards";
import LiveCameras from "./components/LiveCameras";
import TrafficMap from "./components/TrafficMap";
import SystemAlerts from "./components/SystemAlerts";
import AIInsights from "./components/AIInsights";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-6 overflow-y-auto">
        <Topbar />

        <div className="mt-6">
          <StatsCards />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
          <div className="xl:col-span-2 space-y-6">
            <LiveCameras />
            <TrafficMap />
          </div>

          <div className="space-y-6">
            <SystemAlerts />
            <AIInsights />
          </div>
        </div>
      </main>
    </div>
  );
}