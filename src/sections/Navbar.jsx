import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Scale, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';
import Button from '../components/common/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

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

  const content = siteContent[language] || siteContent.en;
  const { lawyer, siteInfo, navigation } = content;

  return (
    <header
      role="banner"
      aria-label={language === 'bn' ? 'হেডার' : 'Site Header'}
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
            aria-label={`${lawyer.name} - ${language === 'bn' ? 'উপরে যান' : 'Back to top'}`}
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
          <nav className="hidden md:flex items-center gap-5 lg:gap-8" aria-label={language === 'bn' ? 'প্রধান মেনু' : 'Main Navigation'}>
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

          {/* Desktop Consultation Action & Language Switcher (>= 768px) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Desktop Language Switcher (EN | বাংলা) */}
            <div
              role="group"
              aria-label={language === 'bn' ? 'ভাষা নির্বাচন করুন' : 'Select language'}
              className="inline-flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200/80 text-xs font-semibold"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                aria-label="Switch to English"
                className={`px-2.5 py-1.5 rounded-md min-h-[32px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary cursor-pointer ${
                  language === 'en'
                    ? 'bg-navy-primary text-white shadow-xs font-bold'
                    : 'text-navy-primary/70 hover:text-navy-primary hover:bg-slate-200/50'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                aria-pressed={language === 'bn'}
                aria-label="বাংলা ভাষায় পরিবর্তন করুন"
                className={`px-2.5 py-1.5 rounded-md min-h-[32px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary cursor-pointer ${
                  language === 'bn'
                    ? 'bg-navy-primary text-white shadow-xs font-bold'
                    : 'text-navy-primary/70 hover:text-navy-primary hover:bg-slate-200/50'
                }`}
              >
                বাংলা
              </button>
            </div>

            <Button
              href={navigation.ctaHref}
              variant="primary"
              size="sm"
              icon={PhoneCall}
              iconPosition="left"
              aria-label={language === 'bn' ? 'পরামর্শের অনুরোধ জানান' : 'Request a legal consultation'}
            >
              {navigation.ctaText}
            </Button>
          </div>

          {/* Mobile Controls (< 768px): Language Switcher & Hamburger Button */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Mobile Header Language Toggle with 44x44px touch targets */}
            <div
              role="group"
              aria-label={language === 'bn' ? 'ভাষা নির্বাচন' : 'Language selection'}
              className="inline-flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200/80 text-[11px] font-semibold"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                aria-label="Switch to English"
                className={`px-2.5 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary cursor-pointer ${
                  language === 'en'
                    ? 'bg-navy-primary text-white shadow-xs font-bold'
                    : 'text-navy-primary/70 hover:text-navy-primary'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                aria-pressed={language === 'bn'}
                aria-label="বাংলা ভাষায় পরিবর্তন"
                className={`px-2.5 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary cursor-pointer ${
                  language === 'bn'
                    ? 'bg-navy-primary text-white shadow-xs font-bold'
                    : 'text-navy-primary/70 hover:text-navy-primary'
                }`}
              >
                বাং
              </button>
            </div>

            {/* Mobile Menu Hamburger Button with 44x44px touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-lg text-navy-primary hover:bg-light-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary shrink-0"
              aria-label={
                mobileMenuOpen
                  ? (language === 'bn' ? 'মেনু বন্ধ করুন' : 'Close Navigation Menu')
                  : (language === 'bn' ? 'মেনু খুলুন' : 'Open Navigation Menu')
              }
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
            aria-label={language === 'bn' ? 'মোবাইল মেনু' : 'Mobile Navigation'}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
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
                  className="w-11 h-11 flex items-center justify-center rounded-lg text-navy-primary hover:bg-light-blue shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary cursor-pointer"
                  aria-label={language === 'bn' ? 'মেনু বন্ধ করুন' : 'Close menu'}
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Drawer Language Switcher with 44px touch targets */}
              <div
                role="group"
                aria-label={language === 'bn' ? 'ভাষা নির্বাচন' : 'Language selection'}
                className="mb-5 p-1 rounded-xl bg-slate-100 border border-slate-200/70 grid grid-cols-2 gap-1"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  aria-pressed={language === 'en'}
                  className={`min-h-[44px] flex items-center justify-center rounded-lg text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary cursor-pointer ${
                    language === 'en'
                      ? 'bg-white text-navy-primary shadow-xs'
                      : 'text-body-text hover:text-navy-primary'
                  }`}
                >
                  English (EN)
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('bn')}
                  aria-pressed={language === 'bn'}
                  className={`min-h-[44px] flex items-center justify-center rounded-lg text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-primary cursor-pointer ${
                    language === 'bn'
                      ? 'bg-white text-navy-primary shadow-xs'
                      : 'text-body-text hover:text-navy-primary'
                  }`}
                >
                  বাংলা (BN)
                </button>
              </div>

              {/* Navigation Links with generous min 44px tap target */}
              <nav className="flex flex-col gap-1.5" aria-label={language === 'bn' ? 'মেনু লিংক' : 'Mobile Menu Links'}>
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
                aria-label={language === 'bn' ? 'গোপনীয় পরামর্শের অনুরোধ জানান' : 'Request a confidential consultation'}
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
