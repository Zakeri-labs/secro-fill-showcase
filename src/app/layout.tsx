import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AppProviders } from "@/components/providers/AppProviders";
import { COMPANY_NAME } from "@/lib/company";
import { createOpenGraph, SITE_URL } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: "SECRO-FILL — German Premium Dermal Fillers",
    template: "%s | SECRO-FILL",
  },
  description: `${COMPANY_NAME}: German medical aesthetics company behind SECRO-FILL premium dermal fillers for clinics, physicians and distributors.`,
  openGraph: createOpenGraph({
    title: "SECRO-FILL — German Premium Dermal Fillers",
    description: `${COMPANY_NAME}: German medical aesthetics company behind SECRO-FILL premium dermal fillers for clinics, physicians and distributors.`,
    path: "/",
  }),
  icons: {
    icon: "/favicon.svg",
  },
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
