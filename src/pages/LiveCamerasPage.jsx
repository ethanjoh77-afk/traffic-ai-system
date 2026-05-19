import {
  Camera,
  Wifi,
  Monitor,
  Maximize2,
} from "lucide-react"

export default function LiveCamerasPage() {

  return (

    <div className="glass-panel">

      <div className="panel-header">

        <div>

          <h2>
            LIVE AI CCTV FEED
          </h2>

          <p>
            Real-time YOLO vehicle detection
          </p>

        </div>

        <button className="map-button">

          <Maximize2 size={16} />

        </button>

      </div>

      <div className="live-camera-container">

        <img
          src="http://192.168.1.5:5000/video_feed"
          alt="YOLO STREAM"
          className="live-video"
        />

        <div className="live-overlay">

          <div className="camera-live-badge">

            <div className="live-dot"></div>

            LIVE AI DETECTION

          </div>

          <div className="camera-id-box">

            CAM-AI-01

          </div>

        </div>

        <div className="camera-bottom-bar">

          <div className="camera-bottom-item">

            <Camera size={15} />

            YOLOv8 Detection

          </div>

          <div className="camera-bottom-item">

            <Wifi size={15} />

            Live AI Stream

          </div>

          <div className="camera-bottom-item">

            <Monitor size={15} />

            Smart Traffic Monitoring

          </div>

        </div>

      </div>

      <div className="live-system-status">

        <div className="status-pill">

          <div className="online-dot"></div>

          Camera Online

        </div>

        <div className="status-pill">

          AI Detection Active

        </div>

        <div className="status-pill">

          YOLO Tracking Enabled

        </div>

      </div>

    </div>

  )

}