import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Layers, Hammer, Wrench, Mountain } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "./index";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";

const services = [
  {
    icon: Layers, title: "Sealcoating", img: site.images.sealTree,
    desc: "Premium oil-based sealcoating that protects asphalt from UV, water, oil and weather damage — extending the life of your driveway by years.",
    benefits: ["Premium oil-based sealer", "UV & water protection", "Restores deep black finish", "Extends asphalt life 3-5x"],
    process: ["Surface clean & prep", "Edge cutting", "Crack & oil spot treatment", "Two even sealer coats"],
  },
  {
    icon: Hammer, title: "Asphalt Tear-Out & Replacement", img: site.images.driveHill,
    desc: "Complete removal and installation of new asphalt for driveways and lots that are beyond repair — built on a properly compacted base for decades of service.",
    benefits: ["Full demolition & haul-away", "Properly compacted sub-base", "Premium hot-mix asphalt", "Clean transitions to concrete"],
    process: ["Demo & removal", "Grading & base compaction", "Hot-mix asphalt install", "Roller compaction & finishing"],
  },
  {
    icon: Wrench, title: "Asphalt Resurfacing", img: site.images.driveEntry,
    desc: "Restore the look and function of an aging driveway without the cost of full replacement. A new wear layer over a stable base, neatly tied into existing edges.",
    benefits: ["Cost-effective restoration", "Smooths cracks & wear", "Fresh, like-new finish", "Faster than replacement"],
    process: ["Surface evaluation", "Crack repair", "Tack coat application", "New asphalt overlay"],
  },
  {
    icon: Mountain, title: "Tar & Chip Installation", img: site.images.crackRepair,
    desc: "Affordable, distinctive and durable surface combining liquid asphalt and embedded stone — a classic country-driveway look with modern durability.",
    benefits: ["Distinctive textured finish", "Excellent traction", "Lower upfront cost", "Naturally rustic appearance"],
    process: ["Surface prep", "Liquid asphalt application", "Stone chip embedding", "Roller compaction"],
  },
];

function Services() {
  usePageMeta("Services — Paving, Sealcoating, Resurfacing | High-Class Paving", "Sealcoating, asphalt replacement, resurfacing and tar & chip in Westminster, MD. Premium workmanship with a 1-year warranty.");
  return (
    <Layout>
      <PageHero
        eyebrow="What We Do"
        title={<>Full-service paving, <span className="text-gradient-orange">done right.</span></>}
        sub="Premium materials, modern equipment and meticulous craftsmanship — all backed by our 1-year workmanship warranty."
        img={site.images.driveHill}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-6 md:px-8">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elegant">
                  <img src={s.img} alt={s.title} className="aspect-[5/4] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt/70 to-transparent" />
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                    <s.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Service 0{i + 1}</span>
                  <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">{s.title}</h2>
                  <p className="mt-5 text-lg text-muted-foreground">{s.desc}</p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">Benefits</h4>
                      <ul className="mt-3 space-y-2 text-sm">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-secondary">Process</h4>
                      <ol className="mt-3 space-y-2 text-sm">
                        {s.process.map((p, k) => (
                          <li key={p} className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-[10px] font-bold text-secondary">{k + 1}</span>
                            {p}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow btn-shine">
                    Get an Estimate <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCTA />
    </Layout>
  );
}

export function PageHero({ eyebrow, title, sub, img }: { eyebrow: string; title: React.ReactNode; sub: string; img: string }) {
  return (
    <section className="relative -mt-24 overflow-hidden pt-36 pb-24 md:-mt-28 md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <img src={img} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-asphalt/85 via-asphalt/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt/60 via-transparent to-asphalt/60" />
        <div className="absolute inset-0 asphalt-texture opacity-30" />
        {/* Decorative blurred glow */}
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] md:text-7xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{sub}</p>
          <div className="mt-10 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/40">
            <span className="h-px w-12 bg-white/20" /> Westminster, MD <span className="h-px w-12 bg-white/20" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;
