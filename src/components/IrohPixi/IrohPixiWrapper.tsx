import { Stage } from "@inlet/react-pixi";

import IrohPixi from "./IrohPixi";

type IrohPixiWrapperProps = {
  speak: boolean;
};

function IrohPixiWrapper({ speak }: IrohPixiWrapperProps) {
  return (
    <Stage
      width={640}
      height={540}
      options={{ backgroundAlpha: 0, antialias: true }}
    >
      <IrohPixi speak={speak} />
    </Stage>
  );
}

export default IrohPixiWrapper;
