import React from "react";

export function LaptopFrame({ children, width = 820, screenHeight = 472, style = {} }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "none", ...style }}>
      <div style={{ width, borderRadius: 22, background: "linear-gradient(150deg, #2A2A33, #14141A)", padding: "14px 14px 18px", boxShadow: "var(--shadow-device)" }}>
        <div style={{ borderRadius: 12, background: "#FFFFFF", overflow: "hidden", display: "flex", flexDirection: "column", padding: "20px 22px", gap: "var(--space-4)", height: screenHeight }}>
          {children}
        </div>
      </div>
      <div style={{ width: width * 1.1, height: 16, borderRadius: "0 0 16px 16px", background: "linear-gradient(180deg, #C9C9D2, #8E8E9C)" }} />
      <div style={{ width: 170, height: 6, borderRadius: "0 0 8px 8px", background: "#7A7A88" }} />
    </div>
  );
}
