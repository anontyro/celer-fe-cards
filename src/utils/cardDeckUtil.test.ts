import {
  makeDeck,
  makeSuite,
  putCardsBack,
  shuffleDeckTimes,
  takeNumberOfCardsAtRandom,
} from "./cardDeckUtil";

describe("makeSuite", () => {
  it("should return a deck with 13 cards", () => {
    expect(makeSuite("hearts")).toHaveLength(13);
  });

  it("should return a deck with the correct suite", () => {
    expect(makeSuite("hearts")).toEqual(
      expect.arrayContaining([expect.objectContaining({ suite: "hearts" })])
    );
  });

  it("special cards should return the correct text", () => {
    const hearts = makeSuite("hearts");

    expect(hearts[0].text).toBe("A");
    expect(hearts[10].text).toBe("J");
    expect(hearts[11].text).toBe("Q");
    expect(hearts[12].text).toBe("K");
  });
});

describe("makeDeck", () => {
  it("should create a deck of 52 cards", () => {
    expect(makeDeck()).toHaveLength(52);
  });
  it("should have all the suites", () => {
    const deck = makeDeck();

    expect(deck).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ suite: "hearts" }),
        expect.objectContaining({ suite: "diamonds" }),
        expect.objectContaining({ suite: "spades" }),
        expect.objectContaining({ suite: "clubs" }),
      ])
    );
  });
});

describe("shuffleDeck", () => {
  it("should shuffle the deck", () => {
    const deck = makeDeck();
    const shuffledDeck = shuffleDeckTimes(deck);

    expect(shuffledDeck.deck).not.toEqual(deck);
  });

  it("should shuffle the deck if zero is passed in", () => {
    const deck = makeDeck();
    const shuffledDeck = shuffleDeckTimes(deck, 0);

    expect(shuffledDeck.deck).not.toEqual(deck);
    expect(shuffledDeck.times).toBe(1);
  });
  it("should shuffle the deck if a negative number is passed in", () => {
    const deck = makeDeck();
    const shuffledDeck = shuffleDeckTimes(deck, -1);

    expect(shuffledDeck.deck).not.toEqual(deck);
    expect(shuffledDeck.times).toBe(1);
  });
  it("should shuffle a maximum of 100 times", () => {
    const deck = makeDeck();
    const shuffledDeck = shuffleDeckTimes(deck, 101);

    expect(shuffledDeck.deck).not.toEqual(deck);
    expect(shuffledDeck.times).toBe(100);
  });
});

describe("takeNumberOfCardsAtRandom", () => {
  it("should correctly remove a card from the deck", () => {
    const deck = makeDeck();

    const output = takeNumberOfCardsAtRandom(deck, 1);

    expect(output.deck).toHaveLength(51);
    expect(output.deck).not.toEqual(deck);
    expect(output.cards).toHaveLength(1);
    expect(output.deck.findIndex((c) => c === output.cards[0])).toBe(-1);
  });

  it("should always remove one card if negative number is passed in", () => {
    const deck = makeDeck();

    const output = takeNumberOfCardsAtRandom(deck, -1);

    expect(output.deck).toHaveLength(51);
    expect(output.cards).toHaveLength(1);
  });

  it("should only remove all the cards in the deck is higher number than deck size is given", () => {
    const deck = makeDeck();

    const output = takeNumberOfCardsAtRandom(deck, 53);

    expect(output.deck).toHaveLength(0);
    expect(output.cards).toHaveLength(52);
  });
});

describe("putCardsBack", () => {
  it("should put the cards back in the deck", () => {
    const deck = makeDeck();
    const { deck: deckWithCardsRemoved, cards } = takeNumberOfCardsAtRandom(
      deck,
      1
    );

    const output = putCardsBack(deckWithCardsRemoved, ...cards);

    expect(output).toHaveLength(52);
  });
});
