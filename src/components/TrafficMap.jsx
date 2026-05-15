export default function TrafficMap() {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 h-[420px]">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">Traffic Map</h2>

        <div className="text-green-400 text-sm">
          ● Live Tracking Active
        </div>
      </div>

      <div className="w-full h-[320px] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-slate-500 border border-slate-700">
        MAP VISUALIZATION AREA
      </div>
    </div>
  );
}