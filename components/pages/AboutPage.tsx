"use client";

import Image from "next/image";
import { Factory, Globe2, Microscope } from "lucide-react";

import positioningImg from "@/assets/Positiononig-Section.webp";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

export function AboutPage() {
  const { t } = useI18n();
  const cards = [
    { key: "c1", Icon: Microscope },
    { key: "c2", Icon: Factory },
    { key: "c3", Icon: Globe2 },
  ];

  return (
    <PageShell
      eyebrow={t("about.eyebrow")}
      title={t("page.about.title")}
      body={t("page.about.body")}
      heroVisual={
        <div className="relative min-h-56 aspect-[16/10] overflow-hidden border border-border bg-primary shadow-luxe">
          <Image
            src={positioningImg}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-primary/20" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {cards.map(({ key, Icon }, index) => (
          <Reveal key={key} delay={index * 100}>
            <article className="card-luxe relative flex h-full min-h-[19rem] flex-col overflow-hidden p-7 sm:p-8">
              <span className="absolute end-0 top-0 bg-secondary px-5 py-3 text-xl leading-none text-gold-deep">
                0{index + 1}
              </span>
              <div className="grid h-16 w-16 place-items-center border border-accent/70 text-primary">
                <Icon className="h-7 w-7" strokeWidth={1.35} />
              </div>
              <h2 className="mt-8 max-w-[15rem] text-2xl leading-tight text-primary">
                {t(`about.${key}.title`)}
              </h2>
              <div className="hairline mt-5 w-12" />
              <p className="mt-5 text-sm leading-[1.8] text-muted-foreground">
                {t(`about.${key}.desc`)}
              </p>
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
            </article>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
