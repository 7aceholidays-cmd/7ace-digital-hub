import { motion } from "framer-motion";
const goldLogo = "/logo-gold.png";
const navyLogo = "/logo-navy.png";
import { useTheme } from "@/lib/theme";

interface LogoProps {
  className?: string;
  height?: number;
  animate?: boolean;
  priority?: boolean;
}

export function Logo({ className, height = 48, animate = true, priority }: LogoProps) {
  const { resolved } = useTheme();
  const src = resolved === "dark"
  ? goldLogo
  : navyLogo;

  const img = (
    <img
      src={src}
      alt="7ACE Holidays"
      style={{ height, width: "auto" }}
      className={className}
      draggable={false}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );

  if (!animate) return img;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 6, rotate: -1.5 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="relative inline-block"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full blur-2xl opacity-40"
        style={{ background: "radial-gradient(closest-side, var(--gold-glow), transparent 70%)" }}
      />
      {img}
    </motion.div>
  );
}
