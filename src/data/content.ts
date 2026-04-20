export interface Metric {
  value: string;
  label: string;
  context?: string;
}

export interface BrandProfileLink {
  label: string;
  url: string;
}

export interface Brand {
  name: string;
  logo: string;
  description: string;
  tags: string[];
  handle?: string;
  platform?: string;
  keyMetric?: string;
  /** Clickable profile links (fills card body; keep symmetrical per brand) */
  profileLinks?: BrandProfileLink[];
  /** Current or previous work. Defaults to current when omitted. */
  status?: "current" | "previous";
  /** Override label shown on the badge (e.g. "Previous Work"). */
  statusLabel?: string;
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
  /** CSS `object-position` for thumbnail crop (2:3 frame) */
  thumbnailObjectPosition?: string;
  /** CSS `object-position` for in-card video preview & playback */
  videoObjectPosition?: string;
  result?: string;
  embedLabel?: string;
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
      value: "350K+",
      label: "Views in 30 Days",
    },
    {
      value: "5M+",
      label: "Views Across All Accounts",
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
      name: "Solvely",
      logo: "/brands/solvelylogo.jpg",
      description:
        "Currently creating UGC for Solvely, an AI-powered learning and problem-solving app. Producing talking-head and app demo content across TikTok, Instagram, and YouTube to drive student acquisition and engagement.",
      tags: ["AI Tool", "App Demo", "Talking Head", "Education"],
      handle: "@lockedinwithblaze",
      platform: "TikTok, Instagram & YouTube",
      status: "current",
      profileLinks: [
        {
          label: "TikTok",
          url: "https://www.tiktok.com/@lockedinwithblaze",
        },
        {
          label: "Instagram",
          url: "https://www.instagram.com/lockedinwithblaze",
        },
        {
          label: "YouTube",
          url: "https://www.youtube.com/@lockedinwithblaze",
        },
      ],
    },
    {
      name: "Monster Energy",
      logo: "/brands/monsterenergylogo.png",
      description:
        "Official Monster Energy brand ambassador. Creating product review and lifestyle content on my personal account, demonstrating versatility across both tech and consumer product categories.",
      tags: ["Brand Ambassador", "Product Review", "Lifestyle"],
      handle: "@blazetech59",
      platform: "TikTok",
      status: "current",
      profileLinks: [
        {
          label: "TikTok",
          url: "https://www.tiktok.com/@blazetech59",
        },
      ],
    },
    {
      name: "Taller",
      logo: "/brands/tallerapplogo.png",
      description:
        "Created high-performing short-form content for Taller, a height prediction app. Built and managed the account that drove massive organic reach — the account has since transitioned to @blaze.gotall under GoTall.",
      tags: ["App Demo", "Talking Head", "Account Management"],
      keyMetric: "350K views in 30 days",
      status: "previous",
      statusLabel: "Previous Work",
      profileLinks: [
        {
          label: "TikTok",
          url: "https://www.tiktok.com/@blaze.gotall",
        },
        {
          label: "Instagram",
          url: "https://www.instagram.com/blaze.gotall",
        },
      ],
    },
    {
      name: "BlazeKey",
      logo: "/brands/blazeKey logo.png",
      description:
        "Created high-quality AI tool UGC for BlazeKey, an AI-powered keyboard app. Delivered talking-head and app demo content showcasing the product's features and driving user acquisition.",
      tags: ["AI Tool", "App Demo", "Talking Head"],
      handle: "@typewithblaze",
      platform: "TikTok",
      status: "previous",
      statusLabel: "Previous Work",
      profileLinks: [
        {
          label: "TikTok",
          url: "https://www.tiktok.com/@typewithblaze",
        },
      ],
    },
    {
      name: "Hyperknow",
      logo: "/brands/hyperknowbrandlogo.png",
      description:
        "Produced AI study app UGC content across TikTok and Instagram, focusing on productivity and education-style content that resonates with student audiences.",
      tags: ["AI Tool", "App Demo", "Education"],
      handle: "@sathyaxstudy",
      platform: "TikTok & Instagram",
      status: "previous",
      statusLabel: "Previous Work",
      profileLinks: [
        {
          label: "TikTok",
          url: "https://www.tiktok.com/@sathyaxstudy",
        },
        {
          label: "Instagram",
          url: "https://www.instagram.com/sathyaxstudy",
        },
      ],
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
      title: "Taller — Instagram reel",
      brand: "Taller",
      thumbnail: "/screenshots/taller-reel-thumb.png",
      thumbnailObjectPosition: "center 32%",
      embedUrl:
        "https://www.instagram.com/reel/DVSwrYICSgL/?igsh=NTc4MTIwNjQ2YQ==",
      result: "100K+ views (reel)",
      embedLabel: "Open on Instagram",
    },
    {
      title: "Taller — Strong content format",
      brand: "Taller",
      thumbnail: "/screenshots/taller-strong-content-format.png",
      embedUrl: "https://www.instagram.com/reel/DWNsvw1ieWW/",
      embedLabel: "Open on Instagram",
    },
    {
      title: "Hyperknow — Head-style talking tips",
      brand: "Hyperknow",
      thumbnail: "/screenshots/studystorythumbnail.png",
      thumbnailObjectPosition: "center 48%",
      embedUrl:
        "https://www.tiktok.com/@sathyaxstudy/video/7613949943425912094",
      embedLabel: "Watch on TikTok",
    },
    {
      title: "Hyperknow — Text-led app showcase",
      brand: "Hyperknow",
      thumbnail: "/screenshots/hyperknow-text-led-thumbnail.png",
      embedUrl:
        "https://www.tiktok.com/@sathyaxstudy/video/7612451675919371550",
      embedLabel: "Watch on TikTok",
    },
    {
      title: "BlazeKey — App Walkthrough",
      brand: "BlazeKey",
      thumbnail: "/screenshots/bk3thumbnail.png",
      embedUrl:
        "https://www.tiktok.com/@typewithblaze/video/7617679014169300255",
      embedLabel: "Watch on TikTok",
    },
    {
      title: "BlazeKey — Product Showcase",
      brand: "BlazeKey",
      thumbnail: "/screenshots/bk1thumbnail.png",
      embedUrl:
        "https://www.tiktok.com/@typewithblaze/video/7615443433498365215",
      embedLabel: "Watch on TikTok",
    },
    {
      title: "Monster Energy — Viral edit trend",
      brand: "Monster Energy",
      thumbnail: "/screenshots/monster-viral-edit-trend.png",
      embedUrl:
        "https://www.tiktok.com/@blazetech59/video/7620571075159543070",
      embedLabel: "Watch on TikTok",
    },
    {
      title: "Monster Energy — Text on photos (slideshow)",
      brand: "Monster Energy",
      thumbnail: "/screenshots/monster-photothumbnail.png",
      embedUrl:
        "https://www.tiktok.com/@blazetech59/photo/7620513603237498142?_r=1&_t=ZP-94wQobJjc7i&sp_source=7620600930366801439",
      embedLabel: "Watch on TikTok",
    },
  ],

  contact: {
    email: "sathyasugc@gmail.com",
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/lockedinwithblaze",
        handle: "@lockedinwithblaze",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@lockedinwithblaze",
        handle: "@lockedinwithblaze",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@lockedinwithblaze",
        handle: "@lockedinwithblaze",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@blazetech59",
        handle: "@blazetech59",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/blaze.gotall",
        handle: "@blaze.gotall",
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
