import React from "react";
import { SERIES, GRID, BAR_RADIUS } from "./chartTheme.js";

export function Histogram({ bins = [4, 9, 16, 24, 19, 12, 6, 3], labels = [], accent = 4, height = 300 }) {
  const w = 900, h = height, base = h - 44, max = Math.max(...bins) * 1.12 || 1;
  const bw = (w / bins.length) * 0.66, gap = (w / bins.length) * 0.34;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "auto" }}>
      {[0.3, 0.6].map((t) => <line key={t} x1="0" y1={base * t} x2={w} y2={base * t} stroke={GRID} />)}
      <line x1="0" y1={base} x2={w} y2={base} stroke={GRID} />
      {bins.map((v, i) => {
        const bh = (v / max) * (base - 14);
        return <rect key={i} x={i * (bw + gap) + gap / 2} y={base - bh} width={bw} height={bh} rx={BAR_RADIUS} fill={SERIES[accent % SERIES.length]} opacity={0.35 + 0.65 * (v / max)} />;
      })}
      {labels.map((l, i) => (
        <text key={l} x={i * (bw + gap) + gap / 2 + bw / 2} y={h - 10} textAnchor="middle" fontFamily="var(--font-body)" fontSize="24" fill="#4A4A55">{l}</text>
      ))}
    </svg>
  );
}
