'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-black border-b border-gray-800 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          
          
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 md:w-9 sm:h-7 md:h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <span className="text-black text-xs sm:text-sm font-bold font-sans">WS</span>
            </div>
            <span className="text-white text-base sm:text-lg font-semibold truncate max-w-[100px] sm:max-w-[120px] md:max-w-[150px] font-sans">
              WoodenScale
            </span>
          </div>

          
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
            <Link
              href="/book-demo"
              className="bg-gradient-to-r from-[#f5c96a] via-[#f5c96a] to-[#f1ad3a] text-black px-4 py-2 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
            >
              Book a demo
            </Link>
          </div>

          
          <div className="ml-auto flex items-center gap-1 sm:gap-2 md:gap-4">
            
             
            <div className="hidden lg:flex items-center gap-1 sm:gap-2 lg:gap-2 relative">
              <Link
                href="/blogs"
                className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                Blogs
              </Link>

              <div 
                className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white hover:bg-gray-700 flex items-center gap-1 cursor-pointer transition-colors duration-200 relative"
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
              >
                Startup Investment Tools
                <svg className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                
                
                {isToolsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <Link
                        href="/investor-matching"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        Investor Matching
                      </Link>
                      <Link
                        href="/pitch-deck"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        Pitch Deck
                      </Link>
                      <Link
                        href="/financial-projections"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        Financial Projections
                      </Link>
                      <Link
                        href="/funding-analysis"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        Funding Analysis
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                Pricing
              </Link>

              <Link
                href="/login"
                className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                Login
              </Link>
            </div>

           
            <Link
              href="/signup"
              className="px-2 sm:px-3 lg:px-4 py-1 rounded-full text-xs sm:text-sm lg:text-base font-medium text-black bg-gradient-to-r from-[#f5c96a] via-[#f5c96a] to-[#f1ad3a] hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
            >
              Sign Up
            </Link>

            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white p-2 rounded-md ml-1 sm:ml-2"
              aria-label="Toggle menu"
            >
              <svg className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu  */}
        {isMenuOpen && (
          <div className="lg:hidden w-full bg-black border-t border-gray-800 z-40 shadow-lg">
            <div className="px-4 py-3 space-y-3">
              
              <Link
                href="/book-demo"
                className="block w-full text-center bg-gradient-to-r from-[#f5c96a] via-[#f5c96a] to-[#f1ad3a] text-black px-4 py-2 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a demo
              </Link>
              
              {/* Mobile navigation links */}
              <Link
                href="/blogs"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              
              <div 
                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md cursor-pointer transition-colors"
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
              >
                Startup Investment Tools
                {isToolsDropdownOpen && (
                  <div className="mt-2 ml-3 space-y-1">
                    <Link
                      href="/investor-matching"
                      className="block px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => {
                        setIsToolsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Investor Matching
                    </Link>
                    <Link
                      href="/pitch-deck"
                      className="block px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => {
                        setIsToolsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Pitch Deck
                    </Link>
                    <Link
                      href="/financial-projections"
                      className="block px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => {
                        setIsToolsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Financial Projections
                    </Link>
                    <Link
                      href="/funding-analysis"
                      className="block px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => {
                        setIsToolsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Funding Analysis
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                href="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <Link
                href="/login"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}