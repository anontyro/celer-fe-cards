import { useAtom } from "jotai";
import { currentUserCardsAtom } from "../../../../atoms/currentDeck";

import styles from "./UsersCards.module.scss";

const UsersCards: React.FC = () => {
  const [userDeck] = useAtom(currentUserCardsAtom);

  return (
    <div className={styles.usersCards}>
      <p>{`User has ${userDeck.length} cards`}</p>
    </div>
  );
};

export default UsersCards;
