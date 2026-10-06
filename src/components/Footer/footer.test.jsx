import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import { Footer } from "./Footer.jsx";

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
test("social links open in a new tab securely", () => {
  render(<Footer />);

  const links = screen.getByRole("navigation", { name: "Social links" });
  const socialLinks = within(links).getAllByRole("link");
  socialLinks.forEach((link) => {
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
