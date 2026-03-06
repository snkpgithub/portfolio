import { Section } from "./Section";

const freelance = {
  role: "Machine Learning & Data Science Expert (Freelance)",
  company: "AfterQuery Experts",
  period: "Mar 2026 - Present",
  location: "Remote",
  bullets: [
    "Build, train, and evaluate machine learning models for client business applications including forecasting, classification, and recommendation use cases.",
    "Develop predictive models using supervised and unsupervised learning techniques; deliver interpretable outputs and reports for stakeholders.",
    "Optimize model performance through hyperparameter tuning and feature engineering; document methodologies, assumptions, and technical approaches for reproducibility and handoff.",
    "Collaborate with clients to define problem scope, success metrics, and delivery timelines for ML and analytics engagements.",
  ],
  tag: "FREELANCE",
};

export function Freelance() {
  return (
    <Section id="freelance" label="freelance">
      <div className="border border-border rounded-xl bg-surface/80 hover:bg-surface hover:border-accent/30 hover:-translate-y-1 p-7 pl-6 border-l-4 border-l-transparent hover:border-l-accent/60 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <span className="inline-block font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded mb-1">
              {freelance.tag}
            </span>
            <h3 className="text-xl font-semibold text-white mt-1">
              {freelance.role}
            </h3>
            <p className="text-accent font-medium text-lg">{freelance.company}</p>
          </div>
          <p className="font-mono text-sm text-muted">
            {freelance.period}
            <br />
            <span className="text-gray-500">{freelance.location}</span>
          </p>
        </div>
        <ul className="space-y-2.5 text-gray-400 text-base leading-relaxed list-disc list-inside">
          {freelance.bullets.map((b, j) => (
            <li key={j}>{b}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
