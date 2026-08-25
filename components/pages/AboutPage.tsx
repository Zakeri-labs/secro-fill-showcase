"use client";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";

export function AboutPage() {
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
