'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#f5c96a] via-[#f5c96a] to-[#f1ad3a] ">
      <div className="max-w-7xl mx-auto text-center h-[260px] flex flex-col items-center justify-center gap-10">
        
        {/* Heading */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-black">
          Ready to accelerate your fundraising journey?
        </h2>

        {/* Button */}
        <Link
          href="/get-started"
          className="bg-black text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}

