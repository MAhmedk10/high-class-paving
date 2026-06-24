import CountUpModule from "react-countup";
const CountUp = ((CountUpModule as unknown as { default?: typeof CountUpModule }).default ?? CountUpModule) as typeof CountUpModule;
import { Award, HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PageHero } from "./services";
import { FinalCTA } from "./index";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honest pricing, clear communication and we stick to our word — every project." },
  { icon: Award, title: "Quality Workmanship", desc: "Premium materials and modern equipment deliver results that last." },
  { icon: Sparkles, title: "Professional Service", desc: "Punctual scheduling, clean work sites and respect for your property." },
  { icon: HeartHandshake, title: "Customer First", desc: "We treat every driveway like it's our own — because reputation is everything." },
];

function About() {
  usePageMeta("About — High-Class Paving & Sealcoating LLC", "Local Westminster, MD paving company built on quality workmanship, reliability and customer-first service.");
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title={<>Building better driveways across <span className="text-gradient-orange">Maryland.</span></>}
        sub="Local, family-minded and craftsmanship-obsessed. Here's what drives us."
        img={site.images.driveEntry}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elegant">
              <img src={site.images.sealTree} alt="High-Class Paving work" className="aspect-square w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Story</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              A premium standard for paving in <span className="text-gradient-orange">Westminster.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              High-Class Paving &amp; Sealcoating LLC was built on a simple idea: deliver work we'd be proud to put our name on, every time. From small residential driveways to larger commercial projects, our approach is the same — premium materials, modern equipment and craftsmanship that lasts.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We're local. We answer the phone. We show up on time. And every job is backed by our 1-year workmanship warranty.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Core Values"
            title={<>What we <span className="text-gradient-orange">stand for.</span></>}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-card p-8 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                    <v.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-asphalt asphalt-texture py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4 md:px-8">
          {[
            { v: 500, suf: "+", label: "Projects Completed" },
            { v: 100, suf: "%", label: "Happy Customers" },
            { v: 1, suf: " YR", label: "Warranty Coverage" },
            { v: 24, suf: "h", label: "Response Time" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl font-extrabold text-gradient-orange md:text-6xl">
                <CountUp end={s.v} duration={2} enableScrollSpy scrollSpyOnce />{s.suf}
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
}

export default About;
