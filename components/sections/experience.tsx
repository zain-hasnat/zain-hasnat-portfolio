import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-20 sm:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            description="A timeline of the teams and clients I've helped grow through search."
          />
        </FadeIn>

        <ol className="mt-12 space-y-10 border-l border-border pl-8 sm:pl-10">
          {experience.map((item, i) => (
            <li key={item.company} className="relative">
              <span
                className="absolute -left-[calc(2rem+7px)] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[var(--background)] bg-accent sm:-left-[calc(2.5rem+7px)]"
                aria-hidden="true"
              />
              <FadeIn delay={i * 0.05}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                    <Briefcase className="h-4 w-4 text-accent" />
                    {item.role} · {item.company}
                  </h3>
                  <span className="text-[13px] text-muted-foreground">{item.period}</span>
                </div>
                <p className="mt-1 text-[13px] text-muted-foreground">{item.location}</p>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.achievements.map((a, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[14px] text-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
