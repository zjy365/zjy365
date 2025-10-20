import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "zjy365",
  initials: "zjy",
  url: "https://zjy365.dev",
  location: "Remote",
  locationLink: "https://www.google.com/maps/place/china",
  description:
    "Full-stack developer building in public. Currently working on AI tools and developer utilities. Learning from failures and sharing the journey.",
  summary:
    "Full-stack developer experimenting with AI and developer tools. Currently building [DevToolKit](https://www.devkit.best/) and [LinkedIn Formatter](https://www.linkedinformatter.dev) as side projects. Also contributing to [Sealos](https://github.com/labring/sealos) (16.5k+ ⭐) at work. On a 90-day journey to go from $0 to $3K MRR while building in public.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Prisma",
    "Docker",
    "Kubernetes",
    "Webpack",
    "Monorepo",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "peterjingyang@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zjy365",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/zjy365",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:peterjingyang@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sealos (Environment and Computing Co., Ltd.)",
      href: "https://sealos.io",
      badges: [],
      location: "Remote",
      title: "Full-stack Developer",
      logoUrl: "/sealos.svg",
      start: "Oct 2022",
      end: "Present",
      description:
        "Core contributor to Sealos, a Kubernetes-based cloud operating system (16.5k+ GitHub stars). Designed micro-frontend architecture for cloud desktop environment and built enterprise-grade component library. Developed multiple core applications including application marketplace, database management (DBProvider), application launcher (AppLaunchpad), and scheduled tasks (CronJob).",
    },
  ],
  education: [
    {
      degree: "Bachelor's in Software Engineering (2019-2023)",
    },
  ],
  projects: [

    {
      title: "DevToolKit",
      href: "https://www.devkit.best/",
      dates: "2025 - Present",
      active: true,
      description:
        "Curated platform for discovering high-quality development tools. Helps developers find the best tools for their projects with detailed reviews and comparisons.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.devkit.best/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/devkit.png",
      video: "",
    },
    {
      title: "gh-explorer",
      href: "https://github.com/zjy365/gh-explorer",
      dates: "2025",
      active: true,
      description:
        "AI-powered GitHub trends analysis CLI tool. Provides intelligent insights into repository trends, technology adoption patterns, and open source ecosystem analysis.",
      technologies: [
        "Node.js",
        "TypeScript",
        "GitHub API",
        "AI/ML",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/zjy365/gh-explorer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gh-explorer.png",
      video: "",
    },
    {
      title: "LinkedIn Formatter",
      href: "https://www.linkedinformatter.dev",
      dates: "2025 - Present",
      active: true,
      description:
        "AI-powered LinkedIn content formatting tool that helps optimize professional presence and enhance profile visibility.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "AI/ML",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.linkedinformatter.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://www.linkedinformatter.dev/og.png",
      video: "",
    },
    {
      title: "Scholar AI",
      href: "https://getscholar.app/",
      dates: "2025 - Present",
      active: true,
      description:
        "Intelligent academic assistant platform integrating multiple AI models for research, content creation, and knowledge management. Features multi-model chat, academic literature search across 5+ databases, and collaborative document editing with real-time AI assistance.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Prisma",
        "Stripe",
        "OpenAI API",
        "Claude API",
        "Perplexity API",
      ],
      links: [
        {
          type: "Website",
          href: "https://getscholar.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://getscholar.app/images/og-paper-search.png", 
      video: "",
    },
    {
      title: "CodoflyAI",
      href: "https://www.codofly.com/",
      dates: "2024 - Present",
      active: true,
      description:
        "AI SaaS infrastructure platform providing complete AI development toolchain with built-in authentication and payment systems. Enables developers to quickly deploy and scale AI applications.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Prisma",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.codofly.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/codofly.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
