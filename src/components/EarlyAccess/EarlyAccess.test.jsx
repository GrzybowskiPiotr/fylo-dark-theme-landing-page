import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { EarlyAccess } from "./EarlyAccess";

test("error message is not rendered initially", () => {
  render(<EarlyAccess />);

  const errorMessage = screen.queryByText("Error, please check your email");

  expect(errorMessage).not.toBeInTheDocument();
});

test("shows error message after invalid submit", async () => {
  render(<EarlyAccess />);

  const user = userEvent.setup();

  const submitButton = screen.getByRole("button", {
    name: "get started for free",
  });

  await user.click(submitButton);

  const errorMessage = screen.getByText("Error, please check your email");

  expect(errorMessage).toBeInTheDocument();
});

test("clear error message after user start typing email", async () => {
  render(<EarlyAccess />);
  const user = userEvent.setup();

  const submitButton = screen.getByRole("button", {
    name: "get started for free",
  });

  await user.click(submitButton);
  const errorMessage = screen.getByText("Error, please check your email");

  expect(errorMessage).toBeInTheDocument();

  const input = screen.getByLabelText("email");

  await user.type(input, "example@hotmail.com");

  expect(
    screen.queryByText("Error, please check your email"),
  ).not.toBeInTheDocument();
});
