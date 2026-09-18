import React from "react";

const LABEL = { violet: "var(--violet-label)", pink: "var(--pink-label)", coral: "var(--coral-label)", mint: "var(--mint-label)", sky: "var(--sky-label)" };

export function Eyebrow({ children, accent = "violet", style = {} }) {
  return (
    <span
      style={{
        fontSize: "var(--size-eyebrow)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: LABEL[accent] || LABEL.violet,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
