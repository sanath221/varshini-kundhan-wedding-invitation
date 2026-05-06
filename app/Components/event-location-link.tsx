import { FaMapMarkerAlt } from "react-icons/fa";

const eventMapUrl = "https://maps.app.goo.gl/SqPxieapWNqF7qj79?g_st=iw";

type EventLocationLinkProps = {
  mapUrl?: string;
};

export function EventLocationLink({
  mapUrl = eventMapUrl,
}: EventLocationLinkProps) {
  return (
    <div className="mt-4 rounded-[18px] border border-[#d5bc8d] bg-[#fff6e6]/90 p-4 text-center shadow-[0_16px_45px_rgba(97,71,39,0.12)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#765431]">
        Event Location
      </p>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#c8ad80] bg-white/82 px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-[#765431] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c8ad80]"
      >
        <FaMapMarkerAlt className="h-4 w-4 flex-shrink-0" />
        Open Map
      </a>
    </div>
  );
}
