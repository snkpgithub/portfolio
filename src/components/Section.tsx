"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

export function Section({
  id,
  label,
  children,
  className = "",
}: {
  id: string;
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative z-10 max-w-4xl mx-auto px-3 sm:px-6 py-10 sm:py-14 md:py-20 w-full max-w-[100vw] box-border ${className}`}
    >
      {label && (
        <p
          className={`font-mono text-sm md:text-base text-muted tracking-widest mb-10 pl-3 border-l-2 border-accent/50 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          // {label}
        </p>
      )}
      <div
        className={`transition-all duration-700 delay-150 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
