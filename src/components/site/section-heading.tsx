import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  inverted = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  inverted?: boolean;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("eyebrow", inverted && "text-accent")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl font-bold sm:text-4xl",
          inverted ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            inverted ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
