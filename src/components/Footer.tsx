import { Link } from "react-router-dom";
import { Phone, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-asphalt asphalt-texture">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={site.logo} alt={site.name} className="h-14 w-auto" />
            <div>
              <div className="font-display text-lg font-bold">High-Class Paving</div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary">& Sealcoating LLC</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Premium paving, resurfacing, sealcoating and tar &amp; chip throughout Hanover, PA and the surrounding Pennsylvania and Maryland areas. Backed by a 1-year workmanship warranty.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-primary/50">
              <Phone className="h-4 w-4 text-primary" /> {site.phone}
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <MapPin className="h-4 w-4 text-secondary" /> {site.area}
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Sealcoating</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Asphalt Replacement</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Asphalt Resurfacing</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Tar &amp; Chip</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-foreground">Reviews</Link></li>
            <li><Link to="/warranty" className="hover:text-foreground">Warranty</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> 1-Year Workmanship Warranty</p>
        </div>
      </div>
    </footer>
  );
}
