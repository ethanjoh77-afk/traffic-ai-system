import API_URL from "../config";

export default function LiveCameras() {
  return (
    <div className="grid grid-cols-2 gap-4">

      {[1,2,3,4].map((cam) => (
        <div
          key={cam}
          className="bg-black rounded-2xl overflow-hidden border border-slate-800"
        >
          <img
            src={`${API_URL}/video`}
            alt={`cam-${cam}`}
            className="w-full h-52 object-cover"
          />

          <div className="p-3 bg-slate-900">
            <p className="text-green-400 font-semibold">
              ● CAMERA {cam} LIVE
            </p>
          </div>
        </div>
      ))}

    </div>
  );
}