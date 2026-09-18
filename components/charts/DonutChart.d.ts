import * as React from "react";

/**
 * Ring chart for part to whole of a single total, with the key number in the hole.
 * Never a full pie.
 *
 * @startingPoint section="Charts" subtitle="Part to whole" viewport="700x320"
 */
export interface DonutSegment { label: string; value: number }
export interface DonutChartProps {
  segments?: DonutSegment[];
  /** The number that belongs in the hole. */
  centerValue?: string;
  centerLabel?: string;
  size?: number;
}
export function DonutChart(props: DonutChartProps): JSX.Element;
