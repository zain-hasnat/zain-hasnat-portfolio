import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, MessageCircle, Download, ArrowRight } from "lucide-react";
import { hero, siteConfig } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";

export function Hero() {
  return (
    <section id="home" className="scroll-mt-16 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_320px]">
        <FadeIn>
          <Badge>{hero.badge}</Badge>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.heading}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.subheading}
          </p>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#case-studies"
              className={buttonVariants({ variant: "accent", size: "lg", className: "group" })}
            >
              View Case Studies
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="order-2 mx-auto w-full max-w-[280px] lg:order-none lg:mx-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border bg-muted shadow-subtle">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              sizes="(max-width: 1024px) 60vw, 280px"
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
