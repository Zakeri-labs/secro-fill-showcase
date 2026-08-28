"use client";

import Image from "next/image";

import heroImg from "@/assets/Hero-image-Web.jpg";
import mobileHeroImg from "@/assets/Hero-image-mobile.jpg";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

export function BrandExperience() {
  const { lang, t } = useI18n();
  const isRtl = lang === "ar";

  return (
    <section
      aria-labelledby="brand-film-title"
      className="relative isolate overflow-hidden bg-background px-5 py-24 lg:px-10 lg:py-32"
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
        <Reveal>
          <div className="grid items-end gap-7 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold-deep">
                <span
                  aria-hidden="true"
                  className="product-card-divider-gold divider-diamond-end w-10 sm:w-14"
                />
                <span>{t("film.eyebrow")}</span>
              </p>
              <h2
                id="brand-film-title"
                className="mt-5 max-w-3xl text-4xl leading-[1.05] text-primary rtl:text-[2.5rem] sm:text-5xl sm:rtl:text-[3.25rem] lg:text-6xl lg:rtl:text-[4rem]"
              >
                {t("film.title")}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground rtl:text-[0.9375rem] sm:text-base sm:rtl:text-[1.0625rem] lg:pb-1">
              {t("film.sub")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={140} distance={28}>
          <div className="relative mt-12 p-[1px] shadow-luxe sm:mt-14">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-gold-soft via-gold-deep to-gold-soft"
            />
            <div className="relative m-[1px] overflow-hidden bg-hero-surface">
              <div className="relative aspect-video w-full overflow-hidden">
                <picture className="absolute inset-0 block">
                  <source
                    media={
                      isRtl
                        ? "(max-width: 639px), (max-width: 899px) and (orientation: portrait)"
                        : "(max-width: 639px)"
                    }
                    srcSet={mobileHeroImg.src}
                  />
                  <Image
                    src={heroImg}
                    alt={t("image.brandFilm")}
                    fill
                    sizes="(min-width: 1280px) 80rem, 100vw"
                    className={
                      isRtl
                        ? "object-cover object-bottom [@media(max-width:899px)_and_(orientation:landscape)]:object-right md:object-center"
                        : "object-cover object-bottom [@media(max-width:899px)_and_(orientation:landscape)]:object-right md:object-[62%_center] lg:object-center"
                    }
                  />
                </picture>

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-hero-surface/85 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 text-primary-foreground sm:p-8 lg:p-10">
                  <div>
                    <p className="text-[0.6rem] tracking-[0.25em] text-gold-soft uppercase rtl:text-xs rtl:tracking-[0.03em] rtl:normal-case">
                      {t("film.frame.eyebrow")}
                    </p>
                    <p className="mt-2 font-display text-xl font-light sm:text-3xl rtl:font-sans rtl:font-medium">
                      {t("film.frame.title")}
                    </p>
                  </div>
                  <div className="hidden items-center gap-3 text-[0.58rem] tracking-[0.2em] text-primary-foreground/70 uppercase sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-soft shadow-[0_0_12px_var(--gold-soft)]" />
                    <span>{t("film.frame.label")}</span>
                  </div>
                </div>
              </div>

              <span className="absolute start-0 top-0 h-7 w-px bg-gold-soft sm:h-11" />
              <span className="absolute start-0 top-0 h-px w-7 bg-gold-soft sm:w-11" />
              <span className="absolute end-0 bottom-0 h-7 w-px bg-gold-soft sm:h-11" />
              <span className="absolute end-0 bottom-0 h-px w-7 bg-gold-soft sm:w-11" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
