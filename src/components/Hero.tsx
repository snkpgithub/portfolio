import Image from "next/image";

export function Hero() {
  return (
    <header className="relative z-10 min-h-[85vh] flex flex-col justify-center max-w-4xl mx-auto px-3 sm:px-6 pt-20 sm:pt-24 pb-10 sm:pb-16 w-full max-w-[100vw] box-border">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12 gap-6">
        <div className="flex-1 min-w-0">
      <p
        className="font-mono text-accent text-sm sm:text-base md:text-lg tracking-wide sm:tracking-widest break-words overflow-visible mb-3 sm:mb-5 animate-fade-in opacity-0 animate-glow-pulse"
        style={{ animationFillMode: "forwards", animationDelay: "0ms, 700ms" } as React.CSSProperties}
      >
        [ STATUS: ONLINE ] — BUFFER_READY
      </p>
      <h1
        className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-4 animate-fade-in opacity-0"
        style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
      >
        Shashank Pandey
      </h1>
      <p
        className="text-lg sm:text-xl md:text-3xl text-muted mb-4 sm:mb-6 animate-fade-in opacity-0"
        style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
      >
        AI/ML Engineer — Software Developer
      </p>
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
        <a
          href="mailto:snkp.globalcollege@gmail.com"
          className="font-mono text-base text-muted hover:text-accent transition-colors"
        >
          snkp.globalcollege@gmail.com
        </a>
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-muted hover:text-accent transition-colors flex flex-col items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded"
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