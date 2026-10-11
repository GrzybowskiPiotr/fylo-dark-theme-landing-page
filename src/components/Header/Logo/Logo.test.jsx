import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Logo } from "./Logo";
test("...", () => {
  render(<Logo />);
  const logoLink = screen.getByRole("link", { name: "home link" });
  expect(logoLink).toHaveAttribute("href", "/");
});
