const data = [
  "Traffic congestion detected - Morogoro Road",
  "Possible accident - Ubungo intersection",
  "High flow - Kariakoo area",
  "Rain impact increasing delays",
];

export default function AIInsights() {
  return (
    <div className="bg-[#071426]/80 border border-slate-800/50 rounded-3xl p-5">

      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
        AI INSIGHTS
      </h2>

      <div className="space-y-3">

        {data.map((item, i) => (
          <div key={i} className="bg-[#08182D] p-4 rounded-2xl border border-slate-700/40">
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}