import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jing Yang",
  initials: "JY",
  url: "https://zjy365.dev",
  location: "Remote",
  locationLink: "https://www.google.com/maps/place/china",
  description:
    "Full-stack developer focused on AI infrastructure and cloud-native technologies. Building the future of developer tools.",
  summary:
    "Experienced full-stack developer specializing in AI infrastructure and cloud-native technologies. Currently contributing to [Sealos](https://github.com/labring/sealos), a Kubernetes-based cloud operating system with 15.6k+ stars. Passionate about building developer tools and scaling modern applications with React, Next.js, and Kubernetes.",
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
        "Core contributor to Sealos, a Kubernetes-based cloud operating system (15.6k+ GitHub stars). Designed micro-frontend architecture for cloud desktop environment and built enterprise-grade component library. Developed multiple core applications including application marketplace, database management (DBProvider), application launcher (AppLaunchpad), and scheduled tasks (CronJob).",
    },
  ],
  education: [
    {
      school: "Hebei University of Engineering",
      href: "https://www.hebeu.edu.cn",
      degree: "Bachelor's Degree in Software Engineering",
      logoUrl: "/hebeu.webp",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
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
      video:
        "",
    },
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
      title: "Sealos Application Marketplace",
      href: "https://template.hzh.sealos.run/",
      dates: "2023 - Present",
      active: true,
      description:
        "Cloud-native application marketplace enabling one-click deployment of applications. Built template parsing and rendering system supporting thousands of application deployments.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Kubernetes",
        "Docker",
        "React",
      ],
      links: [
        {
          type: "Website",
          href: "https://template.hzh.sealos.run/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/template.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
