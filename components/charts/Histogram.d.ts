import * as React from "react";

/**
 * Histogram for a distribution or spread. Bar opacity tracks the bin height, so the
 * shape reads without gridline clutter.
 *
 * @startingPoint section="Charts" subtitle="Distribution" viewport="700x300"
 */
export interface HistogramProps {
  bins?: number[];
  labels?: string[];
  accent?: number;
  height?: number;
}
export function Histogram(props: HistogramProps): JSX.Element;
