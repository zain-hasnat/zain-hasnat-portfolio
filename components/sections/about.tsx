import { CheckCircle2 } from "lucide-react";
import { about } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20 sm:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading eyebrow="About" title="A little about my approach" />
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <FadeIn delay={0.05}>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="space-y-4 rounded-lg border border-border bg-card p-6">
              {about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-success" />
                  <span className="text-[14px] text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
