"use client";

import { useEffect, useState } from "react";
import { HERO_TELEMETRY, NAV_SECTIONS, SECTION_TELEMETRY, type NavSectionId } from "@/lib/sections";

/** Always HH:MM:SS (24h) so seconds tick visibly in every locale. */
function formatLocalTime(d: Date) {
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function scrollDepthPercent(): number {
  if (typeof document === "undefined") return 0;
  const el = document.documentElement;
  const total = el.scrollHeight - window.innerHeight;
  if (total <= 0) return 100;
  return Math.min(100, Math.max(0, (window.scrollY / total) * 100));
}

export function TelemetryHud() {
  const [time, setTime] = useState<string>(() => formatLocalTime(new Date()));
  const [depth, setDepth] = useState(0);
  const [activeId, setActiveId] = useState<NavSectionId | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatLocalTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setDepth(Math.round(scrollDepthPercent()));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_SECTIONS.forEach((id) => {
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

  const status = activeId ? SECTION_TELEMETRY[activeId] : HERO_TELEMETRY;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[19] border-t border-border/60 bg-void/85 backdrop-blur-md print:hidden"
      style={{ paddingBottom: "max(0.35rem, env(safe-area-inset-bottom))" }}
      aria-hidden="true"
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2 flex flex-wrap items-center justify-center sm:justify-between gap-x-4 gap-y-1 font-mono text-[10px] sm:text-xs text-muted tracking-wide">
        <span className="tabular-nums text-muted">
          <span className="text-muted/80 mr-1.5">local</span>
          {time}
        </span>
        <span className="tabular-nums text-muted">
          <span className="text-muted/80 mr-1.5">depth</span>
          {depth}%
        </span>
        <span className="tabular-nums text-muted text-center sm:text-right min-w-0 max-w-full sm:max-w-[60%] truncate">
          {status}
        </span>
      </div>
    </div>
  );
}
