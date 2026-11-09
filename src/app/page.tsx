/*
 * THESIS: A personal collection of software samples, held by the Z·365 clip.
 * OWN-WORLD: White paper, vermilion, Instrument Serif, Manrope, real project images.
 * STORY: Meet zjy365, browse samples, explore the collection, and get in touch.
 * FIRST VIEWPORT: Approved Paper A at 1440px, with the 190px zjy365 masthead.
 * FORM: User-approved A / Fold; Paper p-4-0, artboard QS-0.
 */
import Image from "next/image";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Manrope } from "next/font/google";
import { DATA } from "@/data/resume";
import { ProjectSamples, type ProjectSample } from "./project-samples";
import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "https://zjy365.dev/" },
};

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-fold-serif", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-fold-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: "400", variable: "--font-fold-mono", display: "swap" });
const captions = [["Aster", "Kubernetes, closer to home."], ["ScrollExport", "Keep the conversation."], ["vfx-ui", "A little atmosphere for the web."], ["ReplyWink", "Thoughtful replies, in your voice."]] as const;
const samples: ProjectSample[] = captions.map(([title, caption]) => {
  const project = DATA.projects.find((item) => item.title === title);
  if (!project || !("href" in project)) throw new Error(`Missing featured project: ${title}`);
  return { title, caption, href: project.href, image: project.image, year: project.dates, description: project.description };
});
const otherProjects = DATA.projects.filter((project) => !samples.some((sample) => sample.title === project.title));
const techStack = ["React", "TypeScript", "Next.js", "Electron", "Expo", "Agent Harness", "MCP"];

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a data-rybbit-event="outbound_click" data-rybbit-prop-destination={new URL(href).hostname} href={href} target="_blank" rel="noopener noreferrer" className={`${styles.externalLink} ${className}`}>{children}</a>;
}

export default function Page() {
  return (
    <div className={`${styles.portfolio} ${serif.variable} ${sans.variable} ${mono.variable}`} id="top">
      <a className={styles.skipLink} href="#intro-title">Skip to content</a>
      <header className={styles.navigation}>
        <a href="#top" className={styles.wordmark} aria-label="zjy365 home">zjy365</a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a>
          <a data-rybbit-event="contact_section_click" href="#contact" className={styles.sayHello}>Say hello</a>
        </nav>
      </header>
      <main>
        <section className={styles.masthead} aria-labelledby="intro-title">
          <h1 id="intro-title" tabIndex={-1}>zjy365<span>.</span></h1>
          <div className={styles.mastheadNote}>
            <p>Developer at Sealos.<br /> Desktop apps, developer tools,<br /> and a few curious experiments.</p>
            <p className={styles.alias}>Also known as zjy365</p>
          </div>
        </section>
        <section id="work" className={styles.featured} aria-labelledby="work-title">
          <div className={styles.introduction}>
            <h2 id="work-title">Small tools.<br /><em>Real problems.</em></h2>
            <p className={styles.introCopy}>I make software around tasks I want to make simpler, from working with Kubernetes to keeping useful text from long conversations.</p>
            <a className={styles.selectedLink} href="#project-tabs">A few selected things</a>
            <div className={styles.identity}>
              <Image src={DATA.avatarUrl} width={42} height={42} alt="Jingyang" />
              <p>Building at Sealos.<br />Making things along the way.</p>
            </div>
          </div>
          <ProjectSamples projects={samples} />
        </section>
        <section className={styles.benchInvitation} aria-label="Explore more work">
          <p>There’s more on the bench.</p>
          <nav aria-label="More work and social links">
            <a href="#projects">All projects</a>
            <ExternalLink href={DATA.contact.social.GitHub.url}>GitHub</ExternalLink>
            <ExternalLink href={DATA.contact.social.X.url}>X</ExternalLink>
          </nav>
        </section>
        <section id="projects" className={styles.workbench} aria-labelledby="projects-title">
          <div className={styles.sectionHeading}><h2 id="projects-title">Tools, ideas, and other things.</h2><p>A few more entries in the collection.</p></div>
          <ul className={styles.projectIndex}>
            {otherProjects.map((project) => <li key={project.title} className={styles.projectRow}>
              <h3>{"href" in project ? <ExternalLink href={project.href}>{project.title}</ExternalLink> : project.title}</h3>
              <p>{project.description}</p><time>{project.dates}</time>
            </li>)}
          </ul>
          <nav className={styles.resources} aria-label="More projects and learning resources">
            <ExternalLink href="https://plyve.zjy365.dev/">Plyve</ExternalLink>
            <ExternalLink href="https://mobbin.replywink.com/">Mobbin 查看器</ExternalLink>
            <ExternalLink href="https://learn.zjy365.dev/">ZJY365 实战</ExternalLink>
            <ExternalLink href="https://dongxiao.zjy365.dev/">动效手记</ExternalLink>
          </nav>
        </section>
        <section id="about" className={styles.about} aria-labelledby="about-title">
          <div><h2 id="about-title">Behind the things.</h2><p className={styles.aboutSignature}>Jingyang / zjy365</p></div>
          <div className={styles.aboutDetails}>
            <p>{DATA.summary}</p>
            <ul className={styles.techStack} aria-label="Technology stack">
              {techStack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
        </section>
        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <h2 id="contact-title">Have something in mind?</h2>
          <div className={styles.contactMethods}>
            <a data-rybbit-event="contact_click" data-rybbit-prop-method="email" href={DATA.contact.social.email.url} className={styles.email}>{DATA.contact.email}</a>
            <div className={styles.socials}>
              <ExternalLink href={DATA.contact.social.GitHub.url}>GitHub</ExternalLink>
              <ExternalLink href={DATA.contact.social.X.url}>X</ExternalLink>
              <details className={styles.wechatContact}>
                <summary data-rybbit-event="contact_click" data-rybbit-prop-method="wechat">WeChat <span className={styles.disclosureMark} aria-hidden="true" /></summary>
                <div className={styles.wechatPopover}><Image src="/wechat-contact.jpg" width={222} height={283} alt="WeChat QR code for zjy365" /><p>Scan to add me on WeChat</p></div>
              </details>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}><p>zjy365 / Developer at Sealos</p><a href="#top">Back to top</a></footer>
    </div>
  );
}
