"use client";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";

export function ServicesPage() {
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
