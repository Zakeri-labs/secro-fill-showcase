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

export type Lang = "en" | "de" | "ar";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "ar", label: "العربية", short: "AR" },
];

type Dict = Record<string, string>;

const en: Dict = {
  "brand.tag": "German Medical Aesthetics",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.portfolio": "Portfolio",
  "nav.testimonials": "Testimonials",
  "nav.contact": "Contact",
  "cta.partner": "Become a Partner",
  "cta.whatsapp": "Chat on WhatsApp",

  "hero.eyebrow": "Engineered in Germany",
  "hero.title": "The Science of Refined Beauty",
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
  "services.p2.name": "SECRO-FILL DEEP 3×3.2ml",
  "services.p2.desc":
    "A three-syringe clinical set for precise, multi-zone treatments — ideal for cheeks, jawline and chin definition.",
  "services.p3.name": "SECRO-FILL BODY FILLER",
  "services.p3.desc":
    "Engineered for body volumisation with a high-density gel matrix designed for smooth, natural contour results.",
  "services.cta": "Request Details",

  "about.eyebrow": "Positioning",
  "about.title": "German Innovation, Global Aesthetics",
  "about.sub":
    "SECRO-FILL exists at the intersection of laboratory science and aesthetic artistry, supplying professionals in over 20 markets.",
  "about.c1.title": "Scientific Innovation",
  "about.c1.desc":
    "Proprietary cross-linking research delivers stable, highly purified hyaluronic acid gels with predictable clinical behaviour.",
  "about.c2.title": "Advanced Manufacturing",
  "about.c2.desc":
    "Produced in certified German facilities under strict quality control, batch traceability and sterile processing standards.",
  "about.c3.title": "Global Aesthetic Solutions",
  "about.c3.desc":
    "A partnership model built for clinics, physicians and distributors, with training, documentation and dependable supply.",

  "portfolio.eyebrow": "Work Proof",
  "portfolio.title": "Before & After Gallery",
  "portfolio.sub":
    "Representative documentation of facial contour and body transformation results. Replace these placeholders with your own clinical imagery.",
  "portfolio.before": "Before",
  "portfolio.after": "After",
  "portfolio.i1": "Mid-Face Contour",
  "portfolio.i2": "Jawline Definition",
  "portfolio.i3": "Body Volumisation",
  "portfolio.i4": "Full Facial Harmony",

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
  "brand.tag": "تجميل طبي ألماني",
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.services": "الخدمات",
  "nav.portfolio": "الأعمال",
  "nav.testimonials": "الشهادات",
  "nav.contact": "اتصل بنا",
  "cta.partner": "كن شريكاً",
  "cta.whatsapp": "تواصل على واتساب",

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
  "services.p2.name": "SECRO-FILL DEEP ٣×٣٫٢ مل",
  "services.p2.desc":
    "طقم سريري بثلاث محاقن لعلاجات دقيقة متعددة المناطق — مثالي للخدود وخط الفك والذقن.",
  "services.p3.name": "SECRO-FILL BODY FILLER",
  "services.p3.desc": "مصمم لزيادة حجم الجسم بمصفوفة جل عالية الكثافة لنتائج انسيابية وطبيعية.",
  "services.cta": "اطلب التفاصيل",

  "about.eyebrow": "التوجه",
  "about.title": "ابتكار ألماني، جمال عالمي",
  "about.sub":
    "تقف SECRO-FILL عند تقاطع علوم المختبر وفن التجميل، وتخدم المحترفين في أكثر من ٢٠ سوقاً.",
  "about.c1.title": "الابتكار العلمي",
  "about.c1.desc": "أبحاث تشابك خاصة تنتج جل حمض هيالورونيك نقي ومستقر بسلوك سريري متوقع.",
  "about.c2.title": "تصنيع متقدم",
  "about.c2.desc":
    "يُنتج في مرافق ألمانية معتمدة وفق رقابة جودة صارمة وتتبع للدفعات ومعايير تعقيم دقيقة.",
  "about.c3.title": "حلول تجميل عالمية",
  "about.c3.desc": "نموذج شراكة للعيادات والأطباء والموزعين مع تدريب ووثائق وتوريد موثوق.",

  "portfolio.eyebrow": "دليل العمل",
  "portfolio.title": "معرض قبل وبعد",
  "portfolio.sub": "توثيق تمثيلي لنتائج نحت الوجه وتحويل الجسم. استبدل هذه الصور بصور عيادتك.",
  "portfolio.before": "قبل",
  "portfolio.after": "بعد",
  "portfolio.i1": "نحت منتصف الوجه",
  "portfolio.i2": "تحديد خط الفك",
  "portfolio.i3": "زيادة حجم الجسم",
  "portfolio.i4": "تناسق الوجه الكامل",

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
  "brand.tag": "Deutsche Medizinästhetik",
  "nav.home": "Startseite",
  "nav.about": "Über uns",
  "nav.services": "Leistungen",
  "nav.portfolio": "Portfolio",
  "nav.testimonials": "Referenzen",
  "nav.contact": "Kontakt",
  "cta.partner": "Partner werden",
  "cta.whatsapp": "Über WhatsApp kontaktieren",

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
  "services.p2.name": "SECRO-FILL DEEP 3×3.2ml",
  "services.p2.desc":
    "Ein klinisches Set mit drei Spritzen für präzise Behandlungen mehrerer Zonen — ideal für Wangen, Kieferlinie und Kinnkontur.",
  "services.p3.name": "SECRO-FILL BODY FILLER",
  "services.p3.desc":
    "Entwickelt für den Körpervolumenaufbau mit einer hochdichten Gelmatrix für gleichmäßige, natürliche Konturergebnisse.",
  "services.cta": "Details anfragen",

  "about.eyebrow": "Positionierung",
  "about.title": "Deutsche Innovation, globale Ästhetik",
  "about.sub":
    "SECRO-FILL verbindet Laborwissenschaft mit ästhetischer Kunst und beliefert Fachanwender in über 20 Märkten.",
  "about.c1.title": "Wissenschaftliche Innovation",
  "about.c1.desc":
    "Proprietäre Vernetzungsforschung ermöglicht stabile, hochreine Hyaluronsäuregele mit vorhersehbarem klinischem Verhalten.",
  "about.c2.title": "Fortschrittliche Herstellung",
  "about.c2.desc":
    "Hergestellt in zertifizierten deutschen Produktionsstätten unter strenger Qualitätskontrolle, mit Chargenrückverfolgbarkeit und Standards für sterile Verarbeitung.",
  "about.c3.title": "Globale ästhetische Lösungen",
  "about.c3.desc":
    "Ein Partnerschaftsmodell für Kliniken, Ärzte und Vertriebspartner mit Schulungen, Dokumentation und zuverlässiger Versorgung.",

  "portfolio.eyebrow": "Behandlungsergebnisse",
  "portfolio.title": "Vorher-Nachher-Galerie",
  "portfolio.sub":
    "Repräsentative Dokumentation der Ergebnisse von Gesichtskonturierung und Körperformung. Ersetzen Sie diese Platzhalter durch Ihre eigenen klinischen Aufnahmen.",
  "portfolio.before": "Vorher",
  "portfolio.after": "Nachher",
  "portfolio.i1": "Konturierung des Mittelgesichts",
  "portfolio.i2": "Definition der Kieferlinie",
  "portfolio.i3": "Körpervolumenaufbau",
  "portfolio.i4": "Ganzheitliche Gesichtsharmonie",

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
