"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLock } from "./Brand";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

const links = [
  { key: "nav.home", href: "/#top" },
  { key: "nav.products", href: "/products" },
  { key: "nav.portfolio", href: "/#portfolio" },
  { key: "nav.testimonials", href: "/#testimonials" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/#contact" },
];

export function Header({ overlay = false }: { overlay?: boolean }) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(!overlay);
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  useEffect(() => {
    const onScroll = () => setMobileScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const glassMobileMenu = open || mobileScrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-500 sm:px-5 sm:pt-5 lg:px-8">
      <div className="flex items-start justify-between xl:hidden" dir="ltr">
        <Link
          href="/"
          className={`min-w-0 transition-[transform,opacity] duration-300 ease-out ${
            mobileScrolled
              ? "pointer-events-none -translate-y-6 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
          aria-label="SECRO-FILL home"
        >
          <BrandLock light={overlay && !mobileScrolled} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className={`shrink-0 rounded-full p-2 transition-[color,background-color,box-shadow] duration-300 ${
            glassMobileMenu
              ? "bg-background/85 text-foreground shadow-[0_12px_30px_-20px_var(--primary)] backdrop-blur-xl"
              : overlay
                ? "bg-transparent text-primary-foreground shadow-none"
                : "bg-transparent text-foreground shadow-none"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`mx-auto hidden max-w-[1480px] grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-4 rounded-[24px] border px-7 py-3.5 shadow-[0_18px_45px_-35px_var(--primary)] transition-all duration-500 xl:grid ${
          solid
            ? "border-border/80 bg-background backdrop-blur-xl"
            : "border-white/10 bg-white/[0.02] backdrop-blur-xl"
        }`}
      >
        <Link href="/" className="min-w-0" aria-label="SECRO-FILL home">
          <BrandLock light={!solid} />
        </Link>

        <div className="contents">
          <nav className="flex items-center justify-center gap-5" aria-label="Main">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className={`text-[0.68rem] tracking-[0.12em] uppercase transition-colors rtl:text-[0.8rem] rtl:tracking-[0.02em] rtl:normal-case ${
                  solid
                    ? "text-muted-foreground hover:text-primary"
                    : "text-primary-foreground/75 hover:text-primary-foreground"
                }`}
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          <div>
            <LanguageSwitcher light={!solid} />
          </div>

          <a
            href="/#contact"
            className="shrink-0 rounded-full bg-primary px-5 py-3 text-[0.68rem] tracking-[0.14em] uppercase text-white shadow-[0_10px_24px_-16px_var(--primary)] transition-transform hover:-translate-y-0.5 rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case"
          >
            <span>{t("cta.partner")}</span>
          </a>
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
