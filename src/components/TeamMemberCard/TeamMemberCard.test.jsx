import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { TeamMemberCard } from "./TeamMemberCard";

test("renders team member details", () => {
  render(
    <TeamMemberCard
      personName="John Doe"
      personTitle="Developer"
      text="Some description"
      img="/test-avatar.jpg"
      imgAlt="John Doe"
    />,
  );

  const image = screen.getByRole("img", { name: "John Doe" });

  expect(image).toHaveAttribute("src", "/test-avatar.jpg");
  expect(image).toHaveAttribute("alt", "John Doe");
  expect(screen.getByText("Some description")).toBeInTheDocument();
  expect(screen.getByText("Developer")).toBeInTheDocument();
  expect(screen.getByText("John Doe")).toBeInTheDocument();
});
