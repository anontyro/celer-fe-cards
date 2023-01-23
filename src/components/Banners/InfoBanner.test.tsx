import { render, screen } from "@testing-library/react";
import InfoBanner from "./InfoBanner";

it("will correctly render the information banner", () => {
  render(<InfoBanner />);
  expect(screen.getByTestId("info-banner")).toBeInTheDocument();
  expect(screen.queryByRole("heading")).not.toBeInTheDocument();
});

it("will  display a message when one is given", () => {
  const message = "This is a test message";
  render(<InfoBanner message={message} />);

  expect(screen.getByRole("heading", { name: message })).toBeInTheDocument();
});
