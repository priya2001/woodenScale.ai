'use client';

import Link from 'next/link';

const features = [
  {
    title: 'AI-Powered Pitch Deck Builder',
    desc: 'Create an investor-ready pitch deck in minutes, tailored to your stage.',
    points: [
      'Answer simple questions to share your business story',
      'AI runs deep competitor analysis automatically',
      'AI generates market research & insights instantly',
      'Get the right slides designed for your funding stage',
    ],
    cta: 'Build your deck',
    reverse: false,
  },
  {
    title: 'AI-Powered Financial Projections',
    desc: 'Define your fundraising ask and build accurate, investor-ready financial models.',
    points: [
      'Share the basics of your business — AI takes care of the rest',
      'Auto-generates 3–5 year revenue & cash flow forecasts',
      'Understand burn rate & runway instantly',
      'Export investor-grade financial models',
    ],
    cta: 'Create projections',
    reverse: true,
  },
  {
    title: 'AI-Powered Investor Matching',
    desc: 'Skip static lists — get instantly matched with the right investors.',
    points: [
      'Define fundraising stage, sector, and capital ask',
      'AI scans thousands of investors to find best fit',
      'Match with investors most likely to fund you',
      'Save weeks of random outreach',
    ],
    cta: 'See your matches',
    reverse: false,
  },
  {
    title: 'AI-Powered Investor Outreach',
    desc: 'AI-personalized outreach, emails, and smart follow-ups from one dashboard.',
    points: [
      'AI drafts tailored outreach emails',
      'Find the right decision-makers on LinkedIn',
      'Get featured in weekly investor deal flows',
      'Track conversations with smart follow-ups',
    ],
    cta: 'Manage conversations',
    reverse: true,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-28 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-28">
          <div className="inline-block border border-[#f5c96a]/20 rounded-full px-6 py-1.5 mb-6">
            <span className="text-[#f5c96a] font-bold text-sm">Our Features</span>
          </div>

          <h2 className="text-3xl md:text-2xl font-bold text-white mb-6">
            Everything you need to raise funding successfully
          </h2>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-medium mb-12">
          Comprehensive AI-powered tools to help you create pitch decks, match with investors, analyze fundability, project financials, and manage investor relationships.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-20">
          {features.map((f, i) => (
            <div
              key={i}
              className="
                border border-[#f5c96a]/20
                hover:border-[#f5c96a]/40
                rounded-[32px]
                p-10 sm:p-12 md:p-16
                grid grid-cols-1 lg:grid-cols-2
                gap-10 md:gap-20
                items-center
                transition-all duration-300
                hover:shadow-[rgba(245,201,106,0.25)]
              "
            >
            {/* Preview */}
<div className={f.reverse ? 'lg:order-2' : 'lg:order-1'}>
<div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
  
  {/* Browser Top Bar */}
  <div className="h-10 bg-gray-100 flex items-center px-4 gap-2">
    <span className="w-3 h-3 bg-red-400 rounded-full"></span>
    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
  </div>

  {/* Video Area */}
  <div className="relative aspect-video bg-black">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source
        src={
          i === 0
            ? 'https://woodenscale-assets.s3.ap-south-1.amazonaws.com/assets/home-page-videos/Pitch-deck+demo.mp4'
            : i === 1
            ? 'https://woodenscale-assets.s3.ap-south-1.amazonaws.com/assets/home-page-videos/Financial+Projection.mp4'
            : i === 2
            ? 'https://woodenscale-assets.s3.ap-south-1.amazonaws.com/assets/home-page-videos/Investor+Matching+Demo.mp4'
            : 'https://woodenscale-assets.s3.ap-south-1.amazonaws.com/assets/home-page-videos/Dashboard+demo.mp4'
        }
        type="video/mp4"
      />
    </video>
  </div>
</div>

</div>


              {/* Content */}
              <div className={f.reverse ? 'lg:order-1' : 'lg:order-2'}>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                  {f.title}
                </h3>

                <p className="text-gray-300 mb-8">{f.desc}</p>

                <ul className="space-y-4 mb-10">
                  {f.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-[#f5c96a] flex-shrink-0">●</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="inline-block bg-[#f5c96a] hover:bg-[#f1ad3a] text-black font-semibold px-8 py-3 rounded-full transition"
                >
                  {f.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
