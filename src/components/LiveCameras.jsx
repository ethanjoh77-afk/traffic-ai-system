import useLiveTraffic from "../hooks/useLiveTraffic";

export default function LiveCameras() {

  const stream = useLiveTraffic();

  return (
    <div className="bg-[#071426] border border-slate-700 rounded-2xl p-5">

      <h2 className="text-cyan-400 font-bold text-xl mb-4">
        LIVE CCTV NODES
      </h2>

      <div className="space-y-4">

        {Object.entries(stream.zones).map(([zone, value]) => (

          <div
            key={zone}
            className="bg-[#0B1D33] rounded-xl p-4"
          >

            <div className="flex justify-between items-center">

              <div>
                <h3 className="font-bold uppercase">
                  {zone}
                </h3>

                <p className="text-sm text-slate-400">
                  Vehicles: {value}
                </p>
              </div>

              <div className={
                value > 20
                  ? "w-4 h-4 rounded-full bg-red-500 animate-pulse"
                  : value > 10
                  ? "w-4 h-4 rounded-full bg-yellow-400"
                  : "w-4 h-4 rounded-full bg-green-500"
              } />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}