import type { Metadata } from "next";

import { ProductPlaceholderPage } from "@/components/products/ProductPlaceholderPage";
import { createOpenGraph } from "@/lib/site";

const title = "Product 3";
const description = "SECRO-FILL product page 3.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-3" },
  openGraph: createOpenGraph({ title, description, path: "/product-3" }),
};

export default function Page() {
  return <ProductPlaceholderPage productNumber={3} />;
}
