export default function AIInsights() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        🧠 AI ANALYSIS
      </h2>

      <div className="space-y-4 text-slate-300">

        <div className="bg-slate-800 p-4 rounded-xl">
          High congestion detected at Kariakoo.
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          AI recommends rerouting traffic.
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          Emergency lane remains clear.
        </div>

      </div>
    </div>
  );
}