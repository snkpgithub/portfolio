import { Section } from "./Section";

const PIPELINE_DIAGRAM = `
  data + contracts             train / fine-tune / RAG
      │                                 │
   ┌─────────┐   eval harness   ┌─────────┐    observability
   │ ingest  │ ───────────────► │  model  │ ───────► metrics / alerts
   │ + QA    │ ◄─────────────── │  loop   │ ◄──────  rollback path
   └─────────┘   offline + HITL └─────────┘
        │                            │
        └──────────► deploy (APIs, batch, agents)
`;

export function Approach() {
  return (
    <Section id="approach" label="approach">
      <div className="space-y-8">
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
          I treat AI products as{" "}
          <span className="text-gray-200 font-medium">systems</span>: data quality,
          evaluation, serving, and operations matter as much as the model. Below is
          the loop I optimize for when moving from experiment to production.
        </p>

        <div className="border border-border rounded-xl bg-void/60 overflow-hidden">
          <p className="font-mono text-[10px] sm:text-xs text-muted/90 px-4 py-2 border-b border-border bg-surface/50 tracking-wide">
            fig.1 — build loop (schematic)
          </p>
          <pre
            className="p-4 sm:p-5 font-mono text-[10px] sm:text-xs text-muted leading-relaxed overflow-x-auto whitespace-pre text-left"
            aria-label="Schematic diagram of AI product build loop"
          >
            {PIPELINE_DIAGRAM.trim()}
          </pre>
        </div>

        <ul className="space-y-4 text-gray-400 text-base leading-relaxed max-w-3xl list-none pl-0">
          <li className="flex gap-3">
            <span className="font-mono text-accent flex-shrink-0 text-sm mt-0.5">01</span>
            <span>
              <strong className="text-gray-200 font-medium">Evaluation first.</strong>{" "}
              Offline benchmarks, regression suites, and human review where labels are
              fuzzy—especially for RAG and agents—before scaling traffic.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-accent flex-shrink-0 text-sm mt-0.5">02</span>
            <span>
              <strong className="text-gray-200 font-medium">Production discipline.</strong>{" "}
              Versioned artifacts, CI/CD, APIs and observability so models can be
              updated without surprise; clear ownership of schemas and contracts.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-accent flex-shrink-0 text-sm mt-0.5">03</span>
            <span>
              <strong className="text-gray-200 font-medium">Cost and latency budgets.</strong>{" "}
              Right-size inference (distillation, quantization, routing), monitor GPU
              spend, and treat prompt and retrieval design as engineering levers—not
              afterthoughts.
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
