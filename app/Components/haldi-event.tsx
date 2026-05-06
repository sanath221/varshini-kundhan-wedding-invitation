import Image from "next/image";

import { EventLocationLink } from "./event-location-link";

export function HaldiEvent() {
  return (
    <section className="relative z-10 w-full max-w-[560px]">
      <div className="relative aspect-[941/1672] w-full overflow-hidden rounded-[18px] shadow-[0_24px_70px_rgba(97,71,39,0.2)]">
        <Image
          src="/Haldi.PNG"
          alt="Haldi celebration"
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 560px"
        />
      </div>
      <EventLocationLink />
    </section>
  );
}
