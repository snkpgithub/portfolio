import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Summary } from "@/components/Summary";
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

export default function Home() {
  return (
    <main className="min-w-0 overflow-x-hidden">
      <Nav />
      <Hero />
      <Summary />
      <Freelance />
      <Experience />
      <Volunteering />
      <Skills />
      <Certifications />
      <Projects />
      <Education />
      <Publications />
      <Writing />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
