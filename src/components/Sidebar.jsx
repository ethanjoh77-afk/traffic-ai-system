import {
  LayoutDashboard,
  Map,
  Camera,
  Brain,
  Bell,
  BarChart3,
  Settings
} from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <h1 className="logo">
          TANZANIA TRAFFIC AI
        </h1>

        <div className="menu">
          <button><LayoutDashboard size={18}/> Dashboard</button>
          <button><Map size={18}/> Traffic Map</button>
          <button><Camera size={18}/> Live Cameras</button>
          <button><Brain size={18}/> AI Insights</button>
          <button><Bell size={18}/> Alerts</button>
          <button><BarChart3 size={18}/> Analytics</button>
          <button><Settings size={18}/> Settings</button>
        </div>
      </div>

      <div className="ai-powered">
        <h3>AI POWERED</h3>
        <p>Smart Traffic Management</p>
      </div>
    </aside>
  )
}