import { Section } from "./Section";

export function Summary() {
  return (
    <Section id="summary" label="summary">
      <div className="border border-border rounded-xl bg-surface/80 backdrop-blur-sm p-7 md:p-10 border-l-4 border-l-accent">
        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-6">
          I build production AI/ML systems end to end: data and training pipelines,
          model lifecycle, and the software around them—APIs, services, and UIs people
          actually rely on.
        </p>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
          Recent work spans{" "}
          <span className="text-gray-300">LLM fine-tuning platforms</span>,{" "}
          <span className="text-gray-300">GenAI and RAG</span> in research settings, and{" "}
          <span className="text-gray-300">MLOps</span> on major clouds. I care about
          measurable outcomes—cost, latency, accuracy—and about maintainable codebases
          your team can extend.
        </p>
        <p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">
          Depth / ownership
        </p>
        <ul className="space-y-3 text-gray-300 text-base leading-relaxed list-none pl-0 border-t border-border/80 pt-6">
          <li className="flex gap-3">
            <span className="text-accent font-mono text-sm flex-shrink-0">—</span>
            <span>
              <strong className="text-gray-200">Platform &amp; infra:</strong>{" "}
              multi-service training and inference, GPU orchestration, REST APIs, SQL
              and reporting—shipping, not only notebooks.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-mono text-sm flex-shrink-0">—</span>
            <span>
              <strong className="text-gray-200">Applied research:</strong>{" "}
              when experiments inform product—retrieval, distillation, evaluation—I
              document trade-offs and keep pipelines reproducible.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-mono text-sm flex-shrink-0">—</span>
            <span>
              <strong className="text-gray-200">Domains:</strong>{" "}
              biomedical GenAI, supply chain and forecasting, IoT-scale telemetry—same
              bar: reliability, monitoring, and clear interfaces for stakeholders.
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
