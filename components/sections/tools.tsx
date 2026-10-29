import { tools } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

export function Tools() {
  return (
    <section aria-label="Tools" className="py-16 sm:py-20">
      <div className="container-x">
        <FadeIn>
          <SectionHeading
            eyebrow="Tools"
            title="Tools I use"
            description="A practical toolkit for research, technical analysis, measurement, and content workflows."
          />
        </FadeIn>

        <div className="mt-8 flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <FadeIn key={tool} delay={i * 0.02}>
              <div className="rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-muted">
                {tool}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
