export default function TrafficMap() {
  return (
    <div className="bg-[#071426]/80 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-5">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-xl font-bold">
          TRAFFIC MAP - DAR ES SALAAM
        </h2>

        <span className="text-green-400 text-sm flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          LIVE
        </span>

      </div>

      <div className="h-[540px] rounded-3xl relative overflow-hidden bg-gradient-to-br from-[#071426] via-[#081b33] to-[#0B213D] border border-slate-700/40 flex items-center justify-center">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#22d3ee,transparent_40%)]"></div>

        <h2 className="text-slate-400 text-3xl font-bold tracking-[0.3em] z-10">
          LIVE TRAFFIC GRID
        </h2>

      </div>

    </div>
  );
}