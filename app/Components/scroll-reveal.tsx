"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  direction: "left" | "right";
  className?: string;
};

export function ScrollReveal({
  children,
  direction,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.25,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={elementRef}
      className={`scroll-page-reveal scroll-page-reveal-${direction} ${
        isVisible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
