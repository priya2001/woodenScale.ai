'use client';

import {
  ClipboardCheck,
  Presentation,
  Sparkles,
  Handshake,
  Users,
} from 'lucide-react';

export default function FundraisingJourney() {
  const steps = [
    {
      number: "01",
      title: "Register your startup",
      description:
        "Register your startup, add key details, and unlock AI-powered fundraising tools instantly.",
      icon: ClipboardCheck,
    },
    {
      number: "02",
      title: "AI-Powered Pitch Deck Creation",
      description:
        "Generate an investor-ready pitch deck in minutes with our AI builder.",
      icon: Presentation,
    },
    {
      number: "03",
      title: "AI-Powered Investor Matching",
      description:
        "Skip endless investor lists. Let AI match you directly with the investors most likely to fund your startup.",
      icon: Sparkles,
    },
    {
      number: "04",
      title: "AI-Powered Investor Outreach",
      description:
        "Leverage AI to draft perfect outreach emails, keep your investor pipeline organized, and track every conversation seamlessly.",
      icon: Handshake,
    },
    {
      number: "05",
      title: "Hire Experts to Elevate Your Fundraising",
      description:
        "Pair AI with the wisdom of fundraising experts — hire experienced founders to guide you through strategy, negotiations, and closing.",
      icon: Users,
    },
    {
      number: "06",
      title: "Hire Experts to Elevate Your Fundraising",
      description:
        "Pair AI with the wisdom of fundraising experts — hire experienced founders to guide you through strategy, negotiations, and closing.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black border border-[#f5c96a]/30 rounded-full px-5 py-2 mb-6">
            <span className="text-[#f5c96a] text-sm">
              Fundraising journey
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your focused journey towards fundraising
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Fundraising doesn't have to take months. With AI handling everything
            from pitch decks to investor matching and financials, you can raise
            your next round faster and smarter.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative bg-black border border-[#f5c96a]/20 rounded-3xl p-6 hover:border-[#f5c96a]/50 transition-all duration-300"
              >
                {/* STEP + ICON ROW */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm tracking-[0.2em] text-gray-400">
                    STEP {step.number}
                  </span>

                  <div className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-4 text-[#f5c96a] text-2xl font-bold opacity-60">
                  {step.number}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}