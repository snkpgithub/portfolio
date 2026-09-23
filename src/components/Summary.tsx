import { Section } from "./Section";

export function Summary() {
  return (
    <Section id="summary" label="about">
      <div className="border border-border rounded-xl bg-surface/80 p-6 sm:p-8 border-l-4 border-l-accent">
        <h2 className="text-xl sm:text-2xl text-white font-semibold mb-4">From applied research to production systems</h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
          I’m currently a Lead AI Engineer at T-Mobile via Techsico, working remotely
          with an office in Seattle, WA. My experience spans LLM platforms,
          biomedical retrieval, forecasting, and production NLP.
        </p>
        <p className="text-gray-400 text-base leading-relaxed">
          I focus on evaluation, cost and latency, and maintainable software:
          reproducible experiments, clear APIs, and observable deployments.
        </p>
      </div>
    </Section>
  );
}
