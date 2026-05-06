"use client";

import { WeddingCountdown } from "./wedding-countdown";

type InvitationInsideProps = {
  targetDate: string;
  onRSVP: () => void;
};

export function InvitationInside({
  targetDate,
  onRSVP,
}: InvitationInsideProps) {
  const handleBackToTop = () => {
    document.getElementById("pages-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="ceremony-section"
      className="w-full max-w-6xl rounded-[26px] border border-[#d2b988] bg-[#fff6e6]/86 px-5 py-8 text-center shadow-[0_28px_90px_rgba(97,71,39,0.16)] backdrop-blur-sm sm:px-8 sm:py-10"
    >
      <p className="text-[0.68rem] uppercase tracking-[0.42em] text-[#8c6839] sm:text-xs">
        You Are Invited
      </p>
      <h2 className="mt-4 font-serif text-[2.6rem] leading-none text-[#6f4b2b] sm:text-6xl">
        
      </h2>
      <div className="mx-auto mt-6 h-px w-20 bg-[#c8af7d]/80" />

      <div className="mx-auto mt-7 max-w-2xl rounded-[22px] border border-white/60 bg-white/45 p-4 shadow-[0_18px_50px_rgba(97,71,39,0.1)] sm:p-5">
        <div className="mb-4 text-center text-[0.68rem] uppercase tracking-[0.35em] text-[#8a6a43] sm:text-xs">
          Countdown To Wedding
        </div>
        <WeddingCountdown targetDate={targetDate} />
      </div>

      <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onRSVP}
          className="inline-flex min-w-[220px] justify-center rounded-full bg-[#b7724f] px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-white transition hover:bg-[#a66343] focus:outline-none focus:ring-2 focus:ring-[#b7724f] focus:ring-offset-2"
        >
          Submit RSVP
        </button>
        <button
          type="button"
          onClick={handleBackToTop}
          className="inline-flex min-w-[220px] justify-center rounded-full border border-[#c8ad80] bg-white/70 px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-[#7a5732] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c8ad80] focus:ring-offset-2"
        >
          Back To Top
        </button>
      </div>
    </section>
  );
}
