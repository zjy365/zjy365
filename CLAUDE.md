# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` or `npm run dev` - Start development server
- `pnpm build` or `npm run build` - Build for production 
- `pnpm start` or `npm run start` - Start production server
- `pnpm lint` or `npm run lint` - Run ESLint

## Project Architecture

This is a personal portfolio website built with Next.js 14 using the App Router architecture. The project uses a modern tech stack with TypeScript, Tailwind CSS, and shadcn/ui components.

### Key Architecture Patterns

**Data-driven Design**: The entire portfolio content is centralized in `/src/data/resume.tsx` as a single DATA object containing:
- Personal information (name, location, description)
- Social links and navigation structure  
- Work experience, education, projects, and hackathons
- Skills and contact information

**Component Structure**:
- `/src/components/ui/` - shadcn/ui base components (Button, Card, Avatar, etc.)
- `/src/components/magicui/` - Custom animated UI components (BlurFade, Dock)
- `/src/components/` - Portfolio-specific components (ProjectCard, ResumeCard, HackathonCard)

**Content Management**:
- Blog posts are MDX files in `/content/` directory
- Blog data handling in `/src/data/blog.ts` with gray-matter for frontmatter parsing
- MDX rendering with rehype-pretty-code for syntax highlighting using Shiki

**Styling System**:
- Tailwind CSS with custom design system variables in `globals.css`
- Dark/light theme support via next-themes
- CSS variables for consistent theming across components
- shadcn/ui component system with "new-york" style variant

### Tech Stack Integration

- **Next.js 14**: App Router, TypeScript, React Server Components
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for page transitions and component animations
- **Content**: MDX with rehype plugins for enhanced markdown rendering
- **Icons**: Lucide React for consistent iconography

### File Structure Patterns

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components organized by function
- `src/data/` - Static data and content management
- `src/lib/` - Utility functions and shared logic
- `content/` - MDX blog posts with frontmatter metadata

The codebase follows a clean separation between data, presentation, and logic, making it easy to update content without touching component code.