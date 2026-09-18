import * as React from "react";

/**
 * The default container for Aurora decks and reports: white at 55 percent over
 * the aurora ground, 26px blur, 1px white rim, soft violet shadow.
 *
 * @startingPoint section="Surfaces" subtitle="Liquid glass container" viewport="700x200"
 */
export interface GlassCardProps {
  children?: React.ReactNode;
  /** CSS padding. Defaults to var(--card-pad). Use var(--card-pad-lg) on hero cards. */
  padding?: string;
  /** CSS border radius. Defaults to var(--radius-card). */
  radius?: string;
  /** Floating variant: more opaque, deeper shadow. For cards overlapping a device mockup. */
  strong?: boolean;
  style?: React.CSSProperties;
}
export function GlassCard(props: GlassCardProps): JSX.Element;
