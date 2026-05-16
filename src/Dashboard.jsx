import './App.css'

import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import StatsCards from './components/StatsCards'
import AIInsights from './components/AIInsights'
import TrafficMap from './components/TrafficMap'
import LiveCameras from './components/LiveCameras'
import SystemAlerts from './components/SystemAlerts'

export default function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="main-content">

        <Topbar />

        <StatsCards />

        <div className="middle-grid">
          <AIInsights />
          <TrafficMap />
          <LiveCameras />
        </div>

        <SystemAlerts />

      </main>

    </div>
  )
}