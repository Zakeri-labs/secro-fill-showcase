import type { Metadata } from "next";

import { ProductsPage } from "@/components/pages/ProductsPage";
import { getPageTranslation } from "@/lib/i18n-page-content";
import { createOpenGraph } from "@/lib/site";

const title = getPageTranslation("en", "seo.products.title");
const description = getPageTranslation("en", "seo.products.description");

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  openGraph: createOpenGraph({
    title,
    description,
    path: "/products",
  }),
};

export default function Page() {
  return <ProductsPage />;
}
