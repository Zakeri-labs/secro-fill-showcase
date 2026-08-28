"use client";

import { I18nProvider, useI18n } from "@/lib/i18n";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <I18nProvider>
          <GlobalErrorContent reset={reset} />
        </I18nProvider>
      </body>
    </html>
  );
}

function GlobalErrorContent({ reset }: { reset: () => void }) {
  const { t } = useI18n();

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">{t("error.title")}</h1>
        <p className="mt-2 text-sm text-gray-600">{t("error.global.body")}</p>
        <button className="mt-6 rounded-md bg-black px-4 py-2 text-sm text-white" onClick={reset}>
          {t("error.retry")}
        </button>
      </div>
    </main>
  );
}
