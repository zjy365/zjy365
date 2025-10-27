"use client";

import { useEffect, useRef } from "react";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || !contentRef.current) return;

    const renderMermaidCharts = async () => {
      const container = contentRef.current;
      if (!container) return;

      // Find all pre elements
      const preElements = container.querySelectorAll('pre');
      const mermaidElements: Element[] = [];

      preElements.forEach((pre) => {
        // Check if this pre element has data-language="mermaid"
        if (pre.getAttribute('data-language') === 'mermaid') {
          mermaidElements.push(pre);
        } else {
          // Fallback: check if code content looks like mermaid
          const codeElement = pre.querySelector('code');
          if (codeElement) {
            const codeText = codeElement.textContent || '';
            // Check for common mermaid keywords
            if (codeText.includes('graph') || codeText.includes('flowchart') ||
                codeText.includes('sequenceDiagram') || codeText.includes('pie') ||
                codeText.includes('gantt') || codeText.includes('classDiagram')) {
              mermaidElements.push(pre);
            }
          }
        }
      });

      console.log('Found mermaid elements to process:', mermaidElements.length);

      if (mermaidElements.length === 0) return;

      // Dynamically import mermaid
      const mermaid = (await import("mermaid")).default;

      // Initialize mermaid
      mermaid.initialize({
        startOnLoad: false,
        theme: document.documentElement.classList.contains("dark") ? "dark" : "default",
        securityLevel: "loose",
        fontFamily: "monospace",
        fontSize: 14,
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: "basis",
        },
      });

      // Process each mermaid element
      for (let index = 0; index < mermaidElements.length; index++) {
        const element = mermaidElements[index];
        const codeElement = element.querySelector('code');

        if (!codeElement) continue;

        const mermaidCode = codeElement.textContent || "";
        const chartId = `mermaid-diagram-${Date.now()}-${index}`;

        // Create a container for rendered diagram
        const container = document.createElement("div");
        container.className = "mermaid-diagram-container my-6 flex justify-center";
        container.style.minHeight = "100px";

        try {
          // Render the diagram
          const { svg } = await mermaid.render(chartId, mermaidCode);
          container.innerHTML = svg;

          // Replace the pre element with our container
          element.parentNode?.replaceChild(container, element);
        } catch (error) {
          console.error("Error rendering Mermaid diagram:", error);
          container.innerHTML = `
            <div class="p-4 border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-md">
              <p class="text-red-800 dark:text-red-200 text-sm">
                Error rendering Mermaid diagram: ${error instanceof Error ? error.message : 'Unknown error'}
              </p>
            </div>
          `;
          element.parentNode?.replaceChild(container, element);
        }
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(renderMermaidCharts, 100);
  }, [content]);

  return (
    <article className="prose dark:prose-invert">
      <div
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}