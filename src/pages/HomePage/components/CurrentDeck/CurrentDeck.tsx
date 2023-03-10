import { useAtom } from "jotai";
import {
  currentDeckAtom,
  currentUserCardsAtom,
} from "../../../../atoms/currentDeck";
import DeckCardBack from "../../../../components/DeckOfCards/components/DeckCardBack/DeckCardBack";
import { takeTopCard } from "../../../../utils/cardDeckUtil";

import styles from "./CurrentDeck.module.scss";

const CurrentDeck: React.FC = () => {
  const [currentDeck, setCurrentDeck] = useAtom(currentDeckAtom);
  const [userDeck, setUserDeck] = useAtom(currentUserCardsAtom);

  const takeCurrentTopCard = () => {
    const takenValues = takeTopCard(currentDeck);

    setUserDeck([...userDeck, takenValues.card]);
    setCurrentDeck(takenValues.deck);
  };

  if (currentDeck.length === 0) {
    return (
      <div className={styles.currentDeckEmpty}>
        <p>no deck</p>
      </div>
    );
  }

  return (
    <div data-testid="current-deck" className={styles.currentDeck}>
      <div className={styles.currentDeckStack}>
        <DeckCardBack />
        <DeckCardBack />
        <DeckCardBack />
        <DeckCardBack onClick={takeCurrentTopCard} />
      </div>
      <p>{`Current deck has ${currentDeck.length} cards`}</p>
    </div>
  );
};

export default CurrentDeck;
