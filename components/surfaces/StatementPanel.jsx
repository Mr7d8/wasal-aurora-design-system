import React from "react";

export function StatementPanel({ children, style = {} }) {
  return (
    <div
      style={{
        background: "var(--gradient-panel)",
        borderRadius: "var(--radius-card)",
        padding: "var(--space-6)",
        fontSize: "var(--size-body)",
        lineHeight: "var(--leading-headline)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--ink)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
