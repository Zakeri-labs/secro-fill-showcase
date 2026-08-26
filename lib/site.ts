import type { Metadata } from "next";

export const SITE_NAME = "SECRO-FILL";
export const SITE_URL = new URL(process.env["NEXT_PUBLIC_SITE_URL"] ?? "http://localhost:3000");

export const SOCIAL_IMAGE = {
  url: "/secro-fill-social-card.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "SECRO-FILL DEEP 10ml premium dermal filler product",
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
