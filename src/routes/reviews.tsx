import { Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./services";
import { FinalCTA } from "./index";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";

const reviews = [
  { text: "Very kind, stuck to his word for price, modern equipment and nicely taken care of. Fast but careful work with no damage to property. Professional from start to finish. I would use them again in the future." },
  { text: "Easy to deal with. Price was reasonable. Good quality work. Looks awesome." },
  { text: "Quick, efficient and professional. I would highly recommend them." },
  { text: "Showed up on time, finished when promised, and the driveway looks brand new. Worth every penny." },
  { text: "Honest pricing, no surprises. They protected the landscaping and cleaned up perfectly." },
  { text: "Excellent communication from estimate to clean-up. Highly recommend." },
];

function Reviews() {
  usePageMeta("Reviews — High-Class Paving & Sealcoating LLC", "Real reviews from Westminster, MD homeowners. Honest pricing, professional service and quality workmanship.");
  return (
    <Layout>
      <PageHero
        eyebrow="What Customers Say"
        title={<>5-star service. <span className="text-gradient-orange">Every time.</span></>}
        sub="Our reputation is built on referrals and repeat customers."
        img={site.images.driveEntry}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <div className="mx-auto mb-16 grid max-w-3xl grid-cols-3 overflow-hidden rounded-3xl border border-white/10 bg-card text-center">
              {[
                { v: "5.0", l: "Avg. Rating" },
                { v: "100%", l: "Recommend" },
                { v: "500+", l: "Projects" },
              ].map((s, i) => (
                <div key={s.l} className={`p-8 ${i < 2 ? "border-r border-white/10" : ""}`}>
                  <p className="font-display text-4xl font-extrabold text-gradient-orange md:text-5xl">{s.v}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-card p-7">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-primary" />)}
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary font-display font-bold text-primary-foreground">★</div>
                    <div>
                      <p className="text-sm font-semibold">Verified Customer</p>
                      <p className="text-xs text-muted-foreground">Westminster, MD</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </Layout>
  );
}

export default Reviews;
