"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

import { useI18n } from "@/lib/i18n";

export function BeforeAfterCard({
  before,
  after,
  alt,
  title,
  comparisonLabel,
}: {
  before: StaticImageData;
  after: StaticImageData;
  alt: string;
  title: string;
  comparisonLabel?: string;
}) {
  const { t } = useI18n();
  const stageRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const stage = stageRef.current;
    if (!stage) return;

    const bounds = stage.getBoundingClientRect();
    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(100, Math.max(0, nextPosition)));
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (isDragging) updatePosition(event.clientX);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    setPosition((current) => Math.min(100, Math.max(0, current + direction * 5)));
  };

  return (
    <figure className="card-luxe h-full overflow-hidden rounded-[24px]">
      <div
        ref={stageRef}
        role="slider"
        tabIndex={0}
        aria-label={
          comparisonLabel ?? `${title}: ${t("portfolio.before")} / ${t("portfolio.after")}`
        }
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        className={`relative aspect-[5/6] touch-none select-none overflow-hidden bg-secondary outline-none focus-visible:ring-2 focus-visible:ring-accent ${isDragging ? "cursor-grabbing" : "cursor-ew-resize"}`}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <Image
          src={after}
          alt={`${alt} — ${t("portfolio.after")}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          draggable={false}
          className="pointer-events-none object-cover"
        />
        <Image
          src={before}
          alt={`${alt} — ${t("portfolio.before")}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          draggable={false}
          className="pointer-events-none object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_0_1px_rgba(24,55,45,0.12)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg">
            <ChevronLeft className="h-4 w-4" />
            <ChevronRight className="-ms-1 h-4 w-4" />
          </span>
        </div>
      </div>
      <figcaption className="p-6">
        <h3 className="text-xl rtl:text-[1.375rem]">{title}</h3>
      </figcaption>
    </figure>
  );
}
