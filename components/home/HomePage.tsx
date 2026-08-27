"use client";

import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Factory,
  Globe2,
  MessageCircle,
  Microscope,
  Quote,
} from "lucide-react";
import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

import heroImg from "@/assets/Hero-image-Web.webp";
import mobileHeroImg from "@/assets/Hero-image-Mobile.png";
import afterBody from "@/assets/After-Body.png";
import afterChin from "@/assets/after-chin.png";
import afterNose from "@/assets/After-nose.png";
import beforeBody from "@/assets/Before-Body.png";
import beforeChin from "@/assets/before-chin.png";
import beforeNose from "@/assets/Before-nose.png";
import bodyImg from "@/assets/product-body.jpg";
import deep3xImg from "@/assets/product-deep-3x.jpg";
import deep10Img from "@/assets/product-deep-10ml.jpg";
import positioningImg from "@/assets/Positiononig-Section.webp";
import testimonialClinicDirector from "@/assets/testimonial-clinic-director.webp";
import testimonialDistributor from "@/assets/testimonial-distributor.webp";
import testimonialPhysician from "@/assets/testimonial-physician.webp";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

function DecoratedEyebrow({
  text,
  center = false,
  dark = false,
  className = "",
}: {
  text: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}) {
  const surfaceClass = dark ? "divider-on-dark" : "";

  return (
    <p className={`eyebrow flex items-center gap-3 ${center ? "justify-center" : ""} ${className}`}>
      <span
        aria-hidden="true"
        className={`product-card-divider-gold divider-diamond-end w-10 sm:w-14 ${surfaceClass}`}
      />
      <span>{text}</span>
      <span
        aria-hidden="true"
        className={`product-card-divider-gold divider-diamond-start w-10 sm:w-14 ${surfaceClass}`}
      />
    </p>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <DecoratedEyebrow text={eyebrow} center={center} />
      <h2 className="mt-4 text-3xl leading-tight rtl:text-[2.125rem] sm:text-4xl sm:rtl:text-[2.625rem] lg:text-5xl lg:rtl:text-[3.25rem]">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground rtl:text-[0.9375rem] sm:text-base sm:rtl:text-[1.0625rem]">
          {sub}
        </p>
      )}
    </div>
  );
}

