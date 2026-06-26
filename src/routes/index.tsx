import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUpModule from "react-countup";
const CountUp = ((CountUpModule as unknown as { default?: typeof CountUpModule }).default ?? CountUpModule) as typeof CountUpModule;
import {
  ArrowRight, Phone, ShieldCheck, Sparkles, Truck, Leaf, Clock,
  CheckCircle2, Star, MapPin, Wrench, Layers, Hammer, Mountain,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Hero3D } from "@/components/Hero3D";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";

const trustBadges = [
  "1-Year Warranty", "Oil-Based Sealcoating", "Professional Equipment",
  "Fast Response Times", "Quality Workmanship",
];

const marquee = [
  "1-Year Warranty", "Premium Materials", "Reliable Scheduling",
  "Professional Service", "Premium Local Business", "Free Estimates",
];

const whyUs = [
  { icon: Leaf, title: "Oil-Based Sealcoating", desc: "Long-lasting protection and superior durability that outperforms water-based alternatives." },
  { icon: Truck, title: "Modern Equipment", desc: "Professional-grade machinery for clean lines, even coverage and a flawless finish." },
  { icon: ShieldCheck, title: "Property Protection", desc: "Careful, respectful work that protects your landscaping, structures and surroundings." },
  { icon: Sparkles, title: "Professional Service", desc: "Honest pricing, punctual scheduling and clear communication from estimate to clean-up." },
];

const services = [
  { icon: Layers, title: "Sealcoating", desc: "Protect asphalt from weather, wear and deterioration with premium oil-based sealer.", img: site.images.sealTree },
  { icon: Hammer, title: "Asphalt Replacement", desc: "Complete tear-out and installation of brand-new, perfectly compacted asphalt.", img: site.images.driveHill },
  { icon: Wrench, title: "Asphalt Resurfacing", desc: "Restore the appearance and function of your driveway without a full replacement.", img: site.images.driveEntry },
  { icon: Mountain, title: "Tar & Chip", desc: "Affordable, attractive and durable surface solution with a distinctive textured finish.", img: site.images.crackRepair },
];

const reviews = [
  { name: "Verified Customer", text: "Very kind, stuck to his word for price, modern equipment and nicely taken care of. Fast but careful work with no damage to property. Professional from start to finish. I would use them again in the future." },
  { name: "Verified Customer", text: "Easy to deal with. Price was reasonable. Good quality work. Looks awesome." },
  { name: "Verified Customer", text: "Quick, efficient and professional. I would highly recommend them." },
];

const steps = [
  { n: "01", title: "Free Estimate", desc: "Share project details and receive transparent, honest pricing — no pressure, no surprises." },
  { n: "02", title: "Site Evaluation", desc: "We assess your surface, drainage and conditions to recommend the right solution." },
  { n: "03", title: "Professional Installation", desc: "Modern equipment, premium materials and meticulous craftsmanship from start to finish." },
  { n: "04", title: "Long-Term Protection", desc: "Backed by our 1-year workmanship warranty and ongoing maintenance guidance." },
];

