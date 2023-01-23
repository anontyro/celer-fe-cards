import { render, screen, within } from "@testing-library/react";
import { mockCard } from "../../../../testing/mocks/mockCard";
import DeckCard from "./DeckCard";

it("will correctly render a red card", () => {
  const card = mockCard();
  render(<DeckCard card={card} />);

  const renderedCard = screen.getByTestId("deck-card-container");

  expect(renderedCard).toBeInTheDocument();
  const numbers = within(renderedCard).getAllByText(card.text);
  const suit = within(renderedCard).getByText("♥");
  expect(numbers.length).toBe(4);
  expect(suit).toBeInTheDocument();
});

it("will correctly render a black card", () => {
  const card = mockCard({ suit: "clubs", value: 11, text: "J" });
  render(<DeckCard card={card} />);

  const renderedCard = screen.getByTestId("deck-card-container");

  expect(renderedCard).toBeInTheDocument();
  const numbers = within(renderedCard).getAllByText(card.text);
  const suit = within(renderedCard).getByText("♣");
  expect(numbers.length).toBe(4);
  expect(suit).toBeInTheDocument();
});
