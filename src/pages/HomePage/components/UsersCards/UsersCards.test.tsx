import { render, screen } from "@testing-library/react";
import { Provider } from "jotai";
import { currentUserCardsAtom } from "../../../../atoms/currentDeck";
import { mockCard } from "../../../../testing/mocks/mockCard";
import UsersCards from "./UsersCards";

it("will show user has no cards when user cards are empty", () => {
  render(
    <Provider initialValues={[[currentUserCardsAtom, []] as any]}>
      <UsersCards />
    </Provider>
  );

  expect(screen.getByText("User has 0 cards")).toBeInTheDocument();
});

it("will correctly render the cards out when the user has a card", () => {
  const card = mockCard();

  render(
    <Provider initialValues={[[currentUserCardsAtom, [card]] as any]}>
      <UsersCards />
    </Provider>
  );

  const cardsRender = screen.getByTestId("deck-card-container");

  expect(screen.getByText("User has 1 cards")).toBeInTheDocument();
  expect(cardsRender).toBeInTheDocument();
});
