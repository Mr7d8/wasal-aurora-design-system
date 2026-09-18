import React from "react";
import { SERIES, LABEL } from "./chartTheme.js";

export function DonutChart({ segments = [{ label: "Mobile app", value: 62 }, { label: "Web", value: 26 }, { label: "Other", value: 12 }], centerValue = "62%", centerLabel = "mobile", size = 300 }) {
  const r = size / 2 - 26, c = 2 * Math.PI * r, total = segments.reduce((s, x) => s + x.value, 0) || 1;
  let offset = 0;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size, flex: "none" }}>
        <g transform={`translate(${size / 2},${size / 2})`} fill="none" strokeWidth={size * 0.13} strokeLinecap="round">
          <circle r={r} stroke="rgba(17,17,20,0.06)" />
          {segments.map((s, i) => {
            const len = (s.value / total) * c;
            const el = (
              <circle key={s.label} r={r} stroke={SERIES[i % SERIES.length]} strokeDasharray={`${len} ${c}`} strokeDashoffset={-offset} transform="rotate(-90)" />
            );
            offset += len + c * 0.012;
            return el;
          })}
        </g>
        <text x={size / 2} y={size / 2 + 4} textAnchor="middle" fontFamily="var(--font-display)" fontSize={size * 0.19} fontWeight="800" fill="#111114">{centerValue}</text>
        <text x={size / 2} y={size / 2 + size * 0.15} textAnchor="middle" fontFamily="var(--font-body)" fontSize={size * 0.075} fill="#4A4A55">{centerLabel}</text>
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {segments.map((s, i) => (
          <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)" }}>
            <span style={{ fontSize: "var(--size-body)", fontWeight: "var(--weight-bold)", color: LABEL[i % LABEL.length] }}>{s.value}%</span>
            <span style={{ fontSize: "var(--size-body)", color: "var(--body)" }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
