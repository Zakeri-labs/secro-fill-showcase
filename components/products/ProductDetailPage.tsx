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
import buttocksAfter from "@/assets/Before-After/buttocks-after.png";
import buttocksBefore from "@/assets/Before-After/buttocks-before.png";
import chinWrinklesAfter from "@/assets/Before-After/Chin wrinkles-after.png";
import chinWrinklesBefore from "@/assets/Before-After/Chin wrinkles-before.png";
import crowsFeetAfter from "@/assets/Before-After/Crow's feet-after.png";
import crowsFeetBefore from "@/assets/Before-After/Crow's feet-before.png";
import handAfter from "@/assets/Before-After/Hand-after.png";
import handBefore from "@/assets/Before-After/Hand-before.png";
import jawlineAfter from "@/assets/Before-After/Jawline-after.png";
import jawlineBefore from "@/assets/Before-After/Jawline-before.png";
import neckBrighteningAfter from "@/assets/Before-After/Neck-Brighting-after.png";
import neckBrighteningBefore from "@/assets/Before-After/Neck-Brighting-before.png";
import cheekAfter from "@/assets/Before-After/Cheek-after.png";
import cheekBefore from "@/assets/Before-After/Cheek-before.png";
import templeAfter from "@/assets/Before-After/Temple-after.png";
import templeBefore from "@/assets/Before-After/Temple-before.png";
import bodyBefore from "@/assets/Before-After/Before-Body.png";
import hyacLiftImage from "@/assets/HYAC-LIFT-16 CHAC.png";
import bodyFillerImage from "@/assets/body-filler-2x50ml.png";
import deep10Image from "@/assets/product-deep-10ml.png";
import marvelImage from "@/assets/product-Secro-marvel.png";
import product2HeroImage from "@/assets/product-2/hero-image.png";
import product2HeroImageMobile from "@/assets/product-2/hero-image-mobile.png";
import product2InformationImage from "@/assets/product-2/product-info.png";
import product3HeroImage from "@/assets/product-3/hero-image.png";
import product3HeroImageMobile from "@/assets/product-3/Hero-image-mobile.png";
import product3InformationImage from "@/assets/product-3/product-info.png";
import product4HeroImage from "@/assets/product-4/hero-image.png";
import product4HeroImageMobile from "@/assets/product-4/Hero-image-mobile.png";
import product4InformationImage from "@/assets/product-4/product-info.png";
import product5HeroImage from "@/assets/product-5/Hero-image.png";
import product5HeroImageMobile from "@/assets/product-5/Hero-image-mobile.png";
import product5InformationImage from "@/assets/product-5/product-info.png";
import { BeforeAfterCard } from "@/components/site/BeforeAfterCard";
import { ProductPdfDownload } from "@/components/products/ProductPdfDownload";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SectionHeading } from "@/components/site/InnerPageSections";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/lib/company";
import { useI18n, type Lang } from "@/lib/i18n";

type ProductContent = {
  madeIn: string;
  productType: string;
  volume: string;
  concentration: string;
  imageAlt: string;
  information: Array<[string, string]>;
  indications: string[];
  advantages: string[];
  advantagesTitle: string;
  profileTitle?: string;
  profileItems?: string[];
  feedbackTitles?: string[];
};

