import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-20 sm:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading
            eyebrow="Skills"
            title="What I specialize in"
            description="A focused set of disciplines spanning technical, local, content and AI search."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.04}>
              <Card className="h-full p-6">
                <h3 className="text-[15px] font-semibold text-foreground">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-muted px-2.5 py-1 text-[13px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
