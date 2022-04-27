import { Stage } from "@inlet/react-pixi";

import IrohPixi from "./IrohPixi";

function IrohPixiWrapper() {
  return (
    <Stage
      width={640}
      height={540}
      options={{ backgroundAlpha: 0, antialias: true }}
    >
      <IrohPixi />
    </Stage>
  );
}

export default IrohPixiWrapper;