type ProductDefinition = ProductContent & {
  theme?: "cream-gold-blush";
  brand: string;
  name: string;
  pdf: string;
  downloadName: string;
  image: StaticImageData;
  heroImage: StaticImageData;
  heroImageMobile: StaticImageData;
  informationImage: StaticImageData;
  translations: Partial<Record<Lang, ProductContent>>;
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
  heroImage: product2HeroImage,
  heroImageMobile: product2HeroImageMobile,
  informationImage: product2InformationImage,
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
  advantagesTitle: "What are the advantages of SECRO-FILL DEEP?",
  feedback: [
    { title: "Cheek contour", before: cheekBefore, after: cheekAfter },
    { title: "Temple contour", before: templeBefore, after: templeAfter },
    { title: "Jawline contour", before: jawlineBefore, after: jawlineAfter },
  ],
  feedbackTitles: ["Cheek contour", "Temple contour", "Jawline contour"],
  translations: {
    de: {
      madeIn: "Hergestellt in Deutschland",
      productType: "Monophasischer, quervernetzter Hyaluronsäure-Filler",
      volume: "1 × 10 ml vorgefüllte Spritze",
      concentration: "25 mg/ml",
      imageAlt: "SECRO-FILL DEEP 10 ml Packung mit vorgefüllter Spritze",
      information: [
        ["Produkttyp", "Monophasischer, quervernetzter Hyaluronsäure-Filler"],
        ["Volumen", "10 ml"],
        ["HA-Konzentration", "25 mg/ml"],
        [
          "Hauptanwendung",
          "Neugestaltung der Gesichtskonturen: Füllt eingesunkene Bereiche wie Schläfen und Wangen für eine volle 3D-Kontur auf; formt Kinn und Nasenrücken für mehr Gesichtsharmonie.",
        ],
        ["Empfohlene Injektionstiefe", "Tiefe Dermis bis subkutanes Gewebe"],
      ],
      indications: [
        "Nasenfiller und Formung",
        "Kinnaugmentation und Formung",
        "Formung der Kieferlinie",
      ],
      advantages: [
        "Hohe Konzentration von 25 mg/ml für starken und stabilen Konturhalt",
        "Lang anhaltende Wirkung von bis zu 12–18 Monaten",
        "Vollständig biokompatibel bei minimaler Ausfallzeit nach der Behandlung",
        "Homogene monophasische Gelstruktur für natürliche, knötchenfreie Ergebnisse",
      ],
      advantagesTitle: "Welche Vorteile bietet SECRO-FILL DEEP?",
      feedbackTitles: ["Wangenkontur", "Schläfenkontur", "Kieferlinienkontur"],
    },
    ar: {
      madeIn: "صنع في ألمانيا",
      productType: "فيلر حمض الهيالورونيك أحادي الطور والمتشابك",
      volume: "محقنة واحدة معبأة مسبقاً × 10 مل",
      concentration: "25 ملغ/مل",
      imageAlt: "عبوة SECRO-FILL DEEP سعة 10 مل مع محقنة معبأة مسبقاً",
      information: [
        ["نوع المنتج", "فيلر حمض الهيالورونيك أحادي الطور والمتشابك"],
        ["الحجم", "10 مل"],
        ["تركيز حمض الهيالورونيك", "25 ملغ/مل"],
        [
          "الاستخدام الأساسي",
          "إعادة تشكيل ملامح الوجه: يملأ المناطق الغائرة مثل الصدغين والخدين للحصول على مظهر ثلاثي الأبعاد ممتلئ؛ ويشكّل الذقن وجسر الأنف لتعزيز تناسق الوجه.",
        ],
        ["عمق الحقن المقترح", "من الأدمة العميقة إلى النسيج تحت الجلد"],
      ],
      indications: ["فيلر الأنف وتشكيله", "تكبير الذقن وتشكيله", "تشكيل خط الفك"],
      advantages: [
        "تركيز عالٍ 25 ملغ/مل لدعم قوي وثابت لملامح الوجه",
        "تأثير طويل الأمد يصل إلى 12–18 شهراً",
        "متوافق حيوياً بالكامل مع حد أدنى من فترة التعافي بعد العلاج",
        "بنية جل متجانسة أحادية الطور لنتائج طبيعية وخالية من التكتلات",
      ],
      advantagesTitle: "ما مزايا SECRO-FILL DEEP؟",
      feedbackTitles: ["تحديد الخدود", "تحديد الصدغين", "تحديد خط الفك"],
    },
  },
};

