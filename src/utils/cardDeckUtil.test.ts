import { makeDeck, makeSuite } from "./cardDeckUtil";

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
