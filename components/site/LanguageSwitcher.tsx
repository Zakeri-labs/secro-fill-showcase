"use client";

import { LANGS, useI18n } from "@/lib/i18n";

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={`flex items-center gap-1 rounded-full border px-1 py-1 ${
        light ? "border-primary-foreground/25" : "border-border"
      }`}
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-[0.65rem] tracking-[0.15em] transition-colors ${
              active
                ? "bg-accent text-accent-foreground"
                : light
                  ? "text-primary-foreground/75 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l.short}
          </button>
        );
      })}
    </div>
  );
}
