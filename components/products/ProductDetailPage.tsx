"use client";

import type { StaticImageData } from "next/image";
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

import bodyAfter from "@/assets/Before-After/After-Body.png";
import jawlineAfter from "@/assets/Before-After/Jawline-after.png";
import jawlineBefore from "@/assets/Before-After/Jawline-before.png";
import cheekAfter from "@/assets/Before-After/Cheek-after.png";
import cheekBefore from "@/assets/Before-After/Cheek-before.png";
import templeAfter from "@/assets/Before-After/Temple-after.png";
import templeBefore from "@/assets/Before-After/Temple-before.png";
import bodyBefore from "@/assets/Before-After/Before-Body.png";
import hyacLiftImage from "@/assets/hyac-lift-16-chac.jpg";
import bodyFillerImage from "@/assets/body-filler-2x50ml.png";
import deep10Image from "@/assets/product-deep-10ml.png";
import marvelImage from "@/assets/product-Secro-marvel.png";
import { BeforeAfterCard } from "@/components/site/BeforeAfterCard";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SectionHeading } from "@/components/site/InnerPageSections";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/lib/company";
import { useI18n, type Lang } from "@/lib/i18n";

type ProductDefinition = {
  brand: string;
  name: string;
  madeIn: string;
  productType: string;
  volume: string;
  concentration: string;
  pdf: string;
  downloadName: string;
  image: StaticImageData;
  imageAlt: string;
  information: Array<[string, string]>;
  indications: string[];
  advantages: string[];
  profileTitle: string;
  profileItems: string[];
  feedback?: Array<{
    title: string;
    before: StaticImageData;
    after: StaticImageData;
  }>;
};

const labels = {
  en: {
    informationEyebrow: "Clinical profile",
    informationTitle: "Product information",
    indicationEyebrow: "Treatment areas",
    indicationTitle: "Indication",
    advantagesEyebrow: "Product advantages",
    feedbackEyebrow: "Work proof",
    feedbackTitle: "Feedbacks",
    feedbackInstruction: "Drag the handle to compare before and after.",
    download: "Download product PDF",
    contact: "Contact us",
  },
  de: {
    informationEyebrow: "Klinisches Profil",
    informationTitle: "Produktinformationen",
    indicationEyebrow: "Behandlungsbereiche",
    indicationTitle: "Indikation",
    advantagesEyebrow: "Produktvorteile",
    feedbackEyebrow: "Ergebnisdokumentation",
    feedbackTitle: "Feedbacks",
    feedbackInstruction: "Ziehen Sie den Regler, um Vorher und Nachher zu vergleichen.",
    download: "Produkt-PDF herunterladen",
    contact: "Kontakt",
  },
  ar: {
    informationEyebrow: "الملف السريري",
    informationTitle: "معلومات المنتج",
    indicationEyebrow: "مناطق العلاج",
    indicationTitle: "دواعي الاستخدام",
    advantagesEyebrow: "مزايا المنتج",
    feedbackEyebrow: "توثيق النتائج",
    feedbackTitle: "النتائج",
    feedbackInstruction: "اسحب المؤشر للمقارنة بين قبل وبعد.",
    download: "تحميل ملف المنتج",
    contact: "تواصل معنا",
  },
} satisfies Record<Lang, Record<string, string>>;

const informationIcons = [Box, Syringe, Sparkles, Crosshair, Layers3];
const advantageIcons = [ShieldCheck, Clock3, Sparkles, Layers3];
const profileIcons = [Syringe, PackageCheck, ShieldCheck];

export const product2: ProductDefinition = {
  brand: "SECRO-FILL",
  name: "DEEP",
  madeIn: "Made in Germany",
  productType: "Monophasic Cross-Linked Hyaluronic Acid Filler",
  volume: "1 × 10ml pre-filled syringe",
  concentration: "25mg/ml",
  pdf: "/downloads/secro-fill-deep-10ml.pdf",
  downloadName: "SECRO-FILL-DEEP-10ml.pdf",
  image: deep10Image,
  imageAlt: "SECRO-FILL DEEP 10ml box with a pre-filled syringe",
  information: [
    ["Product Type", "Monophasic Cross-Linked Hyaluronic Acid Filler"],
    ["Volume", "10ml"],
    ["HA Concentration", "25mg/ml"],
    [
      "Core Application",
      "Facial contour reshaping: fills sunken areas such as temples and cheeks for a plump 3D contour; shapes the chin and nose bridge to boost facial harmony.",
    ],
    ["Suggested Injection Depth", "Deep dermis to subcutaneous tissue"],
  ],
  indications: ["Nose filler and shaping", "Chin augmentation and shaping", "Jawline shaping"],
  advantages: [
    "25mg/ml high concentration for strong and stable contour support",
    "Long-lasting effect up to 12-18 months",
    "Fully biocompatible with minimal post-treatment downtime",
    "Homogeneous monophasic gel structure for natural, lump-free results",
  ],
  profileTitle: "The DEEP 10ml product profile",
  profileItems: [
    "One 10ml pre-filled syringe for facial contour reshaping",
    "Designed for deep dermis to subcutaneous injection depth",
    "Supports sculpting of the nose, chin and jawline",
  ],
  feedback: [
    { title: "Cheek contour", before: cheekBefore, after: cheekAfter },
    { title: "Temple contour", before: templeBefore, after: templeAfter },
    { title: "Jawline contour", before: jawlineBefore, after: jawlineAfter },
  ],
};

