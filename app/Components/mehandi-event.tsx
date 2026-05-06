import Image from "next/image";

import { EventLocationLink } from "./event-location-link";

export function MehandiEvent() {
  return (
    <section className="relative z-10 w-full max-w-[560px]">
      <Image
        src="/Mehandi.jpeg"
        alt="Mehendi celebration"
        width={560}
        height={903}
        className="h-auto w-full rounded-[18px] shadow-[0_24px_70px_rgba(97,71,39,0.2)]"
        sizes="(max-width: 640px) 100vw, 560px"
      />
      <EventLocationLink />
    </section>
  );
}
