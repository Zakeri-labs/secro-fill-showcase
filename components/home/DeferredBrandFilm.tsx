"use client";

import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

const VIDEO_SRC = "/media/secro-fill-film.mp4";
const VIDEO_LOAD_DELAY_MS = 3500;

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export function DeferredBrandFilm() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  useEffect(() => {
    let delayTimer: number | undefined;

    const queueVideoLoad = () => {
      delayTimer = window.setTimeout(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true;

        if (!reducedMotion && !saveData) setShouldLoadVideo(true);
      }, VIDEO_LOAD_DELAY_MS);
    };

    if (document.readyState === "complete") {
      queueVideoLoad();
    } else {
      window.addEventListener("load", queueVideoLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", queueVideoLoad);
      if (delayTimer !== undefined) window.clearTimeout(delayTimer);
    };
  }, []);

  useEffect(() => {
    if (shouldLoadVideo) videoRef.current?.load();
  }, [shouldLoadVideo]);

  const startPlayback = () => {
    setVideoReady(true);
    void videoRef.current?.play().catch(() => {
      // Autoplay can still be blocked by a browser policy; the composed frame remains visible.
    });
  };

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
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,color-mix(in_oklch,var(--gold)_20%,transparent),transparent_32%),linear-gradient(135deg,color-mix(in_oklch,var(--emerald-deep)_88%,black),var(--hero-surface))]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-[7%] border border-gold-soft/15 sm:inset-[5%]"
                />
                <div
                  aria-hidden="true"
                  className="absolute top-1/2 left-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold-soft/35 text-gold-soft sm:h-28 sm:w-28"
                >
                  <span className="font-display text-4xl font-light sm:text-6xl">S</span>
                </div>

                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  disablePictureInPicture
                  aria-hidden="true"
                  onCanPlay={startPlayback}
                  onError={() => setVideoUnavailable(true)}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    videoReady && !videoUnavailable ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {shouldLoadVideo && <source src={VIDEO_SRC} type="video/mp4" />}
                </video>

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
