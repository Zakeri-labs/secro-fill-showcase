import type { Metadata } from "next";

import { ProductPlaceholderPage } from "@/components/products/ProductPlaceholderPage";
import { createOpenGraph } from "@/lib/site";

const title = "Product 1";
const description = "SECRO-FILL product page 1.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-1" },
  openGraph: createOpenGraph({ title, description, path: "/product-1" }),
};

export default function Page() {
  return <ProductPlaceholderPage productNumber={1} />;
}
