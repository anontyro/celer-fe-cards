import { useAtom } from "jotai";
import { currentUserCardsAtom } from "../../../../atoms/currentDeck";
import DeckCard from "../../../../components/DeckOfCards/components/DeckCard/DeckCard";

import styles from "./UsersCards.module.scss";

const UsersCards: React.FC = () => {
  const [userDeck] = useAtom(currentUserCardsAtom);

  return (
    <div className={styles.userCardContainer}>
      <div className={styles.userCardInfo}>
        <p>{`User has ${userDeck.length} cards`}</p>
      </div>
      <div className={styles.userCardsDisplay}>
        {userDeck.map((card) => (
          <DeckCard key={`${card.suit}-${card.text}`} card={card} />
        ))}
      </div>
    </div>
  );
};

export default UsersCards;
