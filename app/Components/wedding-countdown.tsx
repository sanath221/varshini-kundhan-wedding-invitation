"use client";

import { useEffect, useState } from "react";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

type WeddingCountdownProps = {
  targetDate: string;
};

function getCountdownState(targetDate: string): CountdownState {
  const targetTime = new Date(targetDate).getTime();
  const difference = targetTime - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, completed: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds, completed: false };
}

export function WeddingCountdown({ targetDate }: WeddingCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownState>(() =>
    getCountdownState(targetDate),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownState(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  if (countdown.completed) {
    return (
      <div className="py-2 text-center">
        <div className="inline-block rounded-2xl border border-[#d5be95] bg-white/70 px-6 py-3">
          <p className="text-sm font-medium text-[#8d653d]">
            The ceremony has begun!
          </p>
          <p className="mt-1 text-xs text-[#a57d50]">Join us in celebration</p>
        </div>
      </div>
    );
  }

  const segments = [
    { label: "Days", value: countdown.days },
    { label: "Hrs", value: countdown.hours },
    { label: "Min", value: countdown.minutes },
    { label: "Secs", value: countdown.seconds },
  ];

  return (
    <div className="grid w-full grid-cols-4 gap-2 sm:gap-3">
      {segments.map((segment) => (
        <div
          key={segment.label}
          className="flex min-w-0 flex-col items-center justify-center rounded-2xl border border-[#d8c5a6] bg-white/72 px-2 py-3 shadow-sm transition-shadow hover:shadow-md sm:px-3 sm:py-4"
        >
          <div className="text-xl font-semibold text-[#855f39] sm:text-2xl">
            {segment.value.toString().padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#8f724b] sm:text-xs">
            {segment.label}
          </div>
        </div>
      ))}
    </div>
  );
}
