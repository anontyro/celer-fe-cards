import classnames from "classnames";
import { Card, CardSuit } from "../../../../types/CardDeck";

import style from "./DeckCard.module.scss";

type SuitIconProps = {
  suit: CardSuit;
};

const SuitIcon: React.FC<SuitIconProps> = ({ suit }) => {
  switch (suit) {
    case "hearts":
      return (
        <span className={classnames(style.suitDefault, style.heart)}>
          &hearts;
        </span>
      );
    case "diamonds":
      return (
        <span className={classnames(style.suitDefault, style.diamond)}>
          &diams;
        </span>
      );
    case "spades":
      return (
        <span className={classnames(style.suitDefault, style.spade)}>
          &spades;
        </span>
      );
    case "clubs":
      return (
        <span className={classnames(style.suitDefault, style.club)}>
          &clubs;
        </span>
      );
  }
};

const isSuitRed = (suit: CardSuit) => {
  return suit === "hearts" || suit === "diamonds";
};

type DeckCardProps = {
  card: Card;
};

const DeckCard: React.FC<DeckCardProps> = ({ card }) => {
  const suitStyle = isSuitRed(card.suit) ? style.redSuit : style.blackSuit;
  return (
    <div className={style.cardContainer}>
      <div className={classnames(style.cardInnerContainer, suitStyle)}>
        <div>{card.text}</div>
        <div></div>
        <div>{card.text}</div>
        <div></div>
        <SuitIcon suit={card.suit} />
        <div></div>

        <div>{card.text}</div>
        <div></div>
        <div>{card.text}</div>
      </div>
    </div>
  );
};

export default DeckCard;
