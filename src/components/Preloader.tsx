import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

const KEY = "hcp_preloaded";

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const already = sessionStorage.getItem(KEY);
    if (already) {
      setDone(true);
      return;
    }
    setShown(true);
    sessionStorage.setItem(KEY, "1");
    let raf: number;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / 1800) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted || !shown) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-asphalt asphalt-texture"
        >
          {/* Animated road stripes background */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 overflow-hidden opacity-30">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="road-stripes h-3 w-[200%]"
              style={{ marginTop: "4rem" }}
            />
          </div>

          {/* Pulsing rings */}
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-primary/40"
            />
            <motion.img
              src={site.logo}
              alt={site.name}
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-44 w-auto md:h-60 drop-shadow-[0_0_60px_oklch(0.74_0.16_50_/_0.6)]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 w-[280px] md:w-[400px]"
          >
            <div className="relative h-[3px] overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-primary"
                style={{ width: `${progress}%` }}
              />
              <motion.div
                className="absolute inset-y-0 left-0 w-12 bg-white/40 blur-sm"
                animate={{ x: [`-100%`, `${progress * 4}%`] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.4em] text-white/60">
              <span>Paving the way</span>
              <span className="text-primary">{Math.floor(progress)}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
