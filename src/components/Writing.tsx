"use client";

import { useState } from "react";
import { Section } from "./Section";

const posts = [
  {
    title: "Advanced Time Series Forecasting in Retail and E-commerce: Research-Driven Applications for Walmart, Amazon, and Beyond",
    date: "July 2025",
    excerpt:
      "In the ever-evolving landscapes of retail and e-commerce, managing demand volatility, intricate supply chains, and unpredictable customer behavior has become a data-intensive challenge. For global titans like Walmart and Amazon, solving this challenge at scale means embracing advanced time series forecasting techniques rooted in both academic research and operational excellence.",
    href: "https://medium.com/@snkp.careerwork/advanced-time-series-forecasting-in-retail-and-e-commerce-research-driven-applications-for-87ede87c87f2",
    source: "Medium",
  },
  {
    title: "Accelerating AI Inference with NVIDIA TensorRT: A Game-Changer in Modern Technology",
    date: "April 2025",
    excerpt:
      "TensorRT is NVIDIA’s SDK for optimizing and deploying deep learning models for inference. It takes trained models from frameworks like PyTorch, TensorFlow, or ONNX and tunes them to run faster, leaner, and smarter on NVIDIA GPUs.",
    href: "https://medium.com/@snkp.careerwork/accelerating-ai-inference-with-nvidia-tensorrt-a-game-changer-in-modern-technology-a107d985c6a5",
    source: "Medium",
  },
  {
    title: "RAG Unveiled: How AI is Learning to Think with Real-Time Knowledge",
    date: "Nov 2024",
    excerpt:
      "Imagine asking your smart assistant about yesterday’s football match, and it confidently describes a game from 2022. Frustrating, right? This is where RAG (Retrieval-Augmented Generation) comes in — it’s like giving your AI a real-time sports ticker instead of relying on old memories.",
    href: "https://medium.com/@snkp.careerwork/rag-unveiled-how-ai-is-learning-to-think-with-real-time-knowledge-b8be2d683200",
    source: "Medium",
  },
];

export function Writing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="writing" label="writing">
      <div className="space-y-2">
        {posts.map((post, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={post.title}
              className="border border-border rounded-xl bg-surface/80 overflow-hidden hover:border-accent/40 transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 hover:bg-surface/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset rounded-xl"
                aria-expanded={isOpen}
                aria-controls={`writing-content-${i}`}
                id={`writing-toggle-${i}`}
              >
                <h3 className="text-lg font-semibold text-white flex-1 min-w-0 pr-2">
                  {post.title}
                </h3>
                <span className="font-mono text-sm text-muted flex-shrink-0">
                  {post.date}
                </span>
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
                id={`writing-content-${i}`}
                role="region"
                aria-labelledby={`writing-toggle-${i}`}
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 border-t border-border/60">
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded"
                    >
                      {post.source} →
                    </a>
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
