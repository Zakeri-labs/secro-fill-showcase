import type { Metadata } from "next";

import { ProductPlaceholderPage } from "@/components/products/ProductPlaceholderPage";
import { createOpenGraph } from "@/lib/site";

const title = "Product 4";
const description = "SECRO-FILL product page 4.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-4" },
  openGraph: createOpenGraph({ title, description, path: "/product-4" }),
};

export default function Page() {
  return <ProductPlaceholderPage productNumber={4} />;
}
