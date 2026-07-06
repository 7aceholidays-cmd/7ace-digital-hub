import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const goldLogo = "/logo-gold.png";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center"
          style={{ background: "var(--navy-deep)" }}
          aria-hidden
        >
          {/* Gold light sweep */}
          <motion.div
            className="absolute inset-x-0 top-1/2 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.82 0.13 84 / 0.9), transparent)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, times: [0, 0.6, 1], ease: "easeInOut" }}
          />
          <div className="flex flex-col items-center gap-6">
            <motion.img
              src={goldLogo}
              alt="7ACE Holidays"
              style={{ height: 110, width: "auto" }}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              draggable={false}
            />
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-[11px] tracking-[0.4em] uppercase text-gold/80"
              style={{ color: "oklch(0.82 0.09 84 / 0.85)" }}
            >
              Celebrate Journey. Create Memories.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
