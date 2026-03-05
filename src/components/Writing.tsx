import { Section } from "./Section";

const posts = [
  {
    title: "Building production LLM pipelines: lessons from the field",
    date: "2025",
    excerpt:
      "Practical takeaways from designing and deploying LLM fine-tuning and inference systems at scale.",
    href: "#",
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
    title: "MLOps on a budget: cost-effective model serving and monitoring",
    date: "2024",
    excerpt:
      "Strategies for scalable model deployment and refresh without blowing the cloud budget.",
    href: "#",
    source: "Dev.to",
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
