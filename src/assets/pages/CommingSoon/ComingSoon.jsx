import React from "react";
import "./ComingSoon.css";

function ComingSoon() {
  return (
    <div className="comingSoonContainer">
      <h1>🚧 Coming Soon 🚧</h1>
      <p>We're working hard to bring this page to life. Stay tuned!</p>

      {/* Loader spinner */}
      <div className="loader"></div>

      {/* Optional: add a small footer */}
      <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#888" }}>
        © {new Date().getFullYear()} Vatan Pawar
      </p>
    </div>
  );
}

export default ComingSoon;
