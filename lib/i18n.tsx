"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { pageDictionaries } from "@/lib/i18n-page-content";

export type Lang = "en" | "de" | "ar";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "ar", label: "العربية", short: "AR" },
];

type Dict = Record<string, string>;

const en: Dict = {
  ...pageDictionaries.en,
  "brand.tag": "German Medical Aesthetics",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.portfolio": "Portfolio",
  "nav.testimonials": "Testimonials",
  "nav.contact": "Contact",
  "cta.partner": "Become a Partner",
  "cta.whatsapp": "Chat on WhatsApp",

  "aria.home": "SECRO-FILL home",
  "aria.menu": "Menu",
  "aria.mainNav": "Main navigation",
  "aria.mobileNav": "Mobile navigation",
  "aria.language": "Language",
  "aria.quickNav": "Quick navigation",
  "aria.brandCredentials": "Brand credentials",
  "image.logo": "SECRO-FILL logo",
  "image.contactHero": "Close-up portrait illustrating premium medical aesthetics",
  "image.brandFilm": "Close-up portrait illustrating premium medical aesthetics results",
  "form.whatsappTitle": "SECRO-FILL — Partnership Request",
  "social.whatsapp": "WhatsApp",
  "social.telegram": "Telegram",
  "social.instagram": "Instagram",
  "error.title": "This page didn't load",
  "error.body": "Something went wrong on our end. You can try refreshing or head back home.",
  "error.retry": "Try again",
  "error.home": "Go home",
  "error.notFound.title": "Page not found",
  "error.notFound.body": "The page you're looking for doesn't exist or has been moved.",
  "error.global.body": "Please try again.",

  "hero.eyebrow": "Engineered in Germany",
  "hero.title": "Luxury Beauty, Safe Injection",
  "hero.sub":
    "SECRO-FILL develops premium dermal fillers for clinics, physicians and distributors who accept nothing less than German precision.",
  "hero.cta1": "Request Partnership",
  "hero.cta2": "Explore Products",

  "trust.germany": "Made in Germany",
  "trust.years": "10+ Years Expertise",
  "trust.medical": "Medical Aesthetics",
  "trust.pro": "Professional Solutions",

  "services.eyebrow": "Our Product",
  "services.title": "Our Filler Collection",
  "services.sub":
    "Cross-linked hyaluronic acid formulations calibrated for facial contouring and body volumisation.",
  "services.p1.name": "SECRO-FILL DEEP 10ml",
  "services.p1.desc":
    "High-cohesion deep filler in a single 10ml syringe for large-volume facial contouring and long-lasting structural support.",
  "services.p1.alt": "SECRO-FILL DEEP 10ml packaging and syringe",
  "services.p2.name": "SECRO-FILL DEEP 3×3.2ml",
  "services.p2.desc":
    "A three-syringe clinical set for precise, multi-zone treatments — ideal for cheeks, jawline and chin definition.",
  "services.p2.alt": "SECRO-FILL DEEP 3×3.2ml packaging with three syringes",
  "services.p3.name": "SECRO-FILL BODY FILLER",
  "services.p3.desc":
    "Engineered for body volumisation with a high-density gel matrix designed for smooth, natural contour results.",
  "services.p3.alt": "SECRO-FILL BODY FILLER packaging with two syringes",
  "services.p4.name": "SECRO-MARVEL",
  "services.p4.desc":
    "A premium presentation set designed for precise professional treatments, combining controlled delivery with SECRO-FILL quality.",
  "services.p4.alt": "Open SECRO-MARVEL presentation box with a professional syringe",
  "services.line.secro": "SECRO-FILL LINE",
  "services.line.hyac": "HYAC LINE",
  "services.hyac.name": "HYAC-LIFT (16% CHAC)",
  "services.hyac.desc":
    "A professional hyaluronic acid formulation presented for precise, considered lifting protocols.",
  "services.hyac.alt": "HYAC-LIFT 16% CHAC packaging and syringe",
  "services.cta": "Request Details",
  "services.catalogCta": "Download Catalog",

  "film.eyebrow": "The SECRO-FILL Experience",
  "film.title": "Precision, Captured in Motion",
  "film.sub":
    "Discover the discipline, detail and refined aesthetic behind every SECRO-FILL professional solution.",
  "film.frame.eyebrow": "Engineered in Germany",
  "film.frame.title": "Where science meets refinement",
  "film.frame.label": "Brand Film",

  "about.eyebrow": "Positioning",
  "about.title": "Innovation, Quality & Expertise",
  "about.sub":
    "For more than a decade, we have developed and manufactured high-quality products for the global medical aesthetics industry.",
  "about.c1.title": "Research & Development",
  "about.c1.desc":
    "Our R&D team continuously explores new technologies, ingredients, formulations and scientific advancements in skin, hair and medical aesthetics.",
  "about.c2.title": "Advanced Manufacturing",
  "about.c2.desc":
    "Built on experienced specialists, advanced manufacturing technologies and state-of-the-art production equipment.",
  "about.c3.title": "Global Vision",
  "about.c3.desc":
    "Our vision is to expand our presence in the international aesthetics market with products that meet the highest expectations of professionals worldwide.",

  "portfolio.eyebrow": "Work Proof",
  "portfolio.title": "Before & After Gallery",
  "portfolio.sub":
    "Representative documentation of facial contour and body transformation results. Replace these placeholders with your own clinical imagery.",
  "portfolio.before": "Before",
  "portfolio.after": "After",
  "portfolio.galleryLabel": "Scrollable before and after gallery",
  "portfolio.previous": "Previous result",
  "portfolio.next": "Next result",
  "portfolio.i1": "Nose Contour",
  "portfolio.i2": "Chin Projection",
  "portfolio.i3": "Body Volumisation",
  "portfolio.i4": "Cheek Contour",
  "portfolio.i5": "Double chin",
  "portfolio.i6": "Temple Rejuvenation",
  "portfolio.i7": "Buttocks Contour",
  "portfolio.i8": "Chin Definition",

  "process.eyebrow": "How It Works",
  "process.title": "The Partnership Process",
  "process.s1.title": "Consultation",
  "process.s1.desc":
    "We review your market, clinical profile and volume expectations in a private consultation.",
  "process.s2.title": "Product Selection",
  "process.s2.desc":
    "Together we define the right formulations and packaging for your treatment protocols.",
  "process.s3.title": "Partnership",
  "process.s3.desc":
    "Terms, documentation and territory are agreed, and your first shipment is prepared.",
  "process.s4.title": "Support",
  "process.s4.desc":
    "Ongoing clinical training, marketing assets and reliable restocking from Germany.",

  "testi.eyebrow": "Testimonials",
  "testi.title": "Trusted by Professionals",
  "testi.sub": "Partner testimonials will be added here.",
  "testi.t1":
    "The consistency between batches is what convinced our clinic. Results are predictable, treatment after treatment.",
  "testi.t2":
    "Documentation and logistics were handled with real German discipline. Our distribution launch was effortless.",
  "testi.t3":
    "Patients notice the smoothness of the result. For body contouring it has become our standard choice.",
  "testi.r1": "Aesthetic Clinic Director",
  "testi.r2": "Regional Distributor",
  "testi.r3": "Plastic Surgeon",
  "testi.previous": "Previous testimonial",
  "testi.next": "Next testimonial",

  "contact.eyebrow": "Partnership",
  "contact.title": "Let's Build Something Refined",
  "contact.sub":
    "We are expanding our network of clinics, physicians and distributors. Tell us about your market and our partnership team will respond within two business days.",
  "form.name": "Full name",
  "form.email": "Email address",
  "form.country": "Country / Market",
  "form.message": "How would you like to work with SECRO-FILL?",
  "form.submit": "Send Partnership Request",
  "form.sent": "WhatsApp opened with your request ready to send.",

  "footer.rights": "All rights reserved.",
  "footer.note": "Professional use only. For clinics, physicians and distributors.",
  "footer.qr.label": "Scan to Connect",
  "footer.qr.alt": "SECRO-FILL QR code",
  "footer.contact.whatsapp": "WhatsApp",
  "footer.contact.phone": "Phone",
  "footer.contact.address": "View on map",
  "share.title": "Contact us",
  "share.whatsapp": "Chat on WhatsApp",
  "share.telegram": "Chat on Telegram",
  "share.instagram": "Visit Instagram",

  "page.about.title": "About SECRO-FILL",
  "page.about.body":
    "A German medical aesthetics brand dedicated to premium dermal filler technology, developed with laboratory precision and delivered to professionals worldwide.",
  "page.services.title": "Services & Products",
  "page.services.body":
    "Explore our dermal filler range and the professional services that accompany every partnership.",
  "page.contact.title": "Contact Us",
  "page.contact.body":
    "Reach the SECRO-FILL partnership team for pricing, documentation and territory availability.",
  "page.back": "Back to homepage",
};

