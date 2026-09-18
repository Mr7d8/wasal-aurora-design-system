import * as React from "react";

/**
 * Gantt with rounded bars, for phases or a campaign schedule.
 *
 * @startingPoint section="Charts" subtitle="Phases and schedule" viewport="700x300"
 */
export interface GanttPhase { label: string; start: number; span: number }
export interface GanttChartProps {
  phases?: GanttPhase[];
  /** Column headers, usually weeks or months. */
  columns?: string[];
}
export function GanttChart(props: GanttChartProps): JSX.Element;
