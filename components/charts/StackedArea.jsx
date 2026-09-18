import React from "react";
import { SERIES, GRID } from "./chartTheme.js";

export function StackedArea({ series = [{ name: "Mode", values: [8, 12, 10, 16, 14, 20] }, { name: "Beauté", values: [6, 7, 11, 9, 13, 15] }, { name: "Maison", values: [4, 5, 6, 8, 7, 10] }], labels = ["W1", "W2", "W3", "W4", "W5", "W6"], height = 320 }) {
  const w = 900, h = height, pad = 26;
  const n = series[0] ? series[0].values.length : 0;
  const totals = Array.from({ length: n }, (_, i) => series.reduce((s, x) => s + x.values[i], 0));
  const max = Math.max(...totals) * 1.12 || 1;
  const step = (w - pad * 2) / (n - 1);
  const y = (v) => h - pad - (v / max) * (h - pad * 2);
  const running = Array(n).fill(0);
  return (
    <svg viewBox={`0 0 ${w} ${h + 30}`} style={{ width: "100%", height: "auto" }}>
      {[0.3, 0.6].map((t) => <line key={t} x1={pad} y1={h * t} x2={w - pad} y2={h * t} stroke={GRID} />)}
      {series.map((s, si) => {
        const top = s.values.map((v, i) => running[i] + v);
        const up = top.map((v, i) => `${i ? "L" : "M"}${pad + step * i} ${y(v)}`).join(" ");
        const down = running.map((v, i) => `L${pad + step * (n - 1 - i)} ${y(running[n - 1 - i])}`).join(" ");
        const d = `${up} ${down} Z`;
        for (let i = 0; i < n; i++) running[i] = top[i];
        return <path key={s.name} d={d} fill={SERIES[si % SERIES.length]} opacity="0.55" />;
      })}
      {series.map((s, si) => (
        <text key={s.name} x={w - pad} y={30 + si * 32} textAnchor="end" fontFamily="var(--font-body)" fontSize="24" fontWeight="700" fill={SERIES[si % SERIES.length]}>{s.name}</text>
      ))}
      {labels.map((l, i) => (
        <text key={l} x={pad + step * i} y={h + 22} textAnchor="middle" fontFamily="var(--font-body)" fontSize="24" fill="#4A4A55">{l}</text>
      ))}
    </svg>
  );
}