export const product3: ProductDefinition = {
  brand: "SECRO-FILL",
  name: "BODY",
  madeIn: "Made in Germany",
  productType: "Biphasic Cross-Linked Hyaluronic Acid Filler",
  volume: "2 × 50ml pre-filled syringes",
  concentration: "26mg/ml",
  pdf: "/downloads/secro-fill-body.pdf",
  downloadName: "SECRO-FILL-BODY-FILLER.pdf",
  image: bodyFillerImage,
  imageAlt: "SECRO-FILL BODY FILLER two 50ml pre-filled syringes",
  information: [
    ["Product Type", "Biphasic Cross-Linked Hyaluronic Acid Filler"],
    ["Volume", "2 × 50ml (Total 100ml, 2 pre-filled syringes)"],
    ["HA Concentration", "26mg/ml"],
    [
      "Core Application",
      "Buttock augmentation and contouring: enhances volume for a fuller, lifted shape; refines contour and improves symmetry for a harmonious body curve.",
    ],
    ["Suggested Injection Depth", "Subcutaneous to deep subcutaneous tissue"],
  ],
  indications: ["Butt enlargement", "Filling skin depressions"],
  advantages: [
    "Ready-to-use two-syringe pre-filled packaging with no complicated transfer or dosage measurement steps",
    "Boosts clinical efficiency and reduces contamination risk during preparation",
    "Flexible dosage adjustment for personalized buttock enhancement needs",
    "26mg/ml concentration, long-lasting effect up to 12-18 months and minimal downtime",
  ],
  profileTitle: "The biphasic gel structure advantage",
  profileItems: [
    "Firm cross-linked HA particle core for durable volume retention",
    "Smooth non-cross-linked HA matrix for natural tissue integration",
    "Balances long-term support with a soft, natural post-treatment texture",
  ],
  feedback: [{ title: "Body contour", before: bodyBefore, after: bodyAfter }],
};

export const product4: ProductDefinition = {
  brand: "SECRO-",
  name: "MARVEL",
  madeIn: "German-engineered skin revitalizing injectable",
  productType: "Advanced Skin Revitalizing Complex",
  volume: "2 × 3ml pre-filled syringes",
  concentration: "HA 18mg/ml",
  pdf: "/downloads/SECRO-MARVEL.pdf",
  downloadName: "SECRO-MARVEL.pdf",
  image: marvelImage,
  imageAlt: "SECRO-MARVEL advanced skin revitalizing complex packaging",
  information: [
    ["Product Type", "Advanced skin revitalizing injectable"],
    ["Volume", "2 pre-filled syringes × 3ml per box"],
    ["HA Concentration", "18mg/ml cross-linked low-molecular-weight HA"],
    ["Core Actives", "HA + PN + PDRN + bioactive collagen + glutathione"],
    ["Clinical Classification", "Sterile, microbiologically tested injectable solution"],
  ],
  indications: [
    "Skin rejuvenation and anti-aging",
    "Post-procedure repair",
    "Brightening and tone correction",
    "Hydration boost",
  ],
  advantages: [
    "Balanced synergistic formula with five optimized active ingredients for reliable, natural-looking results",
    "Versatile application for mesotherapy, microneedling and multi-point injection protocols",
    "Controlled-release formulation extends benefits for 3-6 months post-treatment",
    "Biocompatible solution minimizes redness, swelling and irritation for rapid recovery",
  ],
  profileTitle: "Advanced formulation technology",
  profileItems: [
    "Seven-step filtration system helps ensure ultra-low immunogenicity and maximum biocompatibility",
    "pH-buffered, isotonic solution preserves the integrity of PN, PDRN and collagen",
    "Synergistic matrix combines hydration, regeneration, structural support and antioxidant protection",
  ],
};

