'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden font-sans">
      
      {/* ===== PREMIUM BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top golden light */}
        <div
          className="
            absolute
            top-[-25%]
            left-1/2
            -translate-x-1/2
            w-[1200px]
            h-[600px]
            bg-[radial-gradient(ellipse_at_top,rgba(245,201,106,0.28),transparent_70%)]
            blur-3xl
          "
        />

        {/* Bottom ambient glow */}
        <div
          className="
            absolute
            bottom-[-30%]
            left-1/2
            -translate-x-1/2
            w-[1000px]
            h-[500px]
            bg-[radial-gradient(ellipse_at_center,rgba(245,201,106,0.12),transparent_75%)]
            blur-3xl
          "
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">

        {/* Pill */}
        <div
          className="
            inline-flex items-center
            border border-[#f5c96a]/30
            rounded-full
            px-6 py-2
            mb-6 sm:mb-8
            bg-black/50
            backdrop-blur
            shadow-[inset_0_0_18px_rgba(245,201,106,0.15),0_0_30px_rgba(245,201,106,0.25)]
          "
        >
          <span className="text-[#f5c96a] text-sm font-semibold tracking-[0.25em] uppercase">
            AI Investment Banker — Faster, Smarter Fundraising
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white font-semibold text-4xl md:text-5xl lg:text-5xl leading-snug mb-4 sm:mb-6">
          Close your next round faster with AI powering your fundraise.
        </h1>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-medium mb-12">
          AI handles the heavy lifting of fundraising — from pitch decks to investor
          matching — while our experts guide you to the right capital. Spend less time
          chasing investors and more time building your startup.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/get-started"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-[#f5c96a]
              text-black
              font-bold
              tracking-[0.3em]
              px-10 py-4
              text-sm
              transition-all duration-300
              hover:scale-105
              shadow-[0_0_40px_rgba(245,201,106,0.45)]
              hover:shadow-[0_0_70px_rgba(245,201,106,0.65)]
            "
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </section>
  );
}
