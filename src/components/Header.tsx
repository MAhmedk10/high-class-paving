import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/warranty", label: "Warranty" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <>
      {/* Top utility ribbon */}
      <div className="fixed inset-x-0 top-0 z-[51] hidden h-7 items-center justify-center gap-6 bg-asphalt text-[10px] font-medium uppercase tracking-[0.3em] text-white/50 md:flex">
        <span className="text-primary">●</span> Westminster, MD
        <span className="h-3 w-px bg-white/15" />
        Free Estimates · 1-Year Warranty
        <span className="h-3 w-px bg-white/15" />
        <a href={site.phoneHref} className="hover:text-primary">{site.phone}</a>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 z-50 transition-all duration-500 md:top-7 ${
          scrolled ? "top-2 md:top-4" : "top-0"
        }`}
      >
        <div className={`mx-auto flex items-center justify-between gap-4 px-4 transition-all duration-500 md:px-6 ${
          scrolled
            ? "max-w-6xl rounded-full border border-white/10 bg-asphalt/70 py-2.5 shadow-elegant backdrop-blur-2xl"
            : "max-w-7xl py-4"
        }`}>
          {/* Logo lockup */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-primary/20 opacity-0 blur-xl transition group-hover:opacity-100" />
              <img
                src={site.logo}
                alt={site.name}
                className="relative h-12 w-auto transition-transform duration-500 group-hover:rotate-[-4deg] md:h-14"
              />
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-[15px] font-extrabold tracking-tight">High-Class Paving</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-primary">Make Driveways Great Again</span>
            </div>
          </Link>

          {/* Center pill nav */}
          <nav className="relative hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-1.5 backdrop-blur-xl lg:flex">
            {nav.map((item) => {
              const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition hover:text-foreground"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-primary shadow-glow"
                    />
                  )}
                  <span className={`relative ${active ? "text-primary-foreground font-semibold" : ""}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/90 transition hover:border-primary/50 hover:text-primary md:inline-flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {site.phone}
            </a>
            <Link
              to="/contact"
              className="group relative hidden overflow-hidden rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow btn-shine md:inline-flex md:items-center md:gap-1.5"
            >
              Get Estimate
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[49] bg-asphalt/95 backdrop-blur-2xl lg:hidden"
          >
            <nav className="mx-auto flex h-full max-w-md flex-col justify-center gap-2 px-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    to={item.to}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-display text-xl font-bold"
                  >
                    {item.label}
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 grid gap-3">
                <Link to="/contact" className="rounded-full bg-gradient-primary px-5 py-4 text-center font-semibold text-primary-foreground shadow-glow">
                  Get Free Estimate
                </Link>
                <a href={site.phoneHref} className="rounded-full border border-white/10 px-5 py-4 text-center font-semibold">
                  <Phone className="mr-2 inline h-4 w-4 text-primary" />
                  Call {site.phone}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
