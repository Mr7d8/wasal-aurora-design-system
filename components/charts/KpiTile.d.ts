import * as React from "react";

/**
 * A headline number on a light accent tint, with a small outline glyph in the
 * corner. Use a grid of these instead of a chart when the slide is a few numbers.
 *
 * @startingPoint section="Charts" subtitle="KPI tile, no chart needed" viewport="700x220"
 */
export interface KpiTileProps {
  value?: string;
  label?: string;
  accent?: "violet" | "pink" | "coral" | "mint" | "sky";
  /** Glyph key from primitives/glyphs.js. */
  glyph?: string;
  style?: React.CSSProperties;
}
export function KpiTile(props: KpiTileProps): JSX.Element;
