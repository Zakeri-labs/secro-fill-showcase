"use client";

import Image from "next/image";

import bodyImg from "@/assets/product-body.jpg";
import deep10Img from "@/assets/product-deep-10ml.jpg";
import deep3xImg from "@/assets/product-deep-3x.jpg";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

export function ServicesPage() {
  const { t } = useI18n();
  const products = [
    {
      key: "p1",
      image: deep10Img,
      alt: "SECRO-FILL DEEP 10ml dermal filler syringe with premium packaging",
    },
    {
      key: "p2",
      image: deep3xImg,
      alt: "SECRO-FILL DEEP three 3.2ml syringe clinical set",
    },
    {
      key: "p3",
      image: bodyImg,
      alt: "SECRO-FILL body filler product with emerald and gold packaging",
    },
  ];

  return (
    <PageShell
      eyebrow={t("services.eyebrow")}
      title={t("page.services.title")}
      body={t("page.services.body")}
      heroVisual={
        <div className="grid min-h-56 aspect-[16/10] grid-cols-3 overflow-hidden border border-border bg-secondary shadow-luxe">
          {products.map((product) => (
            <div key={product.key} className="relative border-e border-border last:border-e-0">
              <Image
                src={product.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 13vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
        </div>
      }
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.key} delay={index * 100}>
            <article className="card-luxe flex h-full flex-col overflow-hidden">
              <div className="relative aspect-4/3 overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h2 className="text-2xl leading-tight text-primary rtl:text-[1.625rem]">
                  {t(`services.${product.key}.name`)}
                </h2>
                <div className="hairline mt-5 w-12" />
                <p className="mt-5 flex-1 text-sm leading-[1.8] text-muted-foreground rtl:text-[0.9375rem]">
                  {t(`services.${product.key}.desc`)}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
