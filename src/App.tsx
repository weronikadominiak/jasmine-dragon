import { useEffect, useState } from "react";

import Button from "./components/Button/Button";
import Logo from "./logo.svg";

import "./App.css";
import TextBox from "./components/TextBox/TextBox";
import Iroh from "./components/Iroh/Iroh";

const ADVICE_LIST = [
  "I think you should do it!",
  "That's a bad idea my dear",
  "I'm not sure about that",
  "Follow your dreams!",
  "Listen to your heart!",
  "Something that Iroh would say!",
];

const QUOTES_LIST = [
  "Perfection And Power Are Overrated. I Think You Are Very Wise To Choose Happiness And Love.",
  "There Is Nothing Wrong With A Life Of Peace And Prosperity. I Suggest You Think About What It Is That You Want From Your Life.",
  "While It Is Always Best To Believe In Oneself, A Little Help From Others Can Be A Great Blessing",
  "The Best Tea Tastes Delicious Whether It Comes In A Porcelain Pot Or A Tin Cup.",
  "Sharing Tea With A Fascinating Stranger Is One Of Life's True Delights.",
  "It's Time To Look Inward And Start Asking Yourself The Big Questions...Who Are You, And What Do You Want?",
  "Follow Your Passion And Life Will Reward You.",
  "Many Things That Seem Threatening In The Dark Become Welcoming When We Shine Light On Them.",
  "Pride Is Not The Opposite Of Shame, But It's Source...True Humility Is The Only Antidote To Shame.",
  "Even In The Material World, You Will Find That If You Look For The Light, You Can Often Find It...But If You Look For The Dark, That Is All You Will Ever See.",
  "At My Age, There Is Only One Big Suprise Left, And I'd Just As Soon Leave It A Mystery.",
  "It's Important To Draw Wisdom From Many Different Places...If We Take It From Only One Place It Becomes Rigid And Stale.",
  "Good Times Become Good Memories, But Bad Times Make Good Lessons.",
  "Failure Is Only The Opportunity To Begin Again.",
  "In The Darkest Times, Hope Is Something You Give Yourself...That Is The Meaning Of Inner Strength.",
];

function App() {
  const [advice, setAdvice] = useState(
    "Welcome to the Jasmine Dragon. How can I help you?"
  );
  const [speak, setSpeak] = useState(true);

  const getAdvice = (list: Array<string>) => {
    const randomIndex = getRandomInt(list.length - 1);
    setSpeak(false);
    setAdvice(list[randomIndex]);
  };

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    setSpeak(true);

    setTimeout(() => {
      setSpeak(false);
    }, 10000);
  }, [advice]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jasmine Dragon</h1>
        <div className="buttons">
          <Button
            text="Ask for advice!"
            onClick={() => getAdvice(ADVICE_LIST)}
          />
          <Button text="Listen" onClick={() => getAdvice(QUOTES_LIST)} />
        </div>
        <Iroh speak={speak} />

        <TextBox text={advice} />
      </header>
    </div>
  );
}

export default App;
