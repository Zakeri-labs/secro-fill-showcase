"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";

export function ContactPage() {
  const { t } = useI18n();
  return (
    <PageShell
      eyebrow={t("contact.eyebrow")}
      title={t("page.contact.title")}
      body={t("page.contact.body")}
    >
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="https://wa.me/49000000000"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" />
          {t("cta.whatsapp")}
        </a>
        <Link
          href="/#contact"
          className="inline-flex items-center border border-accent px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-primary"
        >
          {t("cta.partner")}
        </Link>
      </div>
    </PageShell>
  );
}
