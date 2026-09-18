import React from "react";
import { SERIES, GRID } from "./chartTheme.js";

function path(values, w, h, pad) {
  const max = Math.max(...values) * 1.15, min = 0;
  const step = (w - pad * 2) / (values.length - 1);
  const y = (v) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);
  let d = `M${pad} ${y(values[0])}`;
  for (let i = 1; i < values.length; i++) {
    const x0 = pad + step * (i - 1), x1 = pad + step * i;
    const cx = (x0 + x1) / 2;
    d += ` C${cx} ${y(values[i - 1])} ${cx} ${y(values[i])} ${x1} ${y(values[i])}`;
  }
  return { d, lastX: pad + step * (values.length - 1), lastY: y(values[values.length - 1]) };
}

export function AreaTrend({ values = [12, 18, 16, 27, 24, 38], labels = [], accent = 0, height = 300, valueLabel = "" }) {
  const w = 900, h = height, pad = 26;
  const color = SERIES[accent % SERIES.length];
  const { d, lastX, lastY } = path(values, w, h, pad);
  const id = `aurora-area-${accent}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "auto", overflow: "visible" }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.32" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((t) => (
        <line key={t} x1={pad} y1={h * t} x2={w - pad} y2={h * t} stroke={GRID} strokeWidth="1" />
      ))}
      <path d={`${d} L${w - pad} ${h} L${pad} ${h} Z`} fill={`url(#${id})`} />
      <path d={d} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <circle cx={lastX} cy={lastY} r="8" fill={color} />
      {valueLabel ? (
        <text x={lastX - 14} y={lastY - 22} textAnchor="end" fontFamily="var(--font-display)" fontSize="30" fontWeight="800" fill={color}>
          {valueLabel}
        </text>
      ) : null}
      {labels.map((l, i) => (
        <text key={l} x={pad + ((w - pad * 2) / (values.length - 1)) * i} y={h + 26} textAnchor="middle" fontFamily="var(--font-body)" fontSize="24" fill="#4A4A55">
          {l}
        </text>
      ))}
    </svg>
  );
}
