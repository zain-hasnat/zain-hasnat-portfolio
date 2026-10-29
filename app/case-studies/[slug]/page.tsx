import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { caseStudies, siteConfig } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};

  const title = `${cs.name} Case Study — ${cs.industry}`;
  const url = `${siteConfig.url}/case-studies/${cs.slug}`;

  return {
    title,
    description: cs.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: cs.description,
      url,
      type: "article",
      images: [{ url: cs.images[0]?.src ?? "/images/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cs.description,
      images: [cs.images[0]?.src ?? "/images/og-image.jpg"],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: `${siteConfig.url}/#case-studies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cs.name,
        item: `${siteConfig.url}/case-studies/${cs.slug}`,
      },
    ],
  };

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${cs.name} — SEO Case Study`,
    about: cs.industry,
    description: cs.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: cs.disciplines.join(", "),
  };

  return (
    <article className="py-16 sm:py-24">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <div className="container-x max-w-4xl">
        <FadeIn>
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to case studies
          </Link>

          <p className="mt-6 text-[13px] font-medium uppercase tracking-wide text-accent">
            {cs.industry}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {cs.name}
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">{cs.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {cs.disciplines.map((d) => (
              <span
                key={d}
                className="rounded-md border border-border bg-muted px-2.5 py-1 text-[13px] text-muted-foreground"
              >
                {d}
              </span>
            ))}
          </div>
        </FadeIn>

        {cs.images[0] ? (
          <FadeIn delay={0.05}>
            <figure className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src={cs.images[0].src}
                alt={cs.images[0].caption}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-contain"
              />
            </figure>
            <figcaption className="mt-2 text-[13px] text-muted-foreground">
              {cs.images[0].caption}
            </figcaption>
          </FadeIn>
        ) : null}

        {cs.results.length > 0 ? (
          <FadeIn delay={0.1}>
            <div
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {cs.results.map((r) => (
                <div key={r.label} className="rounded-xl border border-border bg-card p-5">
                  <dt className="text-[12px] uppercase tracking-wide text-muted-foreground">
                    {r.label}
                  </dt>
                  <dd className="mt-1 text-xl font-semibold text-foreground">{r.value}</dd>
                </div>
              ))}
            </div>
          </FadeIn>
        ) : null}

        <div className="mt-10 space-y-10">
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Overview</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{cs.overview}</p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">The Challenge</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{cs.challenge}</p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">The Approach</h2>
              <ul className="mt-3 space-y-3">
                {cs.approach.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-success" />
                    <span className="text-[15px] leading-relaxed text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          {cs.images.length > 1 ? (
            <FadeIn>
              <section>
                <h2 className="text-xl font-semibold text-foreground">Evidence &amp; Screenshots</h2>
                <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {cs.images.slice(1).map((img) => (
                    <figure key={img.src}>
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-muted">
                        <Image
                          src={img.src}
                          alt={img.caption}
                          fill
                          sizes="(max-width: 640px) 100vw, 360px"
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </FadeIn>
          ) : null}

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">The Outcome</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{cs.outcome}</p>
            </section>
          </FadeIn>
        </div>

        <FadeIn>
          <Card className="mt-14 flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-[16px] font-semibold text-foreground">
                Have a similar project in mind?
              </h3>
              <p className="mt-1 text-[14px] text-muted-foreground">
                Let&apos;s talk about how I can help you grow through search.
              </p>
            </div>
            <Link href="/#contact" className={buttonVariants({ variant: "accent" })}>
              Get in touch
            </Link>
          </Card>
        </FadeIn>
      </div>
    </article>
  );
}
