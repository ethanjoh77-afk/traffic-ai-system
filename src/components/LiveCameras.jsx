const cameras = [
  'Morogoro Road',
  'Ubungo',
  'Kivukoni',
  'Kigamboni'
]

export default function LiveCameras() {
  return (
    <div className="live-cameras">
      <div className="card-title">
        Live Cameras
      </div>

      {cameras.map((camera, index) => (
        <div className="camera-card" key={index}>
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200"
            alt=""
          />

          <p>{camera}</p>
        </div>
      ))}
    </div>
  )
}