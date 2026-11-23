/**
 * ==============================================================================
 * CENTRALIZED WEBSITE CONTENT CONFIGURATION
 * ==============================================================================
 *
 * Welcome! This single file controls all text, links, and imagery displayed on the website.
 * To update the website, simply change the values in this file and re-build the site.
 *
 * IMPORTANT RULES:
 * - Real lawyer information has not yet been finalized.
 * - Missing real information is marked with [CONTENT REQUIRED].
 * - When you receive real lawyer details, replace the placeholder text with your real data.
 * - Do not invent fictional lawyer names, qualifications, statistics, or contact details.
 * ==============================================================================
 */

// --- IMAGE IMPORTS ---
// To replace an image on the website:
// 1. Put your new image file into the appropriate folder under 'src/assets/images/':
//    - Lawyer portrait:       src/assets/images/lawyer/
//    - Consultation photo:    src/assets/images/general/
//    - Practice area icons:   src/assets/images/practice-areas/
//    - Testimonial headshots: src/assets/images/testimonials/
// 2. Update the import path below to point to your new image file.
import lawyerPortraitImage from "../assets/images/lawyer/lawyer-portrait.png";
import consultationPhotoImage from "../assets/images/general/consultation-call.png";

export const siteContent = {
  // ----------------------------------------------------------------------------
  // 1. SITE-WIDE GENERAL INFORMATION
  // ----------------------------------------------------------------------------
  siteInfo: {
    // Meta browser tab title
    metaTitle: "Lawyer & Legal Consultant | Professional Legal Practice",
    // Search engine description (150-160 characters)
    metaDescription:
      "Strategic legal counsel, corporate advisory, and dedicated legal representation. Confidential consultations tailored to business and individual client needs.",
    // Canonical production URL
    canonicalUrl: "https://example.com",
    // Primary brand theme color
    themeColor: "#0C2B4E",
    // Practice category label shown under the lawyer's name in the header
    practiceCategoryLabel: "Legal Practice & Advisory",
  },

  // ----------------------------------------------------------------------------
  // 2. NAVIGATION BAR
  // ----------------------------------------------------------------------------
  navigation: {
    // Top-level navigation anchor links
    links: [
      { name: "About", href: "#about" },
      { name: "Practice Areas", href: "#practice-areas" },
      { name: "Track Record", href: "#achievements" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
    // Desktop header consultation button
    ctaText: "Consultation",
    ctaHref: "#contact",
    // Mobile slide-over drawer action button
    mobileCtaText: "Request Consultation",
    mobileCtaNote: "Direct, confidential legal advisory",
  },

  // ----------------------------------------------------------------------------
  // 3. LAWYER IDENTITY & PROFILE
  // ----------------------------------------------------------------------------
  lawyer: {
    // Full legal name of the lawyer
    name: "ADV JAHED AHMED",
    // Official professional title and designations
    title: "Legal Consultant & Attorney",
    // Law firm / office entity name
    firmName: "Sylhet Judge Court",
    // Status text displayed in the header and hero status badge
    badgeText: "Admitted to the Bar • Confidential Consultations",
    // Tagline summarizing professional philosophy
    tagline: "Strategic Legal Counsel & Rigorous Advocacy",
  },

  // ----------------------------------------------------------------------------
  // 4. HERO SECTION
  // ----------------------------------------------------------------------------
  hero: {
    // Small pill prefix text
    badgePrefix: "Practice",
    // Primary editorial heading in the hero section
    headline: "Your Strategic Partner in Legal Solutions",
    // Supporting introductory paragraph
    subtitle:
      "Providing clear, principled, and results-driven legal counsel for business owners, corporate leaders, and individuals navigating critical legal challenges.",
    // Primary call-to-action button
    primaryCtaText: "Schedule Consultation",
    primaryCtaHref: "#contact",
    // Secondary call-to-action button
    secondaryCtaText: "Explore Practice Areas",
    secondaryCtaHref: "#practice-areas",
    // Trust and standards bar title
    trustTitle: "Verified Credentials & Standards",
    // Trust items displayed below CTAs
    trustBadges: [
      { label: "Bar Certified", icon: "ShieldCheck" },
      { label: "Direct Counsel", icon: "Scale" },
      { label: "Strict Confidentiality", icon: "Award" },
    ],
    // Cutout portrait image of the lawyer
    image: lawyerPortraitImage,
    imageAlt: "ADV JAHED AHMED - Professional Legal Advocate",
    // Floating nameplate badge tag anchored over the portrait
    cardTag: "Verified Advocate",
  },

  // ----------------------------------------------------------------------------
  // 5. ABOUT LAWYER & PHILOSOPHY
  // ----------------------------------------------------------------------------
  about: {
    // Small eyebrow tag
    eyebrow: "Professional Overview",
    // Main section heading
    heading: "About the Practice & Legal Philosophy",
    // Lead highlighted introductory paragraph
    intro:
      "Dedicated to providing thoughtful legal guidance and reliable representation, I believe every client deserves to be heard, respected, and supported. My approach is built on professionalism, integrity, and a clear understanding of each client's unique legal needs. I am committed to maintaining strict confidentiality, upholding ethical standards, and pursuing practical legal solutions with diligence and dedication. My goal is to protect my clients' interests while building trust through transparent communication and responsible legal advocacy.",
    // Detailed narrative paragraphs
    paragraphs: [
      "Every client engagement is guided by thorough preparation, a deep understanding of applicable laws and regulations, and an unwavering commitment to confidentiality. From negotiating complex agreements to managing legal risks, every matter receives careful attention, strategic insight, and a solution-oriented approach.",

      "The practice is built around personalized service and direct communication. Without the unnecessary layers of a large firm, clients benefit from a more focused approach, with clear guidance and dedicated attention throughout every stage of their legal matter.",
    ],
    // Core practice values / pillars
    pillars: [
      {
        title: "Ethical Rigor",
        description:
          "Strict confidentiality adhering to professional codes of responsibility.",
      },
      {
        title: "Direct Access",
        description:
          "Direct communication with your lead counsel without junior intermediaries.",
      },
      {
        title: "Strategic Focus",
        description:
          "Practical legal pathways designed to achieve your specific objectives.",
      },
    ],
    // Creed quote highlighted in credentials box
    creedQuote:
      "Effective legal counsel goes beyond responding to challenges—it requires anticipating potential risks, safeguarding client interests, protecting valuable assets, and providing clear, strategic guidance. Every legal decision should be informed by careful analysis, proactive planning, and a commitment to achieving the best possible outcome.",
    creedCite: "Practice Principle",
    // Action buttons at the bottom of the About section
    primaryCtaText: "Inquire About Representation",
    primaryCtaHref: "#contact",
    secondaryCtaText: "Review Legal Services",
    secondaryCtaHref: "#practice-areas",
  },

  // ----------------------------------------------------------------------------
  // 6. QUALIFICATIONS & BAR ADMISSIONS
  // ----------------------------------------------------------------------------
  qualifications: {
    cardTitle: "Qualifications & Bar Admissions",
    cardSubtitle:
      "Verified educational pedigree and licensed jurisdictional authorities.",
    // Repeatable list of academic degrees and licenses. Add, edit, or remove items easily:
    items: [
      {
        title: "LL.B.",
        institution: "National University, Bangladesh",
        status: "Graduated with Honors",
      },
      {
        title: "Bar Admission & License",
        institution: "Sylhet Bar Association, Bangladesh",
        status: "Active & in Good Standing",
      },
      {
        title: "Specialized Legal Accreditation",
        institution: "Sylhet Bar Association, Bangladesh",
        status: "Corporate & Regulatory Certification",
      },
    ],
  },

  // ----------------------------------------------------------------------------
  // 7. LEGAL PRACTICE AREAS
  // ----------------------------------------------------------------------------
  practiceAreas: {
    eyebrow: "Core Competencies",
    heading: "Specialized Legal Practice Areas",
    narrative:
      "Navigating complex statutory environments and commercial relationships demands targeted legal acumen. Our practice focuses on core areas where proactive counsel yields decisive client advantages.",
    // Three reassurance bullet points on the left column
    guarantees: [
      "Proactive risk assessment before disputes arise",
      "Direct communication and bespoke legal drafting",
      "Rigorous representation in high-stakes negotiations",
    ],
    ctaText: "Inquire for Your Case",
    ctaHref: "#contact",
    // 2x2 Grid of practice areas. You can add, edit, or remove items below:
    // Supported icons: 'Briefcase', 'Shield', 'FileText', 'Scale'
    items: [
      {
        id: "corporate",
        title: "Corporate & Commercial Law",
        description:
          "Comprehensive counsel for business formation, corporate governance, shareholder agreements, mergers, and day-to-day commercial contracts.",
        icon: "Briefcase",
      },
      {
        id: "ip-tech",
        title: "Intellectual Property & Technology",
        description:
          "Protecting your proprietary assets through licensing structures, trademark advisory, data privacy compliance, and digital commercialization rights.",
        icon: "Shield",
      },
      {
        id: "regulatory",
        title: "Regulatory Compliance & Environment",
        description:
          "Navigating complex administrative compliance, statutory requirements, environmental impact regulations, and government inquiry defense.",
        icon: "FileText",
      },
      {
        id: "dispute-resolution",
        title: "Dispute Resolution & Litigation",
        description:
          "Strategic negotiation, commercial arbitration, and zealous courtroom advocacy to resolve contentious disputes efficiently while guarding your interests.",
        icon: "Scale",
      },
    ],
  },

  // ----------------------------------------------------------------------------
  // 8. ACHIEVEMENTS & STATISTICS
  // ----------------------------------------------------------------------------
  achievements: {
    eyebrow: "Demonstrated Track Record",
    heading: "Some Counts That Matter",
    subheading:
      "Our dedication and proven track record depicted in verified milestones",
    // 3 Statistical counters. Update values when real numbers are verified:
    metrics: [
      {
        value: "5+",
        fallbackNumber: "5+",
        label: "Years in Practice",
        detail:
          "Continuous professional advocacy and legal advisory experience",
      },
      {
        value: "150+",
        fallbackNumber: "150+",
        label: "Matters Handled",
        detail:
          "Business legalities, corporate transactions, and legal advisory matters",
      },
      {
        value: "65+",
        fallbackNumber: "65+",
        label: "Clients Advised",
        detail:
          "Entrepreneurs, private entities, and individual clients represented",
      },
    ],
    disclaimer:
      "* All professional statistics and case numbers are subject to official verification and bar association compliance.",
  },

  // ----------------------------------------------------------------------------
  // 9. CLIENT TESTIMONIALS
  // ----------------------------------------------------------------------------
  testimonials: {
    eyebrow: "Client Endorsements",
    heading: "Clients Testimonial",
    subheading:
      "Reflections from clients on our responsiveness, legal rigor, and counsel",
    // Repeatable client testimonials list:
    items: [
      {
        id: 1,
        title: "Dependable, Responsive, Professional Partner",
        quote:
          "[CONTENT REQUIRED: Verified client feedback regarding legal advisory, contract drafting, or transaction counsel. Client to supply official testimonial text.]",
        clientName: "Rofiqul Islam",
        clientRole: "Businessman & Entrepreneur",
        caseType: "Corporate Advisory",
      },
      {
        id: 2,
        title: "Incredible Experience & Clear Guidance",
        quote:
          "[CONTENT REQUIRED: Verified client feedback describing responsiveness, clear legal direction, and successful resolution of legal affairs. Client to supply official testimonial text.]",
        clientName: "Kalam Hossain",
        clientRole: "UP Member & Community Leader",
        caseType: "Commercial Contracts",
      },
    ],
    complianceNotice:
      "Client testimonials reflect past results. Prior outcomes do not guarantee a similar result in future legal matters.",
  },

  // ----------------------------------------------------------------------------
  // 10. CONTACT & DIRECT INTAKE
  // ----------------------------------------------------------------------------
  contact: {
    eyebrow: "Direct Legal Intake",
    heading: "Complex Questions?",
    subheading:
      "Request a personalized legal assessment for your situation. We will analyze your options and follow up within 24 hours. Initial confidential consultation available for new clients.",
    phoneButtonText: "Call Now",
    emailButtonText: "Send Confidential Email",
    // Labels
    phoneLabel: "Direct Telephone",
    emailLabel: "Confidential Email",
    addressLabel: "Office Location",
    hoursLabel: "Operating Hours",
    // Real contact details (leave 'phoneRaw' and 'emailRaw' empty if not yet available)
    phone: "+880 1737206111",
    phoneRaw: "", // Format: "+1234567890" for direct telephone dial
    email: "advjahedahmed@gmail.com",
    emailRaw: "", // Format: "attorney@example.com" for direct mail client trigger
    address:
      "Sylhet Judge Court, Sylhet, Bangladesh",
    officeHours: "Sunday – Tuesday: 9:00 AM – 6:00 PM (By Appointment)",
    responseGuarantee:
      "Confidential inquiry review and response within 24 business hours.",
    guaranteeTag: "Fast Confidential Intake",
    // Image of the consultation environment
    image: consultationPhotoImage,
    imageAlt: "Client Consultation Setting",
  },

  // ----------------------------------------------------------------------------
  // 11. FOOTER
  // ----------------------------------------------------------------------------
  footer: {
    brandSubtitle: "Legal Practice & Advisory",
    brandTagline:
      "Dedicated legal counsel delivering tailored, high-integrity advisory services for forward-thinking individuals and businesses.",
    quickLinksTitle: "Quick Navigation",
    practiceAreasTitle: "Legal Practice Areas",
    contactInfoTitle: "Direct Office Contact",
    disclaimer:
      "Attorney Advertising & Legal Notice: The information on this static website is provided for general informational purposes only and does not constitute formal legal advice. Viewing this website or communicating with our office via telephone, email, or internet messaging does not create an attorney-client relationship. An attorney-client relationship is strictly formed upon the mutual execution of a formal, written representation agreement.",
    copyrightNotice: `© ${new Date().getFullYear()} ADV JAHED AHMED. All rights reserved.`,
    legalLinks: [
      { name: "Privacy Policy", href: "#about" },
      { name: "Terms of Representation", href: "#contact" },
      { name: "Jurisdictional Notice", href: "#contact" },
    ],
  },

  // ----------------------------------------------------------------------------
  // 12. SOCIAL & PROFESSIONAL LINKS
  // ----------------------------------------------------------------------------
  socialLinks: [
    {
      platform: "LinkedIn",
      label: "Professional Profile",
      url: "https://linkedin.com",
    },
    {
      platform: "BarRegistry",
      label: "Official Bar Directory",
      url: "https://example.com",
    },
  ],
};
