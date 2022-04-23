import Button from "../Button/Button";
import { ADVICE_LIST, QUOTES_LIST } from "../../utils/constants";

import styles from "./Sidebar.module.scss";

type SidebarProps = {
  setSpeak: (value: boolean) => void;
  setAdvice: (value: string) => void;
  className: string;
};

function Sidebar({ setSpeak, setAdvice, className }: SidebarProps) {
  const getAdvice = (list: Array<string>) => {
    const randomIndex = getRandomInt(list.length - 1);
    setSpeak(false);
    setAdvice(list[randomIndex]);
  };

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div className={`${styles.sidebar} ${className}`}>
      <Button text="Ask for advice" onClick={() => getAdvice(ADVICE_LIST)} />
      <Button text="Listen" onClick={() => getAdvice(QUOTES_LIST)} />
    </div>
  );
}

export default Sidebar;
