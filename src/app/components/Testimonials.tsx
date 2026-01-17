'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      quote:
        "WoodenScale AI helped me transform a complex idea into a sharp pitch deck investors instantly understand.",
      name: "Aman Mundra",
      company: "Founder, Falcon Suits",
      avatar: "AM",
    },
    {
      rating: 5,
      quote:
        "From a founder’s lens, WoodenScale refined the story and prepared conversations more professionally.",
      name: "Rishav",
      company: "Co-Founder",
      avatar: "R",
    },
    {
      rating: 5,
      quote:
        "AI investor matching saved weeks of outreach and connected us with the right VCs.",
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      avatar: "SJ",
    },
    {
      rating: 5,
      quote:
        "WoodenScale made fundraising smoother and faster than expected.",
      name: "Alex",
      company: "Startup X",
      avatar: "AX",
    },
    {
      rating: 5,
      quote:
        "Clear storytelling and right investor matches — loved it.",
      name: "Neha",
      company: "Founder",
      avatar: "N",
    },
  ];

  const total = testimonials.length;
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + total) % total);
  const next = () => setActive((p) => (p + 1) % total);

  const visibleCards = [-1, 0, 1].map((offset) => {
    const index = (active + offset + total) % total;
    return { ...testimonials[index], index };
  });

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-[#f5c96a]/20 rounded-full px-6 py-1.5 mb-4">
            <span className="text-[#f5c96a] font-bold text-sm">Testimonials</span>
          </div>

          <h2 className="text-3xl md:text-2xl font-bold mb-6">
            Loved by founders
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          See what founders says about their experience raising capital and finding great investments through WoodenScale AI.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-8 z-30 w-12 h-12 rounded-full
              border border-[#f5c96a]/30 text-xl
              transition-all duration-200 ease-out
              hover:border-[#f5c96a]
              hover:shadow-[0_0_0_6px_rgba(245,201,106,0.1)]"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="flex items-center gap-8">
            {visibleCards.map((t, i) => {
              const isActive = i === 1;

              return (
                <div
                  key={i}
                  className={`
                    relative w-[420px] p-8 rounded-2xl border
                    transition-all duration-300 ease-in-out transform
                    ${
                      isActive
                        ? `
                          bg-[#111]
                          border-[#f5c96a]/40
                          scale-100
                          opacity-100
                          blur-0
                          z-20
                          hover:-translate-y-1
                          hover:shadow-[0_10px_30px_-10px_rgba(245,201,106,0.25)]
                        `
                        : `
                          bg-[#0b0b0b]
                          border-[#f5c96a]/10
                          scale-90
                          opacity-40
                          blur-[1px]
                        `
                    }
                  `}
                >
                  {/* Glow */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl pointer-events-none
                      bg-[radial-gradient(circle_at_30%_20%,rgba(245,201,106,0.12),transparent_60%)]" />
                  )}

                  <div className="relative z-10">

                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <span key={j} className="text-[#f5c96a]">★</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 italic mb-6">
                      “{t.quote}”
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#f5c96a] rounded-full
                        flex items-center justify-center text-black font-bold">
                        {t.avatar}
                      </div>

                      <div className="text-left">
                        <h4 className="font-semibold">{t.name}</h4>
                        <p className="text-sm text-gray-400">{t.company}</p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-8 z-30 w-12 h-12 rounded-full
              border border-[#f5c96a]/30 text-xl
              transition-all duration-200 ease-out
              hover:border-[#f5c96a]
              hover:shadow-[0_0_0_6px_rgba(245,201,106,0.1)]"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? 'bg-[#f5c96a] w-6'
                  : 'bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
