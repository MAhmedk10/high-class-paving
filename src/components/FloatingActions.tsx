import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(p * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div className="h-full bg-gradient-primary" style={{ width: `${progress}%` }} />
      </div>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow pulse-ring md:inline-flex"
        >
          Free Estimate <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={site.phoneHref}
          aria-label="Call now"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow pulse-ring"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}
