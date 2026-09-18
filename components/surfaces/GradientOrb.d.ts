import * as React from "react";

/**
 * The Aurora hero shape: a blurred conic wash under a lit glass sphere. Anchors hub
 * slides and sits behind device mockups.
 *
 * @startingPoint section="Surfaces" subtitle="Lit gradient sphere" viewport="700x340"
 */
export interface GradientOrbProps {
  /** Diameter in px. 340 on hub slides, 520 to 640 when used as a backdrop. */
  size?: number;
  /** Optional short label centered in the sphere. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function GradientOrb(props: GradientOrbProps): JSX.Element;
