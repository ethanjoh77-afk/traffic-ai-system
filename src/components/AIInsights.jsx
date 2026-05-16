export default function AIInsights() {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5">
      
      <h2 className="text-xl font-bold mb-5">
        AI Insights
      </h2>

      <div className="space-y-4">

        <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
          <p className="text-slate-300 text-sm">
            Traffic volume expected to increase by 18% in the next 2 hours.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
          <p className="text-slate-300 text-sm">
            AI recommends rerouting vehicles through alternative roads.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
          <p className="text-slate-300 text-sm">
            Congestion detected at Morogoro Road.
          </p>
        </div>

      </div>

    </div>
  )
}