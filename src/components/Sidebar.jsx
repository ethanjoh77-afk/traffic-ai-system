import React from "react";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>🚦 Traffic AI</h2>

      <nav style={styles.nav}>
        <button style={styles.btn}>Dashboard</button>
        <button style={styles.btn}>Stats</button>
        <button style={styles.btn}>Traffic Map</button>
        <button style={styles.btn}>Live Cameras</button>
        <button style={styles.btn}>AI Insights</button>
        <button style={styles.btn}>System Alerts</button>
      </nav>

      <div style={styles.footer}>
        <p style={styles.text}>v1.0.0</p>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    backgroundColor: "#0f172a",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    position: "fixed",
    left: 0,
    top: 0,
  },
  logo: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  btn: {
    background: "transparent",
    color: "white",
    border: "1px solid #334155",
    padding: "10px",
    cursor: "pointer",
    textAlign: "left",
    borderRadius: "6px",
  },
  footer: {
    marginTop: "20px",
    fontSize: "12px",
    opacity: 0.6,
  },
  text: {
    margin: 0,
  },
};

export default Sidebar;