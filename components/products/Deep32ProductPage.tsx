"use client";

import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowRight,
  Box,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crosshair,
  FlaskConical,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Syringe,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import afterNose from "@/assets/Before-After/After-nose.png";
import beforeNose from "@/assets/Before-After/Before-nose.png";
import afterChin from "@/assets/Before-After/after-chin.png";
import beforeChin from "@/assets/Before-After/before-chin.png";
import doubleChinAfter from "@/assets/Before-After/After-Double chin.png";
import doubleChinBefore from "@/assets/Before-After/Before-Double chin.png";
import deepHeroImage from "@/assets/product-1/deep-hero-image.png";
import deepHeroImageMobile from "@/assets/product-1/deep-hero-image-mobile.png";
import deepIndications from "@/assets/product-1/deep-indications.png";
import deepProductInformation from "@/assets/product-1/deep-product-information.png";
import { BeforeAfterCard } from "@/components/site/BeforeAfterCard";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SectionHeading } from "@/components/site/InnerPageSections";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/lib/company";
import { useI18n, type Lang } from "@/lib/i18n";

const productPdf = "/downloads/secro-fill-deep-3x3.2ml.pdf";

const copy = {
  en: {
    hero: {
      eyebrow: "Made in Germany",
      productType: "Monophasic Cross-Linked Hyaluronic Acid Filler",
      volume: "3 × 3.2ml pre-filled syringes",
      download: "Download product PDF",
      contact: "Contact us",
      heroAlt: "SECRO-FILL DEEP model visual from the product PDF",
      productAlt: "SECRO-FILL DEEP box with three pre-filled syringes",
    },
    information: {
      eyebrow: "Clinical profile",
      title: "Product information",
      rows: [
        ["Product Type", "Monophasic Cross-Linked Hyaluronic Acid Filler"],
        ["Volume", "3 × 3.2ml (Total 9.6ml)"],
        ["HA Concentration", "25mg/ml"],
        [
          "Core Application",
          "Facial Contour Reshaping: Fills sunken areas (temples, cheeks) for a plump 3D contour; shapes chin, nose bridge, etc. to boost facial harmony.",
        ],
        ["Suggested Injection Depth", "Deep dermis to subcutaneous tissue"],
      ],
    },
    indications: {
      eyebrow: "Treatment areas",
      title: "Indication",
      items: ["Nose filler and shaping", "Chin augmentation and shaping", "Jawline shaping"],
    },
    advantages: {
      eyebrow: "Product advantages",
      title: "What are the advantages of SECRO-FILL DEEP 3 × 3.2ml?",
      items: [
        "25mg/ml high concentration for strong & stable contour support",
        "Long-lasting effect up to 12-18 months",
        "Fully biocompatible with minimal post-treatment downtime",
        "Homogeneous monophasic gel structure ensures natural, lump-free results",
      ],
      uniqueTitle: "The unique advantages of 3 × 3.2ml DEEP",
      uniqueItems: [
        "More flexible dosage control, ideal for fractional treatments",
        "Portable small-volume packaging for easier storage and transportation",
        "Sterile individual packaging enhances clinical safety and reduces product waste",
      ],
    },
    feedback: {
      eyebrow: "Work proof",
      title: "Feedbacks",
      instruction: "Drag the handle to compare before and after.",
      comparison: (title: string) => `${title} before and after comparison`,
      previous: "Show previous feedback",
      next: "Show next feedback",
    },
  },
  de: {
    hero: {
      eyebrow: "Hergestellt in Deutschland",
      productType: "Monophasischer, quervernetzter Hyaluronsäure-Filler",
      volume: "3 × 3,2 ml vorgefüllte Spritzen",
      download: "Produkt-PDF herunterladen",
      contact: "Kontakt",
      heroAlt: "SECRO-FILL DEEP Produktmotiv aus dem Produkt-PDF",
      productAlt: "SECRO-FILL DEEP Packung mit drei vorgefüllten Spritzen",
    },
    information: {
      eyebrow: "Klinisches Profil",
      title: "Produktinformationen",
      rows: [
        ["Produkttyp", "Monophasischer, quervernetzter Hyaluronsäure-Filler"],
        ["Volumen", "3 × 3,2 ml (gesamt 9,6 ml)"],
        ["HA-Konzentration", "25 mg/ml"],
        [
          "Hauptanwendung",
          "Neugestaltung der Gesichtskonturen: Füllt eingesunkene Bereiche (Schläfen, Wangen) für eine volle 3D-Kontur auf; formt Kinn, Nasenrücken usw., um die Gesichtsharmonie zu verbessern.",
        ],
        ["Empfohlene Injektionstiefe", "Tiefe Dermis bis subkutanes Gewebe"],
      ],
    },
    indications: {
      eyebrow: "Behandlungsbereiche",
      title: "Indikation",
      items: ["Nasenfiller und Formung", "Kinnaugmentation und Formung", "Formung der Kieferlinie"],
    },
    advantages: {
      eyebrow: "Produktvorteile",
      title: "Welche Vorteile bietet SECRO-FILL DEEP 3 × 3,2 ml?",
      items: [
        "Hohe Konzentration von 25 mg/ml für starken und stabilen Konturhalt",
        "Lang anhaltende Wirkung von bis zu 12-18 Monaten",
        "Vollständig biokompatibel bei minimaler Ausfallzeit nach der Behandlung",
        "Die homogene monophasische Gelstruktur sorgt für natürliche, knötchenfreie Ergebnisse",
      ],
      uniqueTitle: "Die besonderen Vorteile von 3 × 3,2 ml DEEP",
      uniqueItems: [
        "Flexiblere Dosierungskontrolle, ideal für fraktionierte Behandlungen",
        "Tragbare Kleinvolumenverpackung für einfachere Lagerung und Transport",
        "Sterile Einzelverpackungen erhöhen die klinische Sicherheit und reduzieren Produktabfall",
      ],
    },
    feedback: {
      eyebrow: "Ergebnisdokumentation",
      title: "Feedbacks",
      instruction: "Ziehen Sie den Regler, um Vorher und Nachher zu vergleichen.",
      comparison: (title: string) => `${title}: Vorher-Nachher-Vergleich`,
      previous: "Vorheriges Feedback anzeigen",
      next: "Nächstes Feedback anzeigen",
    },
  },
  ar: {
    hero: {
      eyebrow: "صنع في ألمانيا",
      productType: "فيلر حمض الهيالورونيك أحادي الطور والمتشابك",
      volume: "3 × 3.2 مل من المحاقن المعبأة مسبقاً",
      download: "تحميل ملف المنتج",
      contact: "تواصل معنا",
      heroAlt: "صورة SECRO-FILL DEEP من ملف المنتج",
      productAlt: "عبوة SECRO-FILL DEEP مع ثلاث محاقن معبأة مسبقاً",
    },
    information: {
      eyebrow: "الملف السريري",
      title: "معلومات المنتج",
      rows: [
        ["نوع المنتج", "فيلر حمض الهيالورونيك أحادي الطور والمتشابك"],
        ["الحجم", "3 × 3.2 مل (الإجمالي 9.6 مل)"],
        ["تركيز حمض الهيالورونيك", "25 ملغ/مل"],
        [
          "الاستخدام الأساسي",
          "إعادة تشكيل ملامح الوجه: يملأ المناطق الغائرة (الصدغين والخدين) للحصول على مظهر ثلاثي الأبعاد ممتلئ؛ ويشكّل الذقن وجسر الأنف وغيرها لتعزيز تناسق الوجه.",
        ],
        ["عمق الحقن المقترح", "من الأدمة العميقة إلى النسيج تحت الجلد"],
      ],
    },
    indications: {
      eyebrow: "مناطق العلاج",
      title: "دواعي الاستخدام",
      items: ["فيلر الأنف وتشكيله", "تكبير الذقن وتشكيله", "تشكيل خط الفك"],
    },
    advantages: {
      eyebrow: "مزايا المنتج",
      title: "ما مزايا SECRO-FILL DEEP بحجم 3 × 3.2 مل؟",
      items: [
        "تركيز عالٍ 25 ملغ/مل لدعم قوي وثابت لملامح الوجه",
        "تأثير طويل الأمد يصل إلى 12-18 شهراً",
        "متوافق حيوياً بالكامل مع حد أدنى من فترة التعافي بعد العلاج",
        "بنية جل متجانسة أحادية الطور تضمن نتائج طبيعية وخالية من التكتلات",
      ],
      uniqueTitle: "المزايا الفريدة لعبوة DEEP بحجم 3 × 3.2 مل",
      uniqueItems: [
        "تحكم أكثر مرونة في الجرعة، مثالي للعلاجات المجزأة",
        "عبوة صغيرة الحجم سهلة الحمل لتسهيل التخزين والنقل",
        "التغليف الفردي المعقم يعزز السلامة السريرية ويقلل هدر المنتج",
      ],
    },
    feedback: {
      eyebrow: "توثيق النتائج",
      title: "النتائج",
      instruction: "اسحب المؤشر للمقارنة بين قبل وبعد.",
      comparison: (title: string) => `مقارنة قبل وبعد: ${title}`,
      previous: "عرض النتيجة السابقة",
      next: "عرض النتيجة التالية",
    },
  },
} satisfies Record<Lang, unknown>;

