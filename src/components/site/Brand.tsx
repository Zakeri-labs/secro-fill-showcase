import { useI18n } from "@/lib/i18n";

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <path
        d="M13 26.5c1.6 1.2 3.6 1.9 5.8 1.9 3.6 0 6-1.7 6-4.2 0-2.4-1.9-3.5-5.6-4.4-3.4-.8-5-1.6-5-3.6 0-2.1 2-3.6 5.2-3.6 1.9 0 3.7.5 5.2 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandLock({ light = false }: { light?: boolean }) {
  const { t } = useI18n();
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <Monogram
        className={`h-9 w-9 shrink-0 ${light ? "text-accent" : "text-primary"}`}
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`truncate text-[0.95rem] tracking-[0.3em] ${
            light ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          SECRO-FILL
        </span>
        <span
          className={`mt-1 truncate text-[0.55rem] tracking-[0.22em] uppercase ${
            light ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {t("brand.tag")}
        </span>
      </span>
    </span>
  );
}
