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

export type Lang = "en" | "ar" | "fa";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "fa", label: "فارسی", short: "FA" },
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

  "services.eyebrow": "Product Range",
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
  "form.sent": "Thank you — this is a demo form, no data was sent.",

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
  "form.sent": "شكراً لك — هذا نموذج تجريبي ولم يتم إرسال بيانات.",

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

const fa: Dict = {
  "brand.tag": "زیبایی پزشکی آلمان",
  "nav.home": "خانه",
  "nav.about": "درباره ما",
  "nav.services": "خدمات",
  "nav.portfolio": "نمونه کارها",
  "nav.testimonials": "نظرات",
  "nav.contact": "تماس",
  "cta.partner": "همکاری با ما",
  "cta.whatsapp": "گفتگو در واتساپ",

  "hero.eyebrow": "ساخت آلمان",
  "hero.title": "دانش زیبایی اصیل",
  "hero.sub":
    "SECRO-FILL فیلرهای پوستی ممتاز را برای کلینیک‌ها، پزشکان و توزیع‌کنندگانی می‌سازد که به کمتر از دقت آلمانی رضایت نمی‌دهند.",
  "hero.cta1": "درخواست همکاری",
  "hero.cta2": "مشاهده محصولات",

  "trust.germany": "ساخت آلمان",
  "trust.years": "بیش از ۱۰ سال تخصص",
  "trust.medical": "زیبایی پزشکی",
  "trust.pro": "راهکارهای حرفه‌ای",

  "services.eyebrow": "سبد محصولات",
  "services.title": "مجموعه فیلرهای ما",
  "services.sub":
    "فرمولاسیون‌های هیالورونیک اسید شبکه‌ای، تنظیم‌شده برای کنتور صورت و حجم‌دهی بدن.",
  "services.p1.name": "SECRO-FILL DEEP ۱۰ میلی‌لیتر",
  "services.p1.desc":
    "فیلر عمقی با چسبندگی بالا در یک سرنگ ۱۰ میلی‌لیتری برای کنتور حجیم صورت و پشتیبانی ساختاری بادوام.",
  "services.p2.name": "SECRO-FILL DEEP ۳×۳٫۲ میلی‌لیتر",
  "services.p2.desc":
    "ست بالینی سه‌سرنگی برای درمان‌های دقیق چندناحیه‌ای — مناسب گونه، خط فک و چانه.",
  "services.p3.name": "SECRO-FILL BODY FILLER",
  "services.p3.desc": "طراحی‌شده برای حجم‌دهی بدن با ماتریس ژل پرتراکم و نتیجه‌ای یکدست و طبیعی.",
  "services.cta": "دریافت اطلاعات",

  "about.eyebrow": "جایگاه ما",
  "about.title": "نوآوری آلمانی، زیبایی جهانی",
  "about.sub":
    "SECRO-FILL در تلاقی علم آزمایشگاهی و هنر زیبایی قرار دارد و به متخصصان در بیش از ۲۰ بازار خدمت می‌کند.",
  "about.c1.title": "نوآوری علمی",
  "about.c1.desc":
    "پژوهش اختصاصی شبکه‌سازی، ژل هیالورونیک پایدار و بسیار خالص با رفتار بالینی قابل پیش‌بینی ارائه می‌دهد.",
  "about.c2.title": "تولید پیشرفته",
  "about.c2.desc":
    "تولید در تأسیسات دارای گواهی آلمان با کنترل کیفیت سخت‌گیرانه، ردیابی بچ و استانداردهای استریل.",
  "about.c3.title": "راهکارهای جهانی زیبایی",
  "about.c3.desc":
    "مدل همکاری برای کلینیک‌ها، پزشکان و توزیع‌کنندگان همراه با آموزش، مستندات و تأمین مطمئن.",

  "portfolio.eyebrow": "نمونه نتایج",
  "portfolio.title": "گالری قبل و بعد",
  "portfolio.sub":
    "مستندات نمونه از نتایج کنتور صورت و تغییر فرم بدن. این تصاویر جایگزین‌پذیر هستند.",
  "portfolio.before": "قبل",
  "portfolio.after": "بعد",
  "portfolio.i1": "کنتور میان‌صورت",
  "portfolio.i2": "تعریف خط فک",
  "portfolio.i3": "حجم‌دهی بدن",
  "portfolio.i4": "هارمونی کامل صورت",

  "process.eyebrow": "فرایند کار",
  "process.title": "مسیر همکاری",
  "process.s1.title": "مشاوره",
  "process.s1.desc":
    "بازار، پروفایل بالینی و حجم مورد انتظار شما را در مشاوره‌ای خصوصی بررسی می‌کنیم.",
  "process.s2.title": "انتخاب محصول",
  "process.s2.desc": "با هم فرمولاسیون و بسته‌بندی مناسب پروتکل‌های شما را تعیین می‌کنیم.",
  "process.s3.title": "همکاری",
  "process.s3.desc": "شرایط، مستندات و قلمرو توافق می‌شود و نخستین ارسال آماده می‌گردد.",
  "process.s4.title": "پشتیبانی",
  "process.s4.desc": "آموزش بالینی مستمر، منابع بازاریابی و تأمین مجدد مطمئن از آلمان.",

  "testi.eyebrow": "نظرات",
  "testi.title": "اعتماد متخصصان",
  "testi.sub": "نظرات شرکا در اینجا اضافه می‌شود.",
  "testi.t1": "یکدستی میان بچ‌ها کلینیک ما را متقاعد کرد. نتایج در هر درمان قابل پیش‌بینی است.",
  "testi.t2": "مستندات و لجستیک با نظم واقعی آلمانی انجام شد. راه‌اندازی توزیع ما بی‌دغدغه بود.",
  "testi.t3": "بیماران نرمی نتیجه را حس می‌کنند. برای کنتور بدن انتخاب استاندارد ما شده است.",
  "testi.r1": "مدیر کلینیک زیبایی",
  "testi.r2": "توزیع‌کننده منطقه‌ای",
  "testi.r3": "جراح پلاستیک",

  "contact.eyebrow": "همکاری",
  "contact.title": "بیایید چیزی ماندگار بسازیم",
  "contact.sub":
    "شبکه کلینیک‌ها، پزشکان و توزیع‌کنندگان خود را گسترش می‌دهیم. از بازار خود بگویید تا تیم همکاری ما در دو روز کاری پاسخ دهد.",
  "form.name": "نام و نام خانوادگی",
  "form.email": "ایمیل",
  "form.country": "کشور / بازار",
  "form.message": "چگونه می‌خواهید با SECRO-FILL کار کنید؟",
  "form.submit": "ارسال درخواست همکاری",
  "form.sent": "سپاسگزاریم — این فرم نمایشی است و داده‌ای ارسال نشد.",

  "footer.rights": "تمام حقوق محفوظ است.",
  "footer.note": "تنها برای استفاده حرفه‌ای. کلینیک‌ها، پزشکان و توزیع‌کنندگان.",

  "page.about.title": "درباره SECRO-FILL",
  "page.about.body":
    "برندی آلمانی در حوزه زیبایی پزشکی، متمرکز بر فناوری فیلر پوستی ممتاز با دقت آزمایشگاهی برای متخصصان سراسر جهان.",
  "page.services.title": "خدمات و محصولات",
  "page.services.body": "سبد فیلرها و خدمات حرفه‌ای همراه هر همکاری را ببینید.",
  "page.contact.title": "تماس با ما",
  "page.contact.body": "برای قیمت، مستندات و بررسی قلمرو با تیم همکاری SECRO-FILL تماس بگیرید.",
  "page.back": "بازگشت به صفحه اصلی",
};

const dicts: Record<Lang, Dict> = { en, ar, fa };

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

  const dir: "ltr" | "rtl" = lang === "en" ? "ltr" : "rtl";

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
