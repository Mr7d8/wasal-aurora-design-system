import React from "react";

export function GlassCard({ children, padding = "var(--card-pad)", radius = "var(--radius-card)", strong = false, style = {} }) {
  return (
    <div
      style={{
        background: strong ? "var(--surface-card-strong)" : "var(--surface-card)",
        backdropFilter: "blur(var(--blur-glass))",
        WebkitBackdropFilter: "blur(var(--blur-glass))",
        border: "1px solid var(--border-card)",
        borderRadius: radius,
        boxShadow: strong ? "var(--shadow-card-float)" : "var(--shadow-card)",
        padding,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        color: "var(--text-body)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
