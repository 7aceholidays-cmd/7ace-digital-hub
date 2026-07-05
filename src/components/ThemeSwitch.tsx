import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeSwitch() {
  const { resolved, toggle } = useTheme();
  const isDark = resolved === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="glass relative h-10 w-10 rounded-full grid place-items-center overflow-hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ y: -14, opacity: 0, rotate: -60 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 14, opacity: 0, rotate: 60 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-gold"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
