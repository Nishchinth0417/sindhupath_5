"use client";

import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

/**
 * RevealCard — wraps children with scroll-triggered fade-up animation.
 * Falls back to visible state when IntersectionObserver is unavailable
 * (SSR or old browsers), so the page is never blank.
 */
export function RevealCard({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.12 });

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