export const product5: ProductDefinition = {
  brand: "HYAC",
  name: "LIFT",
  madeIn: "Professional use · Made in Spain",
  productType: "Multi-molecular HA injectable booster with CHAC technology",
  volume: "1 × 2ml pre-filled syringe",
  concentration: "160mg/ml hyaluronic acid",
  pdf: "/downloads/HYAC-LIFT%2016%25%20CHAC.pdf",
  downloadName: "HYAC-LIFT-16-CHAC.pdf",
  image: hyacLiftImage,
  imageAlt: "HYAC-LIFT 16% CHAC box and pre-filled syringe",
  information: [
    ["Product Type", "Anti-aging injectable booster with CHAC technology"],
    ["Volume", "1 × 2ml pre-filled syringe"],
    [
      "HA Concentration",
      "160mg/ml: 80mg high molecular weight CHAC HA + 80mg low molecular weight CHAC HA",
    ],
    [
      "Core Ingredients",
      "CHAC sodium hyaluronate, sodium chloride, disodium phosphate and sodium phosphate",
    ],
    ["Treatment Protocol", "2 sessions every 1 month"],
  ],
  indications: [
    "Face, neck, shoulders, arms, hands and knees",
    "Dry or dehydrated skin",
    "Fine lines and slight sagging",
    "Skin hydration and rejuvenation",
  ],
  advantages: [
    "Excellent fluidity and ductility so the product blends naturally with the skin",
    "Convenient, fast injection course with immediate return to normal work and life",
    "Double skin rejuvenation effect: moisturizes, locks in moisture, tightens skin and helps reduce wrinkles",
    "High concentration with a long-lasting effect and a safe treatment process",
  ],
  profileTitle: "The effects of HYAC-LIFT (16% CHAC)",
  profileItems: [
    "Deeply hydrates and nourishes the skin while helping regulate its water-oil balance",
    "Promotes collagen and elastin production for a fuller, smoother facial contour",
    "Helps restore elasticity, improve cell vitality and smooth fine lines and wrinkles",
  ],
};

