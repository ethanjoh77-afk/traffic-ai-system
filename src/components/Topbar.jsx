export default function Topbar() {
  return (
    <div className="topbar">
      <div>
        <h2>Dar es Salaam Traffic AI Control</h2>
        <p className="online">System Online</p>
      </div>

      <div className="topbar-right">
        <div className="weather">28°C</div>
        <div className="admin">Admin User</div>
      </div>
    </div>
  )
}