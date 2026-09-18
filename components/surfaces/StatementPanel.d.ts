import * as React from "react";

/**
 * A soft two-accent wash panel with no border, for the one takeaway sentence on a slide.
 *
 * @startingPoint section="Surfaces" subtitle="Takeaway wash panel" viewport="700x160"
 */
export interface StatementPanelProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function StatementPanel(props: StatementPanelProps): JSX.Element;
