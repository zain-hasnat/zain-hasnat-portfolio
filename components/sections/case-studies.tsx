import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

export function CaseStudies() {
  const priority = ["mhs-crane", "seal-daddy", "freedom-air", "barberino-nissan"];
  const orderedCaseStudies = [...caseStudies].sort((a, b) => {
    const aRank = priority.indexOf(a.slug);
    const bRank = priority.indexOf(b.slug);
    return (aRank < 0 ? priority.length : aRank) - (bRank < 0 ? priority.length : bRank);
  });

  return (
    <section id="case-studies" className="scroll-mt-16 border-t border-border py-20 sm:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading
            eyebrow="Case Studies"
            title="Selected work"
            description="Explore selected projects, the SEO challenges behind them, and the outcomes of my work across local, technical, content, and AI search."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {orderedCaseStudies.map((cs, i) => (
            <FadeIn key={cs.slug} delay={(i % 3) * 0.06}>
              <Card className={`group flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-hover ${i === 0 ? "border-accent/40 bg-gradient-to-br from-card to-muted/40 sm:col-span-2 lg:col-span-2" : ""}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[16px] font-semibold text-foreground">{cs.name}</h3>
                    <p className="mt-1 text-[13px] text-muted-foreground">{cs.industry}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>

                <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                  {cs.description}
                </p>

                {cs.results.length > 0 ? (
                  <dl
                    className="mt-5 grid gap-2 border-y border-border py-4"
                    style={{ gridTemplateColumns: `repeat(${cs.results.length}, minmax(0, 1fr))` }}
                  >
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                          {r.label}
                        </dt>
                        <dd className="mt-0.5 text-[14px] font-semibold text-foreground">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.disciplines.map((d) => (
                    <span
                      key={d}
                      className="rounded-md bg-muted px-2 py-1 text-[12px] text-muted-foreground"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent"
                >
                  View Case Study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
