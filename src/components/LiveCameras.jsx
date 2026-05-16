export default function LiveCameras() {
  return (
    <section className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold tracking-wide">
            Live Surveillance Network
          </h2>

          <p className="text-slate-400 text-sm mt-2">
            Real-time monitoring of connected traffic sectors.
          </p>
        </div>

        <div className="flex items-center gap-3 text-red-400 text-sm bg-red-500/10 px-4 py-3 rounded-2xl border border-red-500/20">

          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>

          LIVE INFRASTRUCTURE
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {[1, 2, 3, 4].map((cam) => (
          <div
            key={cam}
            className="relative bg-black rounded-3xl border border-slate-700 overflow-hidden h-72"
          >

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse mb-5"></div>

              <h2 className="text-white text-2xl font-bold tracking-[0.2em]">
                CAMERA {cam}
              </h2>

              <p className="text-slate-400 text-sm mt-4">
                WAITING FOR LIVE STREAM
              </p>

            </div>

            <div className="absolute top-4 left-4 bg-red-600 px-4 py-2 rounded-full text-xs font-bold">
              LIVE
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}