import { Card } from "../../types/CardDeck";

export const mockCard = (overrids: Partial<Card> = {}): Card => ({
  value: 1,
  suit: "hearts",
  text: "1",
  ...overrids,
});
