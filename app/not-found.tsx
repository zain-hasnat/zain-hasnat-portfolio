import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-[13px] font-medium uppercase tracking-wide text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Page not found</h1>
      <p className="mt-3 max-w-md text-[15px] text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link href="/" className={buttonVariants({ variant: "accent", className: "mt-8" })}>
        Back to home
      </Link>
    </div>
  );
}
