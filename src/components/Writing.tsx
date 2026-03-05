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
  return (
    <Section id="writing" label="writing">
      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.href}
            target={post.href.startsWith("http") ? "_blank" : undefined}
            rel={post.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="block border border-border rounded-xl bg-surface/80 p-6 hover:border-accent/40 transition-colors group"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <span className="font-mono text-sm text-muted">{post.date}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              {post.excerpt}
            </p>
            <span className="font-mono text-xs text-accent">{post.source} →</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
