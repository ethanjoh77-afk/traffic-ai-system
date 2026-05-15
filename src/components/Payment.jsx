import { useState } from "react";
import API_URL from "../config";

const Payment = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const pay = async () => {
    try {
      setLoading(true);
      setMsg("Processing payment...");

      const res = await fetch(`${API_URL}/pay/mock`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: "user1" }),
      });

      // safety check
      if (!res.ok) {
        throw new Error("Server responded with error");
      }

      const data = await res.json();

      setMsg(data.message || "Payment successful");
    } catch (err) {
      console.error("Payment error:", err);
      setMsg("Payment failed — check backend/API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Payment</h2>

      <button onClick={pay} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>

      {msg && <p>{msg}</p>}
    </div>
  );
};

export default Payment;