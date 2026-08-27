"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  distance = 16,
  scale = 1,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  scale?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        setShown(entries[0]?.isIntersecting ?? false);
      },
      {
        rootMargin: "-12% 0px -12% 0px",
        threshold: 0.12,
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

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
      }}
    >
      {children}
    </div>
  );
}
