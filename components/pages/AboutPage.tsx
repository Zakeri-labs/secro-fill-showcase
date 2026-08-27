"use client";

import Image from "next/image";
import {
  Atom,
  Droplets,
  Factory,
  FlaskConical,
  HeartPulse,
  Microscope,
  Settings2,
  ShieldCheck,
  Sparkles,
  Syringe,
  TrendingUp,
  UsersRound,
} from "lucide-react";

import heroImg from "@/assets/Hero-image-Web.webp";
import positioningImg from "@/assets/Positiononig-Section.webp";
import bodyImg from "@/assets/product-body.jpg";
import deep10Img from "@/assets/product-deep-10ml.jpg";
import deep3xImg from "@/assets/product-deep-3x.jpg";
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

const portfolioKeys = ["fillers", "boosters", "skinHair", "care"] as const;
const portfolioIcons = [Syringe, Droplets, Sparkles, HeartPulse] as const;
const principleKeys = ["specialists", "manufacturing", "equipment", "evolution"] as const;
const principleIcons = [UsersRound, Factory, Settings2, TrendingUp] as const;
const trustKeys = ["years", "technology", "innovation", "reach"] as const;
const researchKeys = ["technologies", "ingredients", "formulations", "science"] as const;
const researchIcons = [Microscope, Droplets, FlaskConical, Atom] as const;
const visionImages = [deep3xImg, deep10Img, bodyImg] as const;

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
                  alt={t("aboutPage.intro.imageAlt")}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover object-center"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-primary/10" />
                <div aria-hidden="true" className="absolute inset-y-8 start-8 w-px bg-accent/80" />
                <div className="absolute end-6 bottom-6 grid h-24 w-24 place-items-center border border-accent/70 bg-primary/85 p-3 text-center text-primary-foreground backdrop-blur-sm sm:h-28 sm:w-28">
                  <span className="font-display text-3xl leading-none text-accent sm:text-4xl">
                    10+
                  </span>
                  <span className="mt-1 text-[0.52rem] leading-tight tracking-[0.13em] uppercase rtl:text-xs rtl:tracking-normal rtl:normal-case">
                    {t("aboutPage.intro.years")}
                  </span>
                </div>
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
            <p className="mt-7 text-sm leading-[1.85] text-muted-foreground rtl:text-base sm:text-base">
              {t("aboutPage.intro.global")}
            </p>
            <p className="mt-8 border-s border-accent ps-5 text-sm leading-[1.8] text-foreground/75 italic rtl:text-base">
              {t("aboutPage.intro.note")}
            </p>
          </Reveal>
        </EditorialSplitSection>

        <section className="border-y border-border bg-secondary/45 px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
              <Reveal distance={40}>
                <SectionHeading
                  eyebrow={t("aboutPage.portfolio.eyebrow")}
                  title={t("aboutPage.portfolio.title")}
                />
              </Reveal>
              <Reveal delay={100} distance={40}>
                <p className="border-t border-accent/80 pt-6 text-sm leading-[1.85] text-muted-foreground rtl:text-base sm:text-base">
                  {t("aboutPage.portfolio.body")}
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid border-s border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {portfolioKeys.map((key, index) => {
                const Icon = portfolioIcons[index] ?? Sparkles;
                return (
                  <Reveal key={key} delay={index * 90} distance={44}>
                    <article className="group min-h-56 border-e border-b border-border bg-card/55 p-6 transition-colors duration-300 hover:bg-card sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <span className="grid h-12 w-12 place-items-center border border-accent/75 text-primary">
                          <Icon className="h-5 w-5" strokeWidth={1.35} />
                        </span>
                        <span className="font-display text-2xl text-gold-deep/60">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-9 text-xl leading-tight text-primary rtl:text-[1.375rem]">
                        {t(`aboutPage.portfolio.${key}.title`)}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.75] text-muted-foreground rtl:text-base">
                        {t(`aboutPage.portfolio.${key}.body`)}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-10 lg:py-32">
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
                    <article className="group min-h-72 border-t border-accent/75 py-7">
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
                    <p className="font-display text-3xl text-accent sm:text-5xl rtl:font-sans rtl:text-[2.25rem]">
                      {t(`aboutPage.trust.${key}.value`)}
                    </p>
                    <p className="mt-8 max-w-40 text-[0.66rem] leading-relaxed tracking-[0.14em] text-primary-foreground/70 uppercase rtl:text-sm rtl:tracking-normal rtl:normal-case">
                      {t(`aboutPage.trust.${key}.label`)}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/45 px-5 py-20 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-20">
            <Reveal distance={44}>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow={t("aboutPage.research.eyebrow")}
                  title={t("aboutPage.research.title")}
                  body={t("aboutPage.research.body")}
                />
                <p className="mt-7 text-sm leading-[1.85] text-muted-foreground rtl:text-base sm:text-base">
                  {t("aboutPage.research.note")}
                </p>
              </div>
            </Reveal>
            <div className="grid border-s border-t border-border sm:grid-cols-2">
              {researchKeys.map((key, index) => {
                const Icon = researchIcons[index] ?? Microscope;
                return (
                  <Reveal key={key} delay={index * 100} distance={48}>
                    <article className="min-h-60 border-e border-b border-border bg-card/70 p-7 sm:p-8">
                      <div className="flex items-center justify-between gap-4">
                        <Icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
                        <span className="font-display text-2xl text-gold-deep/65">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-9 text-2xl leading-tight text-primary rtl:text-[1.625rem]">
                        {t(`aboutPage.research.${key}.title`)}
                      </h3>
                      <p className="mt-4 text-sm leading-[1.8] text-muted-foreground rtl:text-base">
                        {t(`aboutPage.research.${key}.body`)}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <EditorialSplitSection
          reverse
          visual={
            <Reveal distance={56} scale={0.98}>
              <div className="relative grid aspect-[5/4] grid-cols-3 overflow-hidden border border-border bg-card shadow-luxe">
                {visionImages.map((image) => (
                  <div key={image.src} className="relative border-e border-border last:border-e-0">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 16vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
              </div>
            </Reveal>
          }
        >
          <Reveal distance={40}>
            <SectionHeading
              eyebrow={t("aboutPage.vision.eyebrow")}
              title={t("aboutPage.vision.title")}
              body={t("aboutPage.vision.body")}
            />
            <p className="mt-8 border-s border-accent ps-5 font-display text-xl leading-[1.45] text-primary rtl:font-sans rtl:text-xl sm:text-2xl">
              {t("aboutPage.vision.statement")}
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
