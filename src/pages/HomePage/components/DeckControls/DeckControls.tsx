import { useAtom } from "jotai";
import {
  currentDeckAtom,
  currentUserCardsAtom,
} from "../../../../atoms/currentDeck";
import { informationAtom } from "../../../../atoms/informative";
import {
  makeDeck,
  putCardsBack,
  shuffleDeckTimes,
  sortDeck,
  takeNumberOfCardsAtRandom,
} from "../../../../utils/cardDeckUtil";

import styles from "./DeckControls.module.scss";

const DeckControls: React.FC = () => {
  const [currentDeck, setCurrentDeck] = useAtom(currentDeckAtom);
  const [userDeck, setUserDeck] = useAtom(currentUserCardsAtom);
  const [_, setInfo] = useAtom(informationAtom);
  const isDeckEmpty = currentDeck.length === 0;

  const resetDeck = () => {
    setCurrentDeck([]);
    setUserDeck([]);
  };

  const getDeck = () => {
    setCurrentDeck(makeDeck());
  };

  const sortCurrentDeck = () => {
    const sorted = sortDeck(currentDeck);
    setCurrentDeck(sorted);
  };

  const shuffleDeck = () => {
    const shuffledDeck = shuffleDeckTimes(currentDeck);
    setInfo({
      message: `deck was shuffled ${shuffledDeck.times} times`,
    });
    setCurrentDeck(shuffledDeck.deck);
  };

  const drawCard = () => {
    const drawn = takeNumberOfCardsAtRandom(currentDeck, 1);
    setCurrentDeck(drawn.deck);
    setUserDeck([...userDeck, drawn.cards[0]]);
  };

  const putCardBack = () => {
    const card = userDeck.pop();
    if (!card) {
      return;
    }

    const nextDeck = putCardsBack(currentDeck, card);
    setCurrentDeck(nextDeck);
    setUserDeck([...userDeck]);
  };

  return (
    <div className={styles.deckControls}>
      <button className={styles.deckMainBtn} onClick={resetDeck}>
        Clear Deck
      </button>
      <button className={styles.deckMainBtn} onClick={getDeck}>
        Get Deck
      </button>
      <button
        disabled={isDeckEmpty}
        className={styles.deckMainBtn}
        onClick={sortCurrentDeck}
      >
        Sort Deck
      </button>
      <button
        className={styles.deckMainBtn}
        disabled={isDeckEmpty}
        onClick={shuffleDeck}
      >
        Shuffle Deck
      </button>
      <button
        className={styles.deckMainBtn}
        disabled={isDeckEmpty}
        onClick={drawCard}
      >
        Draw Card
      </button>
      <button className={styles.deckMainBtn} onClick={putCardBack}>
        Put Card Back
      </button>
    </div>
  );
};

export default DeckControls;
