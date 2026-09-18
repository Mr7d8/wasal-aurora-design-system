import React from "react";
import { SERIES, GRID } from "./chartTheme.js";

export function BubbleChart({ points = [{ label: "Mode", x: 20, y: 30, r: 16 }, { label: "Beauté", x: 42, y: 58, r: 26 }, { label: "Maison", x: 62, y: 72, r: 14 }, { label: "Épicerie", x: 80, y: 86, r: 30 }], xLabel = "Spend", yLabel = "Revenue", height = 340 }) {
  const w = 900, h = height, pad = 60;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "auto" }}>
      <line x1={pad} y1={h - pad} x2={w} y2={h - pad} stroke={GRID} />
      <line x1={pad} y1="0" x2={pad} y2={h - pad} stroke={GRID} />
      {points.map((p, i) => (
        <g key={p.label}>
          <circle cx={pad + (p.x / 100) * (w - pad - 20)} cy={h - pad - (p.y / 100) * (h - pad - 20)} r={p.r} fill={SERIES[i % SERIES.length]} opacity="0.75" />
          <text x={pad + (p.x / 100) * (w - pad - 20)} y={h - pad - (p.y / 100) * (h - pad - 20) - p.r - 14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="24" fill="#4A4A55">{p.label}</text>
        </g>
      ))}
      <text x={w - 6} y={h - pad + 34} textAnchor="end" fontFamily="var(--font-body)" fontSize="24" fill="#4A4A55">{xLabel}</text>
      <text x={pad - 16} y="22" textAnchor="end" fontFamily="var(--font-body)" fontSize="24" fill="#4A4A55">{yLabel}</text>
    </svg>
  );
}
