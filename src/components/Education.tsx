import { Section } from "./Section";

const degrees = [
  {
    school: "University at Buffalo",
    degree: "Masters, Data Science",
    period: "Jul 2023 - Dec 2024",
    location: "USA",
    note: "GPA: 3.8",
  },
  {
    school: "International Institute of Information Technology-Bangalore",
    degree: "Associate's degree, Data Science",
    period: "Dec 2021 - Jan 2023",
    location: "India",
    note: null,
  },
  {
    school: "M. S. Ramaiah University of Applied Sciences",
    degree: "Bachelor of Technology, Electronics and Communication Engineering",
    period: "Aug 2018 - May 2022",
    location: "India",
    note: null,
  },
];

export function Education() {
  return (
    <Section id="education" label="education">
      <div className="space-y-6">
        {degrees.map((d) => (
          <div
            key={d.school}
            className="border border-border rounded-xl bg-surface/80 p-7"
          >
            <h3 className="text-xl font-semibold text-white">{d.school}</h3>
            <p className="text-accent font-medium text-lg">{d.degree}</p>
            <p className="font-mono text-base text-muted mt-1">
              {d.period}
              {d.location && ` · ${d.location}`}
              {d.note && ` · ${d.note}`}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
