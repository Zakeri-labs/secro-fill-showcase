import type { Metadata } from "next";

import { ProductPlaceholderPage } from "@/components/products/ProductPlaceholderPage";
import { createOpenGraph } from "@/lib/site";

const title = "Product 2";
const description = "SECRO-FILL product page 2.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-2" },
  openGraph: createOpenGraph({ title, description, path: "/product-2" }),
};

export default function Page() {
  return <ProductPlaceholderPage productNumber={2} />;
}
