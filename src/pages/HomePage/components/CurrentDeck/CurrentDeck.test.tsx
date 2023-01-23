import { render, screen } from "@testing-library/react";
import { Provider } from "jotai";
import { makeDeck } from "../../../../utils/cardDeckUtil";
import CurrentDeck from "./CurrentDeck";
import { currentDeckAtom } from "../../../../atoms/currentDeck";

it("will correctly render no deck when deck is empty", () => {
  render(<CurrentDeck />);

  expect(screen.getByText("no deck")).toBeInTheDocument();
});

it("will correctly render the current deck data", () => {
  const mockDeck = makeDeck();

  render(
    <Provider initialValues={[[currentDeckAtom, mockDeck] as any]}>
      <CurrentDeck />
    </Provider>
  );

  const currentDeck = screen.getByTestId("current-deck");

  expect(currentDeck).toBeInTheDocument();
  expect(
    screen.getByText(`Current deck has ${mockDeck.length} cards`)
  ).toBeInTheDocument();
});
