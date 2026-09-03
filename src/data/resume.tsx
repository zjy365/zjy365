import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "zjy365",
  initials: "zjy",
  url: "https://zjy365.dev",
  location: "Remote",
  locationLink: "https://www.google.com/maps/place/china",
  description:
    "Developer at Sealos. Building software around AI, developer tools, and cloud infrastructure.",
  summary:
    "I work on Sealos, a Kubernetes-based cloud platform, and build software around AI and developer tools. This page is a record of products, experiments, and open-source work I have shipped.",
  avatarUrl: "/me.jpg",
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
      title: "aster",
      href: "https://github.com/zjy365/aster",
      dates: "2026",
      active: true,
      description:
        "A 28 MB local-first Kubernetes desktop client. Native Tauri shell plus a Go sidecar, keyboard-first with a ⌘K command palette for everything. No account, no telemetry, no backend — reads your kubeconfig and talks straight to the cluster.",
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
          type: "Source",
          href: "https://github.com/zjy365/aster",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aster.png",
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
      image: "/vfx-ui.png",
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
      image: "/flowmote.png",
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
      image: "/aivive.png",
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
      image: "/toolrelay.png",
      video: "",
    },
    {
      title: "DevToolKit",
      dates: "2025",
      href: "https://www.devkit.best/",
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
      image: "/devkit.png",
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
      image: "/gh-explorer.png",
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
      image: "/linkedin-formatter.png",
      video: "",
    },
    {
      title: "Scholar AI",
      dates: "2025",
      active: true,
      description:
        "A multi-model research assistant combining chat, literature search across multiple databases, and collaborative documents.",
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
      links: [],
      image: "/scholar-ai.png",
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
      image: "/codofly.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
