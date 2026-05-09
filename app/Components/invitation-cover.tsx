"use client";

import Image from "next/image";

type InvitationCoverProps = {
  onOpen: () => void;
  isOpening: boolean;
};

export function InvitationCover({
  onOpen,
  isOpening,
}: InvitationCoverProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      disabled={isOpening}
      className={`group w-full transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#d7be8d]/70 ${
        isOpening
          ? "animate-cover-open pointer-events-none"
          : "animate-invitation-card hover:scale-[1.01]"
      }`}
    >
      <section className="relative z-10 mx-auto aspect-[2/3] h-[128svh] max-h-[1350px] w-full max-w-[560px] overflow-hidden rounded-[18px] bg-[#f7ead1] shadow-[0_28px_80px_rgba(97,71,39,0.24)] sm:h-auto">
        <Image
          src="/Page.jpeg"
          alt="Varshini and Kundhan wedding invitation cover"
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 100vw, 560px"
          priority
        />
        <span className="absolute inset-x-0 bottom-7 z-20 flex justify-center px-6">
          <span className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#f1d9aa] bg-[#7a2f2f]/92 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_16px_38px_rgba(58,28,18,0.32)] backdrop-blur-sm transition group-hover:bg-[#612424]">
            Open Invitation
          </span>
        </span>
      </section>
    </button>
  );
}
