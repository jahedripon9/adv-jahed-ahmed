import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Footer() {
  const { lawyer, navigation, practiceAreas, contact, footer, socialLinks } = siteContent;

  const hasRealPhone = Boolean(contact.phoneRaw && contact.phoneRaw.trim() !== '');
  const hasRealEmail = Boolean(contact.emailRaw && contact.emailRaw.trim() !== '');

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="bg-navy-secondary text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-navy-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Identity & Mission (4 cols on desktop) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-accent-teal" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="font-serif font-bold text-base sm:text-lg text-white block leading-tight truncate">
                  {lawyer.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                  {footer.brandSubtitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 max-w-sm">
              {footer.brandTagline}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 max-w-full">
              <span className="w-2 h-2 rounded-full bg-accent-teal shrink-0 animate-pulse" aria-hidden="true" />
              <span className="truncate">{lawyer.badgeText}</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols on desktop) */}
          <nav className="lg:col-span-2" aria-label="Footer Quick Links">
            <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
              {footer.quickLinksTitle}
            </h3>
            <ul className="space-y-1 sm:space-y-1.5" role="list">
              {navigation.links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors duration-150 inline-block py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Practice Areas (3 cols on desktop) */}
          <nav className="lg:col-span-3" aria-label="Footer Practice Area Links">
            <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
              {footer.practiceAreasTitle}
            </h3>
            <ul className="space-y-1 sm:space-y-1.5" role="list">
              {practiceAreas.items.map((area) => (
                <li key={area.id}>
                  <a
                    href="#practice-areas"
                    className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors duration-150 inline-block py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Direct Office Contact (3 cols on desktop) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
              {footer.contactInfoTitle}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300" role="list">
              <div className="flex items-start gap-2.5" role="listitem">
                <Phone className="w-4 h-4 text-accent-teal mt-0.5 shrink-0" aria-hidden="true" />
                {hasRealPhone ? (
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="select-all break-words hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    {contact.phone}
                  </a>
                ) : (
                  <span className="select-all break-words">{contact.phone}</span>
                )}
              </div>
              <div className="flex items-start gap-2.5" role="listitem">
                <Mail className="w-4 h-4 text-accent-teal mt-0.5 shrink-0" aria-hidden="true" />
                {hasRealEmail ? (
                  <a
                    href={`mailto:${contact.emailRaw}?subject=Confidential%20Legal%20Consultation%20Inquiry`}
                    className="select-all break-all hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    {contact.email}
                  </a>
                ) : (
                  <span className="select-all break-all">{contact.email}</span>
                )}
              </div>
              <div className="flex items-start gap-2.5" role="listitem">
                <MapPin className="w-4 h-4 text-accent-teal mt-0.5 shrink-0" aria-hidden="true" />
                <span className="break-words">{contact.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Attorney Advertising Notice */}
        <div className="py-6 sm:py-8 border-b border-white/10">
          <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-400">
            {footer.disclaimer}
          </p>
        </div>

        {/* Bottom Copyright, Professional & Legal Links */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>{footer.copyrightNotice}</p>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
            {/* Legal Links */}
            {footer.legalLinks && footer.legalLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="hover:text-white transition-colors py-1">
                {link.name}
              </a>
            ))}

            {/* Social / Professional Links if configured */}
            {socialLinks && socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-teal transition-colors py-1"
                aria-label={social.label}
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
