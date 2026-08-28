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
    <footer className="relative isolate overflow-hidden bg-[#002d27] px-5 pt-8 pb-4 text-primary-foreground sm:pt-10 lg:px-10 lg:pt-10 lg:pb-6">
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
        <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-x-5 gap-y-6 sm:grid-cols-2 sm:gap-x-8 lg:flex lg:items-start lg:justify-between lg:gap-10">
          <div className="flex min-w-0 max-w-sm flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Image
              src={logoImg}
              alt={t("image.logo")}
              width={256}
              height={140}
              className="h-12 w-24 shrink-0 object-contain object-left brightness-0 invert sm:h-16 sm:w-32"
            />
            <span aria-hidden="true" className="hidden h-10 w-px shrink-0 bg-accent/40 sm:block" />
            <p className="text-xs leading-relaxed text-primary-foreground/70 sm:text-sm sm:text-primary-foreground/75 rtl:text-[0.8125rem] sm:rtl:text-[0.9375rem]">
              {t("footer.note")}
            </p>
          </div>

          <ul className="flex min-w-0 flex-col justify-center gap-1 text-xs text-primary-foreground/80 sm:text-sm rtl:text-[0.8125rem] sm:rtl:text-[0.9375rem]">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t("footer.contact.whatsapp")}
                className="group flex min-w-0 items-center gap-2 py-1 transition-colors hover:text-accent sm:gap-3"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                <span dir="ltr" className="truncate">
                  {WHATSAPP_NUMBER}
                </span>
              </a>
            </li>
            <li>
              <a
                href={PHONE_URL}
                aria-label={t("footer.contact.phone")}
                className="group flex min-w-0 items-center gap-2 py-1 transition-colors hover:text-accent sm:gap-3"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                <span dir="ltr" className="truncate">
                  {WHATSAPP_NUMBER}
                </span>
              </a>
            </li>
            <li>
              <a
                href={COMPANY_MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t("footer.contact.address")}
                className="group flex min-w-0 items-center gap-2 py-1 transition-colors hover:text-accent sm:gap-3"
              >
                <MapPin className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                <span dir="ltr" className="truncate">
                  {COMPANY_ADDRESS}
                </span>
              </a>
            </li>
          </ul>

          <div className="col-span-2 flex items-end justify-between gap-4 border-t border-primary-foreground/10 pt-5 sm:gap-5 lg:border-0 lg:pt-0">
            <ShareLinks />
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white p-1.5 shadow-card sm:h-16 sm:w-16 sm:rounded-xl">
                <Image
                  src={qrCodeImg}
                  alt={t("footer.qr.alt")}
                  unoptimized
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="hidden max-w-20 text-[0.6rem] leading-tight tracking-[0.16em] uppercase text-primary-foreground/60 min-[370px]:block rtl:text-[0.68rem] rtl:tracking-[0.02em] rtl:normal-case">
                {t("footer.qr.label")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-6 border-t border-accent/65 lg:mt-8">
          <span
            aria-hidden="true"
            className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent shadow-[0_0_0_4px_#002d27]"
          />
          <div className="flex min-h-0 items-center justify-center gap-2 py-3 text-center text-[0.55rem] tracking-[0.12em] uppercase text-accent/90 rtl:text-[0.65rem] rtl:tracking-[0.02em] rtl:normal-case sm:gap-3 sm:py-4 sm:text-[0.65rem] sm:tracking-[0.22em]">
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
