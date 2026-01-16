'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-gradient-radial from-yellow-500/20 via-yellow-500/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[48rem] h-[48rem] bg-gradient-radial from-yellow-600/10 via-yellow-500/5 to-transparent blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Tag / pill */}
        <div className="inline-block bg-gray-900 border border-gray-700 rounded-full px-6 py-1 mb-6">
          <span className="text-yellow-400 text-sm font-semibold tracking-wide">
            AI INVESTMENT BANKER — FASTER, SMARTER FUNDRAISING
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Close your next round faster with AI powering your fundraise.
        </h1>

        {/* Subtext */}
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          AI handles the heavy lifting of fundraising — from pitch decks to investor matching —
          while our experts guide you to the right capital. Spend less time chasing investors and more time building your startup.
        </p>

        {/* CTA button */}
        <div className="flex justify-center">
          <Link
            href="/get-started"
            className="bg-gradient-to-r from-[#f5c96a] via-[#f5c96a] to-[#f1ad3a] text-black font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-[#f5c96a]/30"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </section>
  );
}
