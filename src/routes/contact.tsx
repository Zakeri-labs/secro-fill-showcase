import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SECRO-FILL — Partnership & Distribution" },
      {
        name: "description",
        content:
          "Contact the SECRO-FILL partnership team for pricing, product documentation and territory availability for clinics, physicians and distributors.",
      },
      { property: "og:title", content: "Contact SECRO-FILL" },
      {
        property: "og:description",
        content: "Speak with the SECRO-FILL partnership team about distribution and clinic supply.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
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
        <a
          href="/#contact"
          className="inline-flex items-center border border-accent px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-primary"
        >
          {t("cta.partner")}
        </a>
      </div>
    </PageShell>
  );
}
