import React from "react";
import { SERIES } from "./chartTheme.js";

export function FunnelChart({ steps = [{ label: "Sessions", value: 9400 }, { label: "Product view", value: 5100 }, { label: "Cart", value: 2200 }, { label: "Order", value: 840 }], format = (v) => v.toLocaleString("fr-FR") }) {
  const max = steps[0] ? steps[0].value : 1;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      {steps.map((s, i) => (
        <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
          <div style={{ width: `${Math.max((s.value / max) * 100, 14)}%`, height: 56, borderRadius: 28, background: SERIES[i % SERIES.length], display: "flex", alignItems: "center", paddingLeft: "var(--space-5)" }}>
            <span style={{ fontSize: "var(--size-body)", fontWeight: "var(--weight-bold)", color: "var(--ink)" }}>{format(s.value)}</span>
          </div>
          <span style={{ fontSize: "var(--size-body)", color: "var(--body)" }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
