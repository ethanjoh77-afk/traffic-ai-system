const stats = [
  {
    title: 'Total Vehicles',
    value: '186,758'
  },
  {
    title: 'Average Speed',
    value: '34 km/h'
  },
  {
    title: 'Traffic Density',
    value: '72%'
  },
  {
    title: 'Active Incidents',
    value: '12'
  }
]

export default function StatsCards() {
  return (
    <div className="stats-grid">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <h3>{item.title}</h3>
          <h1>{item.value}</h1>
        </div>
      ))}
    </div>
  )
}