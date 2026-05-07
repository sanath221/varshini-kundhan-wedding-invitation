import Image from "next/image";

import { EventLocationLink } from "./event-location-link";

const weddingMapUrl = "https://maps.app.goo.gl/siRpyQazTf5NyDJq9?g_st=iw";

export function WeddingCeremonyEvent() {
  return (
    <section className="relative z-10 w-full max-w-[560px]">
      <div className="relative aspect-[560/903] w-full overflow-hidden rounded-[18px] shadow-[0_24px_70px_rgba(97,71,39,0.2)]">
        <Image
          src="/Wedding.jpeg"
          alt="Wedding ceremony"
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 560px"
        />
      </div>
      <EventLocationLink mapUrl={weddingMapUrl} />
    </section>
  );
}