function Home() {
  usePageMeta("High-Class Paving & Sealcoating LLC | Hanover, PA", "Premium asphalt paving, resurfacing, sealcoating and tar & chip in Hanover, PA and surrounding areas. 1-year warranty. Call 443-617-4992 for a free estimate.");
  return (
    <Layout>
      {/* HERO */}
      <section className="relative -mt-24 flex min-h-[88svh] items-center overflow-hidden bg-asphalt md:-mt-28 md:min-h-[92svh]">
        <div className="absolute inset-0">
          <img src={site.images.driveHill} alt="Freshly sealcoated driveway" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/75 to-asphalt/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-transparent to-asphalt/70" />
          <div className="absolute inset-0 asphalt-texture opacity-30" />
          <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-16 md:px-8 md:pt-32">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" /> Hanover, Pennsylvania
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl lg:text-[5.25rem]"
            >
              Premium Paving<br />&amp; <span className="font-serif italic text-gradient-orange">Sealcoating</span><br />
              <span className="text-foreground">Built To Last.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Protect, restore and enhance your property with professional paving, resurfacing, sealcoating and tar &amp; chip services throughout Hanover, PA and the surrounding Pennsylvania and Maryland areas.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow btn-shine">
                Get Free Estimate <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold backdrop-blur hover:border-primary/50">
                <Phone className="h-4 w-4 text-primary" /> Call {site.phone}
              </a>
            </motion.div>

            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-3">
              {trustBadges.map((b) => (
                <li key={b} className="flex items-center gap-2 text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {b}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative overflow-hidden border-y border-white/10 bg-asphalt py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-wider text-foreground/30">
              {t} <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-asphalt via-background to-asphalt" />
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<>The difference is in the <span className="text-gradient-orange">details.</span></>}
            description="Premium materials, modern equipment and craftsmanship you can trust — without the hassle of dealing with the wrong contractor."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-card p-8 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                    <w.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title={<>Full-service paving, <span className="text-gradient-blue">done right.</span></>}
            description="From fresh installations to long-term protection, we handle every aspect of your asphalt surface."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Link to="/services" className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/40 to-transparent" />
                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                      <s.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WARRANTY BAND */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <img src={site.images.driveEntry} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/90 to-asphalt/80" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:px-8">
          <Reveal>
            <div className="relative mx-auto flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
              <div className="absolute inset-4 rounded-full border-2 border-primary/40" />
              <div className="absolute inset-8 rounded-full border border-primary/30" />
              <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full bg-gradient-primary text-center text-primary-foreground shadow-glow md:h-52 md:w-52">
                <ShieldCheck className="h-10 w-10" />
                <p className="mt-2 font-display text-3xl font-extrabold leading-none">1 YR</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest">Warranty</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Built On Trust</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Every project backed by a <span className="text-gradient-orange">1-year warranty.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We stand behind every job. If something isn't right within your warranty period, we'll make it right — no excuses, no runaround. That's the High-Class standard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/warranty" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow btn-shine">
                Learn About Our Warranty <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:border-primary/50">
                Get Estimate
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title={<>Simple, transparent, <span className="text-gradient-orange">four steps.</span></>}
          />
          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
            <div className="grid gap-6 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.1}>
                  <div className="relative rounded-3xl border border-white/10 bg-card p-7">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary font-display text-xl font-extrabold text-primary-foreground shadow-glow">
                        {s.n}
                      </span>
                      <h3 className="font-display text-lg font-bold">{s.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-asphalt asphalt-texture py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4 md:px-8">
          {[
            { v: 500, suf: "+", label: "Projects Completed" },
            { v: 100, suf: "%", label: "Customer First" },
            { v: 1, suf: " YR", label: "Workmanship Warranty" },
            { v: 24, suf: "h", label: "Estimate Response" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div>
                <div className="font-display text-5xl font-extrabold text-gradient-orange md:text-6xl">
                  <CountUp end={s.v} duration={2} enableScrollSpy scrollSpyOnce />{s.suf}
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Customer Reviews"
            title={<>Trusted by homeowners <span className="text-gradient-blue">across PA & Maryland.</span></>}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-card p-7">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-primary" />)}
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary font-display font-bold text-primary-foreground">★</div>
                    <div>
                      <p className="text-sm font-semibold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">Hanover, PA</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Service Area</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Proudly serving <span className="text-gradient-orange">Hanover, PA &amp; beyond.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Based in Hanover, Pennsylvania, we serve communities throughout Pennsylvania, Maryland, and surrounding areas with professional paving services.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {["Hanover", "York", "Littlestown", "Gettysburg", "New Oxford", "Manheim", "Baltimore", "Westminster"].map((c) => (
                <li key={c} className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {c}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-10 shadow-elegant">
              <div className="absolute inset-0 asphalt-texture opacity-50" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Response Time</span>
                </div>
                <p className="mt-3 font-display text-6xl font-extrabold text-gradient-orange">24h</p>
                <p className="mt-2 text-muted-foreground">Free estimate response within one business day.</p>
                <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                  {["York", "Adams", "Lancaster"].map((c) => (
                    <div key={c} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-display text-sm font-bold">{c}</p>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">County</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-asphalt via-background to-asphalt" />
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute inset-0 asphalt-texture opacity-30" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Ready to start?
          </span>
          <h2 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] md:text-7xl">
            Ready to upgrade<br />your <span className="font-serif text-gradient-orange">driveway?</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Free estimates. Honest pricing. Premium results. Get started in less than 60 seconds.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow btn-shine">
              Get Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold hover:border-primary/50">
              <Phone className="h-4 w-4 text-primary" /> Call {site.phone}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Hero3D />
        </Reveal>
      </div>
    </section>
  );
}

export default Home;
