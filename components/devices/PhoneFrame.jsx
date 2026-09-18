import React from "react";

export function PhoneFrame({ children, width = 404, height = 830, tilt = -3, radius = 58, style = {} }) {
  const inner = radius - 10;
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius: radius,
        background: "linear-gradient(150deg, #2A2A33, #14141A)",
        padding: 13,
        boxShadow: "var(--shadow-device)",
        transform: `rotate(${tilt}deg)`,
        flex: "none",
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: inner,
          background: "#FFFFFF",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "26px 24px",
          gap: "var(--space-4)",
        }}
      >
        <div style={{ alignSelf: "center", width: Math.round(width * 0.29), height: 26, borderRadius: 14, background: "#14141A", flex: "none" }} />
        {children}
      </div>
    </div>
  );
}
