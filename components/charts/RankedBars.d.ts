import * as React from "react";

/**
 * Horizontal bars with rounded ends for ranking or comparison across categories.
 * Values sit at the bar tip, category names at the left, no axis.
 *
 * @startingPoint section="Charts" subtitle="Ranking across categories" viewport="700x300"
 */
export interface RankedBarItem { label: string; value: number }
export interface RankedBarsProps {
  items?: RankedBarItem[];
  format?: (value: number) => string;
  barHeight?: number;
}
export function RankedBars(props: RankedBarsProps): JSX.Element;
