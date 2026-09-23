import { Section } from "./Section";

const jobs = [
  {
    role: "Lead AI Engineer",
    company: "T-Mobile",
    period: "May 2026 - Present",
    location: "Remote — Seattle, WA office",
    scope: "Enterprise AI agents and telecommunications data integration on Azure, with a focus on inference efficiency and application observability.",
    bullets: [
      "Optimized LLM prompts and agent workflows, reducing token consumption by 25% and inference costs by 20% while improving GPU and provisioned throughput unit (PTU) utilization.",
      "Managed Azure Cosmos DB and Azure ML infrastructure, reducing query latency by 40%; used Azure Application Insights to monitor application performance and failures.",
      "Developed 5 Model Context Protocol (MCP) servers and integrated 10 APIs to connect AI agents with enterprise tools and telecommunications data sources.",
    ],
    tag: "CURRENT",
    featured: true,
  },
  {
    role: "AI/ML Engineer – Software Developer",
    company: "Synergetics AI",
    period: "Dec 2025 - May 2026",
    location: "Remote, USA",
    scope:
      "Production LLM platform, multi-cloud GPU orchestration, APIs and full-stack delivery.",
    bullets: [
      "Architected LangTrain, a full-stack multi-cloud LLM fine-tuning platform with RESTful APIs and microservices across AWS, Azure, and GCP, reducing GPU training costs by 40%.",
      "Engineered scalable data and reporting applications using Python, FastAPI, and Superset with sub-second latency for executive and operational reporting.",
      "Implemented an AI agent marketplace application (4,800+ LOC) with unit and integration testing, code reviews, Git workflows, and CI/CD, streamlining agent onboarding.",
      "Defined RESTful API design and service integration patterns; delivered documented, maintainable code and drove adoption across cross-functional teams.",
      "Deployed full-stack features with React/Next.js frontends, Node.js and Python backends, and PostgreSQL/cloud databases; designed schemas and SQL for reporting and agent state.",
      "Optimized inference footprint by 35% through prompt engineering, fine-tuning frameworks, and model compression and quantization while preserving output quality.",
    ],
    tag: "PRODUCTION",
  },
  {
    role: "ML Engineer – GenAI",
    company: "Jacob's Medicine and Biomedical Sciences",
    period: "Jan 2025 - Dec 2025",
    location: "Buffalo, USA",
    scope:
      "GenAI systems for research: RAG, LangGraph, Azure ML, compression and latency work.",
    bullets: [
      "Designed GenAI biomedical systems using LangChain, LangGraph, GPT-4, Claude, and RAG across 15+ research projects, improving data retrieval efficiency by 35%.",
      "Deployed NLP systems with BERT, T5, and FAISS; developed feature engineering and data augmentation pipelines that improved semantic search accuracy by 28%.",
      "Automated end-to-end ML pipelines on Azure ML with PyTorch for preprocessing, training, hyperparameter tuning, and evaluation, reducing training cycles by 40%.",
      "Reduced inference latency by 45% through knowledge distillation and weight pruning on production language models while preserving ~95% accuracy.",
    ],
    tag: "RESEARCH",
  },
  {
    role: "ML Engineer – Data Science",
    company: "Baldwin Richardson Foods",
    period: "Aug 2024 - Dec 2024",
    location: "New York, USA",
    scope:
      "Forecasting and anomaly detection at scale; MLOps on AWS and Databricks.",
    bullets: [
      "Delivered anomaly detection and time-series forecasting models using XGBoost, LSTM, and Prophet on 14+ years of sales data, improving prediction accuracy by 30% and enabling $1.5M in annual cost savings.",
      "Automated feature engineering and model evaluation pipelines on AWS SageMaker and Databricks with experiment tracking for faster model iteration.",
      "Deployed model serving infrastructure with Docker, Kubernetes, and GitHub Actions CI/CD, reducing deployment effort by 70% and enabling production monitoring and refresh.",
      "Developed efficient SQL in PostgreSQL and Oracle for high-volume operational analytics; built Tableau and Streamlit dashboards for cross-functional stakeholders.",
    ],
    tag: "PRODUCTION",
  },
  {
    role: "Machine Learning Engineer",
    company: "KPIT Technologies",
    period: "Jun 2021 - Jul 2023",
    location: "India (Remote)",
    scope:
      "Production NLP over high-volume tickets; IoT analytics; TensorFlow Serving and MLOps.",
    bullets: [
      "Deployed production NLP pipelines for text classification, entity extraction, and incident categorization across 50K+ tickets using BERT and PyTorch, achieving 0.88 precision and 0.85 recall and reducing manual review time by 60%.",
      "Implemented anomaly detection and feature-engineering frameworks on large-scale automotive IoT datasets using PySpark and AWS SageMaker, enabling earlier detection of equipment failures.",
      "Built MLOps workflows with TensorFlow Serving for model monitoring, versioning, and refresh management in production environments.",
      "Standardized ML pipeline architecture with cross-functional teams; introduced validation, A/B testing, code reviews, and deployment best practices.",
    ],
    tag: "PRODUCTION",
  },
  {
    role: "Data Scientist – Software Intern",
    company: "ISRO - Indian Space Research Organisation",
    period: "Sep 2021 - Aug 2022",
    location: "Bangalore, India",
    scope:
      "Spectral DL and peak detection for space-like conditions; distributed Spark; mission reliability.",
    bullets: [
      "Developed deep learning classifiers and automated peak-finding algorithms on satellite telemetry and laser-induced plasma spectra using PyTorch, improving anomaly detection accuracy by 32% (IEEE Conference 2022).",
      "Deployed real-time model serving and early-warning analytics for signal degradation detection, achieving 99.9% system reliability on mission-critical infrastructure.",
      "Scaled distributed Spark pipelines for high-volume data storage and processing, delivering 10× throughput with automated monitoring and model refresh workflows.",
      "Rolled out CI/CD and monitoring workflows across 15+ cross-functional teams to standardize data pipelines for mission-critical reliability.",
    ],
    tag: "MISSION",
  },
];

