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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
        <Link href="/" className="min-w-0" aria-label="SECRO-FILL home">
          <BrandLock light={!solid} />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className={`text-[0.7rem] tracking-[0.2em] uppercase transition-colors ${
                  solid
                    ? "text-muted-foreground hover:text-primary"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LanguageSwitcher light={!solid} />
          </div>

          <a
            href="/#contact"
            className="hidden shrink-0 border border-accent px-5 py-2.5 text-[0.68rem] tracking-[0.2em] uppercase transition-colors lg:inline-block"
            style={{ color: "inherit" }}
          >
            <span className={solid ? "text-primary" : "text-primary-foreground"}>
              {t("cta.partner")}
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className={`shrink-0 p-2 lg:hidden ${
              solid ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-rise border-t border-border/60 bg-background/95 px-5 pt-4 pb-8 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-4 text-sm tracking-[0.18em] uppercase text-foreground"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between gap-4">
            <LanguageSwitcher />
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="bg-primary px-5 py-3 text-[0.68rem] tracking-[0.2em] uppercase text-primary-foreground"
            >
              {t("cta.partner")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