const ar: Dict = {
  ...pageDictionaries.ar,
  "brand.tag": "تجميل طبي ألماني",
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.portfolio": "الأعمال",
  "nav.testimonials": "الشهادات",
  "nav.contact": "اتصل بنا",
  "cta.partner": "كن شريكاً",
  "cta.whatsapp": "تواصل على واتساب",

  "aria.home": "الصفحة الرئيسية لـ SECRO-FILL",
  "aria.menu": "القائمة",
  "aria.mainNav": "التنقل الرئيسي",
  "aria.mobileNav": "تنقل الجوال",
  "aria.language": "اللغة",
  "aria.quickNav": "التنقل السريع",
  "aria.brandCredentials": "مزايا العلامة التجارية",
  "image.logo": "شعار SECRO-FILL",
  "image.contactHero": "صورة مقرّبة تجسد التجميل الطبي الراقي",
  "image.brandFilm": "صورة مقرّبة تجسد نتائج التجميل الطبي الراقي",
  "form.whatsappTitle": "SECRO-FILL — طلب شراكة",
  "social.whatsapp": "واتساب",
  "social.telegram": "تيليجرام",
  "social.instagram": "إنستغرام",
  "error.title": "لم يتم تحميل هذه الصفحة",
  "error.body": "حدث خطأ من جانبنا. يمكنك المحاولة مجدداً أو العودة إلى الصفحة الرئيسية.",
  "error.retry": "حاول مرة أخرى",
  "error.home": "العودة إلى الرئيسية",
  "error.notFound.title": "الصفحة غير موجودة",
  "error.notFound.body": "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
  "error.global.body": "يرجى المحاولة مرة أخرى.",

  "hero.eyebrow": "مصنوع في ألمانيا",
  "hero.title": "علم الجمال الراقي",
  "hero.sub":
    "تطوّر SECRO-FILL فيلر جلدي متميز للعيادات والأطباء والموزعين الذين لا يقبلون أقل من الدقة الألمانية.",
  "hero.cta1": "طلب شراكة",
  "hero.cta2": "استعرض المنتجات",

  "trust.germany": "صناعة ألمانية",
  "trust.years": "أكثر من ١٠ سنوات خبرة",
  "trust.medical": "تجميل طبي",
  "trust.pro": "حلول احترافية",

  "services.eyebrow": "مجموعة المنتجات",
  "services.title": "تشكيلة الفيلر لدينا",
  "services.sub": "تركيبات حمض هيالورونيك متشابك مصممة لنحت الوجه وزيادة حجم الجسم.",
  "services.p1.name": "SECRO-FILL DEEP ١٠ مل",
  "services.p1.desc":
    "فيلر عميق عالي التماسك في محقنة واحدة ١٠ مل لنحت الوجه بحجم كبير ودعم بنيوي طويل الأمد.",
  "services.p1.alt": "عبوة ومحقنة SECRO-FILL DEEP سعة ١٠ مل",
  "services.p2.name": "SECRO-FILL DEEP ٣×٣٫٢ مل",
  "services.p2.desc":
    "طقم سريري بثلاث محاقن لعلاجات دقيقة متعددة المناطق — مثالي للخدود وخط الفك والذقن.",
  "services.p2.alt": "عبوة SECRO-FILL DEEP سعة ٣×٣٫٢ مل مع ثلاث محاقن",
  "services.p3.name": "SECRO-FILL BODY FILLER",
  "services.p3.desc": "مصمم لزيادة حجم الجسم بمصفوفة جل عالية الكثافة لنتائج انسيابية وطبيعية.",
  "services.p3.alt": "عبوة SECRO-FILL BODY FILLER مع محقنتين",
  "services.p4.name": "SECRO-MARVEL",
  "services.p4.desc":
    "مجموعة فاخرة مصممة للعلاجات الاحترافية الدقيقة، تجمع بين التحكم في الاستخدام وجودة SECRO-FILL.",
  "services.p4.alt": "علبة SECRO-MARVEL مفتوحة مع محقنة احترافية",
  "services.line.secro": "خط SECRO-FILL",
  "services.line.hyac": "خط HYAC",
  "services.hyac.name": "HYAC-LIFT ‏(16% CHAC)",
  "services.hyac.desc": "تركيبة احترافية من حمض الهيالورونيك مصممة لبروتوكولات رفع دقيقة ومدروسة.",
  "services.hyac.alt": "عبوة ومحقنة HYAC-LIFT بتركيز 16% CHAC",
  "services.cta": "اطلب التفاصيل",
  "services.catalogCta": "تحميل الكتالوج",

  "film.eyebrow": "تجربة SECRO-FILL",
  "film.title": "الدقة في كل مشهد",
  "film.sub":
    "اكتشف الانضباط والاهتمام بالتفاصيل والرؤية الراقية التي تقف خلف كل حل احترافي من SECRO-FILL.",
  "film.frame.eyebrow": "مصنوع في ألمانيا",
  "film.frame.title": "حيث يلتقي العلم بالرقي",
  "film.frame.label": "فيلم العلامة",

  "about.eyebrow": "التوجه",
  "about.title": "الابتكار والجودة والخبرة",
  "about.sub":
    "منذ أكثر من عقد، ونحن نطوّر ونصنّع منتجات عالية الجودة لصناعة التجميل الطبي العالمية.",
  "about.c1.title": "البحث والتطوير",
  "about.c1.desc":
    "يستكشف فريق البحث والتطوير لدينا باستمرار تقنيات ومكونات وتركيبات وتطورات علمية جديدة في مجالات البشرة والشعر والتجميل الطبي.",
  "about.c2.title": "تصنيع متقدم",
  "about.c2.desc": "يعتمد على متخصصين ذوي خبرة وتقنيات تصنيع متقدمة ومعدات إنتاج حديثة.",
  "about.c3.title": "رؤية عالمية",
  "about.c3.desc":
    "تتمثل رؤيتنا في توسيع حضورنا في سوق التجميل الدولي وتطوير منتجات تلبي أعلى توقعات المحترفين حول العالم.",

  "portfolio.eyebrow": "دليل العمل",
  "portfolio.title": "معرض قبل وبعد",
  "portfolio.sub": "توثيق تمثيلي لنتائج نحت الوجه وتحويل الجسم. استبدل هذه الصور بصور عيادتك.",
  "portfolio.before": "قبل",
  "portfolio.after": "بعد",
  "portfolio.galleryLabel": "معرض نتائج قبل وبعد قابل للتمرير",
  "portfolio.previous": "النتيجة السابقة",
  "portfolio.next": "النتيجة التالية",
  "portfolio.i1": "تحديد الأنف",
  "portfolio.i2": "إبراز الذقن",
  "portfolio.i3": "زيادة حجم الجسم",
  "portfolio.i4": "نحت الخدين",
  "portfolio.i5": "الذقن المزدوج",
  "portfolio.i6": "تجديد الصدغين",
  "portfolio.i7": "نحت الأرداف",
  "portfolio.i8": "تحديد الذقن",

  "process.eyebrow": "كيف نعمل",
  "process.title": "مسار الشراكة",
  "process.s1.title": "الاستشارة",
  "process.s1.desc": "نراجع سوقك وملفك السريري وتوقعات الكميات في استشارة خاصة.",
  "process.s2.title": "اختيار المنتج",
  "process.s2.desc": "نحدد معاً التركيبات والتعبئة المناسبة لبروتوكولاتك.",
  "process.s3.title": "الشراكة",
  "process.s3.desc": "نتفق على الشروط والوثائق والمنطقة ونجهز شحنتك الأولى.",
  "process.s4.title": "الدعم",
  "process.s4.desc": "تدريب سريري مستمر ومواد تسويقية وإعادة توريد موثوقة من ألمانيا.",

  "testi.eyebrow": "الشهادات",
  "testi.title": "ثقة المحترفين",
  "testi.sub": "ستُضاف شهادات الشركاء هنا.",
  "testi.t1": "الثبات بين الدفعات هو ما أقنع عيادتنا. النتائج متوقعة في كل علاج.",
  "testi.t2": "الوثائق والخدمات اللوجستية أُديرت بانضباط ألماني حقيقي. كان إطلاق التوزيع سهلاً.",
  "testi.t3": "يلاحظ المرضى نعومة النتيجة. أصبح خيارنا القياسي لنحت الجسم.",
  "testi.r1": "مدير عيادة تجميل",
  "testi.r2": "موزع إقليمي",
  "testi.r3": "جراح تجميل",
  "testi.previous": "الشهادة السابقة",
  "testi.next": "الشهادة التالية",

  "contact.eyebrow": "الشراكة",
  "contact.title": "لنبنِ شيئاً راقياً",
  "contact.sub":
    "نوسّع شبكتنا من العيادات والأطباء والموزعين. أخبرنا عن سوقك وسيجيبك فريق الشراكات خلال يومي عمل.",
  "form.name": "الاسم الكامل",
  "form.email": "البريد الإلكتروني",
  "form.country": "الدولة / السوق",
  "form.message": "كيف ترغب في العمل مع SECRO-FILL؟",
  "form.submit": "إرسال طلب الشراكة",
  "form.sent": "تم فتح واتساب وطلبك جاهز للإرسال.",

  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.note": "للاستخدام المهني فقط. للعيادات والأطباء والموزعين.",
  "footer.qr.label": "امسح للتواصل",
  "footer.qr.alt": "رمز QR الخاص بـ SECRO-FILL",
  "footer.contact.whatsapp": "واتساب",
  "footer.contact.phone": "الهاتف",
  "footer.contact.address": "عرض على الخريطة",
  "share.title": "تواصل معنا",
  "share.whatsapp": "تواصل عبر واتساب",
  "share.telegram": "تواصل عبر تيليجرام",
  "share.instagram": "زيارة إنستغرام",

  "page.about.title": "عن SECRO-FILL",
  "page.about.body":
    "علامة تجميل طبي ألمانية مكرسة لتقنية الفيلر الجلدي المتميز، مطوّرة بدقة مختبرية وموجهة للمحترفين حول العالم.",
  "page.services.title": "الخدمات والمنتجات",
  "page.services.body": "استعرض تشكيلة الفيلر والخدمات المهنية المصاحبة لكل شراكة.",
  "page.contact.title": "اتصل بنا",
  "page.contact.body": "تواصل مع فريق شراكات SECRO-FILL للأسعار والوثائق وتوفر المناطق.",
  "page.back": "العودة إلى الصفحة الرئيسية",
};

