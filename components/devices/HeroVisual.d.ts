import * as React from "react";

/**
 * The Apple-keynote hero stage: a blurred pastel orb, a large low-contrast wordmark
 * behind the device, and a positioning context for PhoneFrame plus FloatingCards.
 *
 * @startingPoint section="Devices" subtitle="Apple-style hero stage" viewport="700x560"
 */
export interface HeroVisualProps {
  children?: React.ReactNode;
  /** Soft wordmark behind the device. Pass "" to omit. */
  wordmark?: string;
  /** Diameter of the blurred backdrop orb. */
  orbSize?: number;
  height?: number;
  style?: React.CSSProperties;
}
export function HeroVisual(props: HeroVisualProps): JSX.Element;
