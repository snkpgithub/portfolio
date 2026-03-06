"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const EMAIL = "snkp.globalcollege@gmail.com";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (!terminalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTerminalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [terminalOpen]);

  useEffect(() => {
    if (!terminalOpen) {
      setTrainingProgress(0);
      return;
    }
    const duration = 2200;
    const steps = 44;
    const stepMs = duration / steps;
    let step = 0;
    const id = setInterval(() => {
      step += 1;
      setTrainingProgress(Math.min(step * (100 / steps), 100));
      if (step >= steps) clearInterval(id);
    }, stepMs);
    return () => clearInterval(id);
  }, [terminalOpen]);

  return (
    <header className="relative z-10 min-h-[85vh] flex flex-col justify-center max-w-4xl mx-auto px-3 sm:px-6 pt-20 sm:pt-24 pb-10 sm:pb-16 w-full max-w-[100vw] box-border">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12 gap-6">
        <div className="flex-1 min-w-0">
      <button
        type="button"
        onClick={() => setTerminalOpen(true)}
        className="font-mono text-accent text-sm sm:text-base md:text-lg tracking-wide sm:tracking-widest break-words overflow-visible mb-3 sm:mb-5 animate-fade-in opacity-0 animate-glow-pulse cursor-pointer bg-transparent border-0 p-0 text-left hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded"
        style={{ animationFillMode: "forwards", animationDelay: "0ms, 700ms" } as React.CSSProperties}
        aria-label="Open terminal easter egg"
        title="Training run 42% complete · Click for terminal"
      >
        [ LIVE ] — human_in_the_loop = true · always
      </button>
      {terminalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/90 backdrop-blur-sm"
          onClick={() => setTerminalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Terminal"
        >
          <div
            className="w-full max-w-md border border-accent/40 rounded-lg bg-void shadow-2xl shadow-accent/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-surface/80">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="font-mono text-xs text-muted ml-2">terminal</span>
            </div>
            <div className="p-4 font-mono text-sm text-gray-300 space-y-1 min-h-[200px]">
              <p className="text-muted text-xs mb-2"># Training run</p>
              <div className="mb-3">
                <div className="flex justify-between text-xs text-muted mb-1">
                  <span>epoch 1/3</span>
                  <span>{Math.round(trainingProgress)}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden border border-border/50">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-400 transition-all duration-150 ease-out"
                    style={{ width: `${trainingProgress}%` }}
                  />
                </div>
              </div>
              <p className="text-muted text-xs"># RAG pipeline: indexing…</p>
              <p><span className="text-accent">$</span> whoami</p>
              <p className="text-accent">shashank_pandey</p>
              <p><span className="text-accent">$</span> ls ~/skills</p>
              <p>ml_engineering  llm_finetuning  genai  mlops  python  fullstack</p>
              <p><span className="text-accent">$</span> pip install curiosity</p>
              <p className="text-muted">Successfully installed curiosity-2.0</p>
              <p><span className="text-accent">$</span> npx create-llm-app --yes</p>
              <p className="text-muted">Scaffolding... ready in 42s.</p>
              <p><span className="text-accent">$</span> <span className="animate-pulse">_</span></p>
            </div>
            <div className="px-4 pb-4">
              <button
                type="button"
                onClick={() => setTerminalOpen(false)}
                className="font-mono text-xs text-muted hover:text-accent transition-colors"
              >
                [ close ]
              </button>
            </div>
          </div>
        </div>
      )}
      <h1
        className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-4 animate-fade-in opacity-0 bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.25)]"
        style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
      >
        Shashank Pandey
      </h1>
      <p
        className="text-lg sm:text-xl md:text-3xl text-muted mb-3 sm:mb-4 animate-fade-in opacity-0"
        style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
      >
        AI/ML Engineer — Software Developer
      </p>
      <span
        className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 bg-emerald-500/20 border border-emerald-400/50 shadow-[0_0_14px_rgba(52,211,153,0.35)] px-2.5 py-1 rounded-full mb-4 sm:mb-6 animate-fade-in opacity-0"
        style={{ animationDelay: "320ms", animationFillMode: "forwards" }}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        Open to opportunities
      </span>
      <p
        className="text-gray-400 text-sm sm:text-base md:text-xl max-w-xl mb-8 sm:mb-10 animate-fade-in opacity-0"
        style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
      >
        Production AI/ML systems · LLM fine-tuning · GenAI pipelines · MLOps
      </p>
      <div
        className="flex flex-wrap gap-5 items-center animate-fade-in opacity-0"
        style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-base text-accent border border-accent/50 px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors"
        >
          Download resume
        </a>
        <a
          href="tel:+17169709684"
          className="font-mono text-base text-muted hover:text-accent transition-colors"
        >
          +1 (716) 970-9684
        </a>
        <span className="flex items-center gap-2">
          <a
            href={`mailto:${EMAIL}`}
            className="font-mono text-base text-muted hover:text-accent transition-colors"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="font-mono text-xs text-muted hover:text-accent border border-border hover:border-accent/50 px-2 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void"
            aria-label="Copy email"
            title="Copy email"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </span>
        <a
          href="https://linkedin.com/in/snkp0018"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-base text-muted hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/snkpgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-base text-muted hover:text-accent transition-colors"
        >
          GitHub
        </a>
      </div>
        </div>
        <div
          className="flex-shrink-0 animate-fade-in opacity-0 flex justify-center md:justify-start"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-60 lg:h-60 rounded-full overflow-hidden ring-2 ring-accent/60 ring-offset-2 ring-offset-void transition-all duration-300 hover:scale-105 hover:ring-accent">
            <Image
              src="/profile.jpg"
              alt="Shashank Pandey"
              width={240}
              height={240}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
      <a
        href="#summary"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-muted hover:text-accent transition-colors flex flex-col items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded print:hidden"
        aria-label="Scroll to content"
      >
        <span>Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </header>
  );
}