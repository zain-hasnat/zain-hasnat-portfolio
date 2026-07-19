import { keyResults } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

export function KeyResults() {
  return (
    <section aria-label="Key results" className="border-y border-border bg-muted">
      <div className="container-x py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {keyResults.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.05}>
              <Card className="flex h-full flex-col items-start gap-1 px-5 py-6">
                <span className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {item.value}
                </span>
                <span className="text-[13px] text-muted-foreground">{item.label}</span>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
