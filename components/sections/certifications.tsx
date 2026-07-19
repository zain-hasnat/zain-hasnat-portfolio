import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-16 border-t border-border py-20 sm:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading eyebrow="Certifications" title="Continued learning" />
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.05}>
              <Card className="flex h-full flex-col gap-3 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold leading-snug text-foreground">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-[13px] text-muted-foreground">{cert.issuer}</p>
                  {cert.year ? (
                    <p className="mt-0.5 text-[12px] text-muted-foreground">{cert.year}</p>
                  ) : null}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
