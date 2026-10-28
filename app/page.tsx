import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { CaseStudies } from "@/components/sections/case-studies";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Tools } from "@/components/sections/tools";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CaseStudies />
      <Experience />
      <Skills />
      <Tools />
      <Certifications />
      <Contact />
    </>
  );
}
