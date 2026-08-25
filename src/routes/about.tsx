import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SECRO-FILL — German Dermal Filler Manufacturer" },
      {
        name: "description",
        content:
          "SECRO-FILL combines German laboratory science and advanced manufacturing to deliver premium dermal fillers to clinics and distributors worldwide.",
      },
      { property: "og:title", content: "About SECRO-FILL" },
      {
        property: "og:description",
        content: "German scientific innovation and advanced manufacturing behind SECRO-FILL fillers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <PageShell
      eyebrow={t("about.eyebrow")}
      title={t("page.about.title")}
      body={t("page.about.body")}
    >
      <div className="mt-12 grid gap-8">
        {["c1", "c2", "c3"].map((c) => (
          <div key={c} className="card-luxe p-7">
            <h2 className="text-xl">{t(`about.${c}.title`)}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t(`about.${c}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
