"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type PlannerPosterProps = {
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  footer?: ReactNode;
  preloadImage?: boolean;
  className?: string;
  imageClassName?: string;
  backdropImageSrc?: string;
  backdropImageClassName?: string;
};

export function PlannerPoster({
  imageSrc,
  imageAlt,
  children,
  footer,
  preloadImage = false,
  className = "animate-invitation-reveal",
  imageClassName = "object-cover object-center opacity-72",
  backdropImageSrc = "/images/WhatsApp.jpeg",
  backdropImageClassName = "object-cover object-center opacity-28 sepia-[0.1] saturate-[0.85] scale-[1.02]",
}: PlannerPosterProps) {
  return (
    <section
      className={`${className} relative z-10 flex w-full max-w-[560px] flex-col items-center gap-4`}
    >
      <div className="relative aspect-[0.62] w-full overflow-hidden rounded-[34px] border border-[#d7c3a0] bg-[#f7efdf] shadow-[0_28px_80px_rgba(97,71,39,0.24)]">
        <Image
          src={backdropImageSrc}
          alt=""
          fill
          className={backdropImageClassName}
          sizes="(max-width: 640px) 100vw, 560px"
        />
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          preload={preloadImage}
          className={imageClassName}
          sizes="(max-width: 640px) 100vw, 560px"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,236,219,0.97)_0%,rgba(243,232,210,0.88)_24%,rgba(239,226,200,0.5)_48%,rgba(239,226,200,0.16)_68%,rgba(239,226,200,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,251,243,0.8),transparent_42%),linear-gradient(135deg,rgba(193,167,122,0.16),transparent_28%,rgba(255,255,255,0.18)_62%,rgba(124,90,48,0.12)_100%)]" />
        <div className="absolute inset-[14px] rounded-[24px] border border-white/50" />
        <div className="absolute inset-[26px] rounded-[18px] border border-[#d5ba8f]/45" />

        <div className="relative z-10 flex h-full flex-col px-7 py-10 text-center text-[#6e5534] sm:px-10 sm:py-12">
          {children}
        </div>
      </div>

      {footer ? <div className="w-full">{footer}</div> : null}
    </section>
  );
}
