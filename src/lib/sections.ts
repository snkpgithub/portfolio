export const NAV_SECTIONS = [
  "summary",
  "approach",
  "experience",
  "volunteering",
  "freelance",
  "skills",
  "certifications",
  "projects",
  "education",
  "publications",
  "writing",
  "contact",
] as const;

export type NavSectionId = (typeof NAV_SECTIONS)[number];

export const NAV_LABELS: Record<NavSectionId, string> = {
  summary: "Summary",
  approach: "Approach",
  experience: "Experience",
  volunteering: "Volunteering",
  freelance: "Freelance",
  skills: "Skills",
  certifications: "Certifications",
  projects: "Projects",
  education: "Education",
  publications: "Publications",
  writing: "Writing",
  contact: "Contact",
};

/** Hero / above-the-fold — HUD when scroll spy has no intersecting section. */
export const HERO_TELEMETRY = "!NAV_SECTIONS.some(isInView) && <Hero />";

/** One-line coder-style status for the telemetry HUD (scroll spy). */
export const SECTION_TELEMETRY: Record<NavSectionId, string> = {
  summary: "// <Summary /> — TL;DR",
  approach: "designDoc('llm-systems', { eval, prod })",
  experience: "roles.map((r) => ({ ...r, current: r.end == null }))",
  volunteering: "volunteering.filter((v) => v.impact != null)",
  freelance: "gigs.flatMap((g) => g.stack)",
  skills: "const SKILLS = [...] as const",
  certifications: "certs.every((c) => c.verified)",
  projects: "repos.map((p) => ({ ...p, live: p.url }))",
  education: "degrees.sort((a, b) => b.year - a.year)",
  publications: "papers.map((p) => p.doi ?? p.title)",
  writing: "bundle('writing/*.md')",
  contact: "[mail, tel, li, gh].forEach((h) => open(h))",
};
