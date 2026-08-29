"use client";

import Image from "next/image";

import heroImg from "@/assets/Hero-image-Web.jpg";
import mobileBrandExperienceImg from "@/assets/brand-experience-mobile.jpg";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

export function BrandExperience() {
  const { lang, t } = useI18n();
  const isRtl = lang === "ar";

  return (
    <section
      aria-labelledby="brand-film-title"
      className="relative isolate overflow-hidden bg-background px-5 py-20 lg:px-10 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-48 top-[-18rem] -z-10 h-[38rem] w-[38rem] rounded-full border border-gold-deep/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-56 bottom-[-22rem] -z-10 h-[42rem] w-[42rem] rounded-full border border-gold-deep/10"
      />

      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-5 flex items-center gap-3 text-gold-deep">
          <span aria-hidden="true" className="product-card-divider-gold divider-diamond-end w-10" />
          <span>{t("film.eyebrow")}</span>
        </p>
        <Reveal distance={28}>
          <div className="relative overflow-hidden border border-gold-soft/90 shadow-luxe">
            <div className="relative bg-hero-surface">
              <div className="relative min-h-[32rem] w-full overflow-hidden sm:min-h-[38rem] lg:min-h-[42rem]">
                <Image
                  src={heroImg}
                  alt={t("image.brandFilm")}
                  fill
                  sizes="(min-width: 1280px) 80rem, 100vw"
                  className="hidden object-cover object-center md:block"
                />
                <Image
                  src={mobileBrandExperienceImg}
                  alt={t("image.brandFilm")}
                  fill
                  unoptimized
                  sizes="100vw"
                  className="object-cover object-right md:hidden"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-hero-surface/72 via-hero-surface/38 to-hero-surface/5 rtl:bg-gradient-to-l"
                />
                <div
                  dir={isRtl ? "rtl" : "ltr"}
                  className={`absolute inset-0 flex items-start justify-end p-6 text-right sm:p-10 lg:p-14 md:items-center ${
                    isRtl ? "md:justify-end md:text-right" : "md:justify-start md:text-left"
                  }`}
                >
                  <div className="w-[78%] max-w-[17rem] sm:w-full sm:max-w-2xl">
                    <h2
                      id="brand-film-title"
                      className="text-4xl leading-[1.05] text-primary-foreground rtl:text-[2.5rem] sm:text-5xl sm:rtl:text-[3.25rem] lg:text-6xl lg:rtl:text-[4rem]"
                    >
                      {t("film.frame.title")}
                    </h2>
                    <p
                      className={`mt-5 ml-auto max-w-[12.5rem] text-sm leading-relaxed text-primary-foreground/80 rtl:text-[0.9375rem] sm:text-base sm:rtl:text-[1.0625rem] md:max-w-xl ${
                        isRtl ? "" : "md:ml-0"
                      }`}
                    >
                      {t("film.sub")}
                    </p>
                    <div className="mt-8 hidden items-center gap-3 text-[0.6rem] tracking-[0.2em] text-primary-foreground/75 uppercase rtl:text-xs rtl:tracking-[0.03em] rtl:normal-case sm:mt-10 md:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-soft shadow-[0_0_12px_var(--gold-soft)]" />
                      <span>{t("film.frame.eyebrow")}</span>
                      <span aria-hidden="true" className="h-px w-8 bg-gold-soft/65" />
                      <span>{t("film.frame.label")}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-3 p-6 whitespace-nowrap text-[0.6rem] tracking-[0.2em] text-primary-foreground/75 uppercase rtl:text-xs rtl:tracking-[0.03em] rtl:normal-case md:hidden">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-soft shadow-[0_0_12px_var(--gold-soft)]" />
                  <span>{t("film.frame.eyebrow")}</span>
                  <span aria-hidden="true" className="h-px w-8 bg-gold-soft/65" />
                  <span>{t("film.frame.label")}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
