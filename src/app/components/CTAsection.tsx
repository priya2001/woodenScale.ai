'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 to-yellow-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
          Ready to accelerate your fundraising journey?
        </h2>
        
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Join thousands of successful founders who have raised millions with our AI-powered platform
        </p>
        
        <Link href="/get-started" className="bg-black text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105">
          Get started
        </Link>
      </div>
    </section>
  );
}