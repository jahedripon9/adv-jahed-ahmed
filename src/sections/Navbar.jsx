import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Scale, PhoneCall } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import Button from '../components/common/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for subtle shadow and border elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Keyboard accessibility: Close mobile drawer on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    },
    [mobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const { lawyer, siteInfo, navigation } = siteContent;

  return (
    <header
      role="banner"
      aria-label="Site Header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white ${
        scrolled
          ? 'shadow-md border-b border-slate-200/80 py-2 sm:py-2.5'
          : 'border-b border-slate-100/60 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary rounded-lg min-w-0"
            aria-label={`${lawyer.name} - Back to top`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-navy-primary flex items-center justify-center text-white shadow-sm shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-accent-teal" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif font-bold text-base sm:text-lg text-navy-primary tracking-tight leading-tight truncate group-hover:text-navy-secondary">
                {lawyer.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-body-text uppercase tracking-wider truncate">
                {siteInfo.practiceCategoryLabel}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (>= 768px) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8" aria-label="Main Navigation">
            {navigation.links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-wider font-semibold text-navy-primary/80 hover:text-navy-primary transition-colors duration-150 relative py-1.5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-navy-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary rounded"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Consultation Action (>= 768px) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button
              href={navigation.ctaHref}
              variant="primary"
              size="sm"
              icon={PhoneCall}
              iconPosition="left"
              aria-label="Request a legal consultation"
            >
              {navigation.ctaText}
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button (< 768px) with 44x44px touch target */}
          <div className="flex md:hidden shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-lg text-navy-primary hover:bg-light-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Over Navigation Drawer with Backdrop (z-[60] sits above sticky header) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-navy-dark/50 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        >
          <div
            id="mobile-nav-drawer"
            className="fixed top-0 right-0 bottom-0 w-full max-w-[300px] sm:max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-[61]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-navy-primary flex items-center justify-center text-white shrink-0">
                    <Scale className="w-4 h-4 text-accent-teal" aria-hidden="true" />
                  </div>
                  <span className="font-serif font-bold text-sm text-navy-primary truncate">
                    {lawyer.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-navy-primary hover:bg-light-blue shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Links with generous min 44px tap target */}
              <nav className="flex flex-col gap-1.5" aria-label="Mobile Menu Links">
                {navigation.links.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="px-4 py-3 min-h-[44px] flex items-center rounded-lg text-sm font-semibold text-navy-primary hover:bg-light-blue/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <Button
                href={navigation.ctaHref}
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={handleLinkClick}
                aria-label="Request a confidential consultation"
              >
                {navigation.mobileCtaText}
              </Button>
              <p className="text-center text-xs text-body-text">
                {navigation.mobileCtaNote}
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
