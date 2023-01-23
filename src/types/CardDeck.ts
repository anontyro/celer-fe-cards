export type CardSuit = "hearts" | "diamonds" | "spades" | "clubs";

export type CardValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type Card = {
  value: CardValue;
  suit: CardSuit;
  text: string;
};

export type CardDeck = Card[];
