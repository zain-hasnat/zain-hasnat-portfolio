import { Wrench } from "lucide-react";
import { tools } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

export function Tools() {
  return (
    <section aria-label="Tools" className="py-20 sm:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading eyebrow="Tools" title="What I work with day to day" />
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tools.map((tool, i) => (
            <FadeIn key={tool} delay={i * 0.02}>
              <div className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-card text-center transition-shadow duration-200 hover:shadow-hover">
                <Wrench className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-[13px] text-foreground">{tool}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
