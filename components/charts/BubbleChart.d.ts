import * as React from "react";

/**
 * Bubble chart for correlation between two variables, with size as a third weight.
 *
 * @startingPoint section="Charts" subtitle="Correlation" viewport="700x340"
 */
export interface BubblePoint { label: string; x: number; y: number; r: number }
export interface BubbleChartProps {
  points?: BubblePoint[];
  xLabel?: string;
  yLabel?: string;
  height?: number;
}
export function BubbleChart(props: BubbleChartProps): JSX.Element;
