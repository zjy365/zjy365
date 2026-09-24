"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import styles from "./more-projects.module.css";

export function MoreProjects({ count, years, children }: { count: number; years: string; children: ReactNode }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const targetOpen = useRef(false);

  useEffect(() => () => animationRef.current?.cancel(), []);

  function toggle(event: MouseEvent<HTMLElement>) {
    const details = detailsRef.current;
    if (!details || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !details.animate) return;

    event.preventDefault();
    const startHeight = details.getBoundingClientRect().height;
    const open = !(animationRef.current ? targetOpen.current : details.open);
    targetOpen.current = open;
    animationRef.current?.cancel();
    details.open = true;
    const endHeight = open ? details.getBoundingClientRect().height : event.currentTarget.getBoundingClientRect().height;
    details.style.overflow = "hidden";
    const animation = details.animate(
      { height: [`${startHeight}px`, `${endHeight}px`] },
      { duration: 300, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
    animationRef.current = animation;
    animation.onfinish = () => {
      details.open = open;
      details.style.overflow = "";
      animationRef.current = null;
    };
  }

  return (
    <details ref={detailsRef} className={styles.disclosure}>
      <summary onClick={toggle} className={styles.summary}>
        <span>Earlier work</span>
        <span className={styles.count}>{count} projects · {years}<span className={styles.toggleIcon} aria-hidden="true" /></span>
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
