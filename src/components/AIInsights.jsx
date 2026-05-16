const insights = [
  { title: "Traffic Congestion", text: "Morogoro Road heavy flow detected" },
  { title: "Accident Alert", text: "Possible incident near Ubungo" },
  { title: "High Volume", text: "Kariakoo congestion rising" },
  { title: "Weather Impact", text: "Rain affecting Ilala traffic" },
];

export default function AIInsights() {
  return (
    <div className="bg-[#071426]/70 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-5">

      <h2 className="text-xl font-bold mb-6">
        AI INSIGHTS
      </h2>

      <div className="space-y-4">

        {insights.map((item, i) => (
          <div
            key={i}
            className="relative bg-[#08182D] border border-slate-700/40 rounded-2xl p-5 overflow-hidden"
          >

            <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500"></div>

            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-slate-400 mt-1">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}