"use client";

import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowRight,
  Box,
  Clock3,
  Crosshair,
  FlaskConical,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Syringe,
} from "lucide-react";

import afterNose from "@/assets/Before-After/After-nose.png";
import beforeNose from "@/assets/Before-After/Before-nose.png";
import afterChin from "@/assets/Before-After/after-chin.png";
import beforeChin from "@/assets/Before-After/before-chin.png";
import doubleChinAfter from "@/assets/Before-After/After-Double chin.png";
import doubleChinBefore from "@/assets/Before-After/Before-Double chin.png";
import deepCinematicHero from "@/assets/product-1/deep-cinematic-hero.png";
import deepProduct from "@/assets/product-1/deep-product.png";
import indicationChin from "@/assets/product-1/indication-chin.png";
import indicationJawline from "@/assets/product-1/indication-jawline.png";
import indicationNose from "@/assets/product-1/indication-nose.png";
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
    },
  },
} satisfies Record<Lang, unknown>;

const informationIcons = [Box, Syringe, Sparkles, Crosshair, Layers3];
const indicationImages = [indicationNose, indicationChin, indicationJawline];
const advantageIcons = [ShieldCheck, Clock3, Sparkles, Layers3];
const uniqueAdvantageIcons = [Syringe, PackageCheck, ShieldCheck];

export function Deep32ProductPage() {
  const { lang, t } = useI18n();
  const content = copy[lang];
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

  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 sm:pb-28">
        <section className="relative isolate min-h-[44rem] overflow-hidden border-b border-border bg-primary sm:min-h-[48rem] lg:min-h-[50rem]">
          <Image
            src={deepCinematicHero}
            alt={content.hero.heroAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[55%_center] sm:object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/[0.86] from-0% via-primary/[0.54] via-45% to-transparent to-78% rtl:bg-gradient-to-l"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/35 via-transparent to-transparent"
          />

          <div className="relative z-10 mx-auto flex min-h-[44rem] max-w-7xl items-end px-5 pt-32 pb-20 sm:min-h-[48rem] sm:px-8 sm:pt-36 lg:min-h-[50rem] lg:px-10 lg:pt-40 lg:pb-24">
            <header className="max-w-2xl animate-rise text-primary-foreground lg:max-w-xl">
              <p className="eyebrow text-accent">{content.hero.eyebrow}</p>
              <div className="mt-4 h-px w-14 bg-accent" />
              <h1 className="mt-7 leading-[0.86]">
                <span className="block text-[2.9rem] sm:text-6xl lg:text-[4.35rem] xl:text-[4.75rem]">
                  SECRO-FILL
                </span>
                <span className="mt-2 block text-[4.5rem] text-gradient-gold sm:text-[6rem] lg:text-[7rem] xl:text-[7.75rem]">
                  DEEP
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-[1.8] text-primary-foreground/85 rtl:text-[1.0625rem] sm:text-lg">
                {content.hero.productType}
              </p>
              <div className="mt-7 grid max-w-xl grid-cols-2 gap-3">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-primary shadow-card">
                    <Syringe className="h-5 w-5" strokeWidth={1.35} />
                  </span>
                  <span className="text-[0.68rem] leading-relaxed tracking-[0.06em] text-primary-foreground rtl:text-sm rtl:tracking-normal sm:text-xs">
                    {content.hero.volume}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-primary shadow-card">
                    <FlaskConical className="h-5 w-5" strokeWidth={1.35} />
                  </span>
                  <span className="text-xs leading-relaxed tracking-[0.08em] text-primary-foreground rtl:text-sm rtl:tracking-normal">
                    25mg/ml
                  </span>
                </div>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={productPdf}
                  download="SECRO-FILL-DEEP-3x3.2ml.pdf"
                  className="animate-download-gold-glow inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-7 text-[0.68rem] tracking-[0.16em] uppercase text-primary-foreground transition-transform hover:-translate-y-0.5 rtl:text-sm rtl:tracking-normal rtl:normal-case"
                >
                  {content.hero.download}
                  <ArrowDownToLine className="h-4 w-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-accent/70 bg-primary/15 px-7 text-[0.68rem] tracking-[0.16em] uppercase text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary/30 rtl:text-sm rtl:tracking-normal rtl:normal-case"
                >
                  {content.hero.contact}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
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
                <div className="relative isolate aspect-[5/4] overflow-hidden border border-border bg-secondary/55 shadow-luxe lg:sticky lg:top-32 lg:aspect-[4/5]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-[12%] bottom-[10%] -z-10 h-20 rounded-full bg-primary/16 blur-2xl"
                  />
                  <Image
                    src={deepProduct}
                    alt={content.hero.productAlt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="scale-[0.9] object-contain"
                  />
                  <span className="absolute end-5 top-5 font-display text-5xl text-primary/10">
                    01
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
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

        <section className="relative isolate overflow-hidden bg-primary px-5 py-20 text-primary-foreground lg:px-10 lg:py-28">
          <div
            aria-hidden="true"
            className="absolute -end-40 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl"
          />
          <div className="mx-auto max-w-7xl">
            <Reveal distance={40}>
              <SectionHeading
                eyebrow={content.indications.eyebrow}
                title={content.indications.title}
                className="[&_h2]:text-primary-foreground [&_p.eyebrow]:!text-accent"
              />
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-10">
              {content.indications.items.map((label, index) => {
                const image = indicationImages[index] ?? indicationNose;
                return (
                  <Reveal key={label} delay={index * 110} distance={52} scale={0.985}>
                    <article className="group text-center">
                      <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-full border border-primary-foreground/20 bg-card shadow-luxe">
                        <Image
                          src={image}
                          alt={label}
                          fill
                          sizes="(min-width: 768px) 30vw, 90vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full ring-1 ring-inset ring-accent/25"
                        />
                      </div>
                      <div className="mx-auto mt-7 flex max-w-xs items-center justify-center gap-3">
                        <span className="font-display text-xl text-accent">0{index + 1}</span>
                        <span aria-hidden="true" className="h-px w-8 bg-accent/65" />
                        <h3 className="text-xl leading-tight text-primary-foreground rtl:text-[1.375rem]">
                          {label}
                        </h3>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
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
            <div className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 sm:gap-8 lg:overflow-visible">
              {feedbackItems.map((item, index) => (
                <div
                  key={item.title}
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
