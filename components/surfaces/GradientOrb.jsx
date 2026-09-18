import React from "react";

export function GradientOrb({ size = 340, children, style = {} }) {
  return (
    <div style={{ position: "relative", width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center", ...style }}>
      <div
        style={{
          position: "absolute",
          inset: -Math.round(size * 0.13),
          borderRadius: "50%",
          background: "conic-gradient(from 205deg, var(--orb-1), var(--orb-2), var(--orb-3), var(--orb-4), var(--orb-1))",
          filter: `blur(${Math.round(size * 0.12)}px)`,
          opacity: 0.75,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 22%, rgba(255,255,255,.92), rgba(255,255,255,.18) 38%, rgba(255,255,255,0) 58%), conic-gradient(from 195deg, #A8C8FF, #EEC4FF, #FFC9A8, #C8B4FF, #A8C8FF)",
          boxShadow: "inset 0 -34px 64px rgba(255,255,255,.75), inset 0 22px 44px rgba(255,255,255,.5), var(--shadow-orb)",
        }}
      />
      <span style={{ position: "relative", fontSize: "var(--size-card-title)", fontWeight: "var(--weight-bold)", color: "var(--ink)", textAlign: "center", lineHeight: 1.25 }}>
        {children}
      </span>
    </div>
  );
}
