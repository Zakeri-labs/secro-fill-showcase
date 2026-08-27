"use client";

import Image from "next/image";
import { MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";

import logoImg from "@/assets/Logo.png";
import qrCodeImg from "@/assets/QR-Code.svg";
import {
  COMPANY_ADDRESS,
  COMPANY_MAPS_URL,
  PHONE_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/lib/company";
import { useI18n } from "@/lib/i18n";

import { ShareLinks } from "./ShareLinks";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative isolate overflow-hidden bg-[#002d27] px-5 pt-12 pb-6 text-primary-foreground lg:px-10 lg:pt-10">
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
        className="pointer-events-none absolute -right-10 bottom-4 -z-10 font-display text-[14rem] leading-none text-emerald-100/[0.035]"
      >
        S
      </span>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="flex max-w-sm items-center gap-4">
            <Image
              src={logoImg}
              alt="SECRO-FILL logo"
              width={256}
              height={140}
              className="h-14 w-28 shrink-0 object-contain object-left brightness-0 invert sm:h-16 sm:w-32"
            />
            <span aria-hidden="true" className="h-10 w-px shrink-0 bg-accent/40" />
            <p className="text-sm leading-relaxed text-primary-foreground/75 rtl:text-[0.9375rem]">
              {t("footer.note")}
            </p>
          </div>

          <ul className="flex flex-col gap-1 text-sm text-primary-foreground/80 rtl:text-[0.9375rem]">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t("footer.contact.whatsapp")}
                className="group flex items-center gap-3 py-1 transition-colors hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                {WHATSAPP_NUMBER}
              </a>
            </li>
            <li>
              <a
                href={PHONE_URL}
                aria-label={t("footer.contact.phone")}
                className="group flex items-center gap-3 py-1 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                {WHATSAPP_NUMBER}
              </a>
            </li>
            <li>
              <a
                href={COMPANY_MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t("footer.contact.address")}
                className="group flex items-center gap-3 py-1 transition-colors hover:text-accent"
              >
                <MapPin className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                {COMPANY_ADDRESS}
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            <ShareLinks />
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white p-1.5 shadow-card sm:h-16 sm:w-16">
                <Image
                  src={qrCodeImg}
                  alt={t("footer.qr.alt")}
                  unoptimized
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-w-20 text-[0.6rem] leading-tight tracking-[0.16em] uppercase text-primary-foreground/60 rtl:text-[0.68rem] rtl:tracking-[0.02em] rtl:normal-case">
                {t("footer.qr.label")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 border-t border-accent/65">
          <span
            aria-hidden="true"
            className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent shadow-[0_0_0_4px_#002d27]"
          />
          <div className="flex min-h-0 items-center justify-center gap-3 py-4 text-center text-[0.58rem] tracking-[0.16em] uppercase text-accent/90 rtl:text-[0.68rem] rtl:tracking-[0.02em] rtl:normal-case sm:text-[0.65rem] sm:tracking-[0.22em]">
            <Sparkles
              aria-hidden="true"
              className="h-3 w-3 shrink-0 text-accent"
              strokeWidth={1.5}
            />
            <span>
              © {new Date().getFullYear()} SECRO-FILL — {t("footer.rights")}
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
