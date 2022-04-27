import { useEffect } from "react";
import { useApp } from "@inlet/react-pixi";
import { Spine } from "pixi-spine";

// TODO
type IrohPixiProps = {
  speak: boolean;
};

function IrohPixi({ speak }: IrohPixiProps) {
  const app = useApp();
  const spineLoaderOptions = { metadata: { spineSkeletonScale: 1 } };

  useEffect(() => {
    if (!app.loader.resources.iroh) {
      app.loader
        .add("iroh", "./assets/iroh.json", spineLoaderOptions)
        .load(onAssetsLoaded);
    }

    app.stage.interactive = true;
    app.stage.buttonMode = true;
  }, []);

  function onAssetsLoaded(loader, res) {
    const iroh = new Spine(res.iroh.spineData);

    // set the position
    iroh.x = 320;
    iroh.y = 450;

    iroh.scale.set(1);

    iroh.state.setAnimation(1, "head", true);
    iroh.state.setAnimation(2, "smile", false);

    // play animation
    iroh.state.setAnimation(0, "idle", true);
    let currentAnimation = "idle";

    app.stage.on("pointertap", () => {
      let newAnimation = currentAnimation === "idle" ? "wiggle" : "idle";
      currentAnimation = newAnimation;
      iroh.state.setAnimation(0, newAnimation, true);
    });

    app.stage.addChild(iroh);
  }

  return <></>;
}

export default IrohPixi;
