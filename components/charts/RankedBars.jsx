import React from "react";
import { SERIES, BAR_RADIUS } from "./chartTheme.js";

export function RankedBars({ items = [{ label: "Mode", value: 1200 }, { label: "Beauté", value: 940 }, { label: "Maison", value: 710 }, { label: "Épicerie", value: 460 }], format = (v) => v.toLocaleString("fr-FR"), barHeight = 34 }) {
  const max = Math.max(...items.map((i) => i.value)) || 1;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
      {items.map((it, i) => (
        <div key={it.label} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <span style={{ width: "26%", fontSize: "var(--size-body)", color: "var(--body)" }}>{it.label}</span>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <div style={{ width: `${(it.value / max) * 100}%`, height: barHeight, borderRadius: BAR_RADIUS * 2, background: SERIES[i % SERIES.length] }} />
            <span style={{ fontSize: "var(--size-body)", fontWeight: "var(--weight-bold)", color: "var(--ink)" }}>{format(it.value)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
