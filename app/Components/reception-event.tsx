"use client";

import { EventPosterSlide } from "./event-poster-slide";

export function ReceptionEvent() {
  return (
    <EventPosterSlide
      badge="Grand Celebration"
      title="Reception"
      date="Saturday, June 28, 2026 • 6:00 PM onwards"
      description="As the evening settles in, we gather for portraits, dinner, music, and a warm celebration with everyone who made this journey special."
      details={[
        "6:00 PM - 7:30 PM • Pre-wedding shoot",
        "7:30 PM - 8:30 PM • Group photos while guests enjoy dinner",
        "8:30 PM onwards • Pelli puja begins",
      ]}
      imageSrc="/images/planner/wedding-alt.jpeg"
      imageAlt="Watercolor wedding reception illustration"
    />
  );
}
