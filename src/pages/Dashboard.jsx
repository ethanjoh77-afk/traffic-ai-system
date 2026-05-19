import { useEffect, useState } from "react"
import socket from "../socket"

import {
  Camera,
  Activity,
} from "lucide-react"

import CommandCenter from "../components/CommandCenter";
import IncidentPanel from "../components/IncidentPanel";
import TrafficMap from "../components/TrafficMap";
import TrafficAnalytics from "../components/TrafficAnalytics";
import LiveCameras from "../components/LiveCameras";
import StatsCards from "../components/StatsCards";
import AIInsights from "../components/AIInsights";

export default function Dashboard() {

  const [stats, setStats] = useState({

    vehicles: 0,
    cars: 0,
    trucks: 0,
    buses: 0,
    speed: 0,
    density: 0,
    incidents: 0,
    camerasOnline: 0,
    totalCameras: 278,
    responseUnits: 0,

  })

  useEffect(() => {

    socket.on(
      "live-stats",
      (data) => {

        setStats(data)

      }
    )

    return () => {

      socket.off("live-stats")

    }

  }, [])

  return (

    <>

      {/* dashboard content */}

    </>

  )

}
  return (

    <>

      <section className="hero-section">

        <div>

          <h1 className="dashboard-main-title">
            TANZANIA TRAFFIC AI
          </h1>

          <p className="dashboard-main-subtitle">
            NATIONAL COMMAND CENTER • REALTIME MONITORING SYSTEM
          </p>

        </div>

        <div className="system-status">

          <div className="live-pulse"></div>

          SYSTEM ONLINE

        </div>

      </section>

      <StatsCards />

      <section className="dashboard-grid">

        <div className="left-column">

          <div className="glass-panel">
            <CommandCenter />
          </div>

          <div className="glass-panel">
            <IncidentPanel />
          </div>

        </div>

        <div className="center-column">

          <div className="glass-panel map-panel">

            <div className="panel-header">

              <div>

                <h2>LIVE TRAFFIC MAP</h2>

                <p>
                  AI-powered realtime traffic monitoring
                </p>

              </div>

              <button className="map-button">
                Map Layers
              </button>

            </div>

            <TrafficMap />

          </div>

          <div className="glass-panel">
            <TrafficAnalytics />
          </div>

        </div>

        <div className="right-column">

          <div className="glass-panel">
            <LiveCameras />
          </div>

          <div className="glass-panel">
            <AIInsights />
          </div>

        </div>

      </section>

    </>

  );

}