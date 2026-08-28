"use client";

import { Instagram, MessageCircle, Send } from "lucide-react";

import { INSTAGRAM_URL, TELEGRAM_URL, WHATSAPP_URL } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

export function ShareLinks() {
  const { t } = useI18n();

  return (
    <div className="min-w-0">
      <p className="text-[0.62rem] tracking-[0.22em] uppercase text-primary-foreground/60 rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case">
        {t("share.title")}
      </p>
      <div className="mt-2 flex gap-2 sm:mt-3 sm:flex-wrap sm:gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={t("share.whatsapp")}
          className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/55 text-[0.65rem] tracking-[0.14em] uppercase text-primary-foreground/85 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground sm:h-auto sm:w-auto sm:gap-2.5 sm:px-4 sm:py-2.5 rtl:text-xs rtl:tracking-normal rtl:normal-case"
        >
          <MessageCircle className="h-4 w-4 text-accent transition-colors group-hover:text-accent-foreground" />
          <span className="sr-only sm:not-sr-only">{t("social.whatsapp")}</span>
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={t("share.telegram")}
          className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/55 text-[0.65rem] tracking-[0.14em] uppercase text-primary-foreground/85 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground sm:h-auto sm:w-auto sm:gap-2.5 sm:px-4 sm:py-2.5 rtl:text-xs rtl:tracking-normal rtl:normal-case"
        >
          <Send className="h-4 w-4 text-accent transition-colors group-hover:text-accent-foreground" />
          <span className="sr-only sm:not-sr-only">{t("social.telegram")}</span>
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={t("share.instagram")}
          className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/55 text-[0.65rem] tracking-[0.14em] uppercase text-primary-foreground/85 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground sm:h-auto sm:w-auto sm:gap-2.5 sm:px-4 sm:py-2.5 rtl:text-xs rtl:tracking-normal rtl:normal-case"
        >
          <Instagram className="h-4 w-4 text-accent transition-colors group-hover:text-accent-foreground" />
          <span className="sr-only sm:not-sr-only">{t("social.instagram")}</span>
        </a>
      </div>
    </div>
  );
}
