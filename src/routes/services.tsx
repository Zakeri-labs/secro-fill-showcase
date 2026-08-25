import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Products — SECRO-FILL Dermal Fillers" },
      {
        name: "description",
        content:
          "Explore the SECRO-FILL filler range: DEEP 10ml, DEEP 3x3.2ml and BODY FILLER, plus training and supply services for professional partners.",
      },
      { property: "og:title", content: "Services & Products — SECRO-FILL" },
      {
        property: "og:description",
        content: "The SECRO-FILL dermal filler range and professional partner services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  return (
    <PageShell
      eyebrow={t("services.eyebrow")}
      title={t("page.services.title")}
      body={t("page.services.body")}
    >
      <div className="mt-12 grid gap-8">
        {["p1", "p2", "p3"].map((p) => (
          <div key={p} className="card-luxe p-7">
            <h2 className="text-xl">{t(`services.${p}.name`)}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t(`services.${p}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
