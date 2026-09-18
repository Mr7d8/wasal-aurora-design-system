import React from "react";
import { GLYPHS } from "../primitives/glyphs.js";

const ACCENT = { violet: "#7B5CFF", pink: "#FF4FA3", coral: "#FF7A45", mint: "#3FCF8E", sky: "#3E9BFF" };

export function KpiTile({ value = "112%", label = "Versus target", accent = "violet", glyph = "check", style = {} }) {
  return (
    <div
      style={{
        position: "relative",
        flex: 1,
        borderRadius: "var(--radius-card)",
        background: `var(--${accent}-tint)`,
        padding: "var(--card-pad-lg) var(--space-6)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        ...style,
      }}
    >
      <svg
        width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={ACCENT[accent]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ position: "absolute", top: "var(--space-6)", right: "var(--space-6)", opacity: 0.7 }}
        dangerouslySetInnerHTML={{ __html: GLYPHS[glyph] || GLYPHS.check }}
      />
      <span style={{ fontSize: "var(--size-stat)", lineHeight: 1, fontWeight: "var(--weight-black)", letterSpacing: "-3px", color: ACCENT[accent] }}>{value}</span>
      <span style={{ fontSize: "var(--size-body)", lineHeight: 1.35, color: "var(--body)" }}>{label}</span>
    </div>
  );
}
