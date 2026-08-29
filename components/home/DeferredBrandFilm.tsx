"use client";

import Image from "next/image";

import desktopBrandExperienceImg from "@/assets/brand-experience-desktop.jpg";
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
                  src={desktopBrandExperienceImg}
                  alt={t("image.brandFilm")}
                  fill
                  unoptimized
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
                  className="absolute inset-0 bg-gradient-to-r from-[#1d120f]/75 via-[#1d120f]/55 via-40% to-transparent to-95% md:hidden"
                />
                <div
                  dir={isRtl ? "rtl" : "ltr"}
                  className={`absolute inset-0 flex items-start p-6 sm:p-10 lg:p-14 md:items-center ${
                    isRtl ? "justify-end text-right" : "justify-start text-left"
                  }`}
                >
                  <div
                    className={
                      isRtl
                        ? "w-36 max-w-36 md:w-full md:max-w-[28rem] md:translate-x-0 md:-translate-y-20 md:mr-16 lg:-translate-x-2 lg:-translate-y-24 lg:mr-24"
                        : "w-36 max-w-36 md:w-full md:max-w-[26rem]"
                    }
                  >
                    <h2
                      id="brand-film-title"
                      className={`leading-[1.05] text-primary-foreground ${
                        isRtl
                          ? "text-[1.65rem] md:text-[3.25rem] lg:text-[4rem]"
                          : "text-4xl sm:text-5xl lg:text-6xl"
                      }`}
                    >
                      {t("film.frame.title")}
                    </h2>
                    <p
                      className={`mt-5 leading-relaxed text-primary-foreground/80 md:max-w-xl ${
                        isRtl
                          ? "ml-auto max-w-[7.125rem] text-[0.7rem] md:max-w-xl md:text-[1.0625rem]"
                          : "ml-0 max-w-[12.5rem] text-sm sm:text-base"
                      }`}
                    >
                      {t("film.sub")}
                    </p>
                    <div
                      className={`text-primary-foreground/75 ${
                        isRtl
                          ? "mt-10 hidden items-center gap-3 text-xs tracking-[0.03em] md:flex"
                          : "mt-8 hidden items-center gap-3 text-[0.6rem] tracking-[0.2em] uppercase sm:mt-10 md:flex"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-soft shadow-[0_0_12px_var(--gold-soft)]" />
                      <span>{t("film.frame.eyebrow")}</span>
                      <span
                        aria-hidden="true"
                        className="hidden h-px w-8 bg-gold-soft/65 md:block"
                      />
                      <span>{t("film.frame.label")}</span>
                    </div>
                  </div>
                </div>
                <div
                  dir={isRtl ? "rtl" : "ltr"}
                  className={`absolute inset-x-0 bottom-0 flex items-center gap-3 whitespace-nowrap text-primary-foreground/75 md:hidden ${
                    isRtl
                      ? "justify-center bg-gradient-to-t from-black/55 to-transparent px-4 pt-12 pb-5 text-center text-xs tracking-[0.02em]"
                      : "justify-start p-6 text-left text-[0.6rem] tracking-[0.2em] uppercase"
                  }`}
                >
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