function Hero() {
  const { lang, t } = useI18n();
  const isRtl = lang === "ar";
  const title = t("hero.title");
  const goldPhrase = {
    en: "Refined Beauty",
    de: "vollendeter Schönheit",
    ar: "الراقي",
  }[lang];
  const goldStart = title.lastIndexOf(goldPhrase);
  const titleBeforeGold = goldStart >= 0 ? title.slice(0, goldStart) : title;
  const titleGold = goldStart >= 0 ? title.slice(goldStart) : "";
  const englishTitleParts = title.split(/(Science|Beauty)/g);

  return (
    <section
      id="top"
      className="relative min-h-[790px] overflow-hidden sm:min-h-[900px] lg:min-h-[94svh]"
    >
      <picture className="absolute inset-0 block">
        <source
          media={
            isRtl
              ? "(max-width: 899px), (max-width: 1100px) and (orientation: portrait)"
              : "(max-width: 639px)"
          }
          srcSet={mobileHeroImg.src}
        />
        <Image
          src={heroImg}
          alt="Close-up portrait of a woman with luminous skin illustrating premium medical aesthetics results"
          fill
          priority
          sizes="100vw"
          className={
            isRtl
              ? "object-cover object-[42%_center] sm:object-center"
              : "object-cover object-[100%_center] sm:object-[62%_center] lg:object-center"
          }
        />
      </picture>
      <div className="relative mx-auto flex min-h-[790px] max-w-7xl flex-col justify-start px-5 pt-36 pb-16 sm:min-h-[900px] sm:justify-end sm:pb-36 lg:min-h-[94svh] lg:justify-center lg:px-10 lg:pt-28 lg:pb-20">
        <div
          className={`animate-rise ${
            isRtl
              ? "mr-auto ml-0 w-full max-w-[9.25rem] text-right sm:max-w-[17rem] lg:max-w-[20rem] xl:max-w-[25rem]"
              : "max-w-[9.75rem] sm:max-w-xl lg:max-w-[38rem]"
          }`}
        >
          <p className="eyebrow whitespace-nowrap text-[0.55rem] tracking-[0.16em] text-primary sm:text-[0.6875rem] sm:tracking-[0.28em]">
            {t("hero.eyebrow")}
          </p>
          <div
            aria-hidden="true"
            className={`hairline mt-3 w-12 sm:mt-4 sm:w-14 ${isRtl ? "ml-auto" : ""}`}
          />
          <h1 className="mt-5 text-[1.62rem] leading-[1.08] rtl:text-[2rem] sm:mt-6 sm:text-6xl sm:rtl:text-6xl lg:text-7xl lg:rtl:text-7xl xl:rtl:text-[5rem]">
            {lang === "en" ? (
              englishTitleParts.map((part, index) => (
                <span
                  key={`${part}-${index}`}
                  className={
                    part === "Science" || part === "Beauty" ? "text-gold-deep" : "text-primary"
                  }
                >
                  {part}
                </span>
              ))
            ) : (
              <>
                <span className="text-primary">{titleBeforeGold}</span>
                {titleGold && <span className="text-gold-deep">{titleGold}</span>}
              </>
            )}
          </h1>
          <p
            className={`mt-5 text-[0.72rem] leading-[1.55] text-foreground/80 rtl:text-[0.8125rem] sm:mt-6 sm:text-base sm:leading-relaxed sm:rtl:text-[1.0625rem] ${
              isRtl ? "sm:max-w-none" : "sm:max-w-xl"
            }`}
          >
            {t("hero.sub")}
          </p>
          <div
            className={`mt-6 flex flex-col gap-2.5 sm:mt-10 sm:gap-3 ${
              isRtl ? "lg:flex-row" : "sm:flex-row"
            }`}
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-2 py-3 text-[0.52rem] tracking-[0.08em] uppercase text-accent-foreground shadow-[0_12px_30px_-18px_var(--primary)] transition-transform hover:-translate-y-0.5 rtl:text-[0.625rem] rtl:tracking-[0.02em] rtl:normal-case sm:w-auto sm:px-7 sm:py-4 sm:text-[0.7rem] sm:tracking-[0.2em] sm:rtl:text-xs"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </a>
            <a
              href="#products"
              className="inline-flex w-full items-center justify-center rounded-full border border-primary/45 bg-white/25 px-2 py-3 text-[0.52rem] tracking-[0.08em] uppercase text-primary transition-colors hover:border-primary hover:bg-white/50 rtl:text-[0.625rem] rtl:tracking-[0.02em] rtl:normal-case sm:w-auto sm:px-7 sm:py-4 sm:text-[0.7rem] sm:tracking-[0.2em] sm:rtl:text-xs"
            >
              {t("hero.cta2")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const { t } = useI18n();
  const items = ["trust.germany", "trust.years", "trust.medical", "trust.pro"];
  const loop = [...items, ...items, ...items, ...items];

  return (
    <section aria-label="Brand credentials" className="border-y border-border bg-secondary/60 py-5">
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12 pe-12 whitespace-nowrap">
          {loop.map((k, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="text-[0.68rem] tracking-[0.28em] uppercase text-muted-foreground rtl:text-xs rtl:tracking-[0.04em] rtl:normal-case">
                {t(k)}
              </span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useI18n();
  const products = [
    {
      img: deep3xImg,
      name: "services.p2.name",
      desc: "services.p2.desc",
      alt: "SECRO-FILL DEEP three 3.2ml syringe clinical set — replaceable product image",
    },
    {
      img: deep10Img,
      name: "services.p1.name",
      desc: "services.p1.desc",
      alt: "SECRO-FILL DEEP 10ml dermal filler syringe with premium packaging — replaceable product image",
    },
    {
      img: bodyImg,
      name: "services.p3.name",
      desc: "services.p3.desc",
      alt: "SECRO-FILL body filler product with emerald and gold packaging — replaceable product image",
    },
  ];

  return (
    <section id="products" className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHead
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
            sub={t("services.sub")}
          />
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="card-luxe product-card-gold flex h-full flex-col">
                <div className="relative aspect-4/3 overflow-hidden bg-secondary">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl rtl:text-[1.375rem]">{t(p.name)}</h3>
                  <div className="product-card-divider-gold mt-4 w-2/3" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground rtl:text-[0.9375rem]">
                    {t(p.desc)}
                  </p>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-[0.68rem] tracking-[0.2em] uppercase text-primary rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case"
                  >
                    {t("services.cta")}
                    <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  const cards = [
    { key: "c1", Icon: Microscope },
    { key: "c2", Icon: Factory },
    { key: "c3", Icon: Globe2 },
  ];

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-emerald-gradient px-5 py-24 text-primary-foreground lg:px-10 lg:py-32"
    >
      <Image
        src={positioningImg}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-primary/35" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <DecoratedEyebrow text={t("about.eyebrow")} className="text-accent" dark />
            <h2 className="mt-4 text-3xl leading-tight rtl:text-[2.125rem] sm:text-4xl sm:rtl:text-[2.625rem] lg:text-5xl lg:rtl:text-[3.25rem]">
              {t("about.title")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75 rtl:text-[0.9375rem] sm:text-base sm:rtl:text-[1.0625rem]">
              {t("about.sub")}
            </p>
          </div>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
          {cards.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 120}>
              <div className="card-luxe relative flex h-full flex-col overflow-hidden !border-accent/35 !bg-primary/35 p-5 text-primary-foreground shadow-card backdrop-blur-sm">
                <span className="absolute start-0 top-0 bg-gradient-to-br from-gold-soft to-gold-deep px-5 py-3 text-2xl leading-none text-accent-foreground">
                  0{i + 1}
                </span>
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-accent/80 text-accent">
                  <Icon className="h-9 w-9" strokeWidth={1.25} />
                </div>
                <h3 className="mt-5 text-xl text-primary-foreground rtl:text-[1.375rem]">
                  {t(`about.${key}.title`)}
                </h3>
                <div className="hairline mt-3 w-12" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-primary-foreground/80 rtl:text-[0.9375rem]">
                  {t(`about.${key}.desc`)}
                </p>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-deep via-gold-soft to-gold-deep"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterCard({
  before,
  after,
  alt,
  title,
}: {
  before: typeof beforeNose;
  after: typeof afterNose;
  alt: string;
  title: string;
}) {
  const { t } = useI18n();
  const stageRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const stage = stageRef.current;
    if (!stage) return;

    const bounds = stage.getBoundingClientRect();
    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(100, Math.max(0, nextPosition)));
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (isDragging) updatePosition(event.clientX);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    setPosition((current) => Math.min(100, Math.max(0, current + direction * 5)));
  };

  return (
    <figure className="card-luxe overflow-hidden rounded-[24px]">
      <div
        ref={stageRef}
        role="slider"
        tabIndex={0}
        aria-label={`${title} before and after comparison`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        style={{ aspectRatio: `${before.width} / ${before.height}` }}
        className={`relative touch-none select-none overflow-hidden bg-secondary outline-none focus-visible:ring-2 focus-visible:ring-accent ${isDragging ? "cursor-grabbing" : "cursor-ew-resize"}`}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <Image
          src={after}
          alt={`${alt} after`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          draggable={false}
          className="pointer-events-none object-contain"
        />
        <Image
          src={before}
          alt={`${alt} before`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          draggable={false}
          className="pointer-events-none object-contain"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_0_1px_rgba(24,55,45,0.12)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg">
            <ChevronLeft className="h-4 w-4" />
            <ChevronRight className="-ms-1 h-4 w-4" />
          </span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between p-4">
          <span className="rounded-full bg-primary/80 px-3 py-1.5 text-[0.62rem] tracking-[0.18em] uppercase text-white backdrop-blur-sm rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case">
            {t("portfolio.before")}
          </span>
          <span className="rounded-full bg-accent/90 px-3 py-1.5 text-[0.62rem] tracking-[0.18em] uppercase text-accent-foreground backdrop-blur-sm rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case">
            {t("portfolio.after")}
          </span>
        </div>
      </div>
      <figcaption className="p-6">
        <h3 className="text-xl rtl:text-[1.375rem]">{title}</h3>
      </figcaption>
    </figure>
  );
}

function Portfolio() {
  const { t } = useI18n();
  const items = [
    {
      key: "portfolio.i1",
      before: beforeNose,
      after: afterNose,
      alt: "Nose contour aesthetic result documentation",
    },
    {
      key: "portfolio.i2",
      before: beforeChin,
      after: afterChin,
      alt: "Chin contour aesthetic result documentation",
    },
    {
      key: "portfolio.i3",
      before: beforeBody,
      after: afterBody,
      alt: "Body volumisation contour result documentation",
    },
  ];

  return (
    <section id="portfolio" className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHead
            eyebrow={t("portfolio.eyebrow")}
            title={t("portfolio.title")}
            sub={t("portfolio.sub")}
          />
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.key} delay={i * 100}>
              <BeforeAfterCard before={it.before} after={it.after} alt={it.alt} title={t(it.key)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t } = useI18n();
  const steps = ["s1", "s2", "s3", "s4"];

  return (
    <section className="bg-secondary/50 px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHead eyebrow={t("process.eyebrow")} title={t("process.title")} />
        </Reveal>
        <ol className="mt-16 grid gap-10 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s} delay={i * 110}>
              <li className="relative">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-accent text-xs tracking-[0.1em] text-primary">
                    {i + 1}
                  </span>
                  <span className="hairline hidden flex-1 opacity-60 md:block" />
                </div>
                <h3 className="mt-6 text-xl rtl:text-[1.375rem]">{t(`process.${s}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground rtl:text-[0.9375rem]">
                  {t(`process.${s}.desc`)}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  const { dir, t } = useI18n();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { q: "testi.t1", r: "testi.r1", avatar: testimonialClinicDirector },
    { q: "testi.t2", r: "testi.r2", avatar: testimonialDistributor },
    { q: "testi.t3", r: "testi.r3", avatar: testimonialPhysician },
  ];

  const scrollToTestimonial = (delta: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = scroller.querySelectorAll<HTMLElement>("[data-testimonial-card]");
    const nextIndex = Math.min(items.length - 1, Math.max(0, currentIndex + delta));
    const nextCard = cards[nextIndex];
    if (!nextCard) return;

    const scrollerBounds = scroller.getBoundingClientRect();
    const cardBounds = nextCard.getBoundingClientRect();
    const offset =
      dir === "rtl"
        ? cardBounds.right - scrollerBounds.right
        : cardBounds.left - scrollerBounds.left;

    scroller.scrollBy({ left: offset, behavior: "smooth" });
    setCurrentIndex(nextIndex);
  };

  const updateCurrentTestimonial = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollerBounds = scroller.getBoundingClientRect();
    const targetEdge = dir === "rtl" ? scrollerBounds.right : scrollerBounds.left;
    const cards = [...scroller.querySelectorAll<HTMLElement>("[data-testimonial-card]")];
    const closestIndex = cards.reduce((closest, card, index) => {
      const cardBounds = card.getBoundingClientRect();
      const cardEdge = dir === "rtl" ? cardBounds.right : cardBounds.left;
      const closestBounds = cards[closest]?.getBoundingClientRect();
      const closestEdge = dir === "rtl" ? closestBounds?.right : closestBounds?.left;
      return Math.abs(cardEdge - targetEdge) < Math.abs((closestEdge ?? targetEdge) - targetEdge)
        ? index
        : closest;
    }, 0);

    setCurrentIndex(closestIndex);
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#faf7f1] px-5 py-24 lg:px-10 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-56 top-[-12rem] h-[42rem] w-[42rem] rounded-full border border-gold-deep/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-64 bottom-[-20rem] h-[44rem] w-[44rem] rounded-full border border-gold-deep/10"
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="relative mx-auto max-w-4xl text-center">
            <Quote
              aria-hidden="true"
              className="absolute -start-2 top-5 hidden h-16 w-16 text-gold-deep/10 lg:block"
            />
            <Quote
              aria-hidden="true"
              className="absolute -end-2 top-5 hidden h-16 w-16 rotate-180 text-gold-deep/10 lg:block"
            />
            <DecoratedEyebrow text={t("testi.eyebrow")} className="text-gold-deep" center />
            <h2 className="mt-5 text-4xl leading-tight text-primary rtl:text-[2.5rem] sm:text-5xl sm:rtl:text-[3.25rem] lg:text-6xl lg:rtl:text-[4rem]">
              {t("testi.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground rtl:text-[0.9375rem] sm:text-base sm:rtl:text-[1.0625rem]">
              {t("testi.sub")}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex justify-end md:hidden" dir="ltr">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-deep/25 bg-card/90 p-1.5 shadow-card backdrop-blur-sm">
            <button
              type="button"
              aria-label={t(dir === "rtl" ? "testi.next" : "testi.previous")}
              onClick={() => scrollToTestimonial(dir === "rtl" ? 1 : -1)}
              disabled={dir === "rtl" ? currentIndex === items.length - 1 : currentIndex === 0}
              className="grid h-10 w-10 place-items-center rounded-full border border-gold-deep/30 text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label={t(dir === "rtl" ? "testi.previous" : "testi.next")}
              onClick={() => scrollToTestimonial(dir === "rtl" ? -1 : 1)}
              disabled={dir === "rtl" ? currentIndex === 0 : currentIndex === items.length - 1}
              className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-emerald-deep/90 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onScroll={updateCurrentTestimonial}
          className="scrollbar-none -mb-6 mt-3 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pt-2 pb-10 md:mb-0 md:mt-16 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pt-0 md:pb-0"
        >
          {items.map((it, i) => (
            <Reveal
              key={it.q}
              delay={i * 120}
              className="h-full w-[78vw] max-w-[21rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
            >
              <blockquote
                data-testimonial-card
                className="card-luxe product-card-gold relative flex h-full flex-col p-8"
              >
                <Quote className="h-10 w-10 text-gold-deep rtl:rotate-180" />
                <Quote
                  aria-hidden="true"
                  className="absolute end-8 top-8 h-12 w-12 rotate-180 text-gold-deep/10"
                />
                <p className="mt-8 flex-1 text-base leading-[1.9] text-foreground rtl:text-[1.0625rem] sm:text-[1.05rem] sm:rtl:text-lg">
                  {t(it.q)}
                </p>
                <div className="hairline mt-8 w-14" />
                <footer className="mt-6 flex items-center gap-4 text-[0.65rem] tracking-[0.2em] uppercase text-primary rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case">
                  <Image
                    src={it.avatar}
                    alt={t(it.r)}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full border-2 border-gold-deep/60 object-cover p-0.5"
                  />
                  <span className="leading-relaxed">{t(it.r)}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="bg-emerald-gradient px-5 py-24 text-primary-foreground lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div>
            <DecoratedEyebrow text={t("contact.eyebrow")} className="text-accent" dark />
            <h2 className="mt-4 text-3xl leading-tight rtl:text-[2.125rem] sm:text-4xl sm:rtl:text-[2.625rem] lg:text-5xl lg:rtl:text-[3.25rem]">
              {t("contact.title")}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75 rtl:text-[0.9375rem] sm:text-base sm:rtl:text-[1.0625rem]">
              {t("contact.sub")}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-accent px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-accent transition-colors hover:bg-accent hover:text-accent-foreground rtl:text-[0.8rem] rtl:tracking-[0.02em] rtl:normal-case"
            >
              <MessageCircle className="h-4 w-4" />
              {t("cta.whatsapp")}
            </a>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <form
            className="gold-border-panel grid gap-5 bg-primary-foreground/5 p-7 backdrop-blur-sm sm:p-9"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const whatsappMessage = [
                "SECRO-FILL — Partnership Request",
                `${t("form.name")}: ${formData.get("name") ?? ""}`,
                `${t("form.email")}: ${formData.get("email") ?? ""}`,
                `${t("form.country")}: ${formData.get("country") ?? ""}`,
                `${t("form.message")}: ${formData.get("message") ?? ""}`,
              ].join("\n");

              window.open(
                `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`,
                "_blank",
                "noopener,noreferrer",
              );
              setSent(true);
            }}
          >
            {[
              { id: "name", label: "form.name", type: "text" },
              { id: "email", label: "form.email", type: "email" },
              { id: "country", label: "form.country", type: "text" },
            ].map((f) => (
              <div key={f.id} className="grid gap-2">
                <label
                  htmlFor={f.id}
                  className="text-[0.62rem] tracking-[0.22em] uppercase text-primary-foreground/70 rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case"
                >
                  {t(f.label)}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required
                  className="border-b border-primary-foreground/25 bg-transparent py-2.5 text-sm text-primary-foreground outline-none focus:border-accent rtl:text-[0.9375rem]"
                />
              </div>
            ))}
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-[0.62rem] tracking-[0.22em] uppercase text-primary-foreground/70 rtl:text-xs rtl:tracking-[0.02em] rtl:normal-case"
              >
                {t("form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="border-b border-primary-foreground/25 bg-transparent py-2.5 text-sm text-primary-foreground outline-none focus:border-accent rtl:text-[0.9375rem]"
              />
            </div>
            <button
              type="submit"
              className="mt-3 bg-accent px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-accent-foreground transition-opacity hover:opacity-90 rtl:text-[0.8rem] rtl:tracking-[0.02em] rtl:normal-case"
            >
              {t("form.submit")}
            </button>
            {sent && (
              <p aria-live="polite" className="text-xs text-accent">
                {t("form.sent")}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Header overlay />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
