"use client";

import { MessageCircle, Send } from "lucide-react";

import { useI18n } from "@/lib/i18n";

type SharePlatform = "whatsapp" | "telegram";
const SOCIAL_SHARE_VERSION = "20260827b";

export function ShareLinks() {
  const { t } = useI18n();

  const share = (platform: SharePlatform) => {
    const pageUrl = new URL(window.location.href);
    pageUrl.hash = "";
    pageUrl.searchParams.set("share", SOCIAL_SHARE_VERSION);

    const url = pageUrl.toString();
    const message = t("share.message");
    const shareUrl =
      platform === "whatsapp"
        ? `https://wa.me/?text=${encodeURIComponent(`${message}\n${url}`)}`
        : `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-w-0">
      <p className="text-[0.62rem] tracking-[0.22em] uppercase text-primary-foreground/60 rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case">
        {t("share.title")}
      </p>
      <div className="mt-2 flex gap-2 sm:mt-3 sm:flex-wrap sm:gap-3">
        <button
          type="button"
          onClick={() => share("whatsapp")}
          aria-label={t("share.whatsapp")}
          className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/55 text-[0.65rem] tracking-[0.14em] uppercase text-primary-foreground/85 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground sm:h-auto sm:w-auto sm:gap-2.5 sm:px-4 sm:py-2.5 rtl:text-xs rtl:tracking-normal rtl:normal-case"
        >
          <MessageCircle className="h-4 w-4 text-accent transition-colors group-hover:text-accent-foreground" />
          <span className="sr-only sm:not-sr-only">WhatsApp</span>
        </button>
        <button
          type="button"
          onClick={() => share("telegram")}
          aria-label={t("share.telegram")}
          className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/55 text-[0.65rem] tracking-[0.14em] uppercase text-primary-foreground/85 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground sm:h-auto sm:w-auto sm:gap-2.5 sm:px-4 sm:py-2.5 rtl:text-xs rtl:tracking-normal rtl:normal-case"
        >
          <Send className="h-4 w-4 text-accent transition-colors group-hover:text-accent-foreground" />
          <span className="sr-only sm:not-sr-only">Telegram</span>
        </button>
      </div>
    </div>
  );
}
