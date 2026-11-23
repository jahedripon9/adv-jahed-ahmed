import React from 'react';
import { PhoneCall, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';
import Button from '../components/common/Button';

export default function Contact() {
  const { language } = useLanguage();
  const content = siteContent[language] || siteContent.en;
  const { contact } = content;

  const hasRealPhone = Boolean(contact.phoneRaw && contact.phoneRaw.trim() !== '');
  const hasRealEmail = Boolean(contact.emailRaw && contact.emailRaw.trim() !== '');

  return (
    <section
      id="contact"
      aria-label={language === 'bn' ? 'যোগাযোগ ও সরাসরি পরামর্শ' : 'Contact and Consultation'}
      className="py-12 sm:py-20 lg:py-24 bg-white scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Direct Consultation Copy & Action Triggers */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold text-accent-teal uppercase tracking-wider mb-2.5 sm:mb-3">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>{contact.eyebrow}</span>
            </div>

            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-primary tracking-tight leading-tight mb-4 sm:mb-6">
              {contact.heading}
            </h2>

            <p className="text-sm sm:text-base text-body-text leading-relaxed mb-6 sm:mb-8">
              {contact.subheading}
            </p>

            {/* Direct Contact Action Buttons (No backend form needed) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              <Button
                href={hasRealPhone ? `tel:${contact.phoneRaw}` : '#contact'}
                variant="primary"
                size="lg"
                icon={PhoneCall}
                iconPosition="left"
                className="w-full sm:w-auto justify-center"
                aria-label={
                  hasRealPhone
                    ? (language === 'bn' ? `সরাসরি ফোন করুন: ${contact.phone}` : `Call our office directly at ${contact.phone}`)
                    : (language === 'bn' ? 'সরাসরি অফিসে ফোন করুন' : 'Call office directly')
                }
              >
                {contact.phoneButtonText}
              </Button>

              <Button
                href={
                  hasRealEmail
                    ? `mailto:${contact.emailRaw}?subject=Confidential%20Legal%20Consultation%20Inquiry`
                    : '#contact'
                }
                variant="secondary"
                size="lg"
                icon={Mail}
                iconPosition="left"
                className="w-full sm:w-auto justify-center"
                aria-label={
                  hasRealEmail
                    ? (language === 'bn' ? `গোপনীয় ইমেইল পাঠান: ${contact.email}` : `Send confidential email to ${contact.email}`)
                    : (language === 'bn' ? 'গোপনীয় অনুসন্ধানের ইমেইল পাঠান' : 'Send confidential inquiry email')
                }
              >
                {contact.emailButtonText}
              </Button>
            </div>

            {/* Placeholders for Contact Information with wrap safety */}
            <div className="space-y-3 sm:space-y-4 pt-5 sm:pt-6 border-t border-slate-100" role="list">
              
              {/* Telephone Information */}
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-light-blue/40 border border-slate-100" role="listitem">
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-accent-teal shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-navy-primary block">
                    {contact.phoneLabel}
                  </span>
                  {hasRealPhone ? (
                    <a
                      href={`tel:${contact.phoneRaw}`}
                      className="text-xs sm:text-sm text-body-text font-medium select-all break-words hover:text-navy-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-navy-primary rounded"
                    >
                      {contact.phone}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm text-body-text font-medium select-all break-words">
                      {contact.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Email Information */}
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-light-blue/40 border border-slate-100" role="listitem">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-teal shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-navy-primary block">
                    {contact.emailLabel}
                  </span>
                  {hasRealEmail ? (
                    <a
                      href={`mailto:${contact.emailRaw}?subject=Confidential%20Legal%20Consultation%20Inquiry`}
                      className="text-xs sm:text-sm text-body-text font-medium select-all break-all hover:text-navy-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-navy-primary rounded"
                    >
                      {contact.email}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm text-body-text font-medium select-all break-all">
                      {contact.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Office Address Information */}
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-light-blue/40 border border-slate-100" role="listitem">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-teal shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-navy-primary block">
                    {contact.addressLabel}
                  </span>
                  <span className="text-xs sm:text-sm text-body-text break-words">
                    {contact.address}
                  </span>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-light-blue/40 border border-slate-100" role="listitem">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent-teal shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-navy-primary block">
                    {contact.hoursLabel}
                  </span>
                  <span className="text-xs sm:text-sm text-body-text break-words">
                    {contact.officeHours}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contextual Photography */}
          <div className="lg:col-span-6 relative order-2">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                {contact.image && (
                  <img
                    src={contact.image}
                    alt={contact.imageAlt || "Client Consultation Setting"}
                    width={560}
                    height={420}
                    className="w-full h-auto object-cover max-h-[340px] xs:max-h-[380px] sm:max-h-[480px]"
                    loading="lazy"
                    decoding="async"
                  />
                )}

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/60 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

                {/* Floating Response Guarantee Tag over image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-lg border border-white/60">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-accent-teal mb-0.5 sm:mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-navy-primary">
                      {contact.guaranteeTag}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-body-text leading-relaxed">
                    {contact.responseGuarantee}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
