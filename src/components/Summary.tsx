import { Section } from "./Section";

export function Summary() {
  return (
    <Section id="summary" label="summary">
      <div className="border border-border rounded-xl bg-surface/80 backdrop-blur-sm p-7 md:p-10 border-l-4 border-l-accent">
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          I&apos;m an AI/ML engineer with 3+ years of experience focused on
          production systems: I design data pipelines and ML systems, then ship them
          as apps and APIs. I&apos;ve built LLM fine-tuning platforms, GenAI
          pipelines, and ML infrastructure across biomedical, supply chain, and
          IoT—using Python, SQL, cloud MLOps, CI/CD, and clean API design. I also
          contribute to research when it informs product. I focus on turning
          models and data into reliable, user-facing software.
        </p>
      </div>
    </Section>
  );
}
