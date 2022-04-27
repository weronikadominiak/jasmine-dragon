import { useEffect, useState } from "react";

import TextBox from "../TextBox/TextBox";
import Iroh from "../Iroh/Iroh";
import IrohPixi from "../IrohPixi/IrohPixiWrapper.js";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./GameView.module.scss";
import { HELLO } from "../../utils/constants";

function GameView() {
  const [advice, setAdvice] = useState(HELLO);
  const [speak, setSpeak] = useState(true);

  useEffect(() => {
    setSpeak(true);

    setTimeout(() => {
      setSpeak(false);
    }, 10000);
  }, [advice]);

  return (
    <section className={styles.wrapper}>
      <Sidebar
        setAdvice={setAdvice}
        setSpeak={setSpeak}
        className={styles.sidebar}
      />
      {/* <Iroh speak={speak} className={styles.main} /> */}
      <div className={`${styles.main} ${styles.temporary}`}>
        <IrohPixi />
      </div>
      <TextBox text={advice} className={styles.text} />
    </section>
  );
}

export default GameView;
