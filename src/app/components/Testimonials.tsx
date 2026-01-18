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
      "WoodenScale made fundraising smoother and faster than expected.",
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
          <div className="inline-block border border-[#f5c96a]/50 rounded-full px-7 py-3 mb-4">
            <span className="text-[#f5c96a] font-bold text-sm">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-6">
            Loved by founders
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-300">
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
                  bg-black border border-[#f5c96a]/50 rounded-3xl
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
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-[#f5c96a]">★</span>
                    ))}
                  </div>

                  <p className="text-lg text-gray-300 mb-6">
                    “{t.quote}”
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f5c96a]
                      flex items-center justify-center text-black font-bold">
                      {t.avatar}
                    </div>

                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-gray-400">{t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Desktop arrows */}
          <div className="hidden sm:block">
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30
                w-12 h-12 rounded-full border border-[#f5c96a]/30
                text-xl hover:border-[#f5c96a] transition"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30
                w-12 h-12 rounded-full border border-[#f5c96a]/30
                text-xl hover:border-[#f5c96a] transition"
            >
              ›
            </button>
          </div>
        </div>

        {/* Mobile arrows (card ke neeche) */}
        <div className="flex sm:hidden justify-center gap-6 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#f5c96a]/30
              text-lg hover:border-[#f5c96a] transition"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#f5c96a]/30
              text-lg hover:border-[#f5c96a] transition"
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
                i === active ? 'bg-[#f5c96a] w-6' : 'bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
