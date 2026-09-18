import * as React from "react";

/**
 * Two metrics per category, drawn as a full-strength bar next to its lighter twin.
 * The Aurora pattern for this month versus last month.
 *
 * @startingPoint section="Charts" subtitle="Two metrics per category" viewport="700x320"
 */
export interface PairedGroup { label: string; a: number; b: number }
export interface PairedBarsProps {
  groups?: PairedGroup[];
  /** [current, comparison] names, printed under the chart instead of a legend box. */
  seriesNames?: [string, string];
  height?: number;
}
export function PairedBars(props: PairedBarsProps): JSX.Element;
