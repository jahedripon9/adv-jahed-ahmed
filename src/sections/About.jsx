import React from 'react';
import { Award, GraduationCap, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import Button from '../components/common/Button';

export default function About() {
  const { about, qualifications } = siteContent;

  return (
    <section
      id="about"
      aria-label="About the Practice"
      className="py-12 sm:py-20 lg:py-24 bg-light-blue/30 border-y border-slate-100 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Credentials & Qualifications Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-md border border-slate-200/80 lg:sticky lg:top-24">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-light-blue flex items-center justify-center text-navy-primary mb-5 sm:mb-6">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-accent-teal" aria-hidden="true" />
              </div>

              <h3 className="font-serif text-lg sm:text-2xl font-bold text-navy-primary mb-2">
                {qualifications.cardTitle}
              </h3>
              <p className="text-xs text-body-text mb-5 sm:mb-6 leading-relaxed">
                {qualifications.cardSubtitle}
              </p>

              {/* Qualifications List */}
              {qualifications.items && qualifications.items.length > 0 && (
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8" role="list">
                  {qualifications.items.map((q, idx) => (
                    <li
                      key={idx}
                      className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3"
                    >
                      <Award className="w-4 h-4 text-accent-teal mt-0.5 shrink-0" aria-hidden="true" />
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-navy-primary font-sans">
                          {q.title}
                        </h4>
                        <p className="text-xs text-body-text mt-0.5 break-words">
                          {q.institution}
                        </p>
                        <span className="inline-block mt-1 text-[11px] font-medium text-accent-teal">
                          {q.status}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Legal Creed Callout */}
              {about.creedQuote && (
                <blockquote className="p-3.5 sm:p-4 rounded-xl bg-navy-primary text-white border-l-4 border-accent-teal m-0">
                  <p className="font-serif italic text-xs sm:text-sm text-slate-200 leading-relaxed">
                    "{about.creedQuote}"
                  </p>
                  {about.creedCite && (
                    <footer className="mt-2 text-right">
                      <cite className="text-[10px] sm:text-[11px] uppercase tracking-wider text-accent-teal font-semibold not-italic">
                        — {about.creedCite}
                      </cite>
                    </footer>
                  )}
                </blockquote>
              )}

            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Direct CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold text-accent-teal uppercase tracking-wider mb-2.5 sm:mb-3">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>{about.eyebrow}</span>
            </div>

            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-navy-primary tracking-tight mb-4 sm:mb-6">
              {about.heading}
            </h2>

            {/* Intro text */}
            {about.intro && (
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 mb-5 sm:mb-6 shadow-xs">
                <p className="text-sm sm:text-base text-body-text leading-relaxed font-medium">
                  {about.intro}
                </p>
              </div>
            )}

            {/* Detailed paragraphs */}
            {about.paragraphs && about.paragraphs.length > 0 && (
              <div className="space-y-3.5 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base text-body-text leading-relaxed">
                {about.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* Core Practice Pillars */}
            {about.pillars && about.pillars.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10" role="list">
                {about.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs"
                    role="listitem"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-accent-teal shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold text-navy-primary">{pillar.title}</span>
                    </div>
                    <p className="text-xs text-body-text leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {about.primaryCtaText && (
                <Button
                  href={about.primaryCtaHref}
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto justify-center"
                  aria-label={about.primaryCtaText}
                >
                  {about.primaryCtaText}
                </Button>
              )}
              {about.secondaryCtaText && (
                <Button
                  href={about.secondaryCtaHref}
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto justify-center"
                  aria-label={about.secondaryCtaText}
                >
                  {about.secondaryCtaText}
                </Button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
