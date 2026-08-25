import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AppProviders } from "@/components/providers/AppProviders";
import { COMPANY_NAME } from "@/lib/company";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env["NEXT_PUBLIC_SITE_URL"] ?? "http://localhost:3000"),
  title: {
    default: "SECRO-FILL — German Premium Dermal Fillers",
    template: "%s | SECRO-FILL",
  },
  description: `${COMPANY_NAME}: German medical aesthetics company behind SECRO-FILL premium dermal fillers for clinics, physicians and distributors.`,
  openGraph: {
    siteName: "SECRO-FILL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
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
