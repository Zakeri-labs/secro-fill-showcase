"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import heroImg from "@/assets/Hero-image-Web.png";
import { PageShell } from "@/components/site/PageShell";
import { COMPANY_ADDRESS, COMPANY_NAME, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

export function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <PageShell
      eyebrow={t("contact.eyebrow")}
      title={t("page.contact.title")}
      body={t("page.contact.body")}
      heroVisual={
        <div className="relative min-h-56 aspect-[16/10] overflow-hidden border border-border bg-secondary shadow-luxe">
          <Image
            src={heroImg}
            alt="Close-up portrait illustrating premium medical aesthetics"
            fill
            priority
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover object-[72%_center]"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
        </div>
      }
    >
      <div className="overflow-hidden border border-primary/25 bg-emerald-gradient text-primary-foreground shadow-luxe">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between border-b border-primary-foreground/15 p-7 sm:p-10 lg:border-e lg:border-b-0 lg:p-12">
            <div>
              <div className="grid h-16 w-16 place-items-center border border-accent/70 text-accent">
                <MessageCircle className="h-7 w-7" strokeWidth={1.35} />
              </div>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center gap-3 bg-accent px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.whatsapp")}
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center border border-accent px-7 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-accent transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
                >
                  {t("cta.partner")}
                </Link>
              </div>
            </div>
            <div className="mt-10 grid gap-3 text-xs tracking-[0.12em] text-primary-foreground/70">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-accent"
              >
                {WHATSAPP_NUMBER}
              </a>
              <span>{COMPANY_ADDRESS}</span>
            </div>
          </div>

          <form
            className="grid gap-5 bg-primary-foreground/5 p-7 sm:p-10 lg:p-12"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const whatsappMessage = [
                `${COMPANY_NAME} — Partnership Request`,
                `${t("form.name")}: ${formData.get("name") ?? ""}`,
                `${t("form.email")}: ${formData.get("email") ?? ""}`,
                `${t("form.country")}: ${formData.get("country") ?? ""}`,
                `${t("form.message")}: ${formData.get("message") ?? ""}`,
              ].join("\n");

              window.open(
                `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`,
                "_blank",
                "noopener,noreferrer",
              );
              setSent(true);
            }}
          >
            {[
              { id: "name", label: "form.name", type: "text" },
              { id: "email", label: "form.email", type: "email" },
              { id: "country", label: "form.country", type: "text" },
            ].map((field) => (
              <div key={field.id} className="grid gap-2">
                <label
                  htmlFor={`contact-${field.id}`}
                  className="text-[0.62rem] tracking-[0.22em] uppercase text-primary-foreground/70"
                >
                  {t(field.label)}
                </label>
                <input
                  id={`contact-${field.id}`}
                  name={field.id}
                  type={field.type}
                  required
                  className="border-b border-primary-foreground/25 bg-transparent py-2.5 text-sm text-primary-foreground outline-none transition-colors focus:border-accent"
                />
              </div>
            ))}
            <div className="grid gap-2">
              <label
                htmlFor="contact-message"
                className="text-[0.62rem] tracking-[0.22em] uppercase text-primary-foreground/70"
              >
                {t("form.message")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                className="border-b border-primary-foreground/25 bg-transparent py-2.5 text-sm text-primary-foreground outline-none transition-colors focus:border-accent"
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
        </div>
      </div>
    </PageShell>
  );
}
