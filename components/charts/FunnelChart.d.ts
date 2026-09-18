import * as React from "react";

/**
 * Funnel for conversion or how a total splits down a path. Step names sit outside
 * the bars; only the value rides inside, set in ink so it clears 4.5:1 on every accent.
 *
 * @startingPoint section="Charts" subtitle="Conversion or flow" viewport="700x320"
 */
export interface FunnelStep { label: string; value: number }
export interface FunnelChartProps {
  steps?: FunnelStep[];
  format?: (value: number) => string;
}
export function FunnelChart(props: FunnelChartProps): JSX.Element;
