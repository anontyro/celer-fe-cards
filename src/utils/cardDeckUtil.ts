import { CardDeck, CardSuite, CardValue } from "../types/CardDeck";

const makeCardText = (value: CardValue): string => {
  switch (value) {
    case 1:
      return "A";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return `${value}`;
  }
};

export const makeSuite = (suite: CardSuite): CardDeck =>
  Array.from({ length: 13 }, (_, i) => {
    const cardValue = (i + 1) as CardValue;
    return {
      value: cardValue,
      suite,
      text: makeCardText(cardValue),
    };
  });

export const makeDeck = (): CardDeck => {
  const suites: CardSuite[] = ["hearts", "diamonds", "spades", "clubs"];
  return suites.flatMap(makeSuite);
};
