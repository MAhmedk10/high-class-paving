import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./services";
import { FinalCTA } from "./index";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";

const covered = [
  "Workmanship defects on installed asphalt",
  "Sealcoating finish quality",
  "Edge and transition integrity",
  "Drainage and grading work we performed",
  "Material application issues",
  "Premature surface failure due to install error",
];

function Warranty() {
  usePageMeta("1-Year Workmanship Warranty | High-Class Paving", "Every paving and sealcoating project is backed by our 1-year workmanship warranty. Here's what's covered.");
  return (
    <Layout>
      <PageHero
        eyebrow="Built On Trust"
        title={<>Every project, <span className="text-gradient-orange">guaranteed.</span></>}
        sub="We back every paving and sealcoating project with a 1-year workmanship warranty — because confidence in the work is the standard."
        img={site.images.driveHill}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:px-8">
          <Reveal>
            <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
              <div className="absolute inset-4 rounded-full border-2 border-primary/40" />
              <div className="absolute inset-10 rounded-full border border-primary/30" />
              <div className="relative flex h-52 w-52 flex-col items-center justify-center rounded-full bg-gradient-primary text-center text-primary-foreground shadow-glow md:h-64 md:w-64">
                <ShieldCheck className="h-12 w-12" />
                <p className="mt-2 font-display text-4xl font-extrabold leading-none">1 YR</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest">Warranty</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              What our warranty <span className="text-gradient-orange">covers.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              If something isn't right with our workmanship within one year of project completion, contact us and we'll make it right. No excuses, no runaround.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {covered.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-card p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <FinalCTA />
    </Layout>
  );
}

export default Warranty;
