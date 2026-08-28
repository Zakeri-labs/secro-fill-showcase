import type { Metadata } from "next";

import { ProductPlaceholderPage } from "@/components/products/ProductPlaceholderPage";
import { createOpenGraph } from "@/lib/site";

const title = "Product 5";
const description = "SECRO-FILL product page 5.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-5" },
  openGraph: createOpenGraph({ title, description, path: "/product-5" }),
};

export default function Page() {
  return <ProductPlaceholderPage productNumber={5} />;
}
