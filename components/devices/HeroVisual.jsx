import React from "react";

export function HeroVisual({ children, wordmark = "wasal", orbSize = 620, height = 880, style = {} }) {
  return (
    <div style={{ position: "relative", height, display: "flex", alignItems: "center", justifyContent: "center", ...style }}>
      {wordmark ? (
        <span
          style={{
            position: "absolute",
            top: "6%",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-display)",
            fontSize: Math.round(height * 0.25),
            fontWeight: "var(--weight-black)",
            letterSpacing: "-8px",
            lineHeight: 1,
            color: "rgba(17,17,20,0.05)",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {wordmark}
        </span>
      ) : null}
      <div
        style={{
          position: "absolute",
          width: orbSize,
          height: orbSize,
          borderRadius: "50%",
          background: "conic-gradient(from 210deg, var(--orb-1), var(--orb-2), var(--orb-3), var(--orb-4), var(--orb-1))",
          filter: `blur(${Math.round(orbSize * 0.11)}px)`,
          opacity: 0.5,
        }}
      />
      {children}
    </div>
  );
}
