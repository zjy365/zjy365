import Image from "next/image";
import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { MoreProjects } from "@/components/more-projects";
import { DATA } from "@/data/resume";
import styles from "./page.module.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-builder", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: "400", variable: "--font-builder-mono", display: "swap" });

type Project = (typeof DATA.projects)[number];
const projectByTitle = (title: Project["title"]) => DATA.projects.find((project) => project.title === title)!;
const replywink = projectByTitle("ReplyWink");
const selectedProjects = [projectByTitle("Aster"), projectByTitle("ScrollExport"), projectByTitle("vfx-ui")];
const workshopProjects = [projectByTitle("ToolRelay"), projectByTitle("AIVIVE"), projectByTitle("DevToolKit")];
const earlierProjects = DATA.projects.filter((project) =>
  ![replywink, ...selectedProjects, ...workshopProjects].includes(project),
);
const earlierYears = earlierProjects.map((project) => Number(project.dates));
const workshopSummaries: Partial<Record<Project["title"], string>> = {
  ToolRelay: "One MCP relay for AI agents and external tools.",
  AIVIVE: "An experiment in AI image feeds and creator economies.",
  DevToolKit: "A curated directory and review platform for developer tools.",
};

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.externalLink} ${className}`}>{children}<ArrowUpRight aria-hidden="true" /></a>;
}

function ProjectRow({ project }: { project: Project }) {
  const href = "href" in project ? project.href : undefined;
  return (
    <li className={styles.projectRow}>
      <h3>{project.title}</h3>
      <p>{workshopSummaries[project.title] ?? project.description}</p>
      <div className={styles.rowMeta}>
        <time>{project.dates}</time>
        {href && <ExternalLink href={href} className={styles.rowLink}><span>{href.startsWith("https://github.com/") ? "Source" : "Website"}</span><span className="sr-only"> for {project.title}</span></ExternalLink>}
      </div>
    </li>
  );
}

export default function Page() {
  return (
    <div className={`${styles.portfolio} ${manrope.variable} ${mono.variable}`} id="top">
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <header className={styles.navigation}>
        <a href="#top" className={styles.wordmark} aria-label="zjy365 home">zjy365</a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <ExternalLink href={DATA.contact.social.GitHub.url} className={styles.navGithub}>GitHub</ExternalLink>
        </nav>
      </header>
      <main id="main">
        <section className={styles.introduction} aria-labelledby="intro-title">
          <div className={`${styles.eyebrow} ${styles.introMeta}`}>
            <span className={styles.desktopIntro}>Independent projects / Open-source work</span>
            <span className={styles.mobileIntro}>Developer / zjy365</span>
            <span className={styles.hello}>Hello, I’m zjy365</span>
          </div>
          <h1 id="intro-title">Building tools.<br />Connecting systems.</h1>
          <div className={styles.positioning}>
            <div className={styles.role}>
              <p>Developer at Sealos. I build software around AI,<br className={styles.desktopBreak} /> developer tools, and cloud infrastructure.</p>
              <div className={styles.heroActions}>
                <a href="#work" className={styles.primaryAction}>Explore my work <ArrowDown aria-hidden="true" /></a>
                <a href="#contact" className={styles.externalLink}>Get in touch <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
            <div className={styles.identity}>
              <Image src={DATA.avatarUrl} width={88} height={104} alt="Portrait of zjy365" priority />
              <div>
                <p className={styles.eyebrow}>Currently</p>
                <p className={styles.company}>Building at Sealos</p>
                <p className={styles.platform}>Kubernetes-based<br className={styles.desktopBreak} /> cloud platform</p>
              </div>
            </div>
          </div>
          <ul className={`${styles.disciplines} ${styles.eyebrow}`} aria-label="Areas of work">
            <li>01 / AI &amp; agents</li>
            <li>02 / Developer tools</li>
            <li>03 / Cloud infrastructure</li>
          </ul>
        </section>

        <section id="work" className={styles.work} aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <h2 id="work-title">Selected work</h2>
            <span className={styles.eyebrow}>Four projects / 2026</span>
          </div>
          <article className={styles.leadProject} aria-labelledby="replywink-title">
            <div className={styles.leadCopy}>
              <p className={styles.eyebrow}>01 / Browser extension · {replywink.dates}</p>
              <h3 id="replywink-title">ReplyWink</h3>
              <p className={styles.proposition}>Thoughtful replies,<br />in your voice.</p>
              <p className={styles.projectDescription}>{replywink.description}</p>
              <p className={styles.eyebrow}>Chrome / X / AI reply drafts</p>
              <div className={styles.leadActions}>
                <ExternalLink href="https://replywink.com/">Explore ReplyWink</ExternalLink>
              </div>
            </div>
            <div className={styles.leadImage}>
              <Image src={replywink.image} alt="ReplyWink website and reply drafting preview" width={3024} height={1597} sizes="(max-width: 959px) 90vw, 60vw" />
            </div>
          </article>
          <div className={styles.selectedGrid}>
            {selectedProjects.map((project, index) => (
              <article key={project.title} className={styles.selectedProject} aria-labelledby={`project-${index}`}>
                <div className={styles.projectImage}>
                  <Image src={project.image} alt={`${project.title} product interface`} width={1280} height={720} sizes="(max-width: 639px) 90vw, (max-width: 959px) 45vw, 30vw" />
                </div>
                <div className={styles.projectHeading}>
                  <h3 id={`project-${index}`}>{project.title}</h3>
                  {"href" in project && <ExternalLink href={project.href}><span className="sr-only">Visit {project.title} website</span></ExternalLink>}
                </div>
                <p className={styles.projectDescription}>{project.title === "Aster"
                  ? "A local-first Kubernetes desktop client. Find resources, follow logs, and preview changes before applying them."
                  : project.title === "ScrollExport"
                  ? "Turn long conversations and web pages into searchable text. On-device OCR captures and deduplicates visible text, then exports TXT, Markdown, or JSON."
                  : "Shader-native visual effects for React, rendered on the GPU. Copy-paste hero sections, backgrounds, and glass effects."}</p>
                <p className={styles.eyebrow}>{["02 / Tauri / Rust / Kubernetes", "03 / macOS / Windows / On-device OCR", "04 / React / WebGPU / TypeScript"][index]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.workshop} aria-labelledby="workshop-title">
          <div className={styles.sectionHeading}>
            <h2 id="workshop-title">Elsewhere in the workshop</h2>
            <span className={styles.eyebrow}>Products &amp; experiments</span>
          </div>
          <ul className={styles.projectIndex}>{workshopProjects.map((project) => <ProjectRow key={project.title} project={project} />)}</ul>
          <MoreProjects count={earlierProjects.length} years={`${Math.min(...earlierYears)}–${Math.max(...earlierYears)}`}>
            <p className={styles.archiveNote}>More tools and experiments, kept here as part of the record.</p>
            <ul className={styles.projectIndex}>{earlierProjects.map((project) => <ProjectRow key={project.title} project={project} />)}</ul>
          </MoreProjects>
        </section>

        <section id="about" className={styles.about} aria-labelledby="about-title">
          <div className={styles.aboutIntro}>
            <p className={styles.eyebrow}>About / zjy365</p>
            <h2 id="about-title">From interface<br />to infrastructure.</h2>
          </div>
          <div className={styles.aboutDetails}>
            <p className={styles.biography}>I work on Sealos, a Kubernetes-based cloud platform, and build software around AI and developer tools. This is a record of products, experiments, and open-source work I’ve shipped.</p>
            <dl className={styles.capabilities}>
              <div><dt className={styles.eyebrow}>Applications</dt><dd>TypeScript · React · Next.js · Node.js</dd></div>
              <div><dt className={styles.eyebrow}>Platform</dt><dd>Docker · Kubernetes · Prisma</dd></div>
              <div><dt className={styles.eyebrow}>Tools &amp; interfaces</dt><dd>AI · MCP · Tailwind CSS</dd></div>
            </dl>
          </div>
        </section>

        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <p className={styles.eyebrow}>Have a question or something in mind?</p>
          <h2 id="contact-title">Let’s talk.</h2>
          <div className={styles.contactMethods}>
            <a href={DATA.contact.social.email.url} className={`${styles.externalLink} ${styles.email}`}>{DATA.contact.email}<ArrowUpRight aria-hidden="true" /></a>
            <div className={styles.socials}>
              <ExternalLink href={DATA.contact.social.GitHub.url}>GitHub</ExternalLink>
              <ExternalLink href={DATA.contact.social.X.url}>X</ExternalLink>
              <details className={styles.wechatContact}>
                <summary>WeChat</summary>
                <div className={styles.wechatPopover}>
                  <Image src="/wechat-contact.jpg" width={222} height={283} alt="WeChat QR code for zjy365" />
                  <p>Scan to add me on WeChat</p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>
      <footer className={`${styles.footer} ${styles.eyebrow}`}>
        <p>zjy365 / Developer at Sealos</p>
        <a href="#top">Back to top <ArrowUp aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
