import Image from "next/image";

// Night Sky in light mode (foreground); the card color in dark mode, where
// foreground flips to Desert Sand. Either way the background is dark, so the
// footer always uses the light wordmark.
export function SiteFooter() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-foreground text-background dark:bg-card dark:text-card-foreground"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <Image
          src="/brand/logo-dark.png"
          alt="Copper State Labs"
          width={1200}
          height={197}
          className="h-auto w-48"
        />
        <p className="text-sm">Fictional — for educational use.</p>
      </div>
    </footer>
  );
}
