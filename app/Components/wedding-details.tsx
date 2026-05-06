"use client";

import { FaCalendarAlt, FaClock } from "react-icons/fa";

type WeddingDetailsProps = {
  onNext?: () => void;
  onBack?: () => void;
};

export function WeddingDetails({ onNext, onBack }: WeddingDetailsProps) {
  return (
    <section className="animate-invitation-reveal relative z-10 w-full max-w-6xl rounded-[56px] border border-rose-200/40 bg-white/95 p-4 shadow-[0_30px_100px_rgba(15,23,42,0.25)] sm:p-6">
      <div className="grid gap-6 overflow-hidden rounded-[44px] bg-white shadow-2xl md:grid-cols-[1.5fr_1fr]">
        {/* Left side - Image */}
        <div className="relative min-h-[420px] bg-stone-950 sm:min-h-[520px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute left-6 top-6 rounded-full border border-black/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-black/80">
            Wedding Details
          </div>
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-2 sm:left-4 md:left-6 right-2 sm:right-4 md:right-6 text-white z-10">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-white drop-shadow-lg">
              Our Special Day
            </p>
            <h2 className="mt-1 sm:mt-2 max-w-[92%] sm:max-w-xs pr-1 font-serif text-[1.05rem] sm:text-2xl md:text-4xl lg:text-5xl leading-tight text-white drop-shadow-lg">
            Kundhan &amp; Varshini
            </h2>
            <p className="mt-1 sm:mt-2 max-w-sm text-xs sm:text-sm leading-4 sm:leading-5 text-white drop-shadow-lg">
              Every moment with you is a treasure.
            </p>
          </div>

          <div className="pointer-events-none absolute -left-10 top-24 hidden h-28 w-28 rounded-full bg-emerald-200/40 blur-3xl md:block" />
          <div className="pointer-events-none absolute -right-10 bottom-16 hidden h-28 w-28 rounded-full bg-rose-200/40 blur-3xl md:block" />
        </div>

        {/* Right side - Details */}
        <div className="relative flex items-center justify-center bg-transparent px-6 py-8 sm:px-10 sm:py-12">
          <div className="relative w-full max-w-[420px] rounded-[8px] border-2 border-rose-300/50 bg-white p-6 sm:p-10 shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
            <div className="absolute -right-8 top-4 hidden h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl md:block" />
            <div className="absolute -left-8 bottom-6 hidden h-24 w-24 rounded-full bg-rose-200/40 blur-2xl md:block" />

            {/* Decorative top element */}
            <div className="mb-6 flex justify-center">
              <div className="h-0.5 w-12 bg-rose-300/60" />
            </div>

            <h2 className="font-serif text-center text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">
              Wedding Details
            </h2>

            {/* Wedding Schedule */}
            <div className="space-y-6 mb-8">
              <h3 className="text-center text-xl font-semibold text-slate-900 mb-6">Wedding Schedule</h3>

              {/* Event Cards Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {/* Haldi Ceremony */}
                <div className="group relative overflow-hidden rounded-xl border border-rose-200/30 bg-gradient-to-br from-rose-50 to-pink-50 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/haldi.svg"
                        alt="Haldi Ceremony"
                        className="w-16 h-16 rounded-lg object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4 text-rose-600" />
                        Haldi Ceremony
                      </h4>
                      <p className="text-sm text-rose-700 font-medium mb-2">Friday, June 27, 2026</p>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p className="flex items-center gap-2">
                          <FaClock className="w-3 h-3 text-rose-500" />
                          9:00 AM - 11:00 AM
                        </p>
                        <p className="text-xs text-slate-500">Traditional turmeric ceremony</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mehandi Ceremony */}
                <div className="group relative overflow-hidden rounded-xl border border-emerald-200/30 bg-gradient-to-br from-emerald-50 to-green-50 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/mehndi.svg"
                        alt="Mehandi Ceremony"
                        className="w-16 h-16 rounded-lg object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4 text-emerald-600" />
                        Mehandi Ceremony
                      </h4>
                      <p className="text-sm text-emerald-700 font-medium mb-2">Friday, June 27, 2026</p>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p className="flex items-center gap-2">
                          <FaClock className="w-3 h-3 text-emerald-500" />
                          6:30 PM onwards
                        </p>
                        <p className="text-xs text-slate-500">Beautiful henna designs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pelli Kuturu & Pelli Koduku */}
                <div className="group relative overflow-hidden rounded-xl border border-blue-200/30 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/pelli-kuturu.svg"
                        alt="Pelli Kuturu & Pelli Koduku"
                        className="w-16 h-16 rounded-lg object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4 text-blue-600" />
                        Pelli Kuturu & Pelli Koduku
                      </h4>
                      <p className="text-sm text-blue-700 font-medium mb-2">Saturday, June 28, 2026</p>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p className="flex items-center gap-2">
                          <FaClock className="w-3 h-3 text-blue-500" />
                          8:30 AM - 12:00 PM
                        </p>
                        <p className="text-xs text-slate-500">Traditional wedding ceremonies</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pelli Puja & Reception */}
                <div className="group relative overflow-hidden rounded-xl border border-purple-200/30 bg-gradient-to-br from-purple-50 to-violet-50 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/pelli-puja.svg"
                        alt="Pelli Puja & Reception"
                        className="w-16 h-16 rounded-lg object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4 text-purple-600" />
                        Pelli Puja & Reception
                      </h4>
                      <p className="text-sm text-purple-700 font-medium mb-2">Saturday, June 28, 2026</p>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p className="flex items-center gap-2">
                          <FaClock className="w-3 h-3 text-purple-500" />
                          8:30 PM onwards
                        </p>
                        <p className="text-xs text-slate-500">Wedding reception & celebration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Schedule */}
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-semibold text-slate-900 text-center">Detailed Schedule</h4>

                {/* June 27th Details */}
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200/30">
                  <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4 text-emerald-600" />
                    Friday, June 27, 2026
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-emerald-400 pl-3">
                      <h6 className="font-medium text-slate-800">Morning: Haldi Ceremony</h6>
                      <div className="text-slate-600 space-y-1 mt-1">
                        <p>7:30 AM - 9:00 AM: Makeup and dressing</p>
                        <p>9:00 AM - 11:00 AM: Haldi ceremony</p>
                        <p>11:00 AM - 12:00 PM: Freshen up</p>
                        <p>12:00 PM - 1:30 PM: Lunch</p>
                        <p>1:30 PM - 5:00 PM: Relax</p>
                      </div>
                    </div>
                    <div className="border-l-4 border-emerald-500 pl-3">
                      <h6 className="font-medium text-slate-800">Evening: Mehandi Ceremony</h6>
                      <div className="text-slate-600 space-y-1 mt-1">
                        <p>5:00 PM - 6:30 PM: Makeup and dressing</p>
                        <p>6:30 PM onwards: Mehandi ceremony</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* June 28th Details */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200/30">
                  <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4 text-blue-600" />
                    Saturday, June 28, 2026
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-blue-400 pl-3">
                      <h6 className="font-medium text-slate-800">Morning: Wedding Ceremonies</h6>
                      <div className="text-slate-600 space-y-1 mt-1">
                        <p>8:30 AM - 12:00 PM: Pelli kuturu & Pelli koduku</p>
                        <p>12:00 PM - 3:00 PM: Lunch and rest</p>
                        <p>3:00 PM - 5:30 PM: Makeup and getting dressed</p>
                      </div>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-3">
                      <h6 className="font-medium text-slate-800">Evening: Wedding Reception</h6>
                      <div className="text-slate-600 space-y-1 mt-1">
                        <p>6:00 PM - 7:00/7:30 PM: Pre-wedding shoot</p>
                        <p>7:30 PM - 8:30 PM: Group photos (guests can go for dinner)</p>
                        <p>8:30 PM - 9:00 PM onwards: Pelli puja starts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-3">
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full inline-flex justify-center rounded-full bg-stone-200 px-6 py-3 text-sm font-semibold tracking-[0.1em] text-stone-700 transition hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                >
                  Back to Invitation
                </button>
              )}

              {onNext && (
                <button
                  type="button"
                  onClick={onNext}
                  className="w-full inline-flex justify-center rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold tracking-[0.1em] text-white transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                >
                  View Invitation
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
