import type { Metadata } from "next";

export const SITE_NAME = "SECRO-FILL";
export const SITE_URL = new URL(process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://www.secrofill.com");

const socialImageUrl = new URL("/secro-fill-social-card.jpg?v=20260827b", SITE_URL).toString();

export const SOCIAL_IMAGE = {
  url: socialImageUrl,
  secureUrl: socialImageUrl,
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "SECRO-FILL DEEP 3×3.2ml and DEEP 10ml premium dermal filler products",
} as const;

export function createOpenGraph({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    siteName: SITE_NAME,
    type: "website",
    url: path,
    locale: "en_US",
    images: [SOCIAL_IMAGE],
  };
}
