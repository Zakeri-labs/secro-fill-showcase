"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLock } from "./Brand";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

const links = [
  { key: "nav.home", href: "/#top" },
  { key: "nav.about", href: "/#about" },
  { key: "nav.services", href: "/#services" },
  { key: "nav.portfolio", href: "/#portfolio" },
  { key: "nav.testimonials", href: "/#testimonials" },
  { key: "nav.contact", href: "/#contact" },
];

export function Header({ overlay = false }: { overlay?: boolean }) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(!overlay);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-500 sm:px-5 sm:pt-5 lg:px-8">
      <div
        className={`mx-auto grid max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-[24px] border px-4 py-3.5 shadow-[0_18px_45px_-35px_var(--primary)] transition-all duration-500 sm:px-5 xl:grid-cols-[auto_minmax(0,1fr)_auto_auto] xl:px-7 ${
          solid
            ? "border-border/80 bg-background backdrop-blur-xl"
            : "border-white/10 bg-white/[0.02] backdrop-blur-xl"
        }`}
      >
        <Link href="/" className="min-w-0" aria-label="SECRO-FILL home">
          <BrandLock light={false} />
        </Link>

        <div className="flex items-center justify-end gap-4 xl:contents">
          <nav className="hidden items-center justify-center gap-6 xl:flex" aria-label="Main">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className={`text-[0.68rem] tracking-[0.12em] uppercase transition-colors rtl:text-[0.8rem] rtl:tracking-[0.02em] rtl:normal-case ${
                  solid
                    ? "text-muted-foreground hover:text-primary"
                    : "text-primary/80 hover:text-primary"
                }`}
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          <div className="hidden xl:block">
            <LanguageSwitcher light={false} />
          </div>

          <a
            href="/#contact"
            className="hidden shrink-0 rounded-full bg-primary px-5 py-3 text-[0.68rem] tracking-[0.14em] uppercase text-white shadow-[0_10px_24px_-16px_var(--primary)] transition-transform hover:-translate-y-0.5 rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case xl:inline-block"
          >
            <span>{t("cta.partner")}</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className={`shrink-0 p-2 xl:hidden ${"text-foreground"}`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-rise mt-2 rounded-[22px] border border-border/60 bg-secondary/95 px-4 pt-2 pb-4 shadow-[0_18px_45px_-35px_var(--primary)] backdrop-blur-xl xl:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/45 py-3 text-[0.68rem] tracking-[0.12em] uppercase text-foreground transition-colors rtl:text-[0.8rem] rtl:tracking-[0.02em] rtl:normal-case"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LanguageSwitcher />
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 py-3 text-[0.68rem] tracking-[0.14em] uppercase text-white rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case"
            >
              {t("cta.partner")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
