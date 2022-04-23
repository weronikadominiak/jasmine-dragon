import { useEffect, useState } from "react";

import styles from "./TextBox.module.scss";

type TextBoxProps = {
  text: string;
};

function TextBox({ text }: TextBoxProps) {
  const [textPrinted, setTextPrinted] = useState("");

  useEffect(() => {
    setTextPrinted("");
  }, [text]);

  useEffect(() => {
    let timer = setTimeout(() => {});
    if (text.length !== textPrinted.length) {
      timer = setTimeout(() => {
        setTextPrinted(textPrinted + text.charAt(textPrinted.length));
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [textPrinted]);

  return (
    <div className={styles.wrapper}>
      <p>
        <strong>Iroh: </strong>
        {textPrinted} <span className={styles.tick} />
      </p>
    </div>
  );
}

export default TextBox;
