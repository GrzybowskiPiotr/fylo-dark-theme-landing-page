import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Team } from "./Team";

test("renders all team member cards", () => {
  render(<Team />);

  const cards = screen.getAllByRole("article");
  expect(cards).toHaveLength(3);
});
