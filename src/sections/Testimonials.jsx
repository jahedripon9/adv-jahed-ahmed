import React from 'react';
import { MessageSquareQuote, UserCheck } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="py-14 sm:py-20 lg:py-24 bg-light-blue/20 relative overflow-hidden scroll-mt-16 border-b border-slate-100"
    >
      {/* Decorative subtle background quotation mark watermark */}
      <div
        className="absolute top-8 right-6 sm:top-12 sm:right-12 text-slate-200/40 select-none pointer-events-none -z-0"
        aria-hidden="true"
      >
        <MessageSquareQuote className="w-36 h-36 sm:w-64 sm:h-64 opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-light-blue text-navy-primary text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-accent-teal shrink-0" aria-hidden="true" />
            <span>{testimonials.eyebrow}</span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-primary tracking-tight mb-3 sm:mb-4">
            {testimonials.heading}
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-body-text leading-relaxed max-w-lg mx-auto">
            {testimonials.subheading}
          </p>
        </div>

        {/* Testimonials Static Cards Grid */}
        {testimonials.items && testimonials.items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
            {testimonials.items.map((item) => (
              <article key={item.id} className="flex flex-col items-center">
                <figure className="m-0 w-full flex flex-col items-center">
                  
                  {/* Speech Bubble Card Container */}
                  <div className="relative w-full bg-white rounded-2xl p-5 sm:p-7 lg:p-8 shadow-md border border-slate-100 mb-6">
                    
                    {/* Testimonial Title */}
                    <h3 className="font-sans font-bold text-sm sm:text-base lg:text-lg text-navy-primary mb-2 sm:mb-3">
                      {item.title}
                    </h3>

                    {/* Testimonial Quote Text */}
                    <blockquote className="m-0">
                      <p className="text-xs sm:text-sm text-body-text leading-relaxed italic mb-4 break-words">
                        "{item.quote}"
                      </p>
                    </blockquote>

                    {/* Case Type Tag */}
                    {item.caseType && (
                      <div className="inline-block px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-light-blue text-navy-primary">
                        {item.caseType}
                      </div>
                    )}

                    {/* Downward Caret / Pointer pointing to client avatar */}
                    <div
                      className="absolute -bottom-2.5 sm:-bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] sm:border-l-[12px] sm:border-r-[12px] sm:border-t-[12px] border-l-transparent border-r-transparent border-t-white drop-shadow-xs"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Author Identification below bubble */}
                  <figcaption className="flex flex-col items-center text-center">
                    {/* Avatar Placeholder */}
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-navy-primary text-white flex items-center justify-center font-bold text-sm mb-2 shadow-sm border-2 border-white shrink-0"
                      aria-hidden="true"
                    >
                      <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-accent-teal" />
                    </div>

                    <cite className="font-serif font-bold text-sm sm:text-base text-navy-primary not-italic break-words block">
                      {item.clientName}
                    </cite>

                    <span className="text-xs text-body-text mt-0.5 break-words block">
                      {item.clientRole}
                    </span>
                  </figcaption>

                </figure>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center text-body-text max-w-lg mx-auto">
            <p className="text-sm">Client testimonials will be displayed here once updated in siteContent.js.</p>
          </div>
        )}

        {/* Legal Advertising Disclaimer */}
        {testimonials.complianceNotice && (
          <div className="mt-10 sm:mt-14 text-center max-w-xl mx-auto px-4">
            <p className="text-[10px] sm:text-[11px] text-body-text/80 italic leading-relaxed">
              {testimonials.complianceNotice}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
