"use client";

import { PageShell } from "@/components/site/PageShell";
import { useI18n, type Lang } from "@/lib/i18n";

type ProductNumber = 1 | 2 | 3 | 4 | 5;

const copy: Record<
  Lang,
  {
    eyebrow: string;
    title: (number: ProductNumber) => string;
    body: string;
    status: string;
  }
> = {
  en: {
    eyebrow: "Product page",
    title: (number) => `Product ${number}`,
    body: "This product page is ready for its final content and layout.",
    status: "Product layout will be added here",
  },
  de: {
    eyebrow: "Produktseite",
    title: (number) => `Produkt ${number}`,
    body: "Diese Produktseite ist bereit für die finalen Inhalte und das Layout.",
    status: "Das Produktlayout wird hier ergänzt",
  },
  ar: {
    eyebrow: "صفحة المنتج",
    title: (number) => `المنتج ${number}`,
    body: "هذه الصفحة جاهزة لإضافة المحتوى والتصميم النهائي للمنتج.",
    status: "سيتم إضافة تصميم المنتج هنا",
  },
};

export function ProductPlaceholderPage({ productNumber }: { productNumber: ProductNumber }) {
  const { lang } = useI18n();
  const content = copy[lang];
  const displayNumber = String(productNumber).padStart(2, "0");

  return (
    <PageShell
      eyebrow={content.eyebrow}
      title={content.title(productNumber)}
      body={content.body}
      heroVisual={
        <div className="relative grid aspect-[5/4] min-h-72 place-items-center overflow-hidden border border-border bg-primary shadow-luxe sm:aspect-[16/11]">
          <div
            aria-hidden="true"
            className="absolute -end-20 -top-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
          />
          <span className="relative font-display text-[8rem] leading-none text-primary-foreground/12 sm:text-[10rem]">
            {displayNumber}
          </span>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
        </div>
      }
    >
      <div className="grid min-h-72 place-items-center border border-dashed border-primary/20 bg-card px-6 text-center shadow-card">
        <div>
          <span className="mx-auto block h-2 w-2 rotate-45 bg-accent" />
          <p className="mt-6 text-xs tracking-[0.18em] uppercase text-muted-foreground rtl:text-sm rtl:tracking-normal rtl:normal-case">
            {content.status}
          </p>
        </div>
      </div>
    </PageShell>
  );
}
