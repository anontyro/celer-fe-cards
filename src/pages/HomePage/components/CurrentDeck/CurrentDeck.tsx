import { useAtom } from "jotai";
import { currentDeckAtom } from "../../../../atoms/currentDeck";
import DeckCardBack from "../../../../components/DeckOfCards/components/DeckCardBack/DeckCardBack";

import styles from "./CurrentDeck.module.scss";

const CurrentDeck: React.FC = () => {
  const [currentDeck] = useAtom(currentDeckAtom);

  if (currentDeck.length === 0) {
    return (
      <div className={styles.currentDeckEmpty}>
        <p>no deck</p>
      </div>
    );
  }

  return (
    <div className={styles.currentDeck}>
      <div className={styles.currentDeckStack}>
        <DeckCardBack />
        <DeckCardBack />
        <DeckCardBack />
        <DeckCardBack />
      </div>
      <p>{`Current deck has ${currentDeck.length} cards`}</p>
    </div>
  );
};

export default CurrentDeck;
