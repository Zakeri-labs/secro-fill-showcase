"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  distance = 16,
  scale = 1,
  duration = 700,
  once = false,
  threshold = 0.12,
  rootMargin = "-12% 0px -12% 0px",
  trigger = "self",
  fitThresholdToViewport = false,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  scale?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
  trigger?: "self" | "closest-article";
  fitThresholdToViewport?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observedElement = trigger === "closest-article" ? (el.closest("article") ?? el) : el;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observedHeight = observedElement.getBoundingClientRect().height;
    const maximumVisibleRatio = Math.min(
      1,
      Math.max(0.01, (window.innerHeight - 48) / observedHeight),
    );
    const effectiveThreshold = fitThresholdToViewport
      ? Math.min(threshold, maximumVisibleRatio)
      : threshold;

    const io = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0]?.isIntersecting ?? false;
        setShown(isIntersecting);

        if (isIntersecting && once) {
          io.disconnect();
        }
      },
      {
        rootMargin,
        threshold: effectiveThreshold,
      },
    );
    io.observe(observedElement);
    return () => io.disconnect();
  }, [fitThresholdToViewport, once, rootMargin, threshold, trigger]);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown
          ? "translate3d(0, 0, 0) scale(1)"
          : `translate3d(0, ${distance}px, 0) scale(${scale})`,
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
