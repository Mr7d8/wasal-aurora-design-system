import React from "react";
import { GLYPHS } from "../primitives/glyphs.js";

const ACCENT = { violet: "#7B5CFF", pink: "#FF4FA3", coral: "#FF7A45", mint: "#3FCF8E", sky: "#3E9BFF" };

export function FloatingCard({ value, label, glyph, accent = "violet", position = {}, style = {} }) {
  return (
    <div
      style={{
        position: "absolute",
        background: "var(--surface-card-strong)",
        backdropFilter: "blur(var(--blur-glass))",
        WebkitBackdropFilter: "blur(var(--blur-glass))",
        border: "1px solid var(--border-card)",
        boxShadow: "var(--shadow-card-float)",
        borderRadius: 24,
        padding: "18px 24px",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        ...position,
        ...style,
      }}
    >
      {glyph ? (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={ACCENT[accent]} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          dangerouslySetInnerHTML={{ __html: GLYPHS[glyph] || GLYPHS.check }} />
      ) : null}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {value ? <span style={{ fontSize: 30, fontWeight: "var(--weight-black)", letterSpacing: "-1px", color: ACCENT[accent] }}>{value}</span> : null}
        {label ? <span style={{ fontSize: "var(--size-eyebrow)", fontWeight: "var(--weight-semibold)", color: "var(--ink)" }}>{label}</span> : null}
      </div>
    </div>
  );
}
