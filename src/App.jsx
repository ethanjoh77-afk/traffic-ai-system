import "./App.css";

import TrafficMap from "./components/TrafficMap";
import CommandCenter from "./components/CommandCenter";
import IncidentPanel from "./components/IncidentPanel";
import LiveCameras from "./components/LiveCameras";

export default function App() {

  return (
    <div className="min-h-screen bg-[#030B1A] text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        TANZANIA SMART CITY AI
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-3">
          <CommandCenter />
        </div>

        <div className="xl:col-span-6">
          <TrafficMap />
        </div>

        <div className="xl:col-span-3">
          <LiveCameras />
        </div>

      </div>

      <div className="mt-6">
        <IncidentPanel />
      </div>

    </div>
  );
}