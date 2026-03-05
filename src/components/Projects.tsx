import { Section } from "./Section";

const projects = [
  {
    name: "FullStock.ai",
    tag: "Universal Stock Tracker",
    period: "Nov 2025 – Jan 2026",
    desc: "Streamlit web app to track any stock with live prices, candlestick charts, financial metrics, and AI-powered analysis via Groq Llama-3.3-70B. Real-time chat with AI about stocks—blending finance, visualization, and AI agents.",
    stack: "Python · Streamlit · Generative AI · Groq · Llama-3.3-70B",
    href: "https://github.com/snkpgithub/fullstock-ai",
  },
  {
    name: "ChurnMaster AI",
    tag: "Predictive Customer Retention",
    period: "Aug 2024 – Oct 2024",
    desc: "Customer churn prediction system for telecom using Neural Network (81% accuracy), XGBoost, and LightGBM. Feature analysis and customer segmentation for data-driven retention strategies.",
    stack: "Python · TensorFlow · scikit-learn · XGBoost · LightGBM",
    href: "https://github.com/snkpgithub/ChurnMaster_AI",
  },
  {
    name: "YouTube Trending Analytics",
    tag: "End-to-End ETL on AWS",
    period: "Jun 2024 – Aug 2024",
    desc: "Scalable data pipeline on AWS for ingesting, processing, and analyzing YouTube trending video data. S3 data lake, Glue/Lambda ETL, Athena querying, QuickSight dashboards for popularity trends across regions.",
    stack: "AWS S3 · Glue · Lambda · Athena · QuickSight · Redshift",
    href: "https://github.com/snkpgithub/YouTube_Data_Analysis_Project_AWS",
  },
  {
    name: "VitalBlood Solutions",
    tag: "Blood Donation Management System",
    period: "Aug 2023 – Dec 2023",
    desc: "Healthcare DBMS for donor data, inventory tracking, and transfusion management. ERD with 9 entities, DDL and analytical SQL on Oracle LiveSQL. Built at University at Buffalo as Database Administrator.",
    stack: "Oracle LiveSQL · SQL · ERD · Database Normalization",
    href: null,
  },
  {
    name: "LangTrain",
    tag: "Multi-cloud LLM platform",
    period: "Synergetics AI",
    desc: "Full-stack multi-cloud platform for LLM fine-tuning with RESTful APIs and microservices across AWS, Azure, GCP. Intelligent compute orchestration reduced GPU training costs by 40%.",
    stack: "Python · FastAPI · AWS/Azure/GCP · GPU orchestration",
    href: null,
  },
  {
    name: "GenAI Biomedical Pipeline",
    tag: "Research · Jacob's Medicine",
    period: "Jan 2025 – Feb 2026",
    desc: "LangChain, LangGraph, RAG with GPT-4/Claude across 15+ research projects. Improved data retrieval and experimental efficiency by 35%.",
    stack: "LangChain · LangGraph · RAG · Azure ML",
    href: null,
  },
];

export function Projects() {
  return (
    <Section id="projects" label="projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.name}
            className="border border-border rounded-xl bg-surface/80 p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
              <h3 className="text-accent font-semibold text-xl">{p.name}</h3>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted hover:text-accent transition-colors"
                >
                  View on GitHub →
                </a>
              )}
            </div>
            <p className="font-mono text-sm text-muted mb-1">{p.tag}</p>
            <p className="text-gray-500 text-sm mb-2">{p.period}</p>
            <p className="text-gray-400 text-base leading-relaxed mb-3">
              {p.desc}
            </p>
            <p className="font-mono text-sm text-muted">{p.stack}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
