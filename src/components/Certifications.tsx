import { Section } from "./Section";

const certs = [
  "AWS Machine Learning Specialty",
  "Microsoft Power BI",
  "IBM AI Engineering Professional Certificate",
  "AWS Certified Cloud Practitioner",
];

export function Certifications() {
  return (
    <Section id="certifications" label="certifications">
      <div className="flex flex-wrap gap-3">
        {certs.map((name) => (
          <span
            key={name}
            className="px-4 py-2 rounded-lg bg-amber/10 border border-amber/30 text-amber text-base font-mono"
          >
            {name}
          </span>
        ))}
      </div>
    </Section>
  );
}
