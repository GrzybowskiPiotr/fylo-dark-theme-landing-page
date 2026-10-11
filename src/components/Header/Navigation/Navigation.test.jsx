import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import { Navigation } from "./Navigation";

test("navigation links point to correct sections",()=> {
render(<Navigation/>);

const navigation = screen.getByRole("navigation");
const featuresLink = within(navigation).getByRole("link", {name: "Features"});
const teamLink = within(navigation).getByRole("link", {name: "Team"})
const signinLink = within(navigation).getByRole("link", {name: "Sign In"})
expect(featuresLink).toHaveAttribute("href", "#features");
expect(teamLink).toHaveAttribute("href", "#team");
expect(signinLink).toHaveAttribute("href", "#signin");

})