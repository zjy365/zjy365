import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "zjy365",
  initials: "zjy",
  url: "https://zjy365.dev",
  location: "Remote",
  locationLink: "https://www.google.com/maps/place/china",
  description:
    "Developer at Sealos. I build desktop apps, developer tools, and AI-powered products that make everyday work easier.",
  summary:
    "I work on Sealos, a Kubernetes-based cloud platform. My own projects tackle tasks I want to make simpler: keeping useful text from long conversations, working with Kubernetes, and building for the web.",
  avatarUrl: "/avatar.webp",
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Prisma",
    "Docker",
    "Kubernetes",
    "AI",
    "MCP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
      title: "ScrollExport",
      href: "https://scrollexport.com/",
      dates: "2026",
      active: true,
      description:
        "Turn long conversations and web pages into searchable text. ScrollExport scrolls, captures, and deduplicates visible text with on-device OCR, then exports TXT, Markdown, or JSON. Screenshots and recognized text stay on your computer.",
      technologies: ["macOS", "Windows", "On-device OCR", "Markdown"],
      links: [
        {
          type: "Website",
          href: "https://scrollexport.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/scrollexport.webp",
      video: "",
    },
    {
      title: "Aster",
      href: "https://aster.zjy365.dev/",
      dates: "2026",
      active: true,
      description:
        "Find Kubernetes resources, follow logs, and preview changes before applying them. A free, open-source desktop app that connects directly to your clusters using your existing kubeconfig. No account or hosted backend required.",
      technologies: [
        "Tauri",
        "Rust",
        "Go",
        "TypeScript",
        "React",
        "Kubernetes",
      ],
      links: [
        {
          type: "Website",
          href: "https://aster.zjy365.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zjy365/aster",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aster.webp",
      video: "",
    },
    {
      title: "vfx-ui",
      href: "https://vfx-ui.com/",
      dates: "2026",
      active: true,
      description:
        "Shader-native visual effect components for React, rendered on the GPU via WebGPU. Ships copy-paste Hero sections and GPU backgrounds/glass effects whose core visuals DOM/CSS cannot reproduce.",
      technologies: [
        "React",
        "TypeScript",
        "WebGPU",
        "vgpu",
        "shadcn Registry",
        "CLI",
      ],
      links: [
        {
          type: "Website",
          href: "https://vfx-ui.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/vfx-ui.webp",
      video: "",
    },
    {
      title: "Flowmote",
      href: "https://flowmote.sealosgzg.site/",
      dates: "2026",
      active: true,
      description:
        "A local-first mobile control plane for Codex and CLI agents. Start, monitor, approve, and continue coding runs from a phone while code and execution stay on a Mac.",
      technologies: [
        "Expo",
        "React Native",
        "TypeScript",
        "Node.js",
        "WebSocket",
        "Codex",
      ],
      links: [],
      image: "/flowmote.webp",
      video: "",
    },
    {
      title: "AIVIVE",
      dates: "2026",
      active: true,
      description:
        "An experiment in AI image feeds and creator economies, exploring how product activity and programmable revenue routing could shape a new creator loop.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AI",
        "Solana",
      ],
      links: [],
      image: "/aivive.webp",
      video: "",
    },
    {
      title: "ToolRelay",
      dates: "2026",
      active: true,
      description:
        "An MCP relay for AI agents and external tools, with one API surface for research, page reading, image generation, and business tools.",
      technologies: [
        "Hono",
        "Next.js",
        "TypeScript",
        "MCP",
        "OpenAPI",
        "AI Agents",
      ],
      links: [],
      image: "/toolrelay.webp",
      video: "",
    },
    {
      title: "DevToolKit",
      dates: "2025",
      active: false,
      description:
        "A curated directory and review platform for discovering developer tools by use case and technical fit.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Prisma",
      ],
      links: [],
      image: "/devkit.webp",
      video: "",
    },
    {
      title: "gh-explorer",
      href: "https://github.com/zjy365/gh-explorer",
      dates: "2025",
      active: true,
      description:
        "An AI-assisted CLI for exploring GitHub trends, repository momentum, and technology adoption across the open-source ecosystem.",
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
      image: "/gh-explorer.webp",
      video: "",
    },
    {
      title: "LinkedIn Formatter",
      href: "https://www.linkedinformatter.dev",
      dates: "2025",
      active: true,
      description:
        "A small AI tool for turning rough ideas into clearer, better-formatted LinkedIn posts.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "AI/ML",
      ],
      links: [],
      image: "/linkedin-formatter.webp",
      video: "",
    },
    {
      title: "CodoflyAI",
      href: "https://www.codofly.com/",
      dates: "2024",
      active: true,
      description:
        "An AI SaaS starter with authentication, billing, and deployment primitives for shipping production applications faster.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Prisma",
        "Stripe",
      ],
      links: [],
      image: "/codofly.webp",
      video: "",
    },
  ],
  hackathons: [],
} as const;
