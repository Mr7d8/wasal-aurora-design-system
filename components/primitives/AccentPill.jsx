import React from "react";

export function AccentPill({ children, accent = "violet", style = {} }) {
  return (
    <span
      style={{
        fontSize: "var(--size-body)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--ink)",
        background: `var(--${accent}-tint)`,
        borderRadius: "var(--radius-pill)",
        padding: "18px 32px",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
