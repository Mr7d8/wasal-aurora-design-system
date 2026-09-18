import * as React from "react";

/**
 * An iPhone-style frame, angled slightly, with a soft diffuse shadow. Children are
 * the app screen; the notch pill is drawn for you.
 *
 * @startingPoint section="Devices" subtitle="Angled phone frame" viewport="700x520"
 */
export interface PhoneFrameProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  /** Rotation in degrees. Keep between -6 and 6; two frames tilt in opposite directions. */
  tilt?: number;
  radius?: number;
  style?: React.CSSProperties;
}
export function PhoneFrame(props: PhoneFrameProps): JSX.Element;
