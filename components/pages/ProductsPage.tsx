"use client";

import Image from "next/image";

import bodyImg from "@/assets/product-body.jpg";
import deep10Img from "@/assets/product-deep-10ml.jpg";
import deep3xImg from "@/assets/product-deep-3x.jpg";
import productDetailImg from "@/assets/product-80 mg.jpg";
import { ProductShowcase, type ProductShowcaseItem } from "@/components/products/ProductShowcase";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import {
  CTASection,
  EditorialSplitSection,
  InnerPageHero,
  SectionHeading,
} from "@/components/site/InnerPageSections";
import { LocalizedMetadata } from "@/components/site/LocalizedMetadata";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

const benefitKeys = ["purity", "consistency", "standards", "support"] as const;

export function ProductsPage() {
  const { t } = useI18n();
  const products: ProductShowcaseItem[] = [
    {
      id: "01",
      name: t("productsPage.product.p1.name"),
      description: t("productsPage.product.p1.description"),
      specification: t("productsPage.product.p1.spec"),
      image: deep3xImg,
      alt: t("productsPage.product.p1.alt"),
    },
    {
      id: "02",
      name: t("productsPage.product.p2.name"),
      description: t("productsPage.product.p2.description"),
      specification: t("productsPage.product.p2.spec"),
      image: deep10Img,
      alt: t("productsPage.product.p2.alt"),
    },
    {
      id: "03",
      name: t("productsPage.product.p3.name"),
      description: t("productsPage.product.p3.description"),
      specification: t("productsPage.product.p3.spec"),
      image: bodyImg,
      alt: t("productsPage.product.p3.alt"),
    },
  ];

  return (
    <>
      <LocalizedMetadata titleKey="seo.products.title" descriptionKey="seo.products.description" />
      <Header />
      <main className="overflow-hidden pb-24 sm:pb-28">
        <InnerPageHero
          eyebrow={t("productsPage.hero.eyebrow")}
          title={t("productsPage.hero.title")}
          body={t("productsPage.hero.body")}
          visual={
            <div className="relative grid aspect-[5/4] min-h-72 grid-cols-3 overflow-hidden border border-border bg-card shadow-luxe sm:aspect-[16/11]">
              {[deep3xImg, deep10Img, bodyImg].map((image) => (
                <div key={image.src} className="relative border-e border-border last:border-e-0">
                  <Image
                    src={image}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 15vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-white/20 bg-primary/92 px-5 py-4 text-primary-foreground sm:px-7">
                <span className="text-[0.62rem] tracking-[0.18em] uppercase rtl:text-sm rtl:tracking-normal rtl:normal-case">
                  {t("productsPage.hero.visualLabel")}
                </span>
                <span aria-hidden="true" className="h-px w-12 bg-accent" />
              </div>
            </div>
          }
        />

        <section className="px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
            <Reveal distance={40}>
              <SectionHeading
                eyebrow={t("productsPage.collection.eyebrow")}
                title={t("productsPage.collection.title")}
              />
            </Reveal>
            <Reveal delay={100} distance={40}>
              <div className="border-t border-accent/80 pt-6 lg:pb-1">
                <p className="max-w-2xl text-sm leading-[1.85] text-muted-foreground rtl:text-base sm:text-base">
                  {t("productsPage.collection.body")}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/45 px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal distance={40}>
              <SectionHeading
                eyebrow={t("productsPage.showcase.eyebrow")}
                title={t("productsPage.showcase.title")}
                body={t("productsPage.showcase.body")}
              />
            </Reveal>
            <div className="mt-14">
              <ProductShowcase products={products} ctaLabel={t("productsPage.product.learnMore")} />
            </div>
          </div>
        </section>

        <EditorialSplitSection
          id="product-technology"
          reverse
          visual={
            <Reveal distance={64} scale={0.975}>
              <div className="relative aspect-[5/4] overflow-hidden border border-border bg-card shadow-luxe lg:aspect-[4/5]">
                <Image
                  src={productDetailImg}
                  alt={t("productsPage.technology.imageAlt")}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-primary/5" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
              </div>
            </Reveal>
          }
        >
          <Reveal distance={48}>
            <SectionHeading
              eyebrow={t("productsPage.technology.eyebrow")}
              title={t("productsPage.technology.title")}
              body={t("productsPage.technology.body")}
            />
            <p className="mt-8 border-s border-accent ps-5 text-sm leading-[1.8] text-foreground/70 italic rtl:text-base">
              {t("productsPage.technology.note")}
            </p>
          </Reveal>
        </EditorialSplitSection>

        <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal distance={40}>
              <SectionHeading
                eyebrow={t("productsPage.benefits.eyebrow")}
                title={t("productsPage.benefits.title")}
                body={t("productsPage.benefits.body")}
                className="[&_h2]:text-primary-foreground [&_p.eyebrow]:!text-accent [&_p:last-child]:text-primary-foreground/70"
              />
            </Reveal>
            <div className="mt-14 grid border-s border-t border-primary-foreground/20 sm:grid-cols-2">
              {benefitKeys.map((key, index) => (
                <Reveal key={key} delay={index * 100} distance={48}>
                  <article className="min-h-52 border-e border-b border-primary-foreground/20 p-7 sm:p-9">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-display text-3xl text-accent">0{index + 1}</span>
                      <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
                    </div>
                    <h3 className="mt-8 text-2xl leading-tight rtl:text-[1.625rem]">
                      {t(`productsPage.benefits.${key}.title`)}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-[1.8] text-primary-foreground/68 rtl:text-base">
                      {t(`productsPage.benefits.${key}.body`)}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal distance={48} scale={0.99}>
          <CTASection
            eyebrow={t("productsPage.cta.eyebrow")}
            title={t("productsPage.cta.title")}
            body={t("productsPage.cta.body")}
            primaryLabel={t("productsPage.cta.primary")}
            primaryHref="/contact"
            secondaryLabel={t("productsPage.cta.secondary")}
            secondaryHref="/contact"
          />
        </Reveal>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
