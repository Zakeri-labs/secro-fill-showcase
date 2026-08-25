"use client";

import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/Logo.png";
import { COMPANY_ADDRESS, COMPANY_NAME, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-emerald-gradient px-5 pt-16 pb-28 text-primary-foreground lg:px-10 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src={logoImg}
              alt="SECRO-FILL logo"
              width={190}
              height={105}
              className="h-20 w-36 object-contain object-left brightness-0 invert"
            />
            <p className="mt-3 text-sm tracking-[0.14em] text-primary-foreground/85">
              {COMPANY_NAME}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              {t("footer.note")}
            </p>
            <div className="mt-5 grid gap-2 text-xs tracking-[0.12em] text-primary-foreground/75">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
              >
                {WHATSAPP_NUMBER}
              </a>
              <span>{COMPANY_ADDRESS}</span>
            </div>
          </div>
          <nav className="grid gap-3" aria-label="Footer">
            {[
              { to: "/about", key: "nav.about" },
              { to: "/services", key: "nav.services" },
              { to: "/contact", key: "nav.contact" },
            ].map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className="text-[0.7rem] tracking-[0.2em] uppercase text-primary-foreground/75 transition-colors hover:text-accent"
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hairline mt-12 opacity-40" />
        <p className="mt-6 text-[0.68rem] tracking-[0.18em] uppercase text-primary-foreground/55">
          © {new Date().getFullYear()} {COMPANY_NAME} — {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
