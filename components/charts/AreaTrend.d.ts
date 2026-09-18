import * as React from "react";

/**
 * Soft area chart for a trend over time with a single series. The Aurora choice
 * whenever the data is one measure moving through time.
 *
 * @startingPoint section="Charts" subtitle="Trend, single series" viewport="700x300"
 */
export interface AreaTrendProps {
  values?: number[];
  /** Axis labels, one per value. Drawn directly under the curve, no legend. */
  labels?: string[];
  /** Index into the five Aurora accents. Keep one accent per series across a deck. */
  accent?: number;
  height?: number;
  /** Optional value printed at the end point instead of a y axis. */
  valueLabel?: string;
}
export function AreaTrend(props: AreaTrendProps): JSX.Element;
