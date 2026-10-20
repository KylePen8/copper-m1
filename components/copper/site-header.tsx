import Link from "next/link";
import { Logo } from "@/components/copper/logo";
import { ModeToggle } from "@/components/copper/mode-toggle";

export const NAV_LINKS = [
  { href: "#products", label: "Products" },
  { href: "#plus", label: "Copper Plus" },
  { href: "#privacy", label: "Privacy" },
] as const;

export function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="bg-background/90 sticky top-0 z-50 border-b backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 py-2 sm:flex-nowrap sm:py-3">
        <Link href="/" aria-label="Copper State Labs home">
          <Logo className="w-40 sm:w-44" />
        </Link>
        <nav
          aria-label="Main"
          className="order-last flex w-full items-center justify-center gap-6 pt-1 text-sm font-medium sm:order-none sm:ml-auto sm:w-auto sm:pt-0"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
