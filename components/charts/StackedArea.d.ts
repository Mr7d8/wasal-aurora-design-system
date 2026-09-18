import * as React from "react";

/**
 * Stacked area for a trend with several overlapping series. Series names are
 * printed in their own accent at the top right instead of a legend box.
 *
 * @startingPoint section="Charts" subtitle="Trend, many series" viewport="700x320"
 */
export interface AreaSeries { name: string; values: number[] }
export interface StackedAreaProps {
  series?: AreaSeries[];
  labels?: string[];
  height?: number;
}
export function StackedArea(props: StackedAreaProps): JSX.Element;