export const product3: ProductDefinition = {
  theme: "cream-gold-blush",
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
  heroImage: product3HeroImage,
  heroImageMobile: product3HeroImageMobile,
  informationImage: product3InformationImage,
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
  advantagesTitle: "What are the advantages of SECRO-FILL BODY?",
  profileTitle: "The biphasic gel structure advantage",
  profileItems: [
    "Firm cross-linked HA particle core for durable volume retention",
    "Smooth non-cross-linked HA matrix for natural tissue integration",
    "Balances long-term support with a soft, natural post-treatment texture",
  ],
  feedback: [
    { title: "Body contour", before: bodyBefore, after: bodyAfter },
    { title: "Buttocks contour", before: buttocksBefore, after: buttocksAfter },
  ],
  feedbackTitles: ["Body contour", "Buttocks contour"],
  translations: {
    de: {
      madeIn: "Hergestellt in Deutschland",
      productType: "Biphasischer, quervernetzter Hyaluronsäure-Filler",
      volume: "2 × 50 ml vorgefüllte Spritzen",
      concentration: "26 mg/ml",
      imageAlt: "SECRO-FILL BODY FILLER mit zwei vorgefüllten 50-ml-Spritzen",
      information: [
        ["Produkttyp", "Biphasischer, quervernetzter Hyaluronsäure-Filler"],
        ["Volumen", "2 × 50 ml (insgesamt 100 ml, 2 vorgefüllte Spritzen)"],
        ["HA-Konzentration", "26 mg/ml"],
        [
          "Hauptanwendung",
          "Gesäßaugmentation und Konturierung: Erhöht das Volumen für eine vollere, angehobene Form; verfeinert die Kontur und verbessert die Symmetrie für eine harmonische Körperlinie.",
        ],
        ["Empfohlene Injektionstiefe", "Subkutan bis tief subkutan"],
      ],
      indications: ["Gesäßvergrößerung", "Auffüllen von Hauteinziehungen"],
      advantages: [
        "Gebrauchsfertige Verpackung mit zwei vorgefüllten Spritzen ohne aufwändige Umfüll- oder Dosierschritte",
        "Erhöht die klinische Effizienz und reduziert das Kontaminationsrisiko bei der Vorbereitung",
        "Flexible Dosisanpassung für individuelle Anforderungen an die Gesäßaugmentation",
        "26 mg/ml Konzentration, lang anhaltende Wirkung von bis zu 12–18 Monaten und minimale Ausfallzeit",
      ],
      advantagesTitle: "Welche Vorteile bietet SECRO-FILL BODY?",
      profileTitle: "Der Vorteil der biphasischen Gelstruktur",
      profileItems: [
        "Fester, quervernetzter HA-Partikelkern für lang anhaltenden Volumenerhalt",
        "Glatte, nicht quervernetzte HA-Matrix für eine natürliche Gewebeintegration",
        "Vereint langfristigen Halt mit einem weichen, natürlichen Gefühl nach der Behandlung",
      ],
      feedbackTitles: ["Körperkontur", "Gesäßkontur"],
    },
    ar: {
      madeIn: "صنع في ألمانيا",
      productType: "فيلر حمض الهيالورونيك ثنائي الطور والمتشابك",
      volume: "محاقن معبأة مسبقاً 2 × 50 مل",
      concentration: "26 ملغ/مل",
      imageAlt: "SECRO-FILL BODY FILLER مع محقنتين معبأتين مسبقاً سعة 50 مل",
      information: [
        ["نوع المنتج", "فيلر حمض الهيالورونيك ثنائي الطور والمتشابك"],
        ["الحجم", "2 × 50 مل (إجمالي 100 مل، محقنتان معبأتان مسبقاً)"],
        ["تركيز حمض الهيالورونيك", "26 ملغ/مل"],
        [
          "الاستخدام الأساسي",
          "تكبير الأرداف وتحديدها: يعزز الحجم للحصول على شكل أكثر امتلاءً وارتفاعاً؛ ويحسّن التحديد والتماثل لمنح منحنى جسم متناسق.",
        ],
        ["عمق الحقن المقترح", "من تحت الجلد إلى النسيج تحت الجلد العميق"],
      ],
      indications: ["تكبير الأرداف", "ملء انخفاضات الجلد"],
      advantages: [
        "عبوة جاهزة للاستخدام تضم محقنتين معبأتين مسبقاً دون خطوات نقل أو قياس جرعات معقدة",
        "تعزز الكفاءة السريرية وتقلل خطر التلوث أثناء التحضير",
        "مرونة في ضبط الجرعة لتلبية احتياجات تكبير الأرداف بشكل شخصي",
        "تركيز 26 ملغ/مل وتأثير طويل الأمد يصل إلى 12–18 شهراً مع حد أدنى من فترة التعافي",
      ],
      advantagesTitle: "ما مزايا SECRO-FILL BODY؟",
      profileTitle: "ميزة بنية الجل ثنائي الطور",
      profileItems: [
        "نواة من جسيمات حمض الهيالورونيك المتشابكة بقوة للحفاظ على الحجم لفترة طويلة",
        "مصفوفة ناعمة من حمض الهيالورونيك غير المتشابك للاندماج الطبيعي مع الأنسجة",
        "توازن بين الدعم طويل الأمد وملمس طبيعي ناعم بعد العلاج",
      ],
      feedbackTitles: ["تحديد الجسم", "تحديد الأرداف"],
    },
  },
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
  heroImage: product4HeroImage,
  heroImageMobile: product4HeroImageMobile,
  informationImage: product4InformationImage,
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
  advantagesTitle: "What are the advantages of SECRO-MARVEL?",
  profileTitle: "Advanced formulation technology",
  profileItems: [
    "Seven-step filtration system helps ensure ultra-low immunogenicity and maximum biocompatibility",
    "pH-buffered, isotonic solution preserves the integrity of PN, PDRN and collagen",
    "Synergistic matrix combines hydration, regeneration, structural support and antioxidant protection",
  ],
  feedback: [
    { title: "Chin wrinkles", before: chinWrinklesBefore, after: chinWrinklesAfter },
    { title: "Crow's feet", before: crowsFeetBefore, after: crowsFeetAfter },
  ],
  feedbackTitles: ["Chin wrinkles", "Crow's feet"],
  translations: {
    de: {
      madeIn: "Hautrevitalisierendes Injektionsprodukt mit deutscher Entwicklungskompetenz",
      productType: "Fortschrittlicher Komplex zur Hautrevitalisierung",
      volume: "2 × 3 ml vorgefüllte Spritzen",
      concentration: "HA 18 mg/ml",
      imageAlt: "SECRO-MARVEL Verpackung für den fortschrittlichen Hautrevitalisierungskomplex",
      information: [
        ["Produkttyp", "Fortschrittliches hautrevitalisierendes Injektionsprodukt"],
        ["Volumen", "2 vorgefüllte Spritzen × 3 ml pro Packung"],
        ["HA-Konzentration", "18 mg/ml quervernetzte HA mit niedrigem Molekulargewicht"],
        ["Kernwirkstoffe", "HA + PN + PDRN + bioaktives Kollagen + Glutathion"],
        ["Klinische Klassifikation", "Sterile, mikrobiologisch geprüfte Injektionslösung"],
      ],
      indications: [
        "Hautverjüngung und Anti-Aging",
        "Reparatur nach ästhetischen Behandlungen",
        "Aufhellung und Korrektur des Hauttons",
        "Intensive Feuchtigkeitsversorgung",
      ],
      advantages: [
        "Ausgewogene synergetische Formel mit fünf optimierten Wirkstoffen für zuverlässige, natürlich wirkende Ergebnisse",
        "Vielseitig einsetzbar für Mesotherapie, Microneedling und Mehrpunkt-Injektionsprotokolle",
        "Die kontrollierte Wirkstofffreisetzung verlängert die Vorteile für 3–6 Monate nach der Behandlung",
        "Biokompatible Lösung minimiert Rötungen, Schwellungen und Irritationen für eine schnelle Erholung",
      ],
      advantagesTitle: "Welche Vorteile bietet SECRO-MARVEL?",
      profileTitle: "Fortschrittliche Formulierungstechnologie",
      profileItems: [
        "Ein siebenstufiges Filtrationssystem unterstützt eine äußerst geringe Immunogenität und maximale Biokompatibilität",
        "pH-gepufferte, isotonische Lösung bewahrt die Integrität von PN, PDRN und Kollagen",
        "Synergetische Matrix vereint Hydration, Regeneration, strukturelle Unterstützung und antioxidativen Schutz",
      ],
      feedbackTitles: ["Kinnfalten", "Krähenfüße"],
    },
    ar: {
      madeIn: "محلول حقني لتجديد البشرة بتقنية هندسية ألمانية",
      productType: "مركب متقدم لتجديد البشرة",
      volume: "محاقن معبأة مسبقاً 2 × 3 مل",
      concentration: "حمض الهيالورونيك 18 ملغ/مل",
      imageAlt: "عبوة SECRO-MARVEL لمركب متقدم لتجديد البشرة",
      information: [
        ["نوع المنتج", "محلول حقني متقدم لتجديد البشرة"],
        ["الحجم", "محقنتان معبأتان مسبقاً × 3 مل لكل علبة"],
        ["تركيز حمض الهيالورونيك", "18 ملغ/مل من حمض الهيالورونيك منخفض الوزن الجزيئي والمتشابك"],
        ["المكوّنات الفعالة الأساسية", "HA + PN + PDRN + كولاجين نشط حيوياً + غلوتاثيون"],
        ["التصنيف السريري", "محلول حقني معقم ومختبر ميكروبيولوجياً"],
      ],
      indications: [
        "تجديد البشرة ومكافحة الشيخوخة",
        "الإصلاح بعد الإجراءات التجميلية",
        "التفتيح وتصحيح لون البشرة",
        "تعزيز الترطيب",
      ],
      advantages: [
        "تركيبة متوازنة ومتآزرة تضم خمسة مكونات فعالة محسنة لنتائج موثوقة وطبيعية المظهر",
        "استخدامات متعددة للميزوثيرابي والميكرونيدلينغ وبروتوكولات الحقن متعددة النقاط",
        "تركيبة بإطلاق متحكم به تطيل الفوائد لمدة 3–6 أشهر بعد العلاج",
        "محلول متوافق حيوياً يقلل الاحمرار والتورم والتهيج لشفاء أسرع",
      ],
      advantagesTitle: "ما مزايا SECRO-MARVEL؟",
      profileTitle: "تقنية تركيبة متقدمة",
      profileItems: [
        "يساعد نظام ترشيح من سبع مراحل على ضمان مناعة منخفضة للغاية وأقصى توافق حيوي",
        "محلول متعادل الحموضة ومتساوي التوتر يحافظ على سلامة PN وPDRN والكولاجين",
        "مصفوفة متآزرة تجمع بين الترطيب والتجدد والدعم البنيوي والحماية المضادة للأكسدة",
      ],
      feedbackTitles: ["تجاعيد الذقن", "تجاعيد حول العينين"],
    },
  },
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
  heroImage: product5HeroImage,
  heroImageMobile: product5HeroImageMobile,
  informationImage: product5InformationImage,
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
  advantagesTitle: "What are the advantages of HYAC-LIFT?",
  profileTitle: "The effects of HYAC-LIFT (16% CHAC)",
  profileItems: [
    "Deeply hydrates and nourishes the skin while helping regulate its water-oil balance",
    "Promotes collagen and elastin production for a fuller, smoother facial contour",
    "Helps restore elasticity, improve cell vitality and smooth fine lines and wrinkles",
  ],
  feedback: [
    {
      title: "Face rejuvenation & brightening",
      before: chinWrinklesBefore,
      after: chinWrinklesAfter,
    },
    {
      title: "Neck & décolleté rejuvenation",
      before: neckBrighteningBefore,
      after: neckBrighteningAfter,
    },
    {
      title: "Hand rejuvenation & brightening",
      before: handBefore,
      after: handAfter,
    },
  ],
  feedbackTitles: [
    "Face rejuvenation & brightening",
    "Neck & décolleté rejuvenation",
    "Hand rejuvenation & brightening",
  ],
  translations: {
    de: {
      madeIn: "Für die professionelle Anwendung · Hergestellt in Spanien",
      productType: "Injektierbarer Multi-Molekular-HA-Booster mit CHAC-Technologie",
      volume: "1 × 2 ml vorgefüllte Spritze",
      concentration: "160 mg/ml Hyaluronsäure",
      imageAlt: "HYAC-LIFT 16 % CHAC Packung mit vorgefüllter Spritze",
      information: [
        ["Produkttyp", "Anti-Aging-Injektionsbooster mit CHAC-Technologie"],
        ["Volumen", "1 × 2 ml vorgefüllte Spritze"],
        [
          "HA-Konzentration",
          "160 mg/ml: 80 mg hochmolekulare CHAC-HA + 80 mg niedermolekulare CHAC-HA",
        ],
        [
          "Hauptinhaltsstoffe",
          "CHAC-Natriumhyaluronat, Natriumchlorid, Dinatriumphosphat und Natriumphosphat",
        ],
        ["Behandlungsprotokoll", "2 Sitzungen im Abstand von jeweils 1 Monat"],
      ],
      indications: [
        "Gesicht, Hals, Schultern, Arme, Hände und Knie",
        "Trockene oder dehydrierte Haut",
        "Feine Linien und leichte Erschlaffung",
        "Hautfeuchtigkeit und Hautverjüngung",
      ],
      advantages: [
        "Ausgezeichnete Fließfähigkeit und Dehnbarkeit für eine natürliche Verbindung mit der Haut",
        "Bequemer, schneller Injektionsablauf mit sofortiger Rückkehr in Arbeit und Alltag",
        "Doppelter Hautverjüngungseffekt: spendet Feuchtigkeit, bindet sie, strafft die Haut und hilft, Falten zu reduzieren",
        "Hohe Konzentration mit lang anhaltender Wirkung und einem sicheren Behandlungsablauf",
      ],
      advantagesTitle: "Welche Vorteile bietet HYAC-LIFT?",
      profileTitle: "Die Effekte von HYAC-LIFT (16 % CHAC)",
      profileItems: [
        "Versorgt die Haut intensiv mit Feuchtigkeit und Nährstoffen und unterstützt die Regulierung ihres Wasser-Öl-Gleichgewichts",
        "Fördert die Kollagen- und Elastinproduktion für vollere, glattere Gesichtskonturen",
        "Hilft, die Elastizität wiederherzustellen, die Zellvitalität zu verbessern und feine Linien und Falten zu glätten",
      ],
      feedbackTitles: [
        "Gesichtsverjüngung und Aufhellung",
        "Verjüngung von Hals und Dekolleté",
        "Handverjüngung und Aufhellung",
      ],
    },
    ar: {
      madeIn: "للاستخدام المهني · صنع في إسبانيا",
      productType: "معزز حقني متعدد الجزيئات من حمض الهيالورونيك بتقنية CHAC",
      volume: "محقنة واحدة معبأة مسبقاً × 2 مل",
      concentration: "160 ملغ/مل من حمض الهيالورونيك",
      imageAlt: "عبوة HYAC-LIFT 16% CHAC مع محقنة معبأة مسبقاً",
      information: [
        ["نوع المنتج", "معزز حقني مضاد للشيخوخة بتقنية CHAC"],
        ["الحجم", "محقنة واحدة معبأة مسبقاً × 2 مل"],
        [
          "تركيز حمض الهيالورونيك",
          "160 ملغ/مل: 80 ملغ من HA CHAC عالي الوزن الجزيئي + 80 ملغ من HA CHAC منخفض الوزن الجزيئي",
        ],
        [
          "المكونات الأساسية",
          "هيالورونات الصوديوم CHAC وكلوريد الصوديوم وفوسفات ثنائي الصوديوم وفوسفات الصوديوم",
        ],
        ["بروتوكول العلاج", "جلستان بفاصل شهر واحد بين كل جلسة"],
      ],
      indications: [
        "الوجه والرقبة والكتفان والذراعان واليدان والركبتان",
        "البشرة الجافة أو المصابة بالجفاف",
        "الخطوط الدقيقة والترهل البسيط",
        "ترطيب البشرة وتجديدها",
      ],
      advantages: [
        "سيولة وقابلية تمدد ممتازتان ليمتزج المنتج طبيعياً مع البشرة",
        "إجراء حقن مريح وسريع مع العودة الفورية إلى العمل والحياة اليومية",
        "تأثير مزدوج لتجديد البشرة: يرطب ويحافظ على الرطوبة ويشد البشرة ويساعد على تقليل التجاعيد",
        "تركيز عالٍ وتأثير طويل الأمد مع إجراء علاجي آمن",
      ],
      advantagesTitle: "ما مزايا HYAC-LIFT؟",
      profileTitle: "تأثيرات HYAC-LIFT ‏(16% CHAC)",
      profileItems: [
        "يرطب ويغذي البشرة بعمق مع المساعدة على تنظيم توازن الماء والزيت فيها",
        "يعزز إنتاج الكولاجين والإيلاستين لملامح وجه أكثر امتلاءً ونعومة",
        "يساعد على استعادة المرونة وتحسين حيوية الخلايا وتنعيم الخطوط الدقيقة والتجاعيد",
      ],
      feedbackTitles: [
        "تجديد وإشراق بشرة الوجه",
        "تجديد بشرة الرقبة وأعلى الصدر",
        "تجديد وإشراق بشرة اليدين",
      ],
    },
  },
};

