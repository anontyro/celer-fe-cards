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

/**
 * function to create a standard deck of 52 cards
 * @returns a deck of 52 cards
 */
export const makeDeck = (): CardDeck => {
  const suites: CardSuite[] = ["hearts", "diamonds", "spades", "clubs"];
  return suites.flatMap(makeSuite);
};

const shuffleDeck = (deck: CardDeck): CardDeck => {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
};

type ShuffledDeck = {
  deck: CardDeck;
  times: number;
};

/**
 * function to shuffle a deck of cards between 1 and 100 times
 * @param deck  the CardDeck object to be shuffled
 * @param times optional value between 1 and 100, defaults to 1
 * @returns the shuffled deck
 */
export const shuffleDeckTimes = (
  deck: CardDeck,
  times: number = 1
): ShuffledDeck => {
  let timesToShuffle = times;
  if (times < 1) {
    timesToShuffle = 1;
  }
  if (times > 100) {
    timesToShuffle = 100;
  }
  let shuffledDeck = deck;
  for (let i = 0; i < timesToShuffle; i++) {
    shuffledDeck = shuffleDeck(shuffledDeck);
  }
  return {
    deck: shuffledDeck,
    times: timesToShuffle,
  };
};
