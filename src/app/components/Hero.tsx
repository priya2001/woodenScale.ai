'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden font-sans">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-gradient-radial from-[#f5c96a]/20 via-[#f5c96a]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] bg-gradient-radial from-[#f5c96a]/10 via-[#f5c96a]/5 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 border border-[#f5c96a]/30 rounded-full px-6 py-2 mb-6 sm:mb-8 bg-black/40 backdrop-blur">
          <span className="text-[#f5c96a] text-sm sm:text-sm font-semibold tracking-[0.25em] uppercase">
            AI Investment Banker — Faster, Smarter Fundraising
          </span>
        </div>

        <h1 className="text-white font-sans font-semibold text-4xl md:text-5xl lg:text-5xl leading-snug text-center mb-4 sm:mb-6">
  Close your next round faster with AI powering your fundraise.
</h1>



        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-medium mb-12">

  AI handles the heavy lifting of fundraising — from pitch decks to investor matching —
  while our experts guide you to the right capital. Spend less time chasing investors and more time building your startup.
</p>


        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center rounded-full
              bg-[#f5c96a]
              hover:bg-[#f1ad3a]
              text-black
              font-bold
              tracking-[0.3em]
              px-10 py-4
              text-sm
              transition-all
              hover:scale-105
              shadow-lg shadow-[#f5c96a]/30"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </section>
  );
}
