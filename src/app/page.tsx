import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Publications } from "@/components/publications";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { References } from "@/components/references";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-24">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Publications />
      <Projects />
      <Skills />
      <Certifications />
      <References />
      <Contact />
    </div>
  );
}
