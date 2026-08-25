import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileBottomNav } from "./MobileBottomNav";
import { useI18n } from "@/lib/i18n";

export function PageShell({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main className="px-5 pt-32 pb-24 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{title}</h1>
          <div className="hairline mt-8 w-16" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">{body}</p>
          {children}
          <Link
            to="/"
            className="mt-14 inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.68rem] tracking-[0.2em] uppercase text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
            {t("page.back")}
          </Link>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
