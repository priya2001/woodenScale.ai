'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-black">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center h-[72px]">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-xs font-bold">WS</span>
            </div>
            <span className="text-white text-lg font-medium">
              WoodenScale
            </span>
          </div>

          <div className="flex-1" />

          {/* Book a demo — DESKTOP ONLY */}
          <Link
            href="/book-demo"
            className="
              hidden lg:inline-flex
              bg-[#f5c96a] text-black px-5 py-2 rounded-full
              text-sm font-medium hover:opacity-90 transition mr-8
            "
          >
            Book a demo
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2 text-sm text-gray-300">

            <Link
              href="/blogs"
              className="px-3 py-1.5 rounded-full transition hover:bg-white/10 hover:text-white"
            >
              Blogs
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div
                className="
                  flex items-center gap-1 cursor-pointer
                  px-3 py-1.5 rounded-full
                  transition
                  hover:bg-white/10 hover:text-white
                "
              >
                Startup Investment Tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-64
                  bg-black border border-gray-800 rounded-lg shadow-xl z-50">
                  {[
                    'Investor Matching',
                    'Pitch Deck',
                    'Financial Projections',
                    'Funding Analysis',
                  ].map(item => (
                    <Link
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="px-3 py-1.5 rounded-full transition hover:bg-white/10 hover:text-white"
            >
              Pricing
            </Link>

            <Link
              href="/login"
              className="px-3 py-1.5 rounded-full transition hover:bg-white/10 hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-[#f5c96a] text-black px-4 py-2 rounded-full
                font-medium hover:opacity-90 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800 px-2 py-4 space-y-2">

            {/* Book a demo -MOBILE MENU ONLY */}
            <Link
              href="/book-demo"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-[#f5c96a] text-black py-3 rounded-full font-medium"
            >
              Book a demo
            </Link>

            <Link href="/blogs" className="block px-3 py-2 text-gray-300 hover:text-white">
              Blogs
            </Link>

            <div className="ml-3 space-y-1 bg-gray-900 rounded-md p-2">
              {[
                'Investor Matching',
                'Pitch Deck',
                'Financial Projections',
                'Funding Analysis',
              ].map(item => (
                <Link
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-300 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>

            <Link href="/pricing" className="block px-3 py-2 text-gray-300 hover:text-white">
              Pricing
            </Link>

            <Link href="/login" className="block px-3 py-2 text-gray-300 hover:text-white">
              Login
            </Link>

            <Link
              href="/signup"
              className="block text-center bg-[#f5c96a] text-black py-3 rounded-full font-medium mt-2"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
