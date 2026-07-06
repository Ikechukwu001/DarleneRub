'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">Darlene's</span>
              <span className="text-xs text-accent uppercase tracking-widest">RUB</span>
            </div>
          </Link>

          {/* Animated Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 lg:hidden focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {/* Line 1 */}
            <span
              className={`w-6 h-0.5 bg-foreground rounded transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-3' : ''
              }`}
            />
            {/* Line 2 */}
            <span
              className={`w-6 h-0.5 bg-foreground rounded transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            {/* Line 3 */}
            <span
              className={`w-6 h-0.5 bg-foreground rounded transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-3' : ''
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/review"
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Review
            </Link>
            <Link
              href="/prices"
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Prices
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="/payment"
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Payment
            </Link>
            <Link
              href="/termsandconditions"
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Terms
            </Link>
            <button 
              onClick={() => window.location.href = '/prices'}
              className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200 text-sm font-medium"
            >
              Book Now
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-125' : 'max-h-0'
          }`}
        >
          <div className="py-4 border-t border-border space-y-3">
            <Link
              href="/"
              onClick={toggleMenu}
              className="block text-foreground hover:text-primary transition-colors duration-200 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              onClick={toggleMenu}
              className="block text-foreground hover:text-primary transition-colors duration-200 py-2 text-sm font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/services"
              onClick={toggleMenu}
              className="block text-foreground hover:text-primary transition-colors duration-200 py-2 text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/review"
              onClick={toggleMenu}
              className="block text-foreground hover:text-primary transition-colors duration-200 py-2 text-sm font-medium"
            >
              Review
            </Link>
            <Link
              href="/prices"
              onClick={toggleMenu}
              className="block text-foreground hover:text-primary transition-colors duration-200 py-2 text-sm font-medium"
            >
              Prices
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block text-foreground hover:text-primary transition-colors duration-200 py-2 text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="/payment"
              onClick={toggleMenu}
              className="block text-foreground hover:text-primary transition-colors duration-200 py-2 text-sm font-medium"
            >
              Payment
            </Link>
            <Link
              href="/termsandconditions"
              onClick={toggleMenu}
              className="block text-foreground hover:text-primary transition-colors duration-200 py-2 text-sm font-medium"
            >
              Terms & Conditions
            </Link>
            <button 
              onClick={() => {
                toggleMenu();
                window.location.href = '/prices';
              }}
              className="w-full px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200 text-sm font-medium"
            >
              Book Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}