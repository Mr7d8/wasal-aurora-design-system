import * as React from "react";

/**
 * A frosted card that appears to float out of a device screen: a stat, an activity
 * row or a small notification. Absolutely positioned inside a HeroVisual.
 *
 * @startingPoint section="Devices" subtitle="Frosted floating chip" viewport="700x160"
 */
export interface FloatingCardProps {
  /** Big accent number, optional. */
  value?: string;
  /** Short ink label, optional. */
  label?: string;
  /** Glyph key from primitives/glyphs.js. */
  glyph?: string;
  accent?: "violet" | "pink" | "coral" | "mint" | "sky";
  /** Absolute offsets, e.g. { top: 70, left: -40 }. */
  position?: React.CSSProperties;
  style?: React.CSSProperties;
}
export function FloatingCard(props: FloatingCardProps): JSX.Element;