export function ProductDetailPage({ product }: { product: ProductDefinition }) {
  const { lang } = useI18n();
  const copy = labels[lang];

  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 sm:pb-28">
        <section className="relative isolate overflow-hidden border-b border-border bg-[#eee9de]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_77%_26%,rgba(255,255,255,0.9),transparent_29%),linear-gradient(120deg,#f5f1e9_0%,#eee9de_100%)]"
          />
          <div className="relative mx-auto grid min-h-[46rem] max-w-7xl items-end px-5 pt-28 pb-12 sm:min-h-[48rem] sm:px-8 sm:pt-36 sm:pb-20 lg:min-h-[min(56vw,52rem)] lg:grid-cols-[minmax(0,0.84fr)_minmax(30rem,1.16fr)] lg:px-10 lg:pt-40 lg:pb-24">
            <header className="relative z-10 max-w-[18rem] animate-rise text-primary sm:max-w-2xl lg:max-w-xl lg:pb-4">
              <p className="text-[0.56rem] tracking-[0.22em] text-gold-deep uppercase rtl:text-xs rtl:tracking-normal rtl:normal-case sm:eyebrow">
                {product.madeIn}
              </p>
              <div className="mt-3 h-px w-10 bg-accent sm:mt-4 sm:w-14" />
              <h1 className="mt-5 leading-[0.86] sm:mt-7">
                <span className="block text-[2.25rem] sm:text-6xl lg:text-[4.35rem] xl:text-[4.75rem]">
                  {product.brand}
                </span>
                <span className="mt-1 block text-[3.6rem] text-gradient-gold sm:mt-2 sm:text-[6rem] lg:text-[7rem] xl:text-[7.75rem]">
                  {product.name}
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-[0.72rem] leading-[1.55] text-primary/80 rtl:text-[0.8125rem] sm:mt-7 sm:text-lg sm:leading-[1.8] sm:rtl:text-[1.0625rem]">
                {product.productType}
              </p>
              <div className="mt-4 flex max-w-xl flex-col gap-2 sm:mt-7 sm:gap-3">
                <Fact icon={Syringe}>{product.volume}</Fact>
                <Fact icon={FlaskConical}>{product.concentration}</Fact>
              </div>
              <div className="mt-10 flex flex-col gap-2 sm:mt-9 sm:gap-3 sm:flex-row">
                <a
                  href={product.pdf}
                  download={product.downloadName}
                  className="animate-download-gold-glow inline-flex w-fit min-h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-3 text-[0.52rem] tracking-[0.12em] uppercase text-primary-foreground transition-transform hover:-translate-y-0.5 rtl:text-xs rtl:tracking-normal rtl:normal-case sm:min-h-12 sm:gap-3 sm:px-7 sm:text-[0.68rem] sm:tracking-[0.16em] sm:rtl:text-sm"
                >
                  {copy.download}
                  <ArrowDownToLine className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-fit min-h-10 items-center justify-center gap-1.5 rounded-full border border-primary/45 bg-background/35 px-3 text-[0.52rem] tracking-[0.12em] uppercase text-primary backdrop-blur-sm transition-colors hover:bg-background/60 rtl:text-xs rtl:tracking-normal rtl:normal-case sm:min-h-12 sm:gap-3 sm:px-7 sm:text-[0.68rem] sm:tracking-[0.16em] sm:rtl:text-sm"
                >
                  {copy.contact}
                  <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180 sm:h-4 sm:w-4" />
                </a>
              </div>
            </header>
            <Reveal
              distance={44}
              scale={0.98}
              className="relative mt-10 min-h-[20rem] self-stretch sm:min-h-[26rem] lg:mt-0 lg:min-h-0"
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-contain object-center lg:object-right"
              />
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal distance={40}>
              <SectionHeading eyebrow={copy.informationEyebrow} title={copy.informationTitle} />
            </Reveal>
            <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(20rem,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
              <Reveal distance={56} scale={0.98}>
                <div className="lg:sticky lg:top-32">
                  <div className="relative isolate aspect-[1121/1403] overflow-hidden rounded-[15px] border border-border bg-secondary/55 shadow-luxe">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </Reveal>
              <div className="border-t border-border">
                {product.information.map(([label, value], index) => {
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
          <Image
            src={product.image}
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-contain object-right opacity-[0.12]"
          />
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(20rem,0.65fr)] lg:items-end">
            <Reveal distance={40}>
              <SectionHeading
                eyebrow={copy.indicationEyebrow}
                title={copy.indicationTitle}
                className="[&_h2]:text-primary-foreground [&_p.eyebrow]:!text-accent"
              />
            </Reveal>
            <div className="grid gap-3">
              {product.indications.map((item, index) => (
                <Reveal key={item} delay={index * 80} distance={36}>
                  <div className="flex items-center gap-4 border-b border-primary-foreground/20 py-4">
                    <span className="font-display text-3xl text-accent">0{index + 1}</span>
                    <p className="text-sm leading-relaxed text-primary-foreground/84 rtl:text-base sm:text-base">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/45 px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal distance={40}>
              <SectionHeading
                eyebrow={copy.advantagesEyebrow}
                title={`What are the advantages of ${product.brand}${product.name === "MARVEL" ? "" : " "}${product.name}?`}
              />
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {product.advantages.map((item, index) => {
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
                  {product.profileTitle}
                </h3>
                <span className="h-px flex-1 bg-border" />
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {product.profileItems.map((item, index) => {
                const Icon = profileIcons[index] ?? PackageCheck;
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

        {product.feedback && (
          <section className="px-5 py-20 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
                <Reveal distance={40}>
                  <SectionHeading eyebrow={copy.feedbackEyebrow} title={copy.feedbackTitle} />
                </Reveal>
                <Reveal delay={100} distance={40}>
                  <p className="border-t border-accent/80 pt-6 text-sm leading-[1.8] text-muted-foreground rtl:text-base">
                    {copy.feedbackInstruction}
                  </p>
                </Reveal>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {product.feedback.map((item, index) => (
                  <Reveal key={item.title} delay={index * 90} className="h-full">
                    <BeforeAfterCard
                      before={item.before}
                      after={item.after}
                      alt={item.title}
                      title={item.title}
                      comparisonLabel={`${item.title} before and after comparison`}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}

function Fact({ icon: Icon, children }: { icon: typeof Syringe; children: string }) {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-primary shadow-card sm:h-9 sm:w-9">
        <Icon className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.35} />
      </span>
      <span className="text-[0.625rem] leading-relaxed tracking-[0.06em] text-primary/85 rtl:text-[0.6875rem] rtl:tracking-normal sm:text-xs sm:tracking-[0.08em] sm:rtl:text-sm">
        {children}
      </span>
    </div>
  );
}
