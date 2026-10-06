import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Footer } from "../components/Footer/Footer.jsx";

test("contact details are present", () => {
  render(<Footer />);
  const mailtolink = screen.getByRole("link", { name: "example@fylo.com" });
  const phone = screen.getByRole("link", { name: "+1-543-123-4567" });

  expect(mailtolink).toHaveAttribute("href", "mailto:example@fylo.com");
  expect(phone).toHaveAttribute("href", "tel:+15431234567");
});

test("logo links to the page header", () => {
  render(<Footer />);
  const logoLink = screen.getByRole("link", { name: "Fylo" });
  expect(logoLink).toHaveAttribute("href", "#header");
});
