"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Sparkles } from "lucide-react";

import logoImg from "@/assets/Logo.png";
import { COMPANY_ADDRESS, COMPANY_NAME, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

const footerLinks = [
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative isolate overflow-hidden bg-[#002d27] px-5 pt-20 pb-24 text-primary-foreground lg:px-10 lg:pt-16 lg:pb-0">
      <div
        aria-hidden="true"
        className="absolute -top-56 -right-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald-200/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-64 left-[12%] -z-10 h-[26rem] w-[40rem] rounded-full bg-[#0e6b5b]/30 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-12 -z-10 font-display text-[20rem] leading-none text-emerald-100/[0.035]"
      >
        S
      </span>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.72fr)] lg:gap-16">
          <div className="max-w-xl">
            <Image
              src={logoImg}
              alt="SECRO-FILL logo"
              width={256}
              height={140}
              className="h-20 w-40 object-contain object-left brightness-0 invert sm:h-24 sm:w-44"
            />
            <p className="mt-2 text-[0.66rem] font-medium tracking-[0.22em] uppercase text-accent sm:text-xs sm:tracking-[0.3em]">
              {COMPANY_NAME}
            </p>

            <div aria-hidden="true" className="mt-6 h-px w-11 bg-accent" />
            <p className="mt-5 max-w-sm text-base leading-relaxed tracking-[0.04em] text-primary-foreground/80 sm:text-lg">
              {t("footer.note")}
            </p>

            <div className="mt-8 flex flex-col gap-4 text-[0.66rem] tracking-[0.18em] uppercase text-primary-foreground/80 sm:flex-row sm:items-center sm:gap-6 sm:text-xs sm:tracking-[0.22em]">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-3 transition-colors hover:text-accent"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-accent/65 text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-primary">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {WHATSAPP_NUMBER}
              </a>
              <span aria-hidden="true" className="hidden h-10 w-px bg-accent/45 sm:block" />
              <span className="inline-flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-accent/65 text-accent">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {COMPANY_ADDRESS}
              </span>
            </div>
          </div>

          <nav className="self-end" aria-label="Footer">
            <div className="border-y border-accent/30">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  className="group flex items-center justify-between gap-6 border-b border-accent/30 py-5 last:border-b-0 sm:py-6"
                >
                  <span className="flex items-center gap-4 text-sm tracking-[0.24em] uppercase text-primary-foreground/90 sm:text-base sm:tracking-[0.3em]">
                    <Sparkles className="h-3 w-3 shrink-0 text-accent" strokeWidth={1.5} />
                    {t(link.key)}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:rotate-90 rtl:group-hover:-translate-x-1" />
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="relative mt-12 border-t border-accent/65 lg:mt-16">
          <span
            aria-hidden="true"
            className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent shadow-[0_0_0_4px_#002d27]"
          />
          <div className="flex min-h-20 items-center justify-center gap-4 py-6 text-center text-[0.58rem] tracking-[0.16em] uppercase text-accent/90 sm:text-[0.68rem] sm:tracking-[0.26em]">
            <Sparkles
              aria-hidden="true"
              className="h-3 w-3 shrink-0 text-accent"
              strokeWidth={1.5}
            />
            <span>
              © {new Date().getFullYear()} {COMPANY_NAME} — {t("footer.rights")}
            </span>
            <Sparkles
              aria-hidden="true"
              className="h-3 w-3 shrink-0 text-accent"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
