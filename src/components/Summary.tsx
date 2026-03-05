import { Section } from "./Section";

export function Summary() {
  return (
    <Section id="summary" label="summary">
      <div className="border border-border rounded-xl bg-surface/80 backdrop-blur-sm p-7 md:p-10 border-l-4 border-l-accent">
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          I&apos;m an AI/ML engineer who works at the intersection of data and
          software (3+ Years of Experience): designing data pipelines and ML systems, then
          turning them into production apps and APIs. I&apos;ve delivered LLM
          fine-tuning platforms, GenAI pipelines, and ML infrastructure across
          biomedical, supply chain, and IoT—using Python, SQL, cloud MLOps, and
          solid engineering practices. I aim to keep bringing data and models
          into reliable, user-facing software.
        </p>
      </div>
    </Section>
  );
}
