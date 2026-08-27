"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

export type ProductShowcaseItem = {
  id: string;
  name: string;
  description: string;
  specification: string;
  image: StaticImageData;
  alt: string;
};

function ProductCard({ item, ctaLabel }: { item: ProductShowcaseItem; ctaLabel: string }) {
  return (
    <article className="product-card-gold flex h-full flex-col overflow-hidden bg-card transition-[box-shadow,transform] duration-500 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
        />
        <span className="absolute start-5 top-5 bg-primary px-3 py-2 text-[0.6rem] tracking-[0.18em] text-primary-foreground uppercase rtl:text-xs rtl:tracking-normal rtl:normal-case">
          {item.id}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="text-[0.64rem] leading-relaxed tracking-[0.16em] text-gold-deep uppercase rtl:text-xs rtl:tracking-normal rtl:normal-case">
          {item.specification}
        </p>
        <h3 className="mt-4 text-2xl leading-tight text-primary rtl:text-[1.625rem]">
          {item.name}
        </h3>
        <div className="product-card-divider-gold mt-5 w-16" />
        <p className="mt-5 flex-1 text-sm leading-[1.8] text-muted-foreground rtl:text-base">
          {item.description}
        </p>
        <Link
          href="#product-technology"
          className="mt-7 inline-flex w-fit items-center gap-2 border-b border-accent pb-1 text-[0.66rem] tracking-[0.16em] uppercase text-primary transition-colors hover:text-gold-deep rtl:text-sm rtl:tracking-normal rtl:normal-case"
        >
          {ctaLabel}
          <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-90" />
        </Link>
      </div>
    </article>
  );
}

export function ProductShowcase({
  products,
  ctaLabel,
}: {
  products: ProductShowcaseItem[];
  ctaLabel: string;
}) {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <Reveal key={product.id} delay={index * 140} distance={64} scale={0.975}>
          <ProductCard item={product} ctaLabel={ctaLabel} />
        </Reveal>
      ))}
    </div>
  );
}
