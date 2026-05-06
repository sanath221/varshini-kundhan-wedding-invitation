"use client";

import type { ReactNode } from "react";
import { Children, useEffect, useRef, useState } from "react";

type InvitationSlideshowProps = {
  children: ReactNode;
};

export function InvitationSlideshow({ children }: InvitationSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const slides = Children.toArray(children);
  const totalSlides = slides.length;

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const handleScroll = () => {
      const nextSlide = slideRefs.current.reduce(
        (closestIndex, slide, index) => {
          if (!slide) {
            return closestIndex;
          }

          const closestSlide = slideRefs.current[closestIndex];

          if (!closestSlide) {
            return index;
          }

          const currentDistance = Math.abs(scroller.scrollLeft - slide.offsetLeft);
          const closestDistance = Math.abs(
            scroller.scrollLeft - closestSlide.offsetLeft,
          );

          return currentDistance < closestDistance ? index : closestIndex;
        },
        0,
      );

      setCurrentSlide(nextSlide);
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => scroller.removeEventListener("scroll", handleScroll);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    const scroller = scrollerRef.current;
    const slide = slideRefs.current[index];

    if (!scroller || !slide) {
      return;
    }

    setCurrentSlide(index);
    scroller.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    goToSlide((currentSlide + 1) % totalSlides);
  };

  return (
    <section
      id="pages-section"
      className="flex w-full flex-col items-center gap-5"
    >
      <div className="relative w-full max-w-6xl overflow-hidden rounded-[26px] border border-[#d2b988] bg-[#f8efdf]/72 px-0 py-5 shadow-[0_28px_90px_rgba(97,71,39,0.18)] backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#f8efdf] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#f8efdf] to-transparent sm:w-20" />

        <div
          ref={scrollerRef}
          className="classic-page-strip flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {slides.map((slide, index) => {
            return (
              <article
                key={index}
                ref={(element) => {
                  slideRefs.current[index] = element;
                }}
                className="flex min-w-full snap-center justify-center px-2 sm:px-4"
              >
                <div className="classic-page-frame w-full max-w-[560px]">
                  {slide}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="flex w-full max-w-[560px] items-center justify-between gap-4 rounded-full border border-[#d6bd90] bg-[#fff6e6]/85 px-4 py-3 shadow-[0_16px_45px_rgba(97,71,39,0.14)] backdrop-blur-sm">
        <button
          type="button"
          onClick={goToPrevious}
          className="rounded-full border border-[#c8ad80] bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#765431] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c8ad80]"
        >
          Prev
        </button>

        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show page ${index + 1}`}
              aria-current={index === currentSlide ? "step" : undefined}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === currentSlide
                  ? "bg-[#9d7240]"
                  : "bg-[#d8c29a] hover:bg-[#bd9c66]"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goToNext}
          className="rounded-full border border-[#c8ad80] bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#765431] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c8ad80]"
        >
          Next
        </button>
      </div>
    </section>
  );
}
