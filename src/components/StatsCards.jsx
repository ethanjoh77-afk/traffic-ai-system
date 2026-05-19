<<<<<<< HEAD
import { motion } from "framer-motion";
import { Car, Gauge, TriangleAlert, Ambulance } from "lucide-react";

const stats = [
  { title: "TOTAL VEHICLES", value: "186,758", icon: Car, color: "bg-blue-600" },
  { title: "AVERAGE SPEED", value: "34 km/h", icon: Gauge, color: "bg-green-600" },
  { title: "TRAFFIC DENSITY", value: "72%", icon: TriangleAlert, color: "bg-yellow-500" },
  { title: "ACTIVE INCIDENTS", value: "12", icon: Ambulance, color: "bg-purple-600" },
];
=======
import { useEffect, useState } from "react"

import socket from "../socket"

import {
  Car,
  Gauge,
  Activity,
  ShieldAlert,
  Camera,
  Radio,
} from "lucide-react"
>>>>>>> 96efcbf (integrated real YOLO live AI detection)

export default function StatsCards() {

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

        console.log("LIVE DATA:", data)

        setStats(data)

      }
    )

    return () => {

      socket.off("live-stats")

    }

  }, [])

  return (
<<<<<<< HEAD
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-[#071426]/80 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-6 shadow-lg"
          >

            <div className="flex items-center gap-5">

              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                <Icon />
              </div>

              <div>
                <p className="text-slate-400 text-sm">{item.title}</p>
                <h2 className="text-3xl font-bold">{item.value}</h2>
              </div>
=======

    <div className="stats-grid">

      {/* TOTAL VEHICLES */}

      <div className="stats-card">

        <div className="stats-icon">
          <Car size={28} />
        </div>

        <div className="stats-info">

          <p>TOTAL VEHICLES</p>

          <h2>
            {stats.vehicles}
          </h2>
>>>>>>> 96efcbf (integrated real YOLO live AI detection)

          <span>
            Cars: {stats.cars} |
            Trucks: {stats.trucks} |
            Buses: {stats.buses}
          </span>

        </div>

      </div>

      {/* SPEED */}

      <div className="stats-card">

        <div className="stats-icon">
          <Gauge size={28} />
        </div>

        <div className="stats-info">

          <p>AVERAGE SPEED</p>

          <h2>
            {stats.speed} km/h
          </h2>

          <span>
            LIVE TRAFFIC SPEED
          </span>

        </div>

      </div>

      {/* DENSITY */}

      <div className="stats-card">

        <div className="stats-icon">
          <Activity size={28} />
        </div>

        <div className="stats-info">

          <p>TRAFFIC DENSITY</p>

          <h2>
            {stats.density}%
          </h2>

          <span>
            LIVE ROAD DENSITY
          </span>

        </div>

      </div>

      {/* INCIDENTS */}

      <div className="stats-card">

        <div className="stats-icon">
          <ShieldAlert size={28} />
        </div>

        <div className="stats-info">

          <p>ACTIVE INCIDENTS</p>

          <h2>
            {stats.incidents}
          </h2>

          <span>
            LIVE INCIDENT TRACKING
          </span>

        </div>

      </div>

      {/* CAMERAS */}

      <div className="stats-card">

        <div className="stats-icon">
          <Camera size={28} />
        </div>

        <div className="stats-info">

          <p>CAMERAS ONLINE</p>

          <h2>
            {stats.camerasOnline} / {stats.totalCameras}
          </h2>

          <span>
            LIVE CCTV STATUS
          </span>

        </div>

      </div>

      {/* RESPONSE UNITS */}

      <div className="stats-card">

        <div className="stats-icon">
          <Radio size={28} />
        </div>

        <div className="stats-info">

          <p>RESPONSE UNITS</p>

          <h2>
            {stats.responseUnits}
          </h2>

          <span>
            ACTIVE ROAD UNITS
          </span>

        </div>

      </div>

    </div>

  )

<<<<<<< HEAD
    </div>
  );
=======
>>>>>>> 96efcbf (integrated real YOLO live AI detection)
}