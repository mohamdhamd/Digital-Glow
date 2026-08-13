export const en = {
  nav: {
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    process: "Process",
    contact: "Contact",
    cta: "Get a Free Consultation",
    langToggle: "EN/AR"
  },
  hero: {
    badge: "Digital Alchemy Agency",
    titleLine1: "Illuminate Your",
    titleLine2: "Digital Presence",
    subtitle: "We fuse software engineering precision with high-impact marketing to create luminous, data-driven experiences for forward-thinking brands.",
    btnPrimary: "Start Your Project",
    btnSecondary: "View Our Work",
    stats: {
      stat1: { value: "99.8%", label: "Client Satisfaction" },
      stat2: { value: "150M+", label: "Capital Generated" },
      stat3: { value: "45+", label: "Global Industry Awards" }
    }
  },
  services: {
    badge: "What We Do",
    title: "Our Digital Alchemy",
    subtitle: "Transforming complex data and creative vision into high-impact digital experiences. We bridge the gap between engineering and marketing.",
    items: [
      {
        id: "seo",
        title: "SEO",
        description: "Data-driven search engine optimization to increase visibility and drive targeted organic traffic.",
        features: [
          "Keyword Strategy",
          "Technical Audits",
          "Content Optimization"
        ],
        icon: "Search"
      },
      {
        id: "web-dev",
        title: "Web & Software Engineering",
        description: "High-performance full-stack web applications, scalable architectures, and modern cloud ecosystems.",
        features: [
          "Full-Stack Architecture",
          "Cloud & API Infrastructure",
          "Lightning Performance"
        ],
        icon: "Code2"
      },
      {
        id: "fintech",
        title: "Fintech & Secure Systems",
        description: "Next-gen transactional systems, payment gateways, and bank-grade secure integrations.",
        features: [
          "Payment Gateways",
          "Bank-Grade Security",
          "Real-Time Settlements"
        ],
        icon: "ShieldCheck"
      },
      {
        id: "uiux",
        title: "UI/UX & Brand Alchemy",
        description: "Human-centric interfaces and captivating visual identities crafted for high conversion and delight.",
        features: [
          "Design Systems",
          "Interactive Prototyping",
          "Brand Guidelines"
        ],
        icon: "Palette"
      },
      {
        id: "marketing",
        title: "Growth & Performance Marketing",
        description: "Hyper-targeted campaigns and data-backed funnel optimization to scale user acquisition.",
        features: [
          "Conversion Optimization",
          "Paid Media Strategy",
          "Multi-Channel Funnels"
        ],
        icon: "TrendingUp"
      },
      {
        id: "ai-data",
        title: "AI & Data Intelligence",
        description: "Predictive analytics, automated telemetry, and machine learning models tailored to your business.",
        features: [
          "Predictive Analytics",
          "Custom ML Models",
          "Real-Time Telemetry"
        ],
        icon: "Cpu"
      }
    ]
  },
  portfolio: {
    badge: "Selected Work",
    title: "Our Portfolio",
    subtitle: "Showcasing data-driven precision and creative brilliance across various industries.",
    filters: [
      { id: "all", label: "All" },
      { id: "web", label: "Web" },
      { id: "marketing", label: "Marketing" },
      { id: "branding", label: "Branding" }
    ],
    items: [
      {
        id: "omni-retail",
        category: "web",
        badge: "E-Commerce",
        title: "OmniRetail Platform",
        description: "A unified commerce engine built for global scale.",
        metric: "150% ROI Increase",
        image: "omni-retail",
        details: {
          client: "OmniRetail Global",
          year: "2024",
          scope: "Headless E-Commerce, Microservices, Real-Time Analytics",
          challenge: "Legacy architecture was throttling conversion rates during peak retail seasons with slow checkout flows.",
          solution: "Architected a lightning-fast headless commerce platform with sub-second page loads and AI-powered product recommendations."
        }
      },
      {
        id: "nexus-pay",
        category: "web",
        badge: "Fintech",
        title: "Nexus Pay",
        description: "Next-generation cross-border payment gateway.",
        metric: "2M+ Transactions",
        image: "nexus-pay",
        details: {
          client: "Nexus Financial",
          year: "2024",
          scope: "Cross-Border Payments, Mobile App, Real-Time FX",
          challenge: "High latency and complex compliance barriers across EMEA and APAC payment corridors.",
          solution: "Engineered a low-latency settlement pipeline with automated multi-currency hedging and biometric security."
        }
      },
      {
        id: "vitalcore",
        category: "web",
        badge: "Healthtech",
        title: "VitalCore System",
        description: "Integrated healthcare management and patient tracking.",
        metric: "40% Efficiency Gain",
        image: "vitalcore",
        details: {
          client: "VitalCore Health",
          year: "2023",
          scope: "HIPAA Compliant Cloud Dashboard, Telemetry, Patient Records",
          challenge: "Fragmented hospital data systems causing delays in critical triage workflows.",
          solution: "Unified hospital analytics into a single responsive glassmorphism portal with automated vital telemetry alerts."
        }
      },
      {
        id: "glow-campaign",
        category: "marketing",
        badge: "Marketing",
        title: "Glow Campaign",
        description: "Data-driven user acquisition and engagement strategy.",
        metric: "3x Conversion Rate",
        image: "glow-campaign",
        details: {
          client: "Glow Tech Ventures",
          year: "2024",
          scope: "Performance Marketing, Viral Growth Engine, Attribution",
          challenge: "High customer acquisition cost across saturated digital channels.",
          solution: "Deployed a multi-tiered predictive marketing engine with high-velocity creative A/B testing, tripling conversion rate."
        }
      }
    ]
  },
  process: {
    badge: "How We Work",
    title: "The Alchemy Process",
    subtitle: "From conceptual discovery to high-velocity scaling, our 4-phase framework turns ambitious ideas into digital gold.",
    steps: [
      {
        num: "01",
        title: "Discovery & Diagnostics",
        desc: "We dissect your business model, analyze user data, and pinpoint high-impact opportunities."
      },
      {
        num: "02",
        title: "Architecture & UX Design",
        desc: "Translating data insights into luminous wireframes, interactive design systems, and robust technical blueprints."
      },
      {
        num: "03",
        title: "Luminous Engineering",
        desc: "Precision full-stack development with rigorous unit testing, cloud scaling, and micro-animations."
      },
      {
        num: "04",
        title: "Launch & Growth Scaling",
        desc: "Continuous conversion rate optimization, automated analytics, and global performance marketing."
      }
    ]
  },
  contact: {
    title: "Let's Ignite Your Project",
    subtitle: "Partner with us to transform your vision into a digital masterpiece. Reach out and let the alchemy begin.",
    infoTitle: "Contact Information",
    infoSubtitle: "We are available for worldwide collaborations.",
    emailLabel: "EMAIL",
    emailValue: "hello@digitalglow.io",
    phoneLabel: "PHONE",
    phoneValue: "+971 50 123 4567",
    location: "Dubai Design District, UAE",
    form: {
      fullName: "Full Name",
      fullNamePlaceholder: "e.g. Sarah Connor",
      company: "Company (Optional)",
      companyPlaceholder: "e.g. Acme Corp",
      email: "Email Address",
      emailPlaceholder: "sarah@example.com",
      serviceNeeded: "Service Needed",
      serviceSelect: "Select a Service...",
      servicesList: [
        "SEO & Search Optimization",
        "Web & Software Engineering",
        "Fintech & Secure Systems",
        "UI/UX & Brand Design",
        "Growth & Performance Marketing",
        "AI & Data Intelligence",
        "Comprehensive Digital Transformation"
      ],
      projectDetails: "Project Details",
      projectDetailsPlaceholder: "Tell us about your timeline, goals, and vision...",
      submitBtn: "Send Message",
      successMsg: "Thank you! Your message has been ignited. Our team will reach out within 24 hours.",
      errorMsg: "Please fill in all required fields."
    }
  },
  footer: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    copyright: "© {year} DigitalGlow. All rights reserved.",
    tagline: "Bridging engineering precision with creative marketing."
  },
  modal: {
    close: "Close",
    scope: "Project Scope",
    client: "Client",
    year: "Year",
    challenge: "The Challenge",
    solution: "The Alchemy Solution",
    consultationTitle: "Schedule a Free Strategy Consultation",
    consultationSubtitle: "Speak directly with our principal architects and marketing strategists.",
    name: "Your Name",
    email: "Work Email",
    phone: "Phone Number",
    budget: "Estimated Budget",
    budgetOptions: ["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"],
    bookBtn: "Confirm Consultation",
    bookSuccess: "Consultation booked! An invite has been sent to your email."
  }
};
