import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle, Phone, Mail, ArrowUp } from "lucide-react";

const actions = [
  { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919923737394", color: "oklch(0.7 0.18 145)" },
  { Icon: Phone, label: "Call", href: "tel:+919923737394", color: "oklch(0.72 0.13 82)" },
  { Icon: Mail, label: "Email", href: "mailto:support@7aceholidays.com", color: "oklch(0.65 0.15 240)" },
  { Icon: ArrowUp, label: "Top", href: "#home", color: "oklch(0.24 0.08 265)" },
];

export function FloatingActionButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && actions.map((a, i) => (
          <motion.a
            key={a.label}
            href={a.href}
            target={a.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={a.label}
            initial={{ opacity: 0, y: 20, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.7 }}
            transition={{ delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass h-12 w-12 rounded-full grid place-items-center text-white hover:scale-110 transition-transform"
            style={{ color: a.color }}
          >
            <a.Icon size={18} />
          </motion.a>
        ))}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close quick actions" : "Open quick actions"}
        whileTap={{ scale: 0.92 }}
        className="h-14 w-14 rounded-full bg-gold-gradient text-[var(--navy)] grid place-items-center shadow-gold shimmer-gold"
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <Plus size={22} />
        </motion.span>
      </motion.button>
    </div>
  );
}
