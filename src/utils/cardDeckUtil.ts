import { Card, CardDeck, CardSuit, CardValue } from "../types/CardDeck";

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

export const makeSuit = (suit: CardSuit): CardDeck =>
  Array.from({ length: 13 }, (_, i) => {
    const cardValue = (i + 1) as CardValue;
    return {
      value: cardValue,
      suit,
      text: makeCardText(cardValue),
    };
  });

/**
 * function to create a standard deck of 52 cards
 * @returns a deck of 52 cards
 */
export const makeDeck = (): CardDeck => {
  const suits: CardSuit[] = ["hearts", "diamonds", "spades", "clubs"];
  return suits.flatMap(makeSuit);
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

type TakeACard = {
  deck: CardDeck;
  card: Card;
};

const takeCardAtRandom = (deck: CardDeck): TakeACard => {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  const newDeck = deck.filter((_, index) => index !== randomIndex);

  return {
    deck: newDeck,
    card,
  };
};

type TakeManyCards = {
  deck: CardDeck;
  cards: Card[];
};

/**
 * function to take a number of cards at random from a deck between 1 and the length of the deck
 * @param deck the CardDeck object
 * @param numberOfCards number of cards to take, defaults to 1
 * @returns
 */
export const takeNumberOfCardsAtRandom = (
  deck: CardDeck,
  numberOfCards: number = 1
): TakeManyCards => {
  let newDeck = deck;
  let cards: Card[] = [];
  let numberToTake = numberOfCards;

  if (numberOfCards < 1) {
    numberToTake = 1;
  }
  if (numberOfCards > deck.length) {
    numberToTake = deck.length;
  }

  for (let i = 0; i < numberToTake; i++) {
    const { deck: nextDeck, card } = takeCardAtRandom(newDeck);
    newDeck = nextDeck;
    cards = [...cards, card];
  }
  return {
    deck: newDeck,
    cards,
  };
};

/**
 * function to put a card back into a deck and shuffle it
 * @param deck the CardDeck object
 * @param cards Card objects to be put back into the deck
 * @returns new shuffled deck
 */
export const putCardsBack = (deck: CardDeck, ...cards: Card[]): CardDeck => {
  const newDeck = [...deck, ...cards];
  const shuffledDeck = shuffleDeck(newDeck);

  return shuffledDeck;
};
