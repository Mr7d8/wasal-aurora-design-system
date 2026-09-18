import React from "react";
import { SERIES, SERIES_SOFT, GRID, BAR_RADIUS } from "./chartTheme.js";

export function PairedBars({ groups = [{ label: "Mode", a: 78, b: 44 }, { label: "Beauté", a: 92, b: 56 }, { label: "Maison", a: 64, b: 32 }], seriesNames = ["This month", "Last month"], height = 320 }) {
  const max = Math.max(...groups.flatMap((g) => [g.a, g.b])) * 1.15 || 1;
  const w = 900, base = height - 60, gw = w / groups.length, bw = gw * 0.22;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} style={{ width: "100%", height: "auto" }}>
      <line x1="0" y1={base} x2={w} y2={base} stroke={GRID} />
      {groups.map((g, i) => {
        const cx = gw * i + gw / 2, color = SERIES[i % SERIES.length], soft = SERIES_SOFT[i % SERIES_SOFT.length];
        const ha = (g.a / max) * (base - 20), hb = (g.b / max) * (base - 20);
        return (
          <g key={g.label}>
            <rect x={cx - bw - 6} y={base - ha} width={bw} height={ha} rx={BAR_RADIUS} fill={color} />
            <rect x={cx + 6} y={base - hb} width={bw} height={hb} rx={BAR_RADIUS} fill={soft} />
            <text x={cx} y={base + 34} textAnchor="middle" fontFamily="var(--font-body)" fontSize="24" fill="#4A4A55">{g.label}</text>
          </g>
        );
      })}
      <text x="0" y={height - 6} fontFamily="var(--font-body)" fontSize="24" fontWeight="700" fill="#111114">{seriesNames[0]}</text>
      <text x="260" y={height - 6} fontFamily="var(--font-body)" fontSize="24" fill="#4A4A55">{seriesNames[1]}, lighter bar</text>
    </svg>
  );
}
