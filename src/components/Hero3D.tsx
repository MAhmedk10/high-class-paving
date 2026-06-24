import { motion } from "framer-motion";

/**
 * Premium 3D paving scene — animated isometric driveway with a road roller,
 * dashed road stripes, and orbiting craft badges. Pure CSS / framer-motion.
 */
export function Hero3D() {
  return (
    <div
      className="relative mx-auto h-[380px] w-[380px] md:h-[460px] md:w-[460px]"
      style={{ perspective: "1400px" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-primary opacity-20 blur-3xl" />

      {/* Isometric driveway plane */}
      <motion.div
        initial={{ opacity: 0, rotateX: 70, rotateZ: -30 }}
        animate={{ opacity: 1, rotateX: 58, rotateZ: -30 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="relative h-[240px] w-[300px] md:h-[300px] md:w-[360px] overflow-hidden rounded-[28px] border border-white/10 shadow-elegant"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.16 0.005 250) 0%, oklch(0.10 0.005 250) 100%)",
          }}
        >
          {/* Asphalt grain */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px), radial-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px)",
              backgroundSize: "10px 10px, 6px 6px",
              backgroundPosition: "0 0, 3px 3px",
            }}
          />

          {/* Center dashed lane line — animated downward */}
          <div className="absolute inset-y-0 left-1/2 w-[10px] -translate-x-1/2 overflow-hidden">
            <motion.div
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="h-[200%] w-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(180deg, var(--color-primary) 0 22px, transparent 22px 46px)",
              }}
            />
          </div>

          {/* Edge stripes */}
          <div className="absolute inset-y-0 left-3 w-[3px] bg-white/15" />
          <div className="absolute inset-y-0 right-3 w-[3px] bg-white/15" />

          {/* Wet sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent" />
        </div>
      </motion.div>

      {/* Road roller — floats above the plane */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
        style={{ transform: "translateZ(80px)" }}
      >
        <Roller />
      </motion.div>

      {/* Orbiting ring with badges */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-primary/25"
      >
        <Badge className="absolute -top-1.5 left-1/2 -translate-x-1/2" label="1 YR" />
        <Badge className="absolute top-1/2 -right-3 -translate-y-1/2" label="HD" small />
        <Badge className="absolute bottom-3 left-3" label="MD" small />
        <Badge className="absolute bottom-6 right-8" label="PRO" small />
      </motion.div>

      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -16, 0], opacity: [0.15, 0.85, 0.15] }}
          transition={{ duration: 3 + (i % 4) * 0.5, repeat: Infinity, delay: i * 0.3 }}
          className="absolute h-1 w-1 rounded-full bg-primary"
          style={{ left: `${10 + i * 10}%`, top: `${15 + (i % 3) * 28}%` }}
        />
      ))}
    </div>
  );
}

function Badge({ label, className, small }: { label: string; className?: string; small?: boolean }) {
  return (
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      className={className}
    >
      <div
        className={`flex items-center justify-center rounded-2xl border border-primary/40 bg-asphalt/90 font-display font-semibold uppercase tracking-[0.2em] text-primary shadow-glow backdrop-blur ${
          small ? "h-10 w-10 text-[8px]" : "h-12 w-12 text-[9px]"
        }`}
      >
        {label}
      </div>
    </motion.div>
  );
}

function Roller() {
  return (
    <svg width="180" height="120" viewBox="0 0 180 120" fill="none" className="drop-shadow-[0_18px_30px_oklch(0_0_0_/_0.6)]">
      <defs>
        <linearGradient id="cab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.86 0.12 95)" />
          <stop offset="1" stopColor="oklch(0.62 0.13 75)" />
        </linearGradient>
        <linearGradient id="drum" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.35 0.01 250)" />
          <stop offset="1" stopColor="oklch(0.18 0.005 250)" />
        </linearGradient>
      </defs>
      {/* Chassis */}
      <rect x="44" y="36" width="92" height="34" rx="8" fill="url(#cab)" />
      {/* Cabin window */}
      <rect x="78" y="14" width="34" height="28" rx="6" fill="oklch(0.55 0.18 260)" opacity="0.9" />
      <rect x="80" y="16" width="30" height="24" rx="4" fill="oklch(0.2 0.04 260)" />
      {/* Top light */}
      <circle cx="95" cy="10" r="3" fill="oklch(0.86 0.12 95)">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      {/* Front drum */}
      <g>
        <ellipse cx="146" cy="86" rx="22" ry="22" fill="url(#drum)" />
        <ellipse cx="146" cy="86" rx="14" ry="14" fill="none" stroke="oklch(1 0 0 / 0.15)" strokeWidth="1" />
        <g style={{ transformOrigin: "146px 86px" }}>
          <animateTransform attributeName="transform" type="rotate" from="0 146 86" to="360 146 86" dur="3s" repeatCount="indefinite" />
          <line x1="146" y1="68" x2="146" y2="104" stroke="oklch(1 0 0 / 0.2)" strokeWidth="1.2" />
          <line x1="128" y1="86" x2="164" y2="86" stroke="oklch(1 0 0 / 0.2)" strokeWidth="1.2" />
        </g>
      </g>
      {/* Rear drum */}
      <g>
        <ellipse cx="38" cy="86" rx="22" ry="22" fill="url(#drum)" />
        <ellipse cx="38" cy="86" rx="14" ry="14" fill="none" stroke="oklch(1 0 0 / 0.15)" strokeWidth="1" />
        <g style={{ transformOrigin: "38px 86px" }}>
          <animateTransform attributeName="transform" type="rotate" from="0 38 86" to="360 38 86" dur="3s" repeatCount="indefinite" />
          <line x1="38" y1="68" x2="38" y2="104" stroke="oklch(1 0 0 / 0.2)" strokeWidth="1.2" />
          <line x1="20" y1="86" x2="56" y2="86" stroke="oklch(1 0 0 / 0.2)" strokeWidth="1.2" />
        </g>
      </g>
      {/* Trim line */}
      <rect x="44" y="58" width="92" height="3" fill="oklch(0.18 0.005 250)" opacity="0.6" />
    </svg>
  );
}
