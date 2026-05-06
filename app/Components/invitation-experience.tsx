"use client";

import { useEffect, useState } from "react";

import { InvitationCover } from "./invitation-cover";
import { InvitationInside } from "./invitation-inside";
import { HaldiEvent } from "./haldi-event";
import { InvitationSlideshow } from "./invitation-slideshow";
import { MehandiEvent } from "./mehandi-event";
import { PelliKuturuKodukuEvent } from "./pelli-kuturu-koduku-event";
import { WeddingCeremonyEvent } from "./wedding-ceremony-event";

const weddingDate = "2026-06-28T22:45:00-06:00";

export function InvitationExperience() {
  const [isOpening, setIsOpening] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    if (!isOpening) {
      return;
    }

    const timer = window.setTimeout(() => {
      setHasOpened(true);

      window.setTimeout(() => {
        document.getElementById("pages-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsOpening(false);
      }, 80);
    }, 700);

    return () => window.clearTimeout(timer);
  }, [isOpening]);

  const handleOpen = () => {
    if (isOpening || hasOpened) {
      return;
    }

    setIsOpening(true);
  };

  const handleRSVP = () => {
    window.open(
      "https://form.jotform.com/261007267103042",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const slideshowPages = [
    <HaldiEvent key="haldi" />,
    <MehandiEvent key="mehandi" />,
    <PelliKuturuKodukuEvent key="pelli-koduku" />,
    <WeddingCeremonyEvent key="wedding" />,
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#efe5d1] px-4 py-8 text-stone-900 sm:px-6 sm:py-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-24 sepia-[0.12] saturate-[0.82]"
        style={{ backgroundImage: "url('/images/WhatsApp.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,251,243,0.86),transparent_34%),linear-gradient(135deg,rgba(198,170,126,0.36),rgba(244,236,221,0.9)_34%,rgba(233,221,195,0.96)_72%,rgba(218,198,159,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(25deg,rgba(255,255,255,0.14)_0%,transparent_18%,rgba(182,152,108,0.11)_32%,transparent_50%,rgba(255,255,255,0.14)_72%,transparent_100%)] opacity-80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 sm:gap-10">
        <InvitationCover onOpen={handleOpen} isOpening={isOpening} />

        {hasOpened ? (
          <>
            <InvitationSlideshow>{slideshowPages}</InvitationSlideshow>
            <InvitationInside targetDate={weddingDate} onRSVP={handleRSVP} />
          </>
        ) : null}
      </div>
    </main>
  );
}
