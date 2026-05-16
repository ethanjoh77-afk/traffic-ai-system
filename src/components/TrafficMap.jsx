export default function TrafficSimulation() {
  return (
    <div className="bg-[#071426]/80 border border-slate-800/50 rounded-3xl p-5">

      <h2 className="text-xl font-bold mb-4">TRAFFIC MAP</h2>

      <div className="h-[540px] rounded-3xl relative overflow-hidden bg-gradient-to-br from-[#071426] to-[#0B213D] flex items-center justify-center">

        <div className="absolute inset-0 bg-cyan-500/10 animate-pulse"></div>

        <h1 className="text-slate-400 tracking-[0.3em] text-2xl">
          LIVE GRID
        </h1>

      </div>

    </div>
  );
}