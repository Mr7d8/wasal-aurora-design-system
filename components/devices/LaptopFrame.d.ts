import * as React from "react";

/**
 * A laptop shell for dashboard and internal-tool visuals, with the base lip and foot
 * drawn in. Pairs with a smaller PhoneFrame beside it.
 *
 * @startingPoint section="Devices" subtitle="Laptop dashboard frame" viewport="700x420"
 */
export interface LaptopFrameProps {
  children?: React.ReactNode;
  width?: number;
  screenHeight?: number;
  style?: React.CSSProperties;
}
export function LaptopFrame(props: LaptopFrameProps): JSX.Element;
