"use client";

import Image from "next/image";
import { FlaskConical, Handshake, Ruler, ShieldCheck } from "lucide-react";

import heroImg from "@/assets/Hero-image-Web.webp";
import positioningImg from "@/assets/Positiononig-Section.webp";
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

const principleKeys = ["quality", "precision", "innovation", "partnership"] as const;
const principleIcons = [ShieldCheck, Ruler, FlaskConical, Handshake] as const;
const trustKeys = ["years", "quality", "markets", "professional"] as const;

export function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <LocalizedMetadata titleKey="seo.about.title" descriptionKey="seo.about.description" />
      <Header />
      <main className="overflow-hidden pb-24 sm:pb-28">
        <InnerPageHero
          eyebrow={t("aboutPage.hero.eyebrow")}
          title={t("aboutPage.hero.title")}
          body={t("aboutPage.hero.body")}
          visual={
            <div className="relative aspect-[5/4] min-h-72 overflow-hidden border border-border bg-primary shadow-luxe sm:aspect-[16/11]">
              <Image
                src={positioningImg}
                alt={t("aboutPage.imageAlt")}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-primary/15" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-white/20 bg-primary/90 px-5 py-4 text-primary-foreground sm:px-7">
                <span className="text-[0.62rem] tracking-[0.18em] uppercase rtl:text-sm rtl:tracking-normal rtl:normal-case">
                  {t("aboutPage.hero.visualLabel")}
                </span>
                <span aria-hidden="true" className="h-px w-12 bg-accent" />
              </div>
            </div>
          }
        />

        <EditorialSplitSection
          visual={
            <Reveal distance={48} scale={0.985}>
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary shadow-luxe sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={heroImg}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover object-center"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-primary/10" />
                <div aria-hidden="true" className="absolute inset-y-8 start-8 w-px bg-accent/80" />
              </div>
            </Reveal>
          }
        >
          <Reveal distance={40}>
            <SectionHeading
              eyebrow={t("aboutPage.intro.eyebrow")}
              title={t("aboutPage.intro.title")}
              body={t("aboutPage.intro.body")}
            />
            <p className="mt-8 border-s border-accent ps-5 text-sm leading-[1.8] text-foreground/70 italic rtl:text-base">
              {t("aboutPage.intro.note")}
            </p>
          </Reveal>
        </EditorialSplitSection>

        <section className="border-y border-border bg-secondary/45 px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal distance={40}>
              <SectionHeading
                eyebrow={t("aboutPage.principles.eyebrow")}
                title={t("aboutPage.principles.title")}
                body={t("aboutPage.principles.body")}
              />
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
              {principleKeys.map((key, index) => {
                const Icon = principleIcons[index] ?? ShieldCheck;
                return (
                  <Reveal key={key} delay={index * 110} distance={48}>
                    <article className="group min-h-64 border-t border-accent/75 py-7">
                      <div className="flex items-start justify-between gap-4">
                        <Icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
                        <span className="font-display text-2xl text-gold-deep/70">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-10 text-2xl leading-tight text-primary rtl:text-[1.625rem]">
                        {t(`aboutPage.principles.${key}.title`)}
                      </h3>
                      <p className="mt-4 text-sm leading-[1.8] text-muted-foreground rtl:text-base">
                        {t(`aboutPage.principles.${key}.body`)}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative bg-primary px-5 py-20 text-primary-foreground lg:px-10 lg:py-28">
          <div aria-hidden="true" className="absolute end-0 top-0 h-full w-1/3 bg-white/[0.025]" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal distance={40}>
              <SectionHeading
                eyebrow={t("aboutPage.trust.eyebrow")}
                title={t("aboutPage.trust.title")}
                body={t("aboutPage.trust.body")}
                className="[&_h2]:text-primary-foreground [&_p.eyebrow]:!text-accent [&_p:last-child]:text-primary-foreground/70"
              />
            </Reveal>
            <div className="mt-14 grid grid-cols-2 border-s border-t border-primary-foreground/20 lg:grid-cols-4">
              {trustKeys.map((key, index) => (
                <Reveal key={key} delay={index * 100} distance={48}>
                  <article className="min-h-48 border-e border-b border-primary-foreground/20 p-5 sm:p-7">
                    <p className="font-display text-4xl text-accent sm:text-5xl rtl:font-sans rtl:text-[2.5rem]">
                      {t(`aboutPage.trust.${key}.value`)}
                    </p>
                    <p className="mt-8 max-w-36 text-[0.66rem] leading-relaxed tracking-[0.14em] text-primary-foreground/70 uppercase rtl:text-sm rtl:tracking-normal rtl:normal-case">
                      {t(`aboutPage.trust.${key}.label`)}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <EditorialSplitSection
          reverse
          muted
          visual={
            <Reveal distance={56} scale={0.98}>
              <div className="relative aspect-[5/4] overflow-hidden border border-border bg-card shadow-luxe">
                <Image
                  src={positioningImg}
                  alt={t("aboutPage.imageAlt")}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-primary/18" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
              </div>
            </Reveal>
          }
        >
          <Reveal distance={40}>
            <SectionHeading
              eyebrow={t("aboutPage.philosophy.eyebrow")}
              title={t("aboutPage.philosophy.title")}
              body={t("aboutPage.philosophy.body")}
            />
            <p className="mt-8 border-s border-accent ps-5 text-sm leading-[1.8] text-foreground/70 italic rtl:text-base">
              {t("aboutPage.philosophy.note")}
            </p>
          </Reveal>
        </EditorialSplitSection>

        <Reveal distance={48} scale={0.99}>
          <CTASection
            eyebrow={t("aboutPage.cta.eyebrow")}
            title={t("aboutPage.cta.title")}
            body={t("aboutPage.cta.body")}
            primaryLabel={t("aboutPage.cta.primary")}
            primaryHref="/products"
            secondaryLabel={t("aboutPage.cta.secondary")}
            secondaryHref="/contact"
          />
        </Reveal>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
