import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import HomePage from "./HomePage";

const currentDeckText = (count = 52) => `Current deck has ${count} cards`;
const currentUserText = (count = 0) => `User has ${count} cards`;

it("will correctly allow the user to move cards between the deck and their hand", () => {
  render(<HomePage />);

  const getDeckBtn = screen.getByRole("button", { name: "Get Deck" });
  const getShuffleDeckBtn = screen.getByRole("button", {
    name: "Shuffle Deck",
  });
  const getDrawCardBtn = screen.getByRole("button", { name: "Draw Card" });
  const getPutCardBackBtn = screen.getByRole("button", {
    name: "Put Card Back",
  });
  const getClearDeckBtn = screen.getByRole("button", { name: "Clear Deck" });

  act(() => {
    getDeckBtn.click();
  });

  expect(screen.getByText(currentDeckText())).toBeInTheDocument();
  expect(screen.getByText(currentUserText())).toBeInTheDocument();

  act(() => {
    getShuffleDeckBtn.click();
  });

  expect(screen.getByText("deck was shuffled 1 times")).toBeInTheDocument();

  act(() => {
    getDrawCardBtn.click();
  });

  expect(screen.getByText(currentDeckText(51))).toBeInTheDocument();
  expect(screen.getByText(currentUserText(1))).toBeInTheDocument();

  act(() => {
    getPutCardBackBtn.click();
  });

  expect(screen.getByText(currentDeckText())).toBeInTheDocument();
  expect(screen.getByText(currentUserText())).toBeInTheDocument();

  act(() => {
    getClearDeckBtn.click();
  });

  expect(screen.getByText("no deck")).toBeInTheDocument();
  expect(screen.getByText(currentUserText())).toBeInTheDocument();
});
