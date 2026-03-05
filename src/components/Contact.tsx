export function Contact() {
  return (
    <footer className="relative z-10 border-t border-border mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <p className="font-mono text-sm text-muted tracking-widest mb-6">
          // contact
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-400 text-base md:text-lg items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors py-1 font-medium"
          >
            Download resume
          </a>
          <a
            href="tel:+17169709684"
            className="hover:text-accent hover:underline transition-colors py-1"
          >
            +1 (716) 970-9684
          </a>
          <a
            href="mailto:snkp.globalcollege@gmail.com"
            className="hover:text-accent hover:underline transition-colors py-1"
          >
            snkp.globalcollege@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/snkp0018"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:underline transition-colors py-1"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/snkpgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:underline transition-colors py-1"
          >
            GitHub
          </a>
        </div>
        <p className="font-mono text-sm text-muted mt-8">
          Built with Next.js · Tailwind 
        </p>
      </div>
    </footer>
  );
}
