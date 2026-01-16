'use client';

import { useState } from 'react';

const CARD_WIDTH = 420; 
const GAP = 32;

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
      <div className="max-w-7xl mx-auto px-4 text-center">

        
        <div className="mb-16">
          <span className="px-4 py-1 rounded-full border border-[#f5c96a]/40 text-[#f5c96a] text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold mt-4">Loved by founders</h2>
        </div>

        
        <div className="relative flex items-center justify-center">

         
          <button
            onClick={prev}
            className="absolute left-8 z-20 w-12 h-12 rounded-full
              border border-[#f5c96a]/30
              text-xl
              hover:border-[#f5c96a]
              hover:shadow-[0_0_0_6px_rgba(245,201,106,0.08)]
              transition"
          >
            ‹
          </button>

          
          <div className="flex items-center justify-center gap-8">
            {visibleCards.map((t, i) => {
              const isActive = i === 1;

              return (
                <div
                  key={i}
                  className={`
                    relative rounded-2xl p-8 border transition-all duration-200 ease-out w-[420px]
                    ${isActive
                      ? `
                        bg-[#111]
                        border-[#f5c96a]/40
                        hover:-translate-y-1
                        hover:shadow-[0_10px_30px_-10px_rgba(245,201,106,0.2)]
                      `
                      : `
                        bg-[#0b0b0b]
                        border-[#f5c96a]/10
                        opacity-40
                        blur-[1px]
                      `}
                  `}
                >
                  
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl pointer-events-none
                      bg-[radial-gradient(circle_at_30%_20%,rgba(245,201,106,0.12),transparent_60%)]" />
                  )}

                  <div className="relative z-10">
                    
                    <div className="flex mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <span key={j} className="text-[#f5c96a]">★</span>
                      ))}
                    </div>

                    <p className="text-gray-300 italic mb-6">
                      “{t.quote}”
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#f5c96a] rounded-full flex items-center justify-center text-black font-bold">
                        {t.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold">{t.name}</h4>
                        <p className="text-sm text-gray-400">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          
          <button
            onClick={next}
            className="absolute right-8 z-20 w-12 h-12 rounded-full
              border border-[#f5c96a]/30
              text-xl
              hover:border-[#f5c96a]
              hover:shadow-[0_0_0_6px_rgba(245,201,106,0.08)]
              transition"
          >
            ›
          </button>
        </div>

      
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === active ? 'bg-[#f5c96a] w-6' : 'bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


