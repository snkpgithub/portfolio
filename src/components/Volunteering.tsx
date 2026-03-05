import { Section } from "./Section";

const roles = [
  {
    role: "Data Engineer - Generative AI",
    company: "Community Dreams Foundation",
    period: "Feb 2025 - Oct 2025",
    duration: "9 mos",
    focus: "Science and Technology",
    bullets: [
      "Designed and implemented scalable data pipelines and ETL workflows on Microsoft Azure (Azure Data Factory, Databricks, Blob Storage, ADLS).",
      "Built and maintained data warehouses and lakes to support downstream analytics, reporting, and AI/ML model training.",
      "Developed efficient data models and schemas to enhance data accessibility, minimize query latency, and support business intelligence use cases.",
      "Automated ingestion and transformation of data from multiple internal and external sources, ensuring high data quality and integrity.",
      "Collaborated with cross-functional teams, including leadership and external stakeholders, to comprehend data requirements and deliver actionable insights.",
      "Integrated Generative AI workflows into existing pipelines to facilitate innovation in nonprofit service delivery and community engagement.",
      "Ensured end-to-end solution reliability via unit testing, data validation, and production deployment management.",
      "Authored technical documentation and workflow diagrams to facilitate scalability and onboarding of new contributors.",
      "Applied best practices in performance tuning, data governance, and cost optimization across cloud infrastructure.",
    ],
    tag: "VOLUNTEER",
  },
];

export function Volunteering() {
  return (
    <Section id="volunteering" label="volunteering">
      <div className="space-y-10">
        {roles.map((job) => (
          <div
            key={job.company}
            className="group border border-border rounded-xl bg-surface/80 hover:bg-surface hover:border-accent/30 hover:-translate-y-1 p-7 transition-all duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <span className="font-mono text-sm text-amber">
                  [{job.tag}]
                </span>
                <h3 className="text-xl font-semibold text-white mt-1">
                  {job.role}
                </h3>
                <p className="text-accent font-medium text-lg">{job.company}</p>
                <p className="text-gray-500 text-base mt-0.5">{job.focus}</p>
              </div>
              <p className="font-mono text-sm text-muted">
                {job.period}
                <br />
                <span className="text-gray-500">{job.duration}</span>
              </p>
            </div>
            <ul className="space-y-2.5 text-gray-400 text-base leading-relaxed list-disc list-inside">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
