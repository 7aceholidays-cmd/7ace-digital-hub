import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Phone, Mail, Globe } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 text-white" style={{ background: "var(--navy-deep)" }}>
      {/* Animated gold top border */}
      <div className="absolute top-0 inset-x-0 h-px overflow-hidden">
        <motion.div
          className="h-full w-1/3"
          style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.13 84), transparent)" }}
          animate={{ x: ["-50%", "300%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-3">
        <div>
          <div className="mb-5"><Logo height={56} animate={false} /></div>
          <p className="font-display text-lg">7ACE Holidays Pvt. Ltd.</p>
          <p className="italic text-sm text-white/60 mt-1">Celebrate Journey. Create Memories.</p>
          <p className="mt-4 text-xs text-white/50 leading-relaxed max-w-xs">
            We don't just plan tours — we curate meaningful travel experiences
            for discerning individuals and businesses.
          </p>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">Quick Navigation</p>
          <ul className="space-y-2 text-sm text-white/75">
            {["Experiences", "Contact", "Privacy", "Terms"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-[var(--gold)] transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">Reach Us</p>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2"><Phone size={14} className="text-[var(--gold)]" /> +91 99237 37394</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-[var(--gold)]" /> support@7aceholidays.com</li>
            <li className="flex items-center gap-2"><Globe size={14} className="text-[var(--gold)]" /> 7aceholidays.com</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/7aceholidays/" },
              { Icon: Facebook, href: "https://www.facebook.com/7aceholidays" },
              { Icon: Youtube, href: "https://www.youtube.com/@7AceHolidays" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label="social" className="glass h-9 w-9 rounded-full grid place-items-center hover:text-[var(--gold)] transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        © 2026 7ACE Holidays Pvt. Ltd. — Crafting Extraordinary Journeys Worldwide.
      </div>
    </footer>
  );
}
