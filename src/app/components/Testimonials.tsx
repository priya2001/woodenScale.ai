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

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <div className="inline-block border border-[#f5c96a]/20 rounded-full px-7 sm:px-6 py-2 sm:py-4 mb-4">
            <span className="text-[#f5c96a] font-bold text-xs sm:text-sm">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl md:text-2xl font-bold text-white mb-6">Loved by founders</h2>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-medium mb-12">
            See what founders say about their experience raising capital with WoodenScale AI.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[420px] sm:h-[520px] flex items-center justify-center">

          {testimonials.map((t, index) => {
            
            const rawOffset = index - active;
            const offset =
              rawOffset > total / 2
                ? rawOffset - total
                : rawOffset < -total / 2
                ? rawOffset + total
                : rawOffset;

            return (
              <div
                key={index}
                className={`
                absolute w-[360px] sm:w-[620px] p-10 sm:p-14
                  bg-black border rounded-3xl border-[#f5c96a]/20
                  transition-all duration-500 ease-in-out
                  ${
                    offset === 0
                      ? 'z-20 opacity-100 blur-0 translate-x-0 group'
                      : offset === -1
? 'z-10 opacity-40 blur-[2px] -translate-x-[360px] sm:-translate-x-[560px]'
: offset === 1
? 'z-10 opacity-40 blur-[2px] translate-x-[360px] sm:translate-x-[560px]'
: 'opacity-0 blur-[4px] translate-x-[720px] sm:translate-x-[1100px]'
                  }
                `}
              >
               
                {offset === 0 && (
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-3xl
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      bg-[radial-gradient(circle_at_center,rgba(245,201,106,0.25),transparent_70%)]
                    "
                  />
                )}

                <div className="relative z-10 text-left">

                  {/* Stars */}
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-[#f5c96a] text-sm sm:text-base">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-lg text-gray-300 mb-4 sm:mb-6">
                    “{t.quote}”
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#f5c96a]
                      flex items-center justify-center text-black font-bold text-xs sm:text-sm">
                      {t.avatar}
                    </div>

                    <div>
                      <div className="font-semibold text-sm sm:text-base">{t.name}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{t.company}</div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-0 z-30 w-8 sm:w-12 h-8 sm:h-12 rounded-full
              border border-[#f5c96a]/30 text-sm sm:text-xl
              hover:border-[#f5c96a]
              transition"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-2 sm:right-0 z-30 w-8 sm:w-12 h-8 sm:h-12 rounded-full
              border border-[#f5c96a]/30 text-sm sm:text-xl
              hover:border-[#f5c96a]
              transition"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
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
