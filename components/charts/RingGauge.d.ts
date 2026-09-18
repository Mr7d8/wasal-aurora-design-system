import * as React from "react";

/**
 * Radial gauge for progress toward a target, or any single percentage.
 *
 * @startingPoint section="Charts" subtitle="Progress to target" viewport="700x260"
 */
export interface RingGaugeProps {
  /** 0 to 100. */
  value?: number;
  label?: string;
  accent?: number;
  size?: number;
}
export function RingGauge(props: RingGaugeProps): JSX.Element;
