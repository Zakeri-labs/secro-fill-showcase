import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function InnerPageHero({
  eyebrow,
  title,
  body,
  visual,
}: {
  eyebrow: string;
  title: string;
  body: string;
  visual: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-secondary/40 px-5 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:px-10 lg:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 end-0 -z-10 hidden w-[38%] border-s border-border/70 bg-card/40 lg:block"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(27rem,0.9fr)] lg:gap-20">
        <header className="max-w-2xl animate-rise">
          <p className="eyebrow text-primary">{eyebrow}</p>
          <div className="hairline mt-4 w-14" />
          <h1 className="mt-7 text-[2.75rem] leading-[0.98] text-primary rtl:text-[2.75rem] sm:text-6xl sm:rtl:text-[3.5rem] lg:text-[4.75rem] lg:rtl:text-[4.5rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-[1.85] text-muted-foreground rtl:text-base sm:text-base sm:rtl:text-[1.0625rem]">
            {body}
          </p>
        </header>
        <div className="relative min-w-0 animate-rise [animation-delay:120ms]">{visual}</div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "start",
  className,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <header className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow text-primary">{eyebrow}</p>
      <div className={cn("hairline mt-4 w-14", align === "center" && "mx-auto")} />
      <h2 className="mt-6 text-3xl leading-[1.08] text-primary rtl:text-[2.125rem] sm:text-4xl sm:rtl:text-[2.625rem] lg:text-5xl lg:rtl:text-[3.25rem]">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-sm leading-[1.85] text-muted-foreground rtl:text-base sm:text-base sm:rtl:text-[1.0625rem]">
          {body}
        </p>
      )}
    </header>
  );
}

export function EditorialSplitSection({
  children,
  visual,
  reverse = false,
  muted = false,
  id,
}: {
  children: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 lg:px-10 lg:py-32", muted && "bg-secondary/45")}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={cn("min-w-0", reverse && "lg:order-2")}>{children}</div>
        <div className={cn("min-w-0", reverse && "lg:order-1")}>{visual}</div>
      </div>
    </section>
  );
}

export function CTASection({
  eyebrow,
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <section className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-primary px-7 py-14 text-primary-foreground shadow-luxe sm:px-12 sm:py-16 lg:px-20 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute -end-32 -top-40 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        />
        <div className="relative grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-3xl">
            <p className="eyebrow !text-accent">{eyebrow}</p>
            <div className="product-card-divider-gold divider-on-dark mt-4 w-14" />
            <h2 className="mt-6 text-3xl leading-[1.08] rtl:text-[2.125rem] sm:text-4xl sm:rtl:text-[2.625rem] lg:text-5xl lg:rtl:text-[3.25rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-[1.85] text-primary-foreground/75 rtl:text-base sm:text-base">
              {body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href={primaryHref}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 text-[0.68rem] tracking-[0.16em] uppercase text-primary transition-transform hover:-translate-y-0.5 rtl:text-sm rtl:tracking-normal rtl:normal-case"
            >
              {primaryLabel}
              <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary-foreground/35 px-7 text-[0.68rem] tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent rtl:text-sm rtl:tracking-normal rtl:normal-case"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
