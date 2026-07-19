import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-x flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[14px] font-medium text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-[13px] text-muted-foreground">
            Built with Next.js, TypeScript &amp; Tailwind CSS. Optimized for SEO and AI Search.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <MessageCircle className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-[18px] w-[18px]" />
          </Link>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="container-x text-center text-[12px] text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