const de: Dict = {
  ...pageDictionaries.de,
  "brand.tag": "Deutsche Medizinästhetik",
  "nav.home": "Startseite",
  "nav.about": "Über uns",
  "nav.portfolio": "Portfolio",
  "nav.testimonials": "Referenzen",
  "nav.contact": "Kontakt",
  "cta.partner": "Partner werden",
  "cta.whatsapp": "Über WhatsApp kontaktieren",

  "aria.home": "SECRO-FILL Startseite",
  "aria.menu": "Menü",
  "aria.mainNav": "Hauptnavigation",
  "aria.mobileNav": "Mobile Navigation",
  "aria.language": "Sprache",
  "aria.quickNav": "Schnellnavigation",
  "aria.brandCredentials": "Markenmerkmale",
  "image.logo": "SECRO-FILL Logo",
  "image.contactHero": "Nahaufnahme für hochwertige medizinische Ästhetik",
  "image.brandFilm": "Nahaufnahme für Ergebnisse hochwertiger medizinischer Ästhetik",
  "form.whatsappTitle": "SECRO-FILL — Partnerschaftsanfrage",
  "social.whatsapp": "WhatsApp",
  "social.telegram": "Telegram",
  "social.instagram": "Instagram",
  "error.title": "Diese Seite konnte nicht geladen werden",
  "error.body":
    "Auf unserer Seite ist etwas schiefgelaufen. Sie können es erneut versuchen oder zur Startseite zurückkehren.",
  "error.retry": "Erneut versuchen",
  "error.home": "Zur Startseite",
  "error.notFound.title": "Seite nicht gefunden",
  "error.notFound.body": "Die gesuchte Seite existiert nicht oder wurde verschoben.",
  "error.global.body": "Bitte versuchen Sie es erneut.",

  "hero.eyebrow": "Entwickelt in Deutschland",
  "hero.title": "Die Wissenschaft vollendeter Schönheit",
  "hero.sub":
    "SECRO-FILL entwickelt hochwertige Dermalfiller für Kliniken, Ärzte und Vertriebspartner, die bei deutscher Präzision keine Kompromisse eingehen.",
  "hero.cta1": "Partnerschaft anfragen",
  "hero.cta2": "Produkte entdecken",

  "trust.germany": "Made in Germany",
  "trust.years": "Über 10 Jahre Expertise",
  "trust.medical": "Medizinästhetik",
  "trust.pro": "Professionelle Lösungen",

  "services.eyebrow": "Unsere Produkte",
  "services.title": "Unsere Filler-Kollektion",
  "services.sub":
    "Vernetzte Hyaluronsäure-Formulierungen, abgestimmt auf Gesichtskonturierung und Körpervolumenaufbau.",
  "services.p1.name": "SECRO-FILL DEEP 10ml",
  "services.p1.desc":
    "Hochkohäsiver Deep Filler in einer einzelnen 10-ml-Spritze für großvolumige Gesichtskonturierung und lang anhaltenden strukturellen Halt.",
  "services.p1.alt": "SECRO-FILL DEEP 10ml Verpackung und Spritze",
  "services.p2.name": "SECRO-FILL DEEP 3×3.2ml",
  "services.p2.desc":
    "Ein klinisches Set mit drei Spritzen für präzise Behandlungen mehrerer Zonen — ideal für Wangen, Kieferlinie und Kinnkontur.",
  "services.p2.alt": "SECRO-FILL DEEP 3×3.2ml Verpackung mit drei Spritzen",
  "services.p3.name": "SECRO-FILL BODY FILLER",
  "services.p3.desc":
    "Entwickelt für den Körpervolumenaufbau mit einer hochdichten Gelmatrix für gleichmäßige, natürliche Konturergebnisse.",
  "services.p3.alt": "SECRO-FILL BODY FILLER Verpackung mit zwei Spritzen",
  "services.p4.name": "SECRO-MARVEL",
  "services.p4.desc":
    "Ein hochwertiges Präsentationsset für präzise professionelle Behandlungen, das kontrollierte Anwendung mit SECRO-FILL Qualität verbindet.",
  "services.p4.alt": "Geöffnete SECRO-MARVEL Präsentationsbox mit professioneller Spritze",
  "services.line.secro": "SECRO-FILL LINIE",
  "services.line.hyac": "HYAC LINIE",
  "services.hyac.name": "HYAC-LIFT (16% CHAC)",
  "services.hyac.desc":
    "Eine professionelle Hyaluronsäure-Formulierung für präzise und durchdachte Lifting-Protokolle.",
  "services.hyac.alt": "HYAC-LIFT 16% CHAC Verpackung und Spritze",
  "services.cta": "Details anfragen",
  "services.catalogCta": "Katalog herunterladen",

  "film.eyebrow": "Das SECRO-FILL Erlebnis",
  "film.title": "Präzision in Bewegung",
  "film.sub":
    "Entdecken Sie die Disziplin, Sorgfalt und raffinierte Ästhetik hinter jeder professionellen Lösung von SECRO-FILL.",
  "film.frame.eyebrow": "Entwickelt in Deutschland",
  "film.frame.title": "Wo Wissenschaft auf Ästhetik trifft",
  "film.frame.label": "Markenfilm",

  "about.eyebrow": "Positionierung",
  "about.title": "Innovation, Qualität & Expertise",
  "about.sub":
    "Seit mehr als einem Jahrzehnt entwickeln und fertigen wir hochwertige Produkte für die globale Medizinästhetik-Branche.",
  "about.c1.title": "Forschung & Entwicklung",
  "about.c1.desc":
    "Unser F&E-Team erforscht kontinuierlich neue Technologien, Inhaltsstoffe, Formulierungen und wissenschaftliche Fortschritte in den Bereichen Haut, Haar und Medizinästhetik.",
  "about.c2.title": "Fortschrittliche Herstellung",
  "about.c2.desc":
    "Basierend auf erfahrenen Spezialisten, fortschrittlichen Fertigungstechnologien und modernster Produktionsausrüstung.",
  "about.c3.title": "Globale Vision",
  "about.c3.desc":
    "Unsere Vision ist es, unsere Präsenz auf dem internationalen Ästhetikmarkt auszubauen und Produkte zu entwickeln, die den höchsten Erwartungen von Fachleuten weltweit gerecht werden.",

  "portfolio.eyebrow": "Behandlungsergebnisse",
  "portfolio.title": "Vorher-Nachher-Galerie",
  "portfolio.sub":
    "Repräsentative Dokumentation der Ergebnisse von Gesichtskonturierung und Körperformung. Ersetzen Sie diese Platzhalter durch Ihre eigenen klinischen Aufnahmen.",
  "portfolio.before": "Vorher",
  "portfolio.after": "Nachher",
  "portfolio.galleryLabel": "Horizontale Vorher-Nachher-Galerie",
  "portfolio.previous": "Vorheriges Ergebnis",
  "portfolio.next": "Nächstes Ergebnis",
  "portfolio.i1": "Nasenkontur",
  "portfolio.i2": "Kinnprojektion",
  "portfolio.i3": "Körpervolumenaufbau",
  "portfolio.i4": "Wangenkontur",
  "portfolio.i5": "Doppelkinn",
  "portfolio.i6": "Schläfenverjüngung",
  "portfolio.i7": "Gesäßkontur",
  "portfolio.i8": "Kinndefinition",

  "process.eyebrow": "So funktioniert es",
  "process.title": "Der Weg zur Partnerschaft",
  "process.s1.title": "Beratung",
  "process.s1.desc":
    "In einem vertraulichen Beratungsgespräch analysieren wir Ihren Markt, Ihr klinisches Profil und Ihre Mengenerwartungen.",
  "process.s2.title": "Produktauswahl",
  "process.s2.desc":
    "Gemeinsam bestimmen wir die passenden Formulierungen und Verpackungen für Ihre Behandlungsprotokolle.",
  "process.s3.title": "Partnerschaft",
  "process.s3.desc":
    "Konditionen, Dokumentation und Vertriebsgebiet werden vereinbart und Ihre erste Lieferung wird vorbereitet.",
  "process.s4.title": "Support",
  "process.s4.desc":
    "Kontinuierliche klinische Schulungen, Marketingmaterialien und zuverlässige Nachlieferungen aus Deutschland.",

  "testi.eyebrow": "Referenzen",
  "testi.title": "Das Vertrauen von Fachanwendern",
  "testi.sub": "Hier werden Erfahrungsberichte unserer Partner ergänzt.",
  "testi.t1":
    "Die Konsistenz von Charge zu Charge hat unsere Klinik überzeugt. Die Ergebnisse sind bei jeder Behandlung vorhersehbar.",
  "testi.t2":
    "Dokumentation und Logistik wurden mit echter deutscher Disziplin umgesetzt. Der Start unseres Vertriebs verlief reibungslos.",
  "testi.t3":
    "Patienten bemerken, wie gleichmäßig das Ergebnis wirkt. Für die Körperkonturierung ist es zu unserer Standardlösung geworden.",
  "testi.r1": "Leitung einer ästhetischen Klinik",
  "testi.r2": "Regionaler Vertriebspartner",
  "testi.r3": "Facharzt für Plastische Chirurgie",
  "testi.previous": "Vorherige Referenz",
  "testi.next": "Nächste Referenz",

  "contact.eyebrow": "Partnerschaft",
  "contact.title": "Lassen Sie uns gemeinsam etwas Vollendetes schaffen",
  "contact.sub":
    "Wir erweitern unser Netzwerk aus Kliniken, Ärzten und Vertriebspartnern. Erzählen Sie uns von Ihrem Markt — unser Partnerschaftsteam antwortet innerhalb von zwei Werktagen.",
  "form.name": "Vollständiger Name",
  "form.email": "E-Mail-Adresse",
  "form.country": "Land / Markt",
  "form.message": "Wie möchten Sie mit SECRO-FILL zusammenarbeiten?",
  "form.submit": "Partnerschaftsanfrage senden",
  "form.sent": "WhatsApp wurde geöffnet und Ihre Anfrage ist versandbereit.",

  "footer.rights": "Alle Rechte vorbehalten.",
  "footer.note": "Nur für den professionellen Gebrauch. Für Kliniken, Ärzte und Vertriebspartner.",
  "footer.qr.label": "Scannen zum Verbinden",
  "footer.qr.alt": "SECRO-FILL QR-Code",
  "footer.contact.whatsapp": "WhatsApp",
  "footer.contact.phone": "Telefon",
  "footer.contact.address": "Auf der Karte ansehen",
  "share.title": "Kontakt",
  "share.whatsapp": "Über WhatsApp schreiben",
  "share.telegram": "Über Telegram schreiben",
  "share.instagram": "Instagram besuchen",

  "page.about.title": "Über SECRO-FILL",
  "page.about.body":
    "Eine deutsche Marke für Medizinästhetik, die sich hochwertiger Dermalfiller-Technologie widmet — mit Laborpräzision entwickelt und für Fachanwender weltweit bereitgestellt.",
  "page.services.title": "Services & Produkte",
  "page.services.body":
    "Entdecken Sie unser Dermalfiller-Portfolio und die professionellen Services, die jede Partnerschaft begleiten.",
  "page.contact.title": "Kontakt",
  "page.contact.body":
    "Kontaktieren Sie das SECRO-FILL Partnerschaftsteam für Preise, Dokumentation und Informationen zur Gebietsverfügbarkeit.",
  "page.back": "Zurück zur Startseite",
};

const dicts: Record<Lang, Dict> = { en, de, ar };

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("secrofill-lang") as Lang | null;
    if (stored && stored in dicts) setLangState(stored);
  }, []);

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("secrofill-lang", l);
  }, []);

  const t = useCallback((key: string) => dicts[lang][key] ?? en[key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, dir, setLang, t }), [lang, dir, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