const informationIcons = [Box, Syringe, Sparkles, Crosshair, Layers3];
const advantageIcons = [ShieldCheck, Clock3, Sparkles, Layers3];
const uniqueAdvantageIcons = [Syringe, PackageCheck, ShieldCheck];

export function Deep32ProductPage() {
  const { lang, t } = useI18n();
  const content = copy[lang];
  const feedbackScrollRef = useRef<HTMLDivElement>(null);
  const feedbackCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeFeedbackIndex, setActiveFeedbackIndex] = useState(0);
  const feedbackItems = [
    {
      title: t("portfolio.i1"),
      before: beforeNose,
      after: afterNose,
      alt: t("portfolio.i1"),
    },
    {
      title: t("portfolio.i2"),
      before: beforeChin,
      after: afterChin,
      alt: t("portfolio.i2"),
    },
    {
      title: t("portfolio.i5"),
      before: doubleChinBefore,
      after: doubleChinAfter,
      alt: t("portfolio.i5"),
    },
  ];
  const feedbackItemCount = feedbackItems.length;

  const selectFeedbackCard = useCallback(
    (nextIndex: number) => {
      const normalizedIndex = (nextIndex + feedbackItemCount) % feedbackItemCount;
      setActiveFeedbackIndex(normalizedIndex);
    },
    [feedbackItemCount],
  );

  useEffect(() => {
    const isMobileCarousel = window.matchMedia("(max-width: 1023px)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!isMobileCarousel.matches || prefersReducedMotion.matches) return;

    const intervalId = window.setInterval(() => {
      setActiveFeedbackIndex((currentIndex) => (currentIndex + 1) % feedbackItemCount);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [feedbackItemCount]);

  useEffect(() => {
    if (!window.matchMedia("(max-width: 1023px)").matches) return;

    const scrollContainer = feedbackScrollRef.current;
    const activeCard = feedbackCardRefs.current[activeFeedbackIndex];
    if (!scrollContainer || !activeCard) return;

    const containerBounds = scrollContainer.getBoundingClientRect();
    const cardBounds = activeCard.getBoundingClientRect();
    scrollContainer.scrollBy({
      left: cardBounds.left - containerBounds.left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [activeFeedbackIndex]);

  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 sm:pb-28">
        <section className="relative isolate min-h-[46rem] overflow-hidden border-b border-border bg-[#eee9de] sm:min-h-[48rem] lg:min-h-0 lg:aspect-[1672/941]">
          <Image
            src={deepHeroImageMobile}
            alt={content.hero.heroAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-contain object-top sm:hidden"
          />
          <Image
            src={deepHeroImage}
            alt={content.hero.heroAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 hidden object-cover object-[40%_center] sm:block sm:object-contain sm:object-top"
          />
          <div className="relative z-10 mx-auto flex min-h-[46rem] max-w-7xl items-start px-5 pt-28 pb-12 sm:min-h-[48rem] sm:px-8 sm:pt-[calc(56.28vw+3rem)] sm:pb-20 lg:min-h-0 lg:items-end lg:px-10 lg:pt-40 lg:pb-24">
            <header className="max-w-[13.5rem] animate-rise text-primary sm:max-w-2xl lg:max-w-xl">
              <p className="text-[0.56rem] tracking-[0.22em] text-gold-deep uppercase rtl:text-xs rtl:tracking-normal rtl:normal-case sm:eyebrow">
                {content.hero.eyebrow}
              </p>
              <div className="mt-3 h-px w-10 bg-accent sm:mt-4 sm:w-14" />
              <h1 className="mt-5 leading-[0.86] sm:mt-7">
                <span className="block text-[2.25rem] sm:text-6xl lg:text-[4.35rem] xl:text-[4.75rem]">
                  SECRO-FILL
                </span>
                <span className="mt-1 block text-[3.6rem] text-gradient-gold sm:mt-2 sm:text-[6rem] lg:text-[7rem] xl:text-[7.75rem]">
                  DEEP
                </span>
              </h1>
              <p className="mt-4 max-w-[calc(100%-20px)] text-[0.72rem] leading-[1.55] text-primary/80 rtl:text-[0.8125rem] sm:mt-7 sm:max-w-xl sm:text-lg sm:leading-[1.8] sm:rtl:text-[1.0625rem]">
                {content.hero.productType}
              </p>
              <div className="mt-4 flex max-w-xl flex-col gap-2 sm:mt-7 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-primary shadow-card sm:h-9 sm:w-9">
                    <Syringe className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.35} />
                  </span>
                  <span className="text-[0.54rem] leading-relaxed tracking-[0.04em] text-primary/85 rtl:text-[0.6875rem] rtl:tracking-normal sm:text-xs sm:tracking-[0.06em] sm:rtl:text-sm">
                    {content.hero.volume}
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-primary shadow-card sm:h-9 sm:w-9">
                    <FlaskConical className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.35} />
                  </span>
                  <span className="text-[0.625rem] leading-relaxed tracking-[0.06em] text-primary/85 rtl:text-[0.6875rem] rtl:tracking-normal sm:text-xs sm:tracking-[0.08em] sm:rtl:text-sm">
                    25mg/ml
                  </span>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-2 sm:mt-9 sm:gap-3 sm:flex-row">
                <a
                  href={productPdf}
                  download="SECRO-FILL-DEEP-3x3.2ml.pdf"
                  className="animate-download-gold-glow inline-flex w-fit self-start min-h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-3 text-[0.52rem] tracking-[0.12em] uppercase text-primary-foreground transition-transform hover:-translate-y-0.5 rtl:text-xs rtl:tracking-normal rtl:normal-case sm:self-auto sm:min-h-12 sm:gap-3 sm:px-7 sm:text-[0.68rem] sm:tracking-[0.16em] sm:rtl:text-sm"
                >
                  {content.hero.download}
                  <ArrowDownToLine className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-fit self-start min-h-10 items-center justify-center gap-1.5 rounded-full border border-primary/45 bg-background/35 px-3 text-[0.52rem] tracking-[0.12em] uppercase text-primary backdrop-blur-sm transition-colors hover:bg-background/60 rtl:text-xs rtl:tracking-normal rtl:normal-case sm:self-auto sm:min-h-12 sm:gap-3 sm:px-7 sm:text-[0.68rem] sm:tracking-[0.16em] sm:rtl:text-sm"
                >
                  {content.hero.contact}
                  <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180 sm:h-4 sm:w-4" />
                </a>
              </div>
            </header>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal distance={40}>
              <SectionHeading
                eyebrow={content.information.eyebrow}
                title={content.information.title}
              />
            </Reveal>
            <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(20rem,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
              <Reveal distance={56} scale={0.98}>
                <div className="relative isolate aspect-[1121/1403] overflow-hidden rounded-[15px] border border-border bg-secondary/55 shadow-luxe lg:sticky lg:top-32">
                  <Image
                    src={deepProductInformation}
                    alt={content.hero.productAlt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className="border-t border-border">
                {content.information.rows.map(([label, value], index) => {
                  const Icon = informationIcons[index] ?? Box;
                  return (
                    <Reveal key={label} delay={index * 70} distance={36}>
                      <article className="grid gap-4 border-b border-border py-7 sm:grid-cols-[minmax(10rem,0.55fr)_minmax(0,1fr)] sm:gap-8 sm:py-8">
                        <div className="flex items-center gap-3 text-primary">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-deep/35 bg-card shadow-card">
                            <Icon className="h-4 w-4" strokeWidth={1.4} />
                          </span>
                          <h3 className="font-sans text-sm font-medium tracking-[0.02em] rtl:text-base">
                            {label}
                          </h3>
                        </div>
                        <p className="text-sm leading-[1.8] text-muted-foreground rtl:text-base sm:pt-2">
                          {value}
                        </p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary">
          <Reveal distance={40}>
            <Image
              src={deepIndications}
              alt={`${content.indications.title}: ${content.indications.items.join(", ")}`}
              width={1672}
              height={941}
              sizes="100vw"
              className="h-auto w-full object-contain"
            />
          </Reveal>
        </section>

        <section className="border-y border-border bg-secondary/45 px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal distance={40}>
              <SectionHeading
                eyebrow={content.advantages.eyebrow}
                title={content.advantages.title}
              />
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {content.advantages.items.map((item, index) => {
                const Icon = advantageIcons[index] ?? ShieldCheck;
                return (
                  <Reveal key={item} delay={index * 80} distance={42}>
                    <article className="product-card-gold flex h-full min-h-40 items-start gap-5 bg-card p-6 sm:p-8">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-accent shadow-card">
                        <Icon className="h-5 w-5" strokeWidth={1.35} />
                      </span>
                      <div>
                        <span className="text-[0.62rem] tracking-[0.18em] text-gold-deep uppercase">
                          0{index + 1}
                        </span>
                        <p className="mt-3 text-sm leading-[1.75] text-foreground/78 rtl:text-base">
                          {item}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal distance={36}>
              <div className="mt-16 flex items-center gap-5">
                <span className="h-px flex-1 bg-border" />
                <h3 className="max-w-2xl text-center text-2xl leading-tight text-primary rtl:text-[1.75rem] sm:text-3xl sm:rtl:text-[2rem]">
                  {content.advantages.uniqueTitle}
                </h3>
                <span className="h-px flex-1 bg-border" />
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {content.advantages.uniqueItems.map((item, index) => {
                const Icon = uniqueAdvantageIcons[index] ?? PackageCheck;
                return (
                  <Reveal key={item} delay={index * 100} distance={44}>
                    <article className="card-luxe h-full p-7 sm:p-8">
                      <div className="flex items-center justify-between gap-5">
                        <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-deep/35 text-primary">
                          <Icon className="h-5 w-5" strokeWidth={1.35} />
                        </span>
                        <span className="font-display text-4xl text-primary/10">0{index + 5}</span>
                      </div>
                      <p className="mt-7 text-sm leading-[1.75] text-muted-foreground rtl:text-base">
                        {item}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
              <Reveal distance={40}>
                <SectionHeading eyebrow={content.feedback.eyebrow} title={content.feedback.title} />
              </Reveal>
              <Reveal delay={100} distance={40}>
                <p className="border-t border-accent/80 pt-6 text-sm leading-[1.8] text-muted-foreground rtl:text-base">
                  {content.feedback.instruction}
                </p>
              </Reveal>
            </div>
            <div className="mt-8 flex justify-end gap-2 lg:hidden">
              <button
                type="button"
                aria-label={content.feedback.previous}
                onClick={() => selectFeedbackCard(activeFeedbackIndex - 1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:border-accent hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ChevronLeft className="h-4 w-4 rtl:rotate-180" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label={content.feedback.next}
                onClick={() => selectFeedbackCard(activeFeedbackIndex + 1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:border-accent hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ChevronRight className="h-4 w-4 rtl:rotate-180" strokeWidth={1.5} />
              </button>
            </div>
            <div
              ref={feedbackScrollRef}
              className="scrollbar-none mt-4 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 sm:gap-8 lg:mt-12 lg:overflow-visible"
            >
              {feedbackItems.map((item, index) => (
                <div
                  key={item.title}
                  ref={(element) => {
                    feedbackCardRefs.current[index] = element;
                  }}
                  className="w-[82vw] max-w-[21rem] shrink-0 snap-start sm:w-[44vw] sm:max-w-none lg:w-[calc((100%-4rem)/3)]"
                >
                  <Reveal delay={index * 90} className="h-full">
                    <BeforeAfterCard
                      before={item.before}
                      after={item.after}
                      alt={item.alt}
                      title={item.title}
                      comparisonLabel={content.feedback.comparison(item.title)}
                    />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
