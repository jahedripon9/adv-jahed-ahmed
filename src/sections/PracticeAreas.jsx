import React from 'react';
import { Briefcase, Shield, FileText, Scale, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import Button from '../components/common/Button';

// Icon map for dynamic lookup
const iconMap = {
  Briefcase: Briefcase,
  Shield: Shield,
  FileText: FileText,
  Scale: Scale
};

export default function PracticeAreas() {
  const { practiceAreas } = siteContent;

  return (
    <section
      id="practice-areas"
      aria-label="Practice Areas"
      className="py-12 sm:py-20 lg:py-24 bg-white scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Narrative & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-accent-teal uppercase tracking-wider mb-2.5 sm:mb-3">
                <Scale className="w-4 h-4" aria-hidden="true" />
                <span>{practiceAreas.eyebrow}</span>
              </div>

              <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-primary tracking-tight leading-tight mb-4 sm:mb-6">
                {practiceAreas.heading}
              </h2>

              <p className="text-sm sm:text-base text-body-text leading-relaxed mb-6">
                {practiceAreas.narrative}
              </p>

              {practiceAreas.guarantees && practiceAreas.guarantees.length > 0 && (
                <div className="space-y-3 mb-6 sm:mb-8">
                  {practiceAreas.guarantees.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-primary font-medium">
                      <CheckCircle2 className="w-4 h-4 text-accent-teal shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {practiceAreas.ctaText && (
              <div className="pt-4 border-t border-slate-100">
                <Button
                  href={practiceAreas.ctaHref || "#contact"}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto justify-center"
                  aria-label={practiceAreas.ctaText}
                >
                  {practiceAreas.ctaText}
                </Button>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Grid of Elevated Service Cards */}
          <div className="lg:col-span-7">
            {practiceAreas.items && practiceAreas.items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {practiceAreas.items.map((area) => {
                  const IconComponent = iconMap[area.icon] || Scale;
                  return (
                    <article
                      key={area.id}
                      className="group bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
                    >
                      <div>
                        {/* Icon Circle */}
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-light-blue flex items-center justify-center text-accent-teal mb-5 sm:mb-6 group-hover:bg-accent-teal group-hover:text-white transition-colors duration-300">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                        </div>

                        {/* Card Title */}
                        <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-navy-primary mb-2 sm:mb-3 group-hover:text-accent-teal transition-colors duration-200">
                          {area.title}
                        </h3>

                        {/* Card Description */}
                        <p className="text-xs sm:text-sm text-body-text leading-relaxed mb-6">
                          {area.description}
                        </p>
                      </div>

                      {/* Card Link Trigger */}
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-primary hover:text-accent-teal transition-colors pt-3.5 border-t border-slate-100 group/link min-h-[44px]"
                        aria-label={`Inquire about ${area.title}`}
                      >
                        <span>Inquire regarding this area</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
                      </a>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center text-body-text">
                <p className="text-sm">Practice areas will be displayed here once updated in siteContent.js.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
