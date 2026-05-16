export default function LiveCameras() {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">
          Live Camera Feeds
        </h2>

        <div className="flex items-center gap-2 text-red-400 text-sm">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>

          LIVE MONITORING
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[1, 2, 3, 4].map((cam) => (
          <div
            key={cam}
            className="relative bg-black rounded-2xl overflow-hidden border border-slate-700 h-64"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mb-3"></div>

              <h2 className="text-white font-bold text-lg">
                CAMERA {cam}
              </h2>

              <p className="text-slate-400 text-sm mt-2">
                Waiting for live stream...
              </p>
            </div>

            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
              LIVE
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}