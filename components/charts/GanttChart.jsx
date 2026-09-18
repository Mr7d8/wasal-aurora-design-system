import React from "react";
import { SERIES, GRID } from "./chartTheme.js";

export function GanttChart({ phases = [{ label: "Brief", start: 0, span: 2 }, { label: "Creative", start: 1, span: 2 }, { label: "Live", start: 2, span: 3 }, { label: "Readout", start: 4, span: 1 }], columns = ["W1", "W2", "W3", "W4", "W5"] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      <div style={{ display: "grid", gridTemplateColumns: `180px repeat(${columns.length}, 1fr)`, gap: "var(--space-3)" }}>
        <span />
        {columns.map((c) => (
          <span key={c} style={{ fontSize: "var(--size-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--body)" }}>{c}</span>
        ))}
      </div>
      {phases.map((p, i) => (
        <div key={p.label} style={{ display: "grid", gridTemplateColumns: `180px repeat(${columns.length}, 1fr)`, gap: "var(--space-3)", alignItems: "center", borderTop: `1px solid ${GRID}`, paddingTop: "var(--space-3)" }}>
          <span style={{ fontSize: "var(--size-body)", color: "var(--body)" }}>{p.label}</span>
          <div style={{ gridColumn: `${p.start + 2} / span ${p.span}`, height: 34, borderRadius: 17, background: SERIES[i % SERIES.length] }} />
        </div>
      ))}
    </div>
  );
}
