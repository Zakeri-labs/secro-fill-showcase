import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Quote } from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/hero.jpg";
import bodyImg from "@/assets/product-body.jpg";
import deep3xImg from "@/assets/product-deep-3x.jpg";
import deep10Img from "@/assets/product-deep-10ml.jpg";
import faceAfter from "@/assets/portfolio-face.jpg";
import bodyAfter from "@/assets/portfolio-body.jpg";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SECRO-FILL — German Premium Dermal Fillers for Clinics" },
      {
        name: "description",
        content:
          "SECRO-FILL is a German medical aesthetics brand producing premium dermal fillers for clinics, physicians and distributors. Facial contouring and body volumisation.",
      },
      { property: "og:title", content: "SECRO-FILL — German Premium Dermal Fillers" },
      {
        property: "og:description",
        content:
          "Premium German dermal fillers for facial contouring and body volumisation. Partnership opportunities for clinics, doctors and distributors.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SECRO-FILL",
          description:
            "German medical aesthetics brand producing premium dermal fillers for professional use.",
          address: { "@type": "PostalAddress", addressCountry: "DE" },
        }),
      },
    ],
  }),
  component: Home,
});

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
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{sub}</p>}
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative min-h-[92svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Close-up portrait of a woman with luminous skin illustrating premium medical aesthetics results"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, oklch(0.2 0.03 165 / 0.92), oklch(0.2 0.03 165 / 0.45) 55%, oklch(0.2 0.03 165 / 0.55))",
        }}
      />
      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-20 lg:px-10 lg:pb-28">
        <div className="animate-rise max-w-2xl">
          <p className="eyebrow text-accent">{t("hero.eyebrow")}</p>
          <h1 className="mt-6 text-4xl leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            {t("hero.sub")}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-accent px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-accent-foreground transition-opacity hover:opacity-90"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center border border-primary-foreground/40 px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-primary-foreground transition-colors hover:border-accent hover:text-accent"
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
              <span className="text-[0.68rem] tracking-[0.28em] uppercase text-muted-foreground">
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
    { img: deep10Img, name: "services.p1.name", desc: "services.p1.desc", alt: "SECRO-FILL DEEP 10ml dermal filler syringe with premium packaging — replaceable product image" },
    { img: deep3xImg, name: "services.p2.name", desc: "services.p2.desc", alt: "SECRO-FILL DEEP three 3.2ml syringe clinical set — replaceable product image" },
    { img: bodyImg, name: "services.p3.name", desc: "services.p3.desc", alt: "SECRO-FILL body filler product with emerald and gold packaging — replaceable product image" },
  ];

  return (
    <section id="services" className="px-5 py-24 lg:px-10 lg:py-32">
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
              <article className="card-luxe flex h-full flex-col">
                <div className="aspect-4/3 overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={p.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl">{t(p.name)}</h3>
                  <div className="hairline mt-4 w-12" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t(p.desc)}
                  </p>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-[0.68rem] tracking-[0.2em] uppercase text-primary"
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
  const cards = ["c1", "c2", "c3"];

  return (
    <section id="about" className="bg-emerald-gradient px-5 py-24 text-primary-foreground lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">{t("about.eyebrow")}</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {t("about.title")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              {t("about.sub")}
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden border border-primary-foreground/15 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c} delay={i * 120}>
              <div className="h-full border-primary-foreground/15 bg-primary-foreground/5 p-8 md:border-e md:last:border-e-0">
                <span className="text-xs tracking-[0.3em] text-accent">0{i + 1}</span>
                <h3 className="mt-5 text-xl">{t(`about.${c}.title`)}</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                  {t(`about.${c}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const { t } = useI18n();
  const items = [
    { key: "portfolio.i1", img: faceAfter, alt: "Mid-face contour aesthetic result documentation — replaceable before and after image" },
    { key: "portfolio.i2", img: faceAfter, alt: "Jawline definition aesthetic result documentation — replaceable before and after image" },
    { key: "portfolio.i3", img: bodyAfter, alt: "Body volumisation contour result documentation — replaceable before and after image" },
    { key: "portfolio.i4", img: bodyAfter, alt: "Full facial harmony aesthetic result documentation — replaceable before and after image" },
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
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.key} delay={i * 100}>
              <figure className="card-luxe group h-full overflow-hidden">
                <div className="relative aspect-3/4 overflow-hidden bg-secondary">
                  <img
                    src={it.img}
                    alt={it.alt}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex justify-between px-3 py-2 text-[0.6rem] tracking-[0.2em] uppercase text-primary-foreground backdrop-blur-sm"
                    style={{ background: "oklch(0.25 0.03 165 / 0.55)" }}
                  >
                    <span>{t("portfolio.before")}</span>
                    <span className="text-accent">{t("portfolio.after")}</span>
                  </div>
                </div>
                <figcaption className="p-5 text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
                  {t(it.key)}
                </figcaption>
              </figure>
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
                <h3 className="mt-6 text-xl">{t(`process.${s}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
  const { t } = useI18n();
  const items = [
    { q: "testi.t1", r: "testi.r1" },
    { q: "testi.t2", r: "testi.r2" },
    { q: "testi.t3", r: "testi.r3" },
  ];

  return (
    <section id="testimonials" className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHead
            eyebrow={t("testi.eyebrow")}
            title={t("testi.title")}
            sub={t("testi.sub")}
          />
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.q} delay={i * 120}>
              <blockquote className="card-luxe flex h-full flex-col p-8">
                <Quote className="h-6 w-6 text-accent rtl:rotate-180" />
                <p className="mt-6 flex-1 text-base leading-relaxed">{t(it.q)}</p>
                <div className="hairline mt-7 w-10" />
                <footer className="mt-4 text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                  {t(it.r)}
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
    <section id="contact" className="bg-emerald-gradient px-5 py-24 text-primary-foreground lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div>
            <p className="eyebrow text-accent">{t("contact.eyebrow")}</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {t("contact.title")}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              {t("contact.sub")}
            </p>
            <a
              href="https://wa.me/49000000000"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-10 inline-flex items-center gap-3 border border-accent px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              {t("cta.whatsapp")}
            </a>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <form
            className="grid gap-5 bg-primary-foreground/5 p-7 backdrop-blur-sm sm:p-9"
            onSubmit={(e) => {
              e.preventDefault();
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
                  className="text-[0.62rem] tracking-[0.22em] uppercase text-primary-foreground/70"
                >
                  {t(f.label)}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required
                  className="border-b border-primary-foreground/25 bg-transparent py-2.5 text-sm text-primary-foreground outline-none focus:border-accent"
                />
              </div>
            ))}
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-[0.62rem] tracking-[0.22em] uppercase text-primary-foreground/70"
              >
                {t("form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="border-b border-primary-foreground/25 bg-transparent py-2.5 text-sm text-primary-foreground outline-none focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="mt-3 bg-accent px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-accent-foreground transition-opacity hover:opacity-90"
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

function Home() {
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
