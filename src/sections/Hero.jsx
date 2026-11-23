import React from 'react';
import { ArrowRight, ShieldCheck, Award, Scale, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';
import Button from '../components/common/Button';

// Icon mapping for trust badges
const trustIconMap = {
  ShieldCheck: ShieldCheck,
  Scale: Scale,
  Award: Award
};

export default function Hero() {
  const { language } = useLanguage();
  const content = siteContent[language] || siteContent.en;
  const { lawyer, hero } = content;

  return (
    <section
      aria-label="Hero Overview"
      className="relative overflow-hidden pt-3 pb-12 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20 bg-white"
    >
      {/* Subtle background gradient tint */}
      <div
        className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-l from-light-blue/30 via-light-blue/15 to-transparent -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1 pt-2 sm:pt-4 lg:pt-1">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 p-1 pr-3 sm:pr-4 rounded-full bg-light-blue text-navy-primary text-xs font-medium mb-3 sm:mb-4 border border-slate-200/60 shadow-xs max-w-full">
              <span className="bg-navy-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0">
                {hero.badgePrefix}
              </span>
              <span className="truncate text-[11px] sm:text-xs">
                {lawyer.badgeText}
              </span>
            </div>

            {/* Main Editorial Serif Headline */}
            <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-primary tracking-tight leading-[1.18] sm:leading-[1.12] mb-3 sm:mb-5 break-words">
              {hero.headline}
            </h1>

            {/* Sub-headline / Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-body-text leading-relaxed max-w-xl mb-5 sm:mb-7">
              {hero.subtitle}
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              {hero.primaryCtaText && (
                <Button
                  href={hero.primaryCtaHref}
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto justify-center"
                  aria-label={hero.primaryCtaText}
                >
                  {hero.primaryCtaText}
                </Button>
              )}
              {hero.secondaryCtaText && (
                <Button
                  href={hero.secondaryCtaHref}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                  aria-label={hero.secondaryCtaText}
                >
                  {hero.secondaryCtaText}
                </Button>
              )}
            </div>

            {/* Trust & Accreditations Strip */}
            {hero.trustBadges && hero.trustBadges.length > 0 && (
              <div className="pt-5 sm:pt-6 border-t border-slate-200/80 w-full">
                <p className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5 sm:mb-3">
                  {hero.trustTitle}
                </p>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {hero.trustBadges.map((badge, idx) => {
                    const BadgeIcon = trustIconMap[badge.icon] || ShieldCheck;
                    return (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 text-xs font-medium text-navy-primary/90 bg-light-blue/40 px-3 py-2 rounded-lg border border-slate-100 ${
                          idx === 2 ? 'xs:col-span-2 sm:col-span-1' : ''
                        }`}
                      >
                        <BadgeIcon className="w-4 h-4 text-accent-teal shrink-0" aria-hidden="true" />
                        <span className="truncate">{badge.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Layered Lawyer Portrait & Floating Nameplate Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative order-1 lg:order-2 pb-8 sm:pb-10 lg:pb-0">
            <div className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-md lg:max-w-none">
              
              {/* Circular Soft Blue Backdrop Graphic */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 xs:w-72 xs:h-72 sm:w-96 sm:h-96 rounded-full bg-light-blue/80 -z-10 blur-xs"
                aria-hidden="true"
              />

              {/* Lawyer Cutout Portrait Image */}
              {hero.image && (
                <div className="relative mx-auto flex justify-center">
                  <img
                    src={hero.image}
                    alt={hero.imageAlt || `${lawyer.name} - Portrait`}
                    width={380}
                    height={480}
                    className="w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[380px] h-auto object-contain drop-shadow-md select-none"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              )}

              {/* Floating Credential Card (Bottom-centered over portrait) */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] max-w-xs sm:max-w-sm bg-white rounded-xl shadow-xl border border-slate-100 p-3.5 sm:p-4 text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-center gap-1.5 text-accent-teal mb-0.5 sm:mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {hero.cardTag}
                  </span>
                </div>
                <h2 className="font-serif font-bold text-sm sm:text-base lg:text-lg text-navy-primary leading-tight truncate">
                  {lawyer.name}
                </h2>
                <p className="text-[11px] sm:text-xs text-body-text mt-0.5 truncate">
                  {lawyer.title}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