export function Experience() {
  return (
    <Section id="experience" label="experience">
      <div className="space-y-10">
        {jobs.map((job, i) => (
          <div
            key={job.company}
            className={`group border rounded-xl hover:-translate-y-1 p-5 sm:p-7 sm:pl-6 border-l-4 transition-all duration-300 ${
              job.featured
                ? "border-[#e20074]/40 border-l-[#e20074] bg-[#e20074]/[0.06] hover:border-[#e20074]/70 hover:border-l-[#e20074]"
                : "border-border bg-surface/80 hover:bg-surface hover:border-accent/30 border-l-transparent hover:border-l-accent/60"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block font-mono text-xs px-2 py-1 rounded mb-1 ${job.featured ? "text-white bg-[#e20074]" : "text-accent bg-accent/10"}`}>
                  {job.tag}
                </span>
                <h3 className="text-xl font-semibold text-white mt-1">
                  {job.role}
                </h3>
                <p className={`font-semibold ${job.featured ? "text-2xl text-[#e20074]" : "text-lg text-accent"}`}>{job.company}</p>
                {job.scope && <p className="text-gray-400 text-sm mt-2 leading-snug max-w-xl">
                  {job.scope}
                </p>}
              </div>
              <p className="font-mono text-sm text-muted">
                {job.period}
                {job.location && <><br />
                <span className="text-muted">{job.location}</span></>}
              </p>
            </div>
            {job.bullets.length > 0 && <ul className="space-y-2.5 text-gray-400 text-base leading-relaxed list-disc list-inside">
              {job.bullets.slice(0, 3).map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>}
            {job.bullets.length > 3 && (
              <details className="mt-4 text-gray-400">
                <summary className="cursor-pointer text-accent text-sm py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">More about this role</summary>
                <ul className="mt-3 space-y-2.5 text-base leading-relaxed list-disc list-inside">
                  {job.bullets.slice(3).map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </details>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
