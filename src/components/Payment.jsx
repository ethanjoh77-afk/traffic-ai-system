import { useState } from "react";
import API_URL from "../config";

const Payment = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const pay = async () => {
    try {
      setLoading(true);
      setMsg("");

      const res = await fetch(`${API_URL}/pay/mock`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: "user1" }),
      });

      const data = await res.json();

      setMsg(data.message || "Payment successful");
    } catch (err) {
      console.error(err);
      setMsg("Payment failed");
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