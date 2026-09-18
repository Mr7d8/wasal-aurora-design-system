import React from "react";
import { GLYPHS } from "./glyphs.js";

const ACCENT = { violet: "#7B5CFF", pink: "#FF4FA3", coral: "#FF7A45", mint: "#3FCF8E", sky: "#3E9BFF" };

export function IconChip({ glyph = "check", accent = "violet", size = 58, style = {} }) {
  const stroke = ACCENT[accent] || ACCENT.violet;
  return (
    <div
      style={{
        flex: "none",
        width: size,
        height: size,
        borderRadius: "var(--radius-chip)",
        background: `var(--${accent}-tint)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <svg
        width={Math.round(size * 0.48)}
        height={Math.round(size * 0.48)}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        dangerouslySetInnerHTML={{ __html: GLYPHS[glyph] || GLYPHS.check }}
      />
    </div>
  );
}
