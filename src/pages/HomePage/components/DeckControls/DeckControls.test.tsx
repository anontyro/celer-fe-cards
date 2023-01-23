import { act, render, screen } from "@testing-library/react";
import { Provider } from "jotai";
import { currentDeckAtom } from "../../../../atoms/currentDeck";
import { mockCard } from "../../../../testing/mocks/mockCard";
import DeckControls from "./DeckControls";

it("will correctly render the deck controls", () => {
  render(
    <Provider initialValues={[[currentDeckAtom, []] as any]}>
      <DeckControls />
    </Provider>
  );

  const shuffleDeckBtn = screen.getByRole("button", { name: "Shuffle Deck" });
  const drawCardBtn = screen.getByRole("button", { name: "Draw Card" });

  expect(
    screen.getByRole("button", { name: "Clear Deck" })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Get Deck" })).toBeInTheDocument();
  expect(shuffleDeckBtn).toBeInTheDocument();
  expect(shuffleDeckBtn).toBeDisabled();
  expect(drawCardBtn).toBeInTheDocument();
  expect(drawCardBtn).toBeDisabled();
  expect(
    screen.getByRole("button", { name: "Put Card Back" })
  ).toBeInTheDocument();
});

it("will correctly enable the buttons when a deck is gotten", () => {
  render(
    <Provider initialValues={[[currentDeckAtom, []] as any]}>
      <DeckControls />
    </Provider>
  );

  const shuffleDeckBtn = screen.getByRole("button", { name: "Shuffle Deck" });
  const drawCardBtn = screen.getByRole("button", { name: "Draw Card" });

  expect(shuffleDeckBtn).toBeDisabled();
  expect(drawCardBtn).toBeDisabled();

  const getDeckBtn = screen.getByRole("button", { name: "Get Deck" });
  act(() => {
    getDeckBtn.click();
  });

  expect(shuffleDeckBtn).not.toBeDisabled();
  expect(drawCardBtn).not.toBeDisabled();
});

it("will correctly allow user to remove and add cards", () => {
  const card = mockCard();

  render(
    <Provider initialValues={[[currentDeckAtom, [card]] as any]}>
      <DeckControls />
    </Provider>
  );

  expect(
    screen.getByRole("button", { name: "Shuffle Deck" })
  ).not.toBeDisabled();

  const drawCardBtn = screen.getByRole("button", { name: "Draw Card" });
  act(() => {
    drawCardBtn.click();
  });

  expect(screen.getByRole("button", { name: "Shuffle Deck" })).toBeDisabled();

  const putCardBackBtn = screen.getByRole("button", { name: "Put Card Back" });
  act(() => {
    putCardBackBtn.click();
  });

  expect(
    screen.getByRole("button", { name: "Shuffle Deck" })
  ).not.toBeDisabled();
});

it("will clear the deck when button is pressed", () => {
  const card = mockCard();

  render(
    <Provider initialValues={[[currentDeckAtom, [card]] as any]}>
      <DeckControls />
    </Provider>
  );

  const clearDeckBtn = screen.getByRole("button", { name: "Clear Deck" });
  act(() => {
    clearDeckBtn.click();
  });

  expect(screen.getByRole("button", { name: "Shuffle Deck" })).toBeDisabled();
  expect(screen.getByRole("button", { name: "Draw Card" })).toBeDisabled();
});
