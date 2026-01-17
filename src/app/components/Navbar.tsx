'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black">
      {/* NO BORDER, NO WHITE LINE */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center h-[72px]">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-xs font-bold">WS</span>
            </div>
            <span className="text-white text-lg font-medium tracking-wide">
              WoodenScale
            </span>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Book a demo (center-ish like original) */}
          <Link
            href="/book-demo"
            className="bg-[#f5c96a] text-black px-5 py-2 rounded-full
              text-sm font-medium hover:opacity-90 transition"
          >
            Book a demo
          </Link>

          {/* gap between button & menu */}
          <div className="w-10" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-normal text-gray-300">

            <Link href="/blogs" className="hover:text-white">
              Blogs
            </Link>

            {/* Dropdown */}
            <div
  className="relative"
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
>
  <div className="flex items-center gap-1 cursor-pointer hover:text-white">
    Startup Investment Tools
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {open && (
    <div className="absolute top-full left-0 mt-3 w-64
      bg-black border border-gray-800 rounded-lg
      shadow-xl z-50">
      <Link className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white" href="#">Investor Matching</Link>
      <Link className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white" href="#">Pitch Deck</Link>
      <Link className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white" href="#">Financial Projections</Link>
      <Link className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white" href="#">Funding Analysis</Link>
    </div>
  )}
</div>


            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>

            <Link href="/login" className="hover:text-white">
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-[#f5c96a] text-black px-4 py-2 rounded-full
                font-medium hover:opacity-90"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setOpen(!open)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-10">
              <Link 
                href="/blogs" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Blogs
              </Link>
              
              <div className="relative">
                <button 
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 flex justify-between items-center"
                >
                  Startup Investment Tools
                  <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="ml-6 space-y-1 bg-gray-900 rounded-md mt-1">
                  <Link className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md" href="#" onClick={() => setOpen(false)}>Investor Matching</Link>
                  <Link className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md" href="#" onClick={() => setOpen(false)}>Pitch Deck</Link>
                  <Link className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md" href="#" onClick={() => setOpen(false)}>Financial Projections</Link>
                  <Link className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md" href="#" onClick={() => setOpen(false)}>Funding Analysis</Link>
                </div>
              </div>
              
              <Link 
                href="/pricing" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
              
              <Link 
                href="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              
              <Link
                href="/signup"
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-[#f5c96a] text-black hover:opacity-90 mt-2"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
