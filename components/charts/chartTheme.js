/** Aurora chart theme. Every chart in the system reads its colors and geometry from here. */
export const SERIES = ["#7B5CFF", "#FF4FA3", "#FF7A45", "#3FCF8E", "#3E9BFF"];
export const SERIES_SOFT = ["#C3A9FF", "#FF9CC8", "#FFBE9B", "#9FE5C6", "#9CC9FF"];
export const LABEL = ["#7B5CFF", "#FF4FA3", "#D4521C", "#1E9A66", "#1F6FD6"];
export const GRID = "rgba(17,17,20,0.07)";
export const INK = "#111114";
export const BODY = "#4A4A55";
export const CAP = "round";
export const BAR_RADIUS = 9;

/**
 * Smart chart selection. Pass a short description of the relationship in the data
 * and get the chart type the Aurora system prescribes.
 */
export const CHART_FOR = {
  "trend-single": "AreaTrend",
  "trend-many": "StackedArea",
  "part-to-whole": "DonutChart",
  "progress": "RingGauge",
  "ranking": "RankedBars",
  "two-metrics": "PairedBars",
  "schedule": "GanttChart",
  "correlation": "BubbleChart",
  "flow": "FunnelChart",
  "distribution": "Histogram",
  "headline-numbers": "KpiTile",
};

export function chartFor(relationship) {
  return CHART_FOR[relationship] || "KpiTile";
}