export function ProductDetailPage({ product }: { product: ProductDefinition }) {
  const { lang } = useI18n();
  const copy = labels[lang];
  const content = lang === "en" ? product : (product.translations[lang] ?? product);
  const profile =
    content.profileTitle && content.profileItems?.length
      ? { title: content.profileTitle, items: content.profileItems }
      : null;
  const themeClassName = product.theme === "cream-gold-blush" ? "product-theme-body" : "";

  return (
    <div className={themeClassName}>
      <Header />
      <main className="overflow-hidden pb-24 sm:pb-28">
        <section className="product-detail-hero relative isolate min-h-[46rem] overflow-hidden border-b border-border bg-[#eee9de] sm:min-h-[48rem] lg:min-h-0 lg:aspect-[1672/941]">
          <Image
            src={product.heroImageMobile}
            alt={content.imageAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center sm:hidden"
          />
          <Image
            src={product.heroImage}
            alt={content.imageAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 hidden object-cover object-center sm:block sm:object-contain sm:object-top"
          />
          <div
            dir="ltr"
            className="relative mx-auto flex min-h-[46rem] max-w-7xl items-start px-5 pt-28 pb-12 sm:min-h-[48rem] sm:px-8 sm:pt-[calc(56.28vw+3rem)] sm:pb-20 lg:min-h-0 lg:items-end lg:px-10 lg:pt-40 lg:pb-24"
          >
            <header
              dir={lang === "ar" ? "rtl" : "ltr"}
              className="relative z-10 max-w-[18rem] animate-rise text-primary sm:max-w-2xl lg:max-w-xl lg:pb-4"
            >
              <p className="text-[0.56rem] tracking-[0.22em] text-gold-deep uppercase rtl:text-xs rtl:tracking-normal rtl:normal-case sm:eyebrow">
                {content.madeIn}
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
                {content.productType}
              </p>
              <div className="mt-4 flex max-w-xl flex-col gap-2 sm:mt-7 sm:gap-3">
                <Fact icon={Syringe}>{content.volume}</Fact>
                <Fact icon={FlaskConical}>{content.concentration}</Fact>
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
                      src={product.informationImage}
                      alt={content.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <div className="border-t border-border">
                {content.information.map(([label, value], index) => {
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
            className="-z-10 object-contain object-left-bottom opacity-[0.12]"
          />
          <div className="mx-auto grid max-w-7xl gap-12 lg:min-h-[32rem] lg:grid-cols-[minmax(0,0.78fr)_minmax(20rem,0.65fr)] lg:grid-rows-[auto_1fr] lg:gap-x-12">
            <Reveal distance={40} className="relative z-10 lg:col-start-1 lg:row-start-1">
              <SectionHeading
                eyebrow={copy.indicationEyebrow}
                title={copy.indicationTitle}
                className="[&_h2]:text-primary-foreground [&_p.eyebrow]:!text-accent"
              />
            </Reveal>
            <div className="relative z-10 grid gap-3 lg:col-start-2 lg:row-span-2 lg:self-end">
              {content.indications.map((item, index) => (
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
              <SectionHeading eyebrow={copy.advantagesEyebrow} title={content.advantagesTitle} />
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {content.advantages.map((item, index) => {
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
            {profile && (
              <>
                <Reveal distance={36}>
                  <div className="mt-16 flex items-center gap-5">
                    <span className="h-px flex-1 bg-border" />
                    <h3 className="max-w-2xl text-center text-2xl leading-tight text-primary rtl:text-[1.75rem] sm:text-3xl sm:rtl:text-[2rem]">
                      {profile.title}
                    </h3>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                </Reveal>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  {profile.items.map((item, index) => {
                    const Icon = profileIcons[index] ?? PackageCheck;
                    return (
                      <Reveal key={item} delay={index * 100} distance={44}>
                        <article className="card-luxe h-full p-7 sm:p-8">
                          <div className="flex items-center justify-between gap-5">
                            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-deep/35 text-primary">
                              <Icon className="h-5 w-5" strokeWidth={1.35} />
                            </span>
                            <span className="font-display text-4xl text-primary/10">
                              0{index + 5}
                            </span>
                          </div>
                          <p className="mt-7 text-sm leading-[1.75] text-muted-foreground rtl:text-base">
                            {item}
                          </p>
                        </article>
                      </Reveal>
                    );
                  })}
                </div>
              </>
            )}
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
                {product.feedback.map((item, index) => {
                  const title = content.feedbackTitles?.[index] ?? item.title;
                  return (
                    <Reveal key={item.title} delay={index * 90} className="h-full">
                      <BeforeAfterCard
                        before={item.before}
                        after={item.after}
                        alt={title}
                        title={title}
                        comparisonLabel={`${title} ${copy.feedbackInstruction}`}
                      />
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        <ProductPdfDownload
          label={copy.download}
          pdf={product.pdf}
          downloadName={product.downloadName}
        />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
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
