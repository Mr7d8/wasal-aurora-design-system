import * as React from "react";

/**
 * Small uppercase label above a headline. Always uses the darkened accent variant
 * so it stays readable at 24px on the near-white ground.
 *
 * @startingPoint section="Primitives" subtitle="Uppercase section label" viewport="700x120"
 */
export interface EyebrowProps {
  children?: React.ReactNode;
  accent?: "violet" | "pink" | "coral" | "mint" | "sky";
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
