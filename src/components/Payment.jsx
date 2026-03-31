import { useState } from "react";
import API_URL from "../config";

export default function Payment() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false); // ✅ ADDITION

  const pay = async () => {
    try {
      setLoading(true); // ✅ ADDITION
      setMsg("");

      const res = await fetch(`${API_URL}/pay/mock`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: "user1" })
      });

      const data = await res.json();

      setMsg(data.message || "Payment successful"); // ✅ SAFE fallback
    } catch (err) {
      setMsg("Payment failed");
    } finally {
      setLoading(false); // ✅ ADDITION (important for stability)
    }
  };

  return (
    <div>
      <h2>Payment</h2>

      <button onClick={pay} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"} {/* ✅ UX improvement only */}
      </button>

      {msg && <p>{msg}</p>}
    </div>
  );
}