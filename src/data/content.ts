export interface Metric {
  value: string;
  label: string;
  context?: string;
}

export interface Brand {
  name: string;
  logo: string;
  description: string;
  tags: string[];
  handle?: string;
  platform?: string;
  keyMetric?: string;
  proofImage?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Sample {
  title: string;
  brand: string;
  videoSrc?: string;
  embedUrl?: string;
  thumbnail?: string;
  result?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

export interface SiteContent {
  hero: {
    name: string;
    tagline: string;
    description: string;
    ctaText: string;
  };
  metrics: Metric[];
  brands: Brand[];
  services: Service[];
  samples: Sample[];
  contact: {
    email: string;
    socials: SocialLink[];
    ratesNote: string;
  };
}

const content: SiteContent = {
  hero: {
    name: "Sathya Srinivasan",
    tagline: "UGC Creator — Apps, AI Tools & Product Reviews",
    description:
      "I create high-converting short-form video content for apps, AI tools, and consumer brands. Talking-head UGC, app demos, screen recordings, and performance-driven content that drives real results.",
    ctaText: "View My Work",
  },

  metrics: [
    {
      value: "320K+",
      label: "Views in 20 Days",
      context: "Taller App",
    },
    {
      value: "308.8K",
      label: "Views in Last 30 Days",
    },
    {
      value: "150+",
      label: "Pieces of Content Created",
    },
    {
      value: "10K+",
      label: "Followers Gained Organically",
    },
  ],

  brands: [
    {
      name: "BlazeKey",
      logo: "/brands/blazeKey logo.png",
      description:
        "Created high-quality AI tool UGC for BlazeKey, an AI-powered keyboard app. Delivered talking-head and app demo content showcasing the product's features and driving user acquisition.",
      tags: ["AI Tool", "App Demo", "Talking Head"],
    },
    {
      name: "Hyperknow",
      logo: "/brands/hyperknowbrandlogo.png",
      description:
        "Produced AI study app UGC content across TikTok and Instagram, focusing on productivity and education-style content that resonates with student audiences.",
      tags: ["AI Tool", "App Demo", "Education"],
      handle: "@sathyaxstudy",
      platform: "TikTok & Instagram",
    },
    {
      name: "Taller",
      logo: "/brands/tallerapplogo.png",
      description:
        "Created high-performing short-form content for Taller, a height prediction app. Managed the @blaze.taller account with talking-head and app demo formats that drove massive organic reach.",
      tags: ["App Demo", "Talking Head", "Account Management"],
      handle: "@blaze.taller",
      platform: "TikTok & Instagram",
      keyMetric: "320K views in 20 days",
      proofImage: "/screenshots/tallerappmetrics.jpg",
    },
    {
      name: "Monster Energy",
      logo: "/brands/monsterenergylogo.png",
      description:
        "Official Monster Energy brand ambassador. Creating product review and lifestyle content on my personal account, demonstrating versatility across both tech and consumer product categories.",
      tags: ["Brand Ambassador", "Product Review", "Lifestyle"],
      handle: "@blazetech59",
      platform: "TikTok",
    },
  ],

  services: [
    {
      title: "Talking-Head UGC",
      description:
        "Face-to-camera content with strong hooks and retention-focused delivery that feels native to TikTok and Reels.",
      icon: "Video",
    },
    {
      title: "App Walkthrough Demos",
      description:
        "Engaging app demonstrations that showcase features and drive downloads through authentic, hands-on content.",
      icon: "Smartphone",
    },
    {
      title: "Screen Recording + Overlays",
      description:
        "Polished screen captures with voiceover and visual overlays that clearly explain digital products and tools.",
      icon: "Monitor",
    },
    {
      title: "Product Reviews",
      description:
        "Honest, compelling product review content that builds trust and converts viewers into customers.",
      icon: "Star",
    },
    {
      title: "Short-Form Content",
      description:
        "TikTok, Reels, and Shorts-optimized vertical video built for scroll-stopping performance and shareability.",
      icon: "Play",
    },
    {
      title: "Hook Scripting & Strategy",
      description:
        "Performance-oriented scripting with strong opening hooks, clear CTAs, and retention-driven structure.",
      icon: "Zap",
    },
  ],

  samples: [
    {
      title: "BlazeKey — AI Tool Demo",
      brand: "BlazeKey",
      videoSrc: "/videos/BK Content 1 Final.mp4",
    },
    {
      title: "Taller — 100K View Reel",
      brand: "Taller",
      thumbnail: "/screenshots/TallerReel100K.png",
      embedUrl:
        "https://www.instagram.com/reel/DVSwrYICSgL/?igsh=NTc4MTIwNjQ2YQ==",
      result: "100K+ views",
    },
    {
      title: "Hyperknow — AI Study App",
      brand: "Hyperknow",
      videoSrc: "/videos/Hyperknow Content 12 Final.mp4",
    },
    {
      title: "BlazeKey — App Walkthrough",
      brand: "BlazeKey",
      videoSrc: "/videos/BK Content 2 Final.mp4",
    },
    {
      title: "BlazeKey — Product Showcase",
      brand: "BlazeKey",
      videoSrc: "/videos/BK Content 3 Final.mp4",
    },
  ],

  contact: {
    email: "sathyasugc@gmail.com",
    socials: [
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@blazetech59",
        handle: "@blazetech59",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/sathyaxstudy",
        handle: "@sathyaxstudy",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/blaze.taller",
        handle: "@blaze.taller",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/sath47/",
        handle: "LinkedIn",
      },
    ],
    ratesNote: "Rates available upon request",
  },
};

export default content;
