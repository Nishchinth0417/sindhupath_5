"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useReveal — IntersectionObserver-based scroll reveal hook.
 * Adds an `is-visible` class when the element scrolls into view.
 * Respects prefers-reduced-motion via CSS (see globals.css).
 *
 * SSR-safe: initial state is hidden, but if IntersectionObserver is
 * unavailable we skip mounting the observer and the element falls
 * back to visible via the CSS `prefers-reduced-motion` rule and
 * the unconditional `is-visible` toggle below.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; once?: boolean }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IO support → just mark visible (deferred to avoid setState-in-effect warning).
    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (options?.once !== false) observer.unobserve(entry.target);
          } else if (options?.once === false) {
            setVisible(false);
          }
        });
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, visible };
}
