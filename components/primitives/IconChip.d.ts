import * as React from "react";

/**
 * A thin outline glyph inside a rounded square tinted with its accent. The only
 * icon treatment in the system.
 *
 * @startingPoint section="Primitives" subtitle="Tinted icon chip" viewport="700x140"
 */
export interface IconChipProps {
  /** Glyph key from glyphs.js: clock, bars, search, social, pin, check, bolt, plus, trend, chat, folder, sheet, deck, globe, code, shield, heart, send. */
  glyph?: string;
  accent?: "violet" | "pink" | "coral" | "mint" | "sky";
  /** Chip edge in px. 58 on slides, 46 in dense rows, 68 on hero cards. */
  size?: number;
  style?: React.CSSProperties;
}
export function IconChip(props: IconChipProps): JSX.Element;
