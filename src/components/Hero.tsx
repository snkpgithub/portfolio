import Image from "next/image";

export function Hero() {
  return (
    <header className="relative z-10 min-h-[85vh] flex flex-col justify-center max-w-4xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12 gap-8">
        <div className="flex-1">
      <p
        className="font-mono text-accent text-base md:text-lg tracking-widest mb-5 animate-fade-in opacity-0 animate-glow-pulse"
        style={{ animationFillMode: "forwards", animationDelay: "0ms, 700ms" } as React.CSSProperties}
      >
        [ STATUS: ONLINE ] — BUFFER_READY
      </p>
      <h1
        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in opacity-0"
        style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
      >
        Shashank Pandey
      </h1>
      <p
        className="text-2xl md:text-3xl text-muted mb-6 animate-fade-in opacity-0"
        style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
      >
        AI/ML Engineer — Software Developer
      </p>
      <p
        className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 animate-fade-in opacity-0"
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
          className="flex-shrink-0 animate-fade-in opacity-0"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden ring-2 ring-accent/60 ring-offset-2 ring-offset-void transition-all duration-300 hover:scale-105 hover:ring-accent">
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
    </header>
  );
}
