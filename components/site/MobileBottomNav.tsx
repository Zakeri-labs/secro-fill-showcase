"use client";

import { MessageCircle, Package, Phone, Sparkles } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

export function MobileBottomNav() {
  const { t } = useI18n();

  const items = [
    { href: "/#services", key: "nav.services", Icon: Package },
    { href: "/#portfolio", key: "nav.portfolio", Icon: Sparkles },
    { href: "/#contact", key: "nav.contact", Icon: Phone },
  ];

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/92 backdrop-blur-xl lg:hidden"
    >
      <div className="grid grid-cols-4 items-stretch">
        {items.map(({ href, key, Icon }) => (
          <a
            key={key}
            href={href}
            className="flex flex-col items-center justify-center gap-1 py-3 text-muted-foreground"
          >
            <Icon className="h-4 w-4" />
            <span className="text-[0.55rem] tracking-[0.14em] uppercase">{t(key)}</span>
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-col items-center justify-center gap-1 bg-primary py-3 text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-[0.55rem] tracking-[0.14em] uppercase">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
