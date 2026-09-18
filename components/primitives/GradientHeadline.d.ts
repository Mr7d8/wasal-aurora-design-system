import * as React from "react";

/**
 * Headline set in the signature pink into purple into sky gradient. Used whole on
 * dividers and closers, or wrapped around the last phrase of an ink headline.
 *
 * @startingPoint section="Primitives" subtitle="Gradient display type" viewport="700x180"
 */
export interface GradientHeadlineProps {
  children?: React.ReactNode;
  /** CSS font size. var(--size-display) on dividers, var(--size-headline) inline. */
  size?: string;
  /** Element to render. Defaults to h2. */
  tag?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export function GradientHeadline(props: GradientHeadlineProps): JSX.Element;
