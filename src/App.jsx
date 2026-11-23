import React, { useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { siteContent } from './data/siteContent';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import PracticeAreas from './sections/PracticeAreas';
import Achievements from './sections/Achievements';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const { language } = useLanguage();
  const content = siteContent[language] || siteContent.en;

  // Synchronize document title and meta description with active language
  useEffect(() => {
    if (content?.siteInfo) {
      if (content.siteInfo.metaTitle) {
        document.title = content.siteInfo.metaTitle;
      }
      if (content.siteInfo.metaDescription) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', content.siteInfo.metaDescription);
        }
      }
    }
  }, [content]);

  return (
    <div className="min-h-screen bg-white text-body-text flex flex-col font-sans selection:bg-light-blue selection:text-navy-primary w-full">
      {/* WCAG 2.1 AA Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-navy-primary focus:text-white focus:text-xs focus:font-semibold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-teal"
      >
        {content.siteInfo?.skipLinkText || 'Skip to main content'}
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-grow w-full overflow-x-clip focus:outline-none">
        <Hero />
        <About />
        <PracticeAreas />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
