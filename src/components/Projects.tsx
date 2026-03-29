"use client";

import { useState } from "react";
import { Section } from "./Section";

type Project = {
  name: string;
  tag: string;
  period: string;
  desc: string;
  stack: string;
  href: string | null;
  problem?: string;
  architecture?: string;
  outcome?: string;
};

const projects: Project[] = [
  {
    name: "FullStock.ai",
    tag: "Universal Stock Tracker",
    period: "Nov 2025 – Jan 2026",
    desc: "Streamlit web app to track any stock with live prices, candlestick charts, financial metrics, and AI-powered analysis via Groq Llama-3.3-70B. Real-time chat with AI about stocks—blending finance, visualization, and AI agents.",
    stack: "Python · Streamlit · Generative AI · Groq · Llama-3.3-70B",
    href: "https://github.com/snkpgithub/fullstock-ai",
    problem:
      "Investors need a single place for quotes, charts, and narrative context without standing up heavy infra.",
    architecture:
      "Streamlit UI, Groq-hosted Llama-3.3-70B for analysis, live market data and charting in one flow.",
    outcome:
      "End-to-end demo combining visualization, retrieval-style prompting, and conversational analysis.",
  },
  {
    name: "ChurnMaster AI",
    tag: "Predictive Customer Retention",
    period: "Aug 2024 – Oct 2024",
    desc: "Customer churn prediction system for telecom using Neural Network (81% accuracy), XGBoost, and LightGBM. Feature analysis and customer segmentation for data-driven retention strategies.",
    stack: "Python · TensorFlow · scikit-learn · XGBoost · LightGBM",
    href: "https://github.com/snkpgithub/ChurnMaster_AI",
    problem:
      "Retention teams need ranked churn risk and interpretable drivers, not a single black-box score.",
    architecture:
      "Compared NN, XGBoost, and LightGBM; feature importance and segmentation for planning.",
    outcome:
      "81% accuracy on the primary NN model with comparative baselines for stakeholder trust.",
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
    problem:
      "Organizations need repeatable fine-tuning workflows across clouds without runaway GPU spend or ad-hoc scripts.",
    architecture:
      "Microservices and REST APIs; orchestrated training and reporting across AWS, Azure, and GCP.",
    outcome:
      "Reported ~40% reduction in GPU training cost; production use at Synergetics AI.",
  },
  {
    name: "GenAI Biomedical Pipeline",
    tag: "Research · Jacob's Medicine",
    period: "Jan 2025 – Dec 2025",
    desc: "LangChain, LangGraph, RAG with GPT-4/Claude across 15+ research projects. Improved data retrieval and experimental efficiency by 35%.",
    stack: "LangChain · LangGraph · RAG · Azure ML",
    href: null,
    problem:
      "Research groups needed grounded retrieval and agentic workflows over diverse biomedical corpora.",
    architecture:
      "LangChain and LangGraph orchestration, RAG with GPT-4 and Claude, FAISS and transformer stacks on Azure ML.",
    outcome:
      "~35% retrieval efficiency gains; ~28% semantic search accuracy; ~45% inference latency reduction via distillation/pruning with quality held.",
  },
];

function SpecBlock({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <div className="mb-3 last:mb-0">
      <p className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="projects" label="projects">
      <div className="space-y-2">
        {projects.map((p, i) => {
          const isOpen = openIndex === i;
          const hasSpec = Boolean(p.problem || p.architecture || p.outcome);
          return (
            <div
              key={p.name}
              className="border border-border rounded-xl bg-surface/80 overflow-hidden border-l-4 border-l-transparent hover:border-l-accent/40 transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 hover:bg-surface/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset rounded-xl"
                aria-expanded={isOpen}
                aria-controls={`project-content-${i}`}
                id={`project-toggle-${i}`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-accent font-semibold text-lg sm:text-xl">
                    {p.name}
                  </h3>
                  <p className="font-mono text-sm text-muted mt-0.5">
                    {p.tag} · {p.period}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`project-content-${i}`}
                role="region"
                aria-labelledby={`project-toggle-${i}`}
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 border-t border-border/60">
                    {hasSpec && (
                      <div className="mb-4 p-3 sm:p-4 rounded-lg bg-void/50 border border-border/80">
                        {p.problem && <SpecBlock label="Problem / ask">{p.problem}</SpecBlock>}
                        {p.architecture && (
                          <SpecBlock label="Architecture">{p.architecture}</SpecBlock>
                        )}
                        {p.outcome && <SpecBlock label="Outcome">{p.outcome}</SpecBlock>}
                      </div>
                    )}
                    <p className="text-gray-400 text-base leading-relaxed mb-3">
                      {p.desc}
                    </p>
                    <p className="font-mono text-sm text-muted mb-3">
                      {p.stack}
                    </p>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded"
                      >
                        View on GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
