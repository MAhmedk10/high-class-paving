import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./services";
import { FinalCTA } from "./index";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const cats = ["All", "Sealcoating", "Resurfacing", "Installation", "Repair", "Tar & Chip"] as const;
type Cat = typeof cats[number];

const items = [
  { cat: "Installation" as Cat, img: site.images.driveHill, title: "Hillside Driveway Install" },
  { cat: "Sealcoating" as Cat, img: site.images.sealTree, title: "Wraparound Sealcoating" },
  { cat: "Resurfacing" as Cat, img: site.images.driveEntry, title: "Estate Entrance Resurface" },
  { cat: "Repair" as Cat, img: site.images.crackRepair, title: "Crack Repair & Sealing" },
  { cat: "Sealcoating" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F62bd63cfbd0a4c858933943f39c2fef0?format=webp&width=800&height=1200", title: "Fresh Seal Coat Application" },
  { cat: "Sealcoating" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2Fb79fe0d255c842fa936fc5f53b890dce?format=webp&width=800&height=1200", title: "Professional Sealcoating" },
  { cat: "Sealcoating" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F852ddd53c0f640e5bb57d94b85e47dd0?format=webp&width=800&height=1200", title: "Full Driveway Sealcoat" },
  { cat: "Sealcoating" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F84777fff90f2465ebd5f3676f118a305?format=webp&width=800&height=1200", title: "Quality Sealcoating Finish" },
  { cat: "Repair" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2Fe74dbd733bc94a6aabbd7849cbc7c477?format=webp&width=800&height=1200", title: "Crack Filling Process" },
  { cat: "Repair" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F95b245be7ce84ee3a4e35ab267505288?format=webp&width=800&height=1200", title: "Professional Crack Repair" },
  { cat: "Repair" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2Fc1b5335691814c40b3773b8cce662005?format=webp&width=800&height=1200", title: "Crack Sealing Application" },
  { cat: "Repair" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2Fdf173dcf8c594665ae5c1bf27f99a945?format=webp&width=800&height=1200", title: "Quality Crack Repair Work" },
  { cat: "Installation" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F2879411f8ef241e6861b485f775d3984?format=webp&width=800&height=1200", title: "New Asphalt Driveway Install" },
  { cat: "Installation" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2Fdca6a4a975e84d91a298dea285346153?format=webp&width=800&height=1200", title: "Fresh Asphalt Installation" },
  { cat: "Installation" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F848ca3262db64f3bbaa4b9f1bfe927b9?format=webp&width=800&height=1200", title: "Professional Asphalt Paving" },
  { cat: "Tar & Chip" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2Fe368d9d8e3984693bbc7efb4eb954c24?format=webp&width=800&height=1200", title: "Elegant Tar & Chip Driveway" },
  { cat: "Tar & Chip" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F66648e2fbd6d4ae383dfe2987325b936?format=webp&width=800&height=1200", title: "Rustic Tar & Chip Surface" },
  { cat: "Tar & Chip" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F62fbc1ab54fa488c941dca1dd97852c8?format=webp&width=800&height=1200", title: "Before & After Tar & Chip" },
  { cat: "Tar & Chip" as Cat, img: "https://cdn.builder.io/api/v1/image/assets%2Fd4b2815f9b934b2ab9c2447b100ddfb1%2F19de1a3c7fd5488497c52007bc5c37bc?format=webp&width=800&height=1200", title: "Premium Tar & Chip Installation" },
];

function Gallery() {
  usePageMeta("Gallery — Paving & Sealcoating Projects | High-Class Paving", "Real before & after photos of sealcoating, resurfacing and asphalt installation projects in Hanover, PA and surrounding areas.");
  const [active, setActive] = useState<Cat>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < filtered.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

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

          <div className="grid auto-rows-[280px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((it, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => handleImageClick(i)}
                  className="group relative h-full overflow-hidden rounded-3xl border border-white/10 cursor-pointer w-full text-left"
                >
                  <img src={it.img} alt={it.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">{it.cat}</span>
                    <p className="font-display text-lg font-bold">{it.title}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 border-0 bg-black/95 rounded-2xl overflow-hidden">
          {selectedIndex !== null && (
            <div className="relative w-full h-[70vh] flex flex-col">
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-lg transition"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex-1 flex items-center justify-center relative">
                <img
                  src={filtered[selectedIndex].img}
                  alt={filtered[selectedIndex].title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="px-6 py-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">{filtered[selectedIndex].cat}</span>
                  <p className="text-white font-display text-lg font-bold mt-1">{filtered[selectedIndex].title}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={selectedIndex === 0}
                    className="p-2 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={selectedIndex === filtered.length - 1}
                    className="p-2 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <FinalCTA />
    </Layout>
  );
}

export default Gallery;
