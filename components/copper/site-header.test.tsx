import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/components/copper/site-header";

vi.mock("@/components/copper/mode-toggle", () => ({
  ModeToggle: () => null,
}));

describe("SiteHeader", () => {
  it("has the site-header test id and links to each landing page section", () => {
    render(<SiteHeader />);
    expect(screen.getByTestId("site-header")).toBeTruthy();
    const nav = screen.getByRole("navigation", { name: "Main" });
    const hrefs = [...nav.querySelectorAll("a")].map((a) =>
      a.getAttribute("href"),
    );
    expect(hrefs).toEqual(["#products", "#plus", "#privacy"]);
  });
});
