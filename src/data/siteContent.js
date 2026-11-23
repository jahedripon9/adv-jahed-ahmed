/**
 * ==============================================================================
 * CENTRALIZED BILINGUAL WEBSITE CONTENT CONFIGURATION
 * ==============================================================================
 *
 * This single file controls all text, links, and imagery displayed on the website.
 * It provides both English ('en') and Bengali ('bn') content dictionaries with
 * identical structure and keys.
 *
 * Structure:
 * - siteContent.en : English content dictionary
 * - siteContent.bn : Bengali content dictionary
 * - siteContent.*  : Direct English fallback properties for backward compatibility
 * ==============================================================================
 */

// --- IMAGE IMPORTS ---
import lawyerPortraitImage from "../assets/images/lawyer/lawyer-portrait.png";
import consultationPhotoImage from "../assets/images/general/consultation-call.png";

// ==============================================================================
// 1. ENGLISH CONTENT DICTIONARY ('en')
// ==============================================================================
const englishContent = {
  // ----------------------------------------------------------------------------
  // SITE-WIDE GENERAL INFORMATION
  // ----------------------------------------------------------------------------
  siteInfo: {
    metaTitle: "Lawyer & Legal Consultant | Professional Legal Practice",
    metaDescription:
      "Strategic legal counsel, corporate advisory, and dedicated legal representation. Confidential consultations tailored to business and individual client needs.",
    canonicalUrl: "https://example.com",
    themeColor: "#0C2B4E",
    practiceCategoryLabel: "Legal Practice & Advisory",
    skipLinkText: "Skip to main content",
  },

  // ----------------------------------------------------------------------------
  // NAVIGATION BAR
  // ----------------------------------------------------------------------------
  navigation: {
    links: [
      { name: "About", href: "#about" },
      { name: "Practice Areas", href: "#practice-areas" },
      { name: "Track Record", href: "#achievements" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
    ctaText: "Consultation",
    ctaHref: "#contact",
    mobileCtaText: "Request Consultation",
    mobileCtaNote: "Direct, confidential legal advisory",
  },

  // ----------------------------------------------------------------------------
  // LAWYER IDENTITY & PROFILE
  // ----------------------------------------------------------------------------
  lawyer: {
    name: "ADV JAHED AHMED",
    title: "Legal Consultant & Attorney",
    firmName: "Sylhet Judge Court",
    badgeText: "Admitted to the Bar • Confidential Consultations",
    tagline: "Strategic Legal Counsel & Rigorous Advocacy",
  },

  // ----------------------------------------------------------------------------
  // HERO SECTION
  // ----------------------------------------------------------------------------
  hero: {
    badgePrefix: "Practice",
    headline: "Your Strategic Partner in Legal Solutions",
    subtitle:
      "Providing clear, principled, and results-driven legal counsel for business owners, corporate leaders, and individuals navigating critical legal challenges.",
    primaryCtaText: "Schedule Consultation",
    primaryCtaHref: "#contact",
    secondaryCtaText: "Explore Practice Areas",
    secondaryCtaHref: "#practice-areas",
    trustTitle: "Verified Credentials & Standards",
    trustBadges: [
      { label: "Bar Certified", icon: "ShieldCheck" },
      { label: "Direct Counsel", icon: "Scale" },
      { label: "Strict Confidentiality", icon: "Award" },
    ],
    image: lawyerPortraitImage,
    imageAlt: "ADV JAHED AHMED - Professional Legal Advocate",
    cardTag: "Verified Advocate",
  },

  // ----------------------------------------------------------------------------
  // ABOUT LAWYER & PHILOSOPHY
  // ----------------------------------------------------------------------------
  about: {
    eyebrow: "Professional Overview",
    heading: "About the Practice & Legal Philosophy",
    intro:
      "Dedicated to providing thoughtful legal guidance and reliable representation, I believe every client deserves to be heard, respected, and supported. My approach is built on professionalism, integrity, and a clear understanding of each client's unique legal needs. I am committed to maintaining strict confidentiality, upholding ethical standards, and pursuing practical legal solutions with diligence and dedication. My goal is to protect my clients' interests while building trust through transparent communication and responsible legal advocacy.",
    paragraphs: [
      "Every client engagement is guided by thorough preparation, a deep understanding of applicable laws and regulations, and an unwavering commitment to confidentiality. From negotiating complex agreements to managing legal risks, every matter receives careful attention, strategic insight, and a solution-oriented approach.",
      "The practice is built around personalized service and direct communication. Without the unnecessary layers of a large firm, clients benefit from a more focused approach, with clear guidance and dedicated attention throughout every stage of their legal matter.",
    ],
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
    creedQuote:
      "Effective legal counsel goes beyond responding to challenges—it requires anticipating potential risks, safeguarding client interests, protecting valuable assets, and providing clear, strategic guidance. Every legal decision should be informed by careful analysis, proactive planning, and a commitment to achieving the best possible outcome.",
    creedCite: "Practice Principle",
    primaryCtaText: "Inquire About Representation",
    primaryCtaHref: "#contact",
    secondaryCtaText: "Review Legal Services",
    secondaryCtaHref: "#practice-areas",
  },

  // ----------------------------------------------------------------------------
  // QUALIFICATIONS & BAR ADMISSIONS
  // ----------------------------------------------------------------------------
  qualifications: {
    cardTitle: "Qualifications & Bar Admissions",
    cardSubtitle:
      "Verified educational pedigree and licensed jurisdictional authorities.",
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
  // LEGAL PRACTICE AREAS
  // ----------------------------------------------------------------------------
  practiceAreas: {
    eyebrow: "Core Competencies",
    heading: "Specialized Legal Practice Areas",
    narrative:
      "Navigating complex statutory environments and commercial relationships demands targeted legal acumen. Our practice focuses on core areas where proactive counsel yields decisive client advantages.",
    guarantees: [
      "Proactive risk assessment before disputes arise",
      "Direct communication and bespoke legal drafting",
      "Rigorous representation in high-stakes negotiations",
    ],
    ctaText: "Inquire for Your Case",
    ctaHref: "#contact",
    itemInquireText: "Inquire regarding this area",
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
  // ACHIEVEMENTS & STATISTICS
  // ----------------------------------------------------------------------------
  achievements: {
    eyebrow: "Demonstrated Track Record",
    heading: "Some Counts That Matter",
    subheading:
      "Our dedication and proven track record depicted in verified milestones",
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
  // CLIENT TESTIMONIALS
  // ----------------------------------------------------------------------------
  testimonials: {
    eyebrow: "Client Endorsements",
    heading: "Clients Testimonial",
    subheading:
      "Reflections from clients on our responsiveness, legal rigor, and counsel",
    items: [
      {
        id: 1,
        title: "Dependable, Responsive, Professional Partner",
        quote:
          "I appreciated the consistent communication, professional approach, and practical legal guidance throughout our engagement. The advice was clear, timely, and focused on our business needs, making complex legal matters easier to understand and manage.",
        clientName: "Rofiqul Islam",
        clientRole: "Businessman & Entrepreneur",
        caseType: "Corporate Advisory",
      },
      {
        id: 2,
        title: "Incredible Experience & Clear Guidance",
        quote:
          "The legal guidance was professional, clear, and responsive throughout the process. I appreciated the careful attention to my concerns, transparent communication, and practical advice at every stage.",
        clientName: "Kalam Hossain",
        clientRole: "UP Member & Community Leader",
        caseType: "Commercial Contracts",
      },
    ],
    complianceNotice:
      "Client testimonials reflect past results. Prior outcomes do not guarantee a similar result in future legal matters.",
  },

  // ----------------------------------------------------------------------------
  // CONTACT & DIRECT INTAKE
  // ----------------------------------------------------------------------------
  contact: {
    eyebrow: "Direct Legal Intake",
    heading: "Complex Questions?",
    subheading:
      "Request a personalized legal assessment for your situation. We will analyze your options and follow up within 24 hours. Initial confidential consultation available for new clients.",
    phoneButtonText: "Call Now",
    emailButtonText: "Send Confidential Email",
    phoneLabel: "Direct Telephone",
    emailLabel: "Confidential Email",
    addressLabel: "Office Location",
    hoursLabel: "Operating Hours",
    phone: "+880 1737206111",
    phoneRaw: "",
    email: "advjahedahmed@gmail.com",
    emailRaw: "",
    address: "Sylhet Judge Court, Sylhet, Bangladesh",
    officeHours: "Sunday – Tuesday: 9:00 AM – 6:00 PM (By Appointment)",
    responseGuarantee:
      "Confidential inquiry review and response within 24 business hours.",
    guaranteeTag: "Fast Confidential Intake",
    image: consultationPhotoImage,
    imageAlt: "Client Consultation Setting",
  },

  // ----------------------------------------------------------------------------
  // FOOTER
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
  // SOCIAL & PROFESSIONAL LINKS
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

// ==============================================================================
// 2. 
// ==============================================================================
// BENGALI CONTENT DICTIONARY ('bn')
// ==============================================================================

const bengaliContent = {
  // ----------------------------------------------------------------------------
  // SITE-WIDE GENERAL INFORMATION
  // ----------------------------------------------------------------------------
  siteInfo: {
    metaTitle: "এডভোকেট জাহেদ আহমদ | আইনজীবী ও আইনি পরামর্শক",
    metaDescription:
      "ব্যক্তি ও ব্যবসায়িক প্রতিষ্ঠানের জন্য বিশ্বস্ত আইনি পরামর্শ, পেশাদার আইনি সহায়তা এবং দায়িত্বশীল প্রতিনিধিত্ব। সততা, গোপনীয়তা ও আন্তরিকতার সঙ্গে আপনার পাশে।",
    canonicalUrl: "https://example.com",
    themeColor: "#0C2B4E",
    practiceCategoryLabel: "আইনি সেবা ও পরামর্শ",
    skipLinkText: "মূল বিষয়বস্তুতে যান",
  },

  // ----------------------------------------------------------------------------
  // NAVIGATION BAR
  // ----------------------------------------------------------------------------
  navigation: {
    links: [
      { name: "আমার পরিচয়", href: "#about" },
      { name: "আইনি সেবাসমূহ", href: "#practice-areas" },
      { name: "অভিজ্ঞতা ও অর্জন", href: "#achievements" },
      { name: "সেবাগ্রহণকারীদের মতামত", href: "#testimonials" },
      { name: "যোগাযোগ", href: "#contact" },
    ],
    ctaText: "পরামর্শ নিন",
    ctaHref: "#contact",
    mobileCtaText: "পরামর্শের জন্য যোগাযোগ করুন",
    mobileCtaNote: "সরাসরি ও সম্পূর্ণ গোপনীয় আইনি পরামর্শ",
  },

  // ----------------------------------------------------------------------------
  // LAWYER IDENTITY & PROFILE
  // ----------------------------------------------------------------------------
  lawyer: {
    name: "এডভোকেট জাহেদ আহমদ",
    title: "আইনজীবী ও আইনি পরামর্শক",
    firmName: "সিলেট জেলা ও দায়রা জজ আদালত",
    badgeText: "বার কাউন্সিল সনদপ্রাপ্ত • সেবাগ্রহণকারী তথ্যের পূর্ণ গোপনীয়তা",
    tagline: "বিশ্বস্ত আইনি পরামর্শ, দায়িত্বশীল প্রতিনিধিত্ব",
  },

  // ----------------------------------------------------------------------------
  // HERO SECTION
  // ----------------------------------------------------------------------------
  hero: {
    badgePrefix: "আইনি সেবায় আপনার বিশ্বস্ত সহযোগী",
    headline: "আইনি জটিলতায় পাশে আছি, সঠিক সমাধানের পথে",
    subtitle:
      "ব্যক্তিগত, ব্যবসায়িক ও কর্পোরেট নানা আইনি বিষয়ে প্রয়োজন আপনার সঠিক দিকনির্দেশনা। আপনার সমস্যা মনোযোগ দিয়ে শুনে, আইন ও বাস্তবতার আলোকে সহজবোধ্য পরামর্শ এবং দায়িত্বশীল আইনি সহায়তা প্রদানই আমাদের অঙ্গীকার।",
    primaryCtaText: "পরামর্শের জন্য যোগাযোগ করুন",
    primaryCtaHref: "#contact",
    secondaryCtaText: "আমার সেবাসমূহ দেখুন",
    secondaryCtaHref: "#practice-areas",
    trustTitle: "পেশাদারিত্ব ও আস্থার প্রতিশ্রুতি",
    trustBadges: [
      { label: "বার কাউন্সিল সনদপ্রাপ্ত", icon: "ShieldCheck" },
      { label: "সরাসরি আইনি পরামর্শ", icon: "Scale" },
      { label: "সেবাগ্রহণকারীদের তথ্যের গোপনীয়তা", icon: "Award" },
    ],
    image: lawyerPortraitImage,
    imageAlt: "এডভোকেট জাহেদ আহমদ — আইনজীবী ও আইনি পরামর্শক",
    cardTag: "সনদপ্রাপ্ত আইনজীবী",
  },

  // ----------------------------------------------------------------------------
  // ABOUT LAWYER & PHILOSOPHY
  // ----------------------------------------------------------------------------
  about: {
    eyebrow: "আমার সম্পর্কে",
    heading: "আইন পেশায় সততা, দায়িত্ববোধ ও অঙ্গীকার",
    intro:
      "আমি বিশ্বাস করি, প্রতিটি মানুষের আইনি সমস্যা মনোযোগ দিয়ে শোনা, তাঁর অবস্থানকে সম্মান করা এবং যথাযথ সহযোগিতা প্রদান করা একজন আইনজীবীর গুরুত্বপূর্ণ দায়িত্ব। তাই প্রতিটি সেবাগ্রহণকারী প্রয়োজন, পরিস্থিতি ও প্রত্যাশাকে গুরুত্ব দিয়ে আমি আইনি সেবা প্রদানের চেষ্টা করি। সততা, পেশাদারিত্ব, আন্তরিকতা ও গোপনীয়তা রক্ষা আমার কাজের মূল ভিত্তি। আইনের সঠিক ব্যাখ্যা ও বাস্তবসম্মত পরামর্শের মাধ্যমে সেবাগ্রহণকারীদের স্বার্থ রক্ষা এবং তাঁর আস্থা অর্জন করাই আমার প্রধান লক্ষ্য।",
    paragraphs: [
      "প্রতিটি আইনি বিষয়ে প্রয়োজনীয় তথ্য ও নথিপত্র সতর্কতার সঙ্গে পর্যালোচনা করা হয়। সংশ্লিষ্ট আইন ও বিধিবিধান বিশ্লেষণ করে সম্ভাব্য ঝুঁকি চিহ্নিত করা এবং যথাযথ আইনি পদক্ষেপ গ্রহণে পরামর্শ দেওয়া হয়। চুক্তিপত্র তৈরি থেকে শুরু করে বিভিন্ন আইনি জটিলতা মোকাবিলা পর্যন্ত প্রতিটি ক্ষেত্রে দায়িত্বশীলতা ও যত্নের সঙ্গে কাজ করার চেষ্টা করি।",
      "আমি সেবাগ্রহণকারী সঙ্গে সরাসরি যোগাযোগ ও ব্যক্তিগতভাবে পরামর্শ প্রদানে গুরুত্ব দিই। যেন প্রত্যেকেই তাঁদের আইনি বিষয়ে প্রয়োজনীয় কথা সরাসরি বলতে পারেন, নিজের অবস্থান বুঝতে পারেন এবং প্রতিটি পর্যায়ে প্রয়োজনীয় দিকনির্দেশনা পান। আমার কাছে প্রতিটি সেবাগ্রহণকারী গুরুত্বপূর্ণ এবং প্রতিটি আইনি বিষয়ই সমান মনোযোগের দাবি রাখে।",
    ],
    pillars: [
      {
        title: "সততা ও নৈতিকতা",
        description:
          "আইন পেশার নীতিমালা মেনে সততা, নিষ্ঠা ও সর্বোচ্চ গোপনীয়তার সঙ্গে দায়িত্ব পালন।",
      },
      {
        title: "সরাসরি যোগাযোগ",
        description:
          "মধ্যস্থতাকারী ছাড়াই আইনজীবীর সঙ্গে সরাসরি কথা বলা এবং প্রয়োজনীয় পরামর্শ নেওয়ার সুযোগ।",
      },
      {
        title: "সঠিক আইনি দিকনির্দেশনা",
        description:
          "আপনার পরিস্থিতি ও প্রয়োজন বিবেচনা করে বাস্তবসম্মত এবং কার্যকর আইনি পরামর্শ প্রদান।",
      },
    ],
    creedQuote:
      "একজন দায়িত্বশীল আইনজীবীর কাজ শুধু আইনি সমস্যার সমাধান খোঁজা নয়; বরং সম্ভাব্য ঝুঁকি সম্পর্কে আগে থেকেই সচেতন করা, সেবাগ্রহণকারীর অধিকার ও স্বার্থ রক্ষা করা এবং সঠিক সিদ্ধান্ত নিতে পাশে থাকা। কারণ একটি সঠিক আইনি সিদ্ধান্তের পেছনে থাকে যথাযথ বিশ্লেষণ, আন্তরিক প্রচেষ্টা ও দায়িত্বশীল দিকনির্দেশনা।",
    creedCite: "আমার পেশাগত অঙ্গীকার",
    primaryCtaText: "আইনি সহায়তার জন্য যোগাযোগ করুন",
    primaryCtaHref: "#contact",
    secondaryCtaText: "আইনি সেবাসমূহ দেখুন",
    secondaryCtaHref: "#practice-areas",
  },

  // ----------------------------------------------------------------------------
  // QUALIFICATIONS & BAR ADMISSIONS
  // ----------------------------------------------------------------------------
  qualifications: {
    cardTitle: "শিক্ষাগত যোগ্যতা ও পেশাগত স্বীকৃতি",
    cardSubtitle:
      "শিক্ষাগত অর্জন, পেশাগত সনদ এবং আইন পেশায় অন্তর্ভুক্তির বিবরণ।",
    items: [
      {
        title: "এলএল.বি.",
        institution: "জাতীয় বিশ্ববিদ্যালয়, বাংলাদেশ",
        status: "সম্মানসহ উত্তীর্ণ",
      },
      {
        title: "আইনজীবী হিসেবে তালিকাভুক্তি",
        institution: "বাংলাদেশ বার কাউন্সিল",
        status: "সনদপ্রাপ্ত",
      },
      {
        title: "পেশাগত সদস্যপদ",
        institution: "সিলেট জেলা আইনজীবী সমিতি, বাংলাদেশ",
        status: "সদস্য",
      },
    ],
  },

  // ----------------------------------------------------------------------------
  // LEGAL PRACTICE AREAS
  // ----------------------------------------------------------------------------
  practiceAreas: {
    eyebrow: "আমার সেবার ক্ষেত্র",
    heading: "আপনার প্রয়োজনেই আমাদের আইনি সেবা",
    narrative:
      "ব্যক্তিগত জীবন থেকে শুরু করে ব্যবসায়িক কার্যক্রম—বিভিন্ন ক্ষেত্রে আইনি জটিলতা তৈরি হতে পারে। এসব বিষয়ে সঠিক সময়ে সঠিক পরামর্শ পাওয়া অত্যন্ত গুরুত্বপূর্ণ। আপনার প্রয়োজন ও পরিস্থিতি বিবেচনা করে প্রাসঙ্গিক আইনি বিষয়ে পরামর্শ, প্রয়োজনীয় সহায়তা এবং দায়িত্বশীল প্রতিনিধিত্ব প্রদানে আমি সচেষ্ট।",
    guarantees: [
      "সম্ভাব্য আইনি ঝুঁকি সম্পর্কে আগাম পরামর্শ",
      "সরাসরি আলোচনা ও পেশাদারভাবে আইনি নথিপত্র প্রস্তুত",
      "প্রয়োজনে আলোচনা, সমঝোতা ও আদালতে দায়িত্বশীল প্রতিনিধিত্ব",
    ],
    ctaText: "আপনার আইনি বিষয়টি নিয়ে আলোচনা করুন",
    ctaHref: "#contact",
    itemInquireText: "এই সেবা সম্পর্কে বিস্তারিত জানুন",
    items: [
      {
        id: "corporate",
        title: "কোম্পানি ও ব্যবসায়িক আইন",
        description:
          "কোম্পানি গঠন, ব্যবসায়িক চুক্তি, অংশীদারত্ব, শেয়ারহোল্ডারদের মধ্যে চুক্তি, ব্যবসায়িক পরিচালনা ও অধিগ্রহণসংক্রান্ত আইনি পরামর্শ ও সহায়তা।",
        icon: "Briefcase",
      },
      {
        id: "ip-tech",
        title: "মেধাস্বত্ব ও প্রযুক্তিবিষয়ক আইন",
        description:
          "ট্রেডমার্ক নিবন্ধন, মেধাস্বত্ব সংরক্ষণ, প্রযুক্তি ব্যবহারের চুক্তি, তথ্যের গোপনীয়তা এবং ডিজিটাল ব্যবসার স্বত্ব সুরক্ষায় প্রয়োজনীয় আইনি পরামর্শ।",
        icon: "Shield",
      },
      {
        id: "regulatory",
        title: "প্রশাসনিক বিধিবিধান ও পরিবেশ আইন",
        description:
          "প্রশাসনিক নিয়মকানুন মেনে চলা, প্রয়োজনীয় অনুমোদন ও ছাড়পত্র গ্রহণ, পরিবেশগত বিধিবিধান এবং সরকারি নোটিশ বা তদন্তসংক্রান্ত আইনি সহায়তা।",
        icon: "FileText",
      },
      {
        id: "dispute-resolution",
        title: "বিরোধ নিষ্পত্তি ও মামলা পরিচালনা",
        description:
          "ব্যক্তিগত ও ব্যবসায়িক বিরোধের ক্ষেত্রে আলোচনা, আপস-মীমাংসা, সালিশ এবং আদালতে মামলা পরিচালনার মাধ্যমে আইনসম্মত সমাধানে প্রয়োজনীয় সহায়তা।",
        icon: "Scale",
      },
    ],
  },

  // ----------------------------------------------------------------------------
  // ACHIEVEMENTS & STATISTICS
  // ----------------------------------------------------------------------------
  achievements: {
    eyebrow: "অভিজ্ঞতা ও অর্জন",
    heading: "অভিজ্ঞতা, নিষ্ঠা ও আস্থার প্রতিফলন",
    subheading:
      "প্রতিটি আইনি বিষয়ে দায়িত্বশীল ভূমিকা এবং সেবাগ্রহণকারীর প্রতি আন্তরিকতার প্রতিচ্ছবি।",
    metrics: [
      {
        value: "৫+",
        fallbackNumber: "৫+",
        label: "বছরের পেশাগত অভিজ্ঞতা",
        detail:
          "আইনি পরামর্শ, পেশাগত দায়িত্ব পালন ও সেবাগ্রহণকারীদের প্রতিনিধিত্বে অর্জিত অভিজ্ঞতা।",
      },
      {
        value: "১৫০+",
        fallbackNumber: "১৫০+",
        label: "আইনি বিষয়ে কাজের অভিজ্ঞতা",
        detail:
          "ব্যবসায়িক কার্যক্রম, চুক্তিপত্র এবং বিভিন্ন আইনি বিষয়ে পরামর্শ ও সহায়তা।",
      },
      {
        value: "৬৫+",
        fallbackNumber: "৬৫+",
        label: "পরামর্শপ্রাপ্ত সেবাগ্রহণকারী",
        detail:
          "ব্যক্তি, উদ্যোক্তা ও ব্যবসায়িক প্রতিষ্ঠানের আইনি বিষয়ে পরামর্শ প্রদান।",
      },
    ],
    disclaimer:
      "* উল্লেখিত অভিজ্ঞতা ও পরিসংখ্যান সংশ্লিষ্ট নথিপত্র ও পেশাগত তথ্যের ভিত্তিতে যাচাইযোগ্য হওয়া উচিত।",
  },

  // ----------------------------------------------------------------------------
  // CLIENT TESTIMONIALS
  // ----------------------------------------------------------------------------
  testimonials: {
    eyebrow: "সেবাগ্রহণকারীদের অভিজ্ঞতা",
    heading: "যাঁদের আস্থায় আমাদের পথচলা",
    subheading:
      "সেবা গ্রহণকারীদের অভিজ্ঞতা, তাঁদের সন্তুষ্টি এবং আমাদের প্রতি আস্থার কিছু কথা।",
    items: [
      {
        id: 1,
        title: "বিশ্বস্ত, আন্তরিক ও পেশাদার সহযোগিতা",
        quote:
          "পুরো কাজের সময় নিয়মিত যোগাযোগ, আন্তরিক সহযোগিতা এবং বাস্তবসম্মত আইনি পরামর্শ পেয়ে আমি সন্তুষ্ট। প্রতিটি বিষয় সহজভাবে বুঝিয়ে বলা হয়েছে এবং প্রয়োজন অনুযায়ী সময়মতো দিকনির্দেশনা দেওয়া হয়েছে। বিশেষ করে জটিল আইনি বিষয়গুলো সহজে বুঝতে ও প্রয়োজনীয় সিদ্ধান্ত নিতে এই সহযোগিতা অনেক কাজে এসেছে।",
        clientName: "রফিকুল ইসলাম",
        clientRole: "ব্যবসায়ী ও উদ্যোক্তা",
        caseType: "ব্যবসায়িক আইনি পরামর্শ",
      },
      {
        id: 2,
        title: "সুন্দর ব্যবহার ও স্পষ্ট আইনি দিকনির্দেশনা",
        quote:
          "শুরু থেকে শেষ পর্যন্ত অত্যন্ত যত্ন ও পেশাদারিত্বের সঙ্গে আমার বিষয়টি দেখেছেন। প্রতিটি প্রশ্নের উত্তর সহজভাবে বুঝিয়ে দিয়েছেন এবং প্রয়োজনীয় পরামর্শ দিয়েছেন। তাঁর আন্তরিক ব্যবহার, স্বচ্ছ যোগাযোগ ও দায়িত্বশীল সহযোগিতায় আমি সত্যিই সন্তুষ্ট।",
        clientName: "কালাম হোসেন",
        clientRole: "ইউপি সদস্য ও স্থানীয় জনপ্রতিনিধি",
        caseType: "ব্যবসায়িক চুক্তিসংক্রান্ত পরামর্শ",
      },
    ],
    complianceNotice:
      "সেবাগ্রহণকারীদের মতামত তাঁদের নিজস্ব অভিজ্ঞতার প্রতিফলন। অতীতের কোনো আইনি ফলাফল ভবিষ্যতের ফলাফলের নিশ্চয়তা দেয় না।",
  },

  // ----------------------------------------------------------------------------
  // CONTACT & DIRECT INTAKE
  // ----------------------------------------------------------------------------
  contact: {
    eyebrow: "আপনার পাশে আইনি সহায়তায়",
    heading: "আইনি বিষয়ে পরামর্শ প্রয়োজন?",
    subheading:
      "আপনার আইনি সমস্যা বা প্রয়োজনের কথা আমাদের জানান। আপনার দেওয়া তথ্য ও পরিস্থিতি পর্যালোচনা করে প্রয়োজনীয় দিকনির্দেশনা দেওয়ার চেষ্টা করা হবে। যোগাযোগের পর সাধারণত ২৪ কর্মঘণ্টার মধ্যে উত্তর দেওয়ার লক্ষ্য রাখা হয়। আপনার ব্যক্তিগত তথ্য ও আলোচনার গোপনীয়তা রক্ষায় সর্বোচ্চ গুরুত্ব দেওয়া হয়।",
    phoneButtonText: "ফোনে কথা বলুন",
    emailButtonText: "ইমেইল পাঠান",
    phoneLabel: "মোবাইল নম্বর",
    emailLabel: "ইমেইল ঠিকানা",
    addressLabel: "চেম্বারের ঠিকানা",
    hoursLabel: "সাক্ষাতের সময়",
    phone: "+880 1737206111",
    phoneRaw: "",
    email: "advjahedahmed@gmail.com",
    emailRaw: "",
    address: "সিলেট জেলা ও দায়রা জজ আদালত, সিলেট, বাংলাদেশ",
    officeHours: "রবিবার – মঙ্গলবার: সকাল ৯টা থেকে সন্ধ্যা ৬টা (পূর্বনির্ধারিত সাক্ষাতের ভিত্তিতে)।",
    responseGuarantee:
      "আপনার বার্তা গুরুত্বের সঙ্গে পর্যালোচনা করে ২৪ কর্মঘণ্টার মধ্যে উত্তর দেওয়ার চেষ্টা করা হবে।",
    guaranteeTag: "যত্নসহকারে আইনি পরামর্শ",
    image: consultationPhotoImage,
    imageAlt: "আইনজীবী ও সেবাগ্রহণকারীদের মধ্যে আইনি পরামর্শের পরিবেশ",
  },

  // ----------------------------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------------------------
  footer: {
    brandSubtitle: "আইনি সেবা ও পরামর্শ",
    brandTagline:
      "ব্যক্তি ও ব্যবসায়িক প্রতিষ্ঠানের আইনি প্রয়োজনে বিশ্বস্ত পরামর্শ, আন্তরিক সহযোগিতা ও দায়িত্বশীল প্রতিনিধিত্ব।",
    quickLinksTitle: "গুরুত্বপূর্ণ লিংক",
    practiceAreasTitle: "আইনি সেবাসমূহ",
    contactInfoTitle: "যোগাযোগের তথ্য",
    disclaimer:
      "আইনি বিজ্ঞপ্তি: এই ওয়েবসাইটে প্রকাশিত সকল তথ্য সাধারণ অবগতির উদ্দেশ্যে প্রদান করা হয়েছে। এগুলো কোনোভাবেই আনুষ্ঠানিক আইনি পরামর্শের বিকল্প নয়। এই ওয়েবসাইট পরিদর্শন, ফোন, ইমেইল অথবা অনলাইন বার্তার মাধ্যমে যোগাযোগ করলেই আইনজীবী ও সেবাগ্রহণকারীর মধ্যে আনুষ্ঠানিক সম্পর্ক প্রতিষ্ঠিত হয় না। এ ধরনের সম্পর্ক প্রতিষ্ঠার জন্য উভয় পক্ষের সম্মতিতে প্রয়োজনীয় আনুষ্ঠানিকতা ও লিখিত চুক্তি সম্পন্ন হওয়া আবশ্যক।",
    copyrightNotice: `© ${new Date().getFullYear()} এডভোকেট জাহেদ আহমদ। সর্বস্বত্ব সংরক্ষিত।`,
    legalLinks: [
      { name: "গোপনীয়তা নীতি", href: "#about" },
      { name: "সেবাগ্রহণের শর্তাবলি", href: "#contact" },
      { name: "আইনি বিজ্ঞপ্তি", href: "#contact" },
    ],
  },

  // ----------------------------------------------------------------------------
  // SOCIAL & PROFESSIONAL LINKS
  // ----------------------------------------------------------------------------
  socialLinks: [
    {
      platform: "LinkedIn",
      label: "পেশাগত পরিচিতি",
      url: "https://linkedin.com",
    },
    {
      platform: "BarRegistry",
      label: "বার কাউন্সিলের তথ্য",
      url: "https://example.com",
    },
  ],
};


// ==============================================================================
// 3. EXPORT SITE CONTENT
// ==============================================================================
export const siteContent = {
  // Direct properties default to English for backward compatibility
  ...englishContent,
  // Language-specific dictionaries
  en: englishContent,
  bn: bengaliContent,
};

export default siteContent;
