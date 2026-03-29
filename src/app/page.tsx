import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";
import { Nav } from "@/components/Nav";
import { Summary } from "@/components/Summary";
import { Approach } from "@/components/Approach";
import { Experience } from "@/components/Experience";
import { Freelance } from "@/components/Freelance";
import { Volunteering } from "@/components/Volunteering";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Publications } from "@/components/Publications";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { TelemetryHud } from "@/components/TelemetryHud";

export default function Home() {
  return (
    <main className="min-w-0 overflow-x-hidden pb-12 sm:pb-14">
      <Nav />
      <Hero />
      <MetricsStrip />
      <Summary />
      <Approach />
      <Experience />
      <Volunteering />
      <Freelance />
      <Skills />
      <Certifications />
      <Projects />
      <Education />
      <Publications />
      <Writing />
      <section id="contact">
        <Contact />
      </section>
      <TelemetryHud />
    </main>
  );
}
