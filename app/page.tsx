import { Hero } from "@/components/sections/hero";
import { KeyResults } from "@/components/sections/key-results";
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
      <KeyResults />
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
