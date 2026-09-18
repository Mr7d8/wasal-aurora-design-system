import React from "react";
import { SERIES, LABEL } from "./chartTheme.js";

export function RingGauge({ value = 86, label = "of monthly target", accent = 3, size = 320 }) {
  const r = size / 2 - 30, w = size, h = size * 0.62;
  const color = SERIES[accent % SERIES.length];
  const a = Math.PI * (1 - Math.min(value, 100) / 100);
  const x = Math.cos(a) * r, y = -Math.sin(a) * r;
  return (
    <svg viewBox={`0 0 ${w} ${h + 30}`} style={{ width: "100%", height: "auto" }}>
      <g transform={`translate(${w / 2},${h})`} fill="none" strokeWidth={size * 0.07} strokeLinecap="round">
        <path d={`M${-r} 0A${r} ${r} 0 0 1 ${r} 0`} stroke="rgba(17,17,20,0.06)" />
        <path d={`M${-r} 0A${r} ${r} 0 0 1 ${x} ${y}`} stroke={color} />
      </g>
      <text x={w / 2} y={h - 8} textAnchor="middle" fontFamily="var(--font-display)" fontSize={size * 0.2} fontWeight="800" fill={LABEL[accent % LABEL.length]}>{value}%</text>
      <text x={w / 2} y={h + 22} textAnchor="middle" fontFamily="var(--font-body)" fontSize={size * 0.075} fill="#4A4A55">{label}</text>
    </svg>
  );
}
