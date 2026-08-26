"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileBottomNav } from "./MobileBottomNav";
import { useI18n } from "@/lib/i18n";

export function PageShell({
  eyebrow,
  title,
  body,
  heroVisual,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  heroVisual?: ReactNode;
  children?: ReactNode;
}) {
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main className="pb-24 sm:pb-28">
        <section className="relative overflow-hidden border-b border-border bg-secondary/45 px-5 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:px-10 lg:pt-40 lg:pb-24">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 end-0 hidden w-[34%] border-s border-border/70 bg-card/35 lg:block"
          />
          <div
            className={`relative mx-auto grid max-w-7xl items-center gap-10 lg:gap-16 ${
              heroVisual ? "lg:grid-cols-[minmax(0,0.92fr)_minmax(24rem,0.78fr)]" : ""
            }`}
          >
            <header className="max-w-2xl">
              <p className="eyebrow text-primary">{eyebrow}</p>
              <div className="hairline mt-4 w-14" />
              <h1 className="mt-6 text-4xl leading-[1.05] text-primary rtl:text-[2.5rem] sm:text-5xl sm:rtl:text-[3.25rem] lg:text-6xl lg:rtl:text-[4rem]">
                {title}
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-[1.8] text-muted-foreground rtl:text-[0.9375rem] sm:text-base sm:leading-[1.85] sm:rtl:text-[1.0625rem]">
                {body}
              </p>
            </header>
            {heroVisual && <div className="relative min-w-0">{heroVisual}</div>}
          </div>
        </section>

        <section className="px-5 pt-20 lg:px-10 lg:pt-28">
          <div className="mx-auto max-w-7xl">
            {children}
            <Link
              href="/"
              className="mt-16 inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.68rem] tracking-[0.2em] uppercase text-primary transition-colors hover:text-gold-deep rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case lg:mt-20"
            >
              <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
              {t("page.back")}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
