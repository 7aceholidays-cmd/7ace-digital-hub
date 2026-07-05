import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Plane } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover scale-105"
          width={1920}
          height={1280}
        />
        {/* Overlays */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.08 0.05 265 / 0.75) 0%, oklch(0.08 0.05 265 / 0.55) 40%, oklch(0.08 0.05 265 / 0.9) 100%)" }} />
        <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.72 0.13 82 / 0.25), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.72 0.13 82 / 0.15), transparent 45%)",
        }} />
      </div>

      {/* World-map faint lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-g" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.82 0.13 84)" stopOpacity="0" />
            <stop offset="0.5" stopColor="oklch(0.82 0.13 84)" stopOpacity="1" />
            <stop offset="1" stopColor="oklch(0.82 0.13 84)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[80, 180, 300, 420, 520].map((y, i) => (
          <path
            key={i}
            d={`M0 ${y} Q 300 ${y - 50} 600 ${y} T 1200 ${y}`}
            stroke="url(#line-g)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 8"
          />
        ))}
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[var(--gold)]"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            opacity: 0.35,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.55, 0.15] }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}

      {/* Plane route */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <motion.path
          d="M -50 480 Q 300 200 600 300 T 1250 120"
          stroke="oklch(0.82 0.13 84 / 0.55)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="3 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 1.2, ease: "easeInOut" }}
        />
      </svg>
      <motion.div
        className="absolute text-[var(--gold)] drop-shadow-[0_0_12px_oklch(0.82_0.13_84/0.7)]"
        initial={{ offsetDistance: "0%", opacity: 0 }}
        animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 12, delay: 2, repeat: Infinity, ease: "linear" }}
        style={{
          offsetPath:
            'path("M -50 480 Q 300 200 600 300 T 1250 120")',
          offsetRotate: "auto",
        }}
      >
        <Plane size={22} className="rotate-45" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <HeroLogo />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7 }}
          className="text-[11px] md:text-xs tracking-[0.5em] uppercase text-[var(--gold)] mb-6"
        >
          Premium Travel Curators
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight"
        >
          Celebrate Journey.
          <br />
          <span className="italic font-extralight" style={{ background: "linear-gradient(90deg, oklch(0.9 0.1 84), oklch(0.72 0.13 82))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Create Memories.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.7 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-white/75 leading-relaxed"
        >
          Premium international holidays, corporate travel, business tours,
          and global trade fair experiences — curated with quiet intention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experiences"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient text-[var(--navy)] font-medium px-7 py-3.5 shimmer-gold shadow-gold hover:scale-[1.02] transition-transform"
          >
            Explore Experiences
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full text-white font-medium px-7 py-3.5 hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#experiences"
        aria-label="Scroll to experiences"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}

// Use gold logo directly for hero (always dark background)
import goldAsset from "@/assets/logo-gold.png.asset.json";
function HeroLogo() {
  return (
    <motion.img
      src={goldAsset.url}
      alt="7ACE Holidays"
      className="h-auto"
      style={{ width: "min(320px, 62vw)" }}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      draggable={false}
    />
  );
}
