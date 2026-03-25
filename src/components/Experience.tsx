import { Section } from "./Section";

const jobs = [
  {
    role: "AI/ML Engineer – Software Developer",
    company: "Synergetics AI",
    period: "Dec 2025 - Present",
    location: "Remote, USA",
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
            className="group border border-border rounded-xl bg-surface/80 hover:bg-surface hover:border-accent/30 hover:-translate-y-1 p-7 pl-6 border-l-4 border-l-transparent hover:border-l-accent/60 transition-all duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <span className="inline-block font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded mb-1">
                  {job.tag}
                </span>
                <h3 className="text-xl font-semibold text-white mt-1">
                  {job.role}
                </h3>
                <p className="text-accent font-medium text-lg">{job.company}</p>
              </div>
              <p className="font-mono text-sm text-muted">
                {job.period}
                <br />
                <span className="text-gray-500">{job.location}</span>
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
