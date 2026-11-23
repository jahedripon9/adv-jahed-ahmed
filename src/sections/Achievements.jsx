import React from 'react';
import { Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

export default function Achievements() {
  const { language } = useLanguage();
  const content = siteContent[language] || siteContent.en;
  const { achievements } = content;

  return (
    <section
      id="achievements"
      aria-label={language === 'bn' ? 'সাফল্যের খতিয়ান ও মাইলফলক' : 'Achievements and Track Record'}
      className="relative py-14 sm:py-20 lg:py-24 bg-navy-secondary text-white overflow-hidden scroll-mt-16"
    >
      {/* Decorative subtle contour lines SVG background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-light-blue text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 border border-white/15">
            <Award className="w-3.5 h-3.5 text-accent-teal shrink-0" aria-hidden="true" />
            <span>{achievements.eyebrow}</span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-white">
            {achievements.heading}
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-lg mx-auto">
            {achievements.subheading}
          </p>
        </div>

        {/* Metrics Grid */}
        {achievements.metrics && achievements.metrics.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/15" role="list">
            {achievements.metrics.map((item, idx) => (
              <div
                key={idx}
                role="listitem"
                className={`flex flex-col items-center text-center p-4 sm:p-6 ${
                  idx > 0 ? 'pt-6 md:pt-6' : ''
                }`}
              >
                {/* Stat Value Badge */}
                <div className="mb-2 sm:mb-3">
                  <span
                    className="font-sans text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white block"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {item.fallbackNumber}
                  </span>
                  <span className="inline-block mt-1.5 sm:mt-2 px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-accent-teal/20 text-accent-teal border border-accent-teal/30">
                    {item.value}
                  </span>
                </div>

                {/* Stat Label */}
                <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-light-blue mb-1 sm:mb-2">
                  {item.label}
                </h3>

                {/* Stat Sub-detail */}
                <p className="text-xs sm:text-sm text-slate-300 max-w-xs leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bar Compliance Disclaimer */}
        {achievements.disclaimer && (
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-[10px] sm:text-[11px] text-slate-400 italic max-w-xl mx-auto leading-relaxed">
              {achievements.disclaimer}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
