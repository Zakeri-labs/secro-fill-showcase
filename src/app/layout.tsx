import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AppProviders } from "@/components/providers/AppProviders";
import { createOpenGraph, SITE_URL } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: "SECROMED — German Premium Dermal Fillers",
    template: "%s | SECROMED",
  },
  description:
    "SECROMED is a German medical aesthetics brand producing premium dermal fillers for clinics, physicians and distributors.",
  openGraph: createOpenGraph({
    title: "SECROMED — German Premium Dermal Fillers",
    description:
      "SECROMED is a German medical aesthetics brand producing premium dermal fillers for clinics, physicians and distributors.",
    path: "/",
  }),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
