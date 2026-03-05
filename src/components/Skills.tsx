import { Section } from "./Section";

const groups = [
  {
    title: "Programming Languages",
    items: ["Python", "SQL", "R", "C++", "Java", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Nest.js"],
  },
  {
    title: "ML & AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "PySpark",
      "NLP (Transformers, BERT)",
      "LLMs (GPT-4, LLaMA, Gemini)",
      "LLM Fine-tuning",
      "Prompt Engineering",
      "CNNs",
      "LSTMs",
      "XGBoost",
      "Anomaly Detection",
      "Forecasting",
    ],
  },
  {
    title: "ML Infrastructure",
    items: [
      "Feature Engineering",
      "Model Training",
      "Model Serving",
      "Model Monitoring",
      "Hyperparameter Tuning",
      "Model Compression",
    ],
  },
  {
    title: "Cloud & MLOps",
    items: ["AWS SageMaker", "Azure ML", "GCP", "Databricks", "Docker", "Kubernetes", "CI/CD", "GPU Optimization"],
  },
  {
    title: "Visualization",
    items: ["Tableau", "Streamlit", "Power BI"],
  },
  
];

export function Skills() {
  return (
    <Section id="skills" label="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        {groups.map((g) => (
          <div key={g.title} className="space-y-2">
            <h3 className="font-mono text-sm text-muted/90">{g.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {g.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
