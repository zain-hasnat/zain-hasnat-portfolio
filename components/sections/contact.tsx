import Link from "next/link";
import { Mail, Linkedin, MessageCircle, Download } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: siteConfig.whatsapp,
    icon: MessageCircle,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-border py-20 sm:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s discuss your next SEO opportunity"
            description="I’m open to remote SEO opportunities and freelance projects. If you’re looking for support with technical SEO, local search, or content optimization, I’d be glad to connect."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contactLinks.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.05}>
              <Link
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              >
                <Card className="flex items-center gap-4 p-5 transition-shadow duration-200 hover:shadow-hover">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-muted">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[13px] text-muted-foreground">{item.label}</p>
                    <p className="text-[15px] font-medium text-foreground">{item.value}</p>
                  </div>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <Link
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-accent"
          >
            <Download className="h-4 w-4" />
            Download my resume
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
