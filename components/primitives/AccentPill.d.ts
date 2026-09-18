import * as React from "react";

/**
 * Tinted pill for a short list of parallel items, such as the four manual tasks AI
 * takes over. Ink text on a 10 percent accent tint.
 *
 * @startingPoint section="Primitives" subtitle="Tinted pill row" viewport="700x120"
 */
export interface AccentPillProps {
  children?: React.ReactNode;
  accent?: "violet" | "pink" | "coral" | "mint" | "sky";
  style?: React.CSSProperties;
}
export function AccentPill(props: AccentPillProps): JSX.Element;
