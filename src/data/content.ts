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
  thumbnail: string;
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
    name: "Sathy",
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
      value: "37+",
      label: "Pieces of Content Delivered",
    },
    {
      value: "1,282",
      label: "Followers Gained Organically",
    },
  ],

  brands: [
    {
      name: "Taller",
      logo: "/brands/taller.png",
      description:
        "Created high-performing short-form content for Taller, a height prediction app. Managed the @blaze.taller account with talking-head and app demo formats that drove massive organic reach.",
      tags: ["App Demo", "Talking Head", "Account Management"],
      handle: "@blaze.taller",
      platform: "TikTok & Instagram",
      keyMetric: "320K views in 20 days",
    },
    {
      name: "Hyperknow",
      logo: "/brands/hyperknow.png",
      description:
        "Produced AI study app UGC content across TikTok and Instagram, focusing on productivity and education-style content that resonates with student audiences.",
      tags: ["AI Tool", "App Demo", "Education"],
      handle: "@sathyaxstudy",
      platform: "TikTok & Instagram",
    },
    {
      name: "PhraslyAI",
      logo: "/brands/phrasly.png",
      description:
        "Created app-focused UGC for PhraslyAI, an AI text humanizer tool. Delivered screen-recording demos and talking-head content showcasing the product in action.",
      tags: ["AI Tool", "Screen Recording", "App Demo"],
    },
    {
      name: "Monster Energy",
      logo: "/brands/monster.png",
      description:
        "Brand ambassador creating product review and lifestyle content. Demonstrates versatility across both app/tech and consumer product categories.",
      tags: ["Product Review", "Lifestyle", "Ambassador"],
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
      title: "Taller App — Growth Content",
      brand: "Taller",
      thumbnail: "/thumbnails/sample-1.jpg",
      result: "320K+ views",
    },
    {
      title: "Hyperknow — AI Study Tool",
      brand: "Hyperknow",
      thumbnail: "/thumbnails/sample-2.jpg",
    },
    {
      title: "PhraslyAI — Product Demo",
      brand: "PhraslyAI",
      thumbnail: "/thumbnails/sample-3.jpg",
    },
    {
      title: "Monster — Product Review",
      brand: "Monster Energy",
      thumbnail: "/thumbnails/sample-4.jpg",
    },
    {
      title: "App Walkthrough Demo",
      brand: "Taller",
      thumbnail: "/thumbnails/sample-5.jpg",
    },
    {
      title: "Screen Recording + Overlay",
      brand: "PhraslyAI",
      thumbnail: "/thumbnails/sample-6.jpg",
    },
  ],

  contact: {
    email: "contact@sathy.com",
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
    ],
    ratesNote: "Rates available upon request",
  },
};

export default content;
