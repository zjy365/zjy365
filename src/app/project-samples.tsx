"use client";

import Image from "next/image";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import styles from "./page.module.css";

export type ProjectSample = { title: string; caption: string; href: string; image: string; year: string; description: string };

function SignatureClip() {
  const reduceMotion = useReducedMotion();
  const controls = useAnimationControls();
  function nudge() {
    if (!reduceMotion) void controls.start({ rotate: [0, -5, 2, 0], transition: { duration: 0.5, ease: "easeOut" } });
  }
  return <div className={styles.clipPosition}>
    <motion.button type="button" className={styles.signatureClip} aria-label="Nudge the Z 365 spring clip"
      animate={controls} drag={reduceMotion ? false : "x"} dragConstraints={{ left: -20, right: 20 }}
      dragElastic={0.12} dragSnapToOrigin dragTransition={{ bounceStiffness: 380, bounceDamping: 24 }}
      onClick={nudge} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
      <Image src="/images/z-365-clip.webp" alt="" width={768} height={512} sizes="(max-width: 639px) 150px, (max-width: 1199px) 23vw, 292px" priority draggable={false} />
    </motion.button>
  </div>;
}

export function ProjectSamples({ projects }: { projects: ProjectSample[] }) {
  const [active, setActive] = useState(0);
  const [animateSwitch, setAnimateSwitch] = useState(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const selected = projects[active];
  const next = projects[(active + 1) % projects.length];

  function select(index: number, animate = true) {
    setAnimateSwitch(animate && !reduceMotion);
    setActive(index);
  }
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;
    switch (event.key) {
      case "ArrowRight": nextIndex = (index + 1) % projects.length; break;
      case "ArrowLeft": nextIndex = (index - 1 + projects.length) % projects.length; break;
      case "Home": nextIndex = 0; break;
      case "End": nextIndex = projects.length - 1; break;
      default: return;
    }
    event.preventDefault();
    select(nextIndex, false);
    buttons.current[nextIndex]?.focus();
  }
  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse" || !stage.current) return;
    const box = event.currentTarget.getBoundingClientRect();
    stage.current.style.setProperty("--tilt-x", `${-((event.clientY - box.top) / box.height - .5) * 3}deg`);
    stage.current.style.setProperty("--tilt-y", `${((event.clientX - box.left) / box.width - .5) * 3}deg`);
  }
  function resetTilt() {
    stage.current?.style.setProperty("--tilt-x", "0deg");
    stage.current?.style.setProperty("--tilt-y", "0deg");
  }
  return <div className={styles.samples} onPointerMove={tilt} onPointerLeave={resetTilt}>
    <div id="project-tabs" className={styles.projectTabs} role="tablist" aria-label="Selected projects">
      {projects.map((project, index) => <button key={project.title} ref={(node) => { buttons.current[index] = node; }}
        id={`sample-tab-${index}`} type="button" role="tab" aria-selected={active === index} aria-controls={`sample-panel-${index}`}
        tabIndex={active === index ? 0 : -1} onClick={() => select(index)}
        onPointerEnter={(event) => { if (event.pointerType === "mouse" && !stage.current?.contains(document.activeElement)) select(index); }} onFocus={() => select(index, false)}
        onKeyDown={(event) => navigate(event, index)}>{project.title}</button>)}
    </div>
    <div className={styles.sampleStage} ref={stage}>
      <div className={styles.backSheet} aria-hidden="true">
        <div className={styles.backImage}><Image src={next.image} alt="" fill sizes="(max-width: 639px) 80vw, 618px" /></div>
        <div className={styles.backCaption}><span>{next.title}</span><span>{next.year}</span></div>
      </div>
      {projects.map((project, index) => <article key={project.title} id={`sample-panel-${index}`} role="tabpanel"
        aria-labelledby={`sample-tab-${index}`} hidden={index !== active} className={styles.frontSheet} data-animate={index === active && animateSwitch}>
        <a data-rybbit-event="outbound_click" data-rybbit-prop-destination={new URL(project.href).hostname} href={project.href} target="_blank" rel="noopener noreferrer" className={styles.sheetLink} aria-label={`Open ${project.title} website`}>
          <div className={styles.frontImage}><Image src={project.image} alt={`${project.title} product interface`} fill sizes="(max-width: 639px) 90vw, (max-width: 1199px) 55vw, 688px" priority={index === 0} /></div>
          <div className={styles.frontCaption}>
            <div className={styles.sampleTitle}>{project.title}<span> / {project.caption}</span></div>
            <span className={styles.openProject}>Open project</span>
          </div>
        </a>
      </article>)}
      <SignatureClip />
    </div>
    <p className={styles.mobileProjectDescription}>{selected.description}</p>
    <noscript><p className={styles.noScriptLinks}>{projects.map((project) => <a key={project.title} href={project.href}>{project.title}</a>)}</p></noscript>
  </div>;
}
