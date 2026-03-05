"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  "summary",
  "experience",
  "volunteering",
  "skills",
  "certifications",
  "projects",
  "education",
  "publications",
  "writing",
  "contact",
] as const;

const LABELS: Record<(typeof SECTIONS)[number], string> = {
  summary: "Summary",
  experience: "Experience",
  volunteering: "Volunteering",
  skills: "Skills",
  certifications: "Certifications",
  projects: "Projects",
  education: "Education",
  publications: "Publications",
  writing: "Writing",
  contact: "Contact",
};

export function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 border-b border-border/50 bg-void/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-5 flex flex-wrap gap-3 sm:gap-5 justify-center md:justify-start">
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`font-mono text-xs sm:text-sm py-2 min-h-[44px] inline-flex items-center transition-colors border-b-2 border-transparent hover:text-accent hover:border-accent/50 ${
              activeId === id ? "text-accent border-accent" : "text-muted"
            }`}
          >
            {LABELS[id]}
          </a>
        ))}
      </div>
    </nav>
  );
}
