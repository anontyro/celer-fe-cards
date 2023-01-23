import { useAtom } from "jotai";
import { currentDeckAtom } from "../../../../atoms/currentDeck";

import styles from "./CurrentDeck.module.scss";

const CurrentDeck: React.FC = () => {
  const [currentDeck] = useAtom(currentDeckAtom);

  if (currentDeck.length === 0) {
    return (
      <div className={styles.currentDeck}>
        <p>no deck</p>
      </div>
    );
  }

  return (
    <div className={styles.currentDeck}>
      <p>{`Current deck has ${currentDeck.length} cards`}</p>
    </div>
  );
};

export default CurrentDeck;
