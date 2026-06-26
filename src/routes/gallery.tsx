import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./services";
import { FinalCTA } from "./index";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";

const cats = ["All", "Sealcoating", "Resurfacing", "Installation", "Repair"] as const;
type Cat = typeof cats[number];

const items = [
  { cat: "Installation" as Cat, img: site.images.driveHill, title: "Hillside Driveway Install", span: "md:col-span-2 md:row-span-2" },
  { cat: "Sealcoating" as Cat, img: site.images.sealTree, title: "Wraparound Sealcoating", span: "md:row-span-2" },
  { cat: "Resurfacing" as Cat, img: site.images.driveEntry, title: "Estate Entrance Resurface", span: "md:col-span-2" },
  { cat: "Repair" as Cat, img: site.images.crackRepair, title: "Crack Repair & Sealing", span: "md:col-span-1" },
  { cat: "Sealcoating" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F62bd63cfbd0a4c858933943f39c2fef0?format=webp&width=800&height=1200", title: "Fresh Seal Coat Application", span: "md:col-span-1" },
  { cat: "Sealcoating" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2Fb79fe0d255c842fa936fc5f53b890dce?format=webp&width=800&height=1200", title: "Professional Sealcoating", span: "md:col-span-1 md:row-span-2" },
  { cat: "Sealcoating" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F852ddd53c0f640e5bb57d94b85e47dd0?format=webp&width=800&height=1200", title: "Full Driveway Sealcoat", span: "md:col-span-1" },
  { cat: "Sealcoating" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F84777fff90f2465ebd5f3676f118a305?format=webp&width=800&height=1200", title: "Quality Sealcoating Finish", span: "md:col-span-2" },
];

function Gallery() {
  usePageMeta("Gallery — Paving & Sealcoating Projects | High-Class Paving", "Real before & after photos of sealcoating, resurfacing and asphalt installation projects in Hanover, PA and surrounding areas.");
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <Layout>
      <PageHero
        eyebrow="Portfolio"
        title={<>Real work, <span className="text-gradient-orange">real results.</span></>}
        sub="A look at recent residential paving and sealcoating projects across Hanover, PA and surrounding Pennsylvania and Maryland communities."
        img={site.images.sealTree}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    active === c
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "border border-white/10 bg-white/5 hover:border-primary/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 md:grid-flow-dense">
            {filtered.map((it, i) => (
              <Reveal key={i} delay={i * 0.05} className={it.span ?? ""}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10">
                  <img src={it.img} alt={it.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">{it.cat}</span>
                    <p className="font-display text-lg font-bold">{it.title}</p>
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

export default Gallery;
