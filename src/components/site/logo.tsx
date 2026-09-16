import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-xl",
          inverted ? "bg-accent/20 text-accent" : "bg-primary text-primary-foreground",
        )}
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8h11a3 3 0 1 0-3-3" strokeLinecap="round" />
          <path d="M3 13h14a3 3 0 1 1-3 3" strokeLinecap="round" />
          <path d="M3 18h7" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-bold tracking-[0.16em] uppercase",
            inverted ? "text-primary-foreground" : "text-foreground",
          )}
        >
          {site.brand}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-medium tracking-[0.3em] uppercase",
            inverted ? "text-accent" : "text-muted-foreground",
          )}
        >
          {site.brandSuffix}
        </span>
      </span>
    </span>
  );
}
