import { motion } from "framer-motion";
import {
  MessageCircle, Phone, Mail, FileText, Globe, MapPin,
  Instagram, Facebook, Youtube,
} from "lucide-react";

const cards = [
  { Icon: MessageCircle, title: "WhatsApp", sub: "Chat with a specialist", href: "https://wa.me/919923737394" },
  { Icon: Phone, title: "Call", sub: "+91 99237 37394", href: "tel:+919923737394" },
  { Icon: Mail, title: "Email", sub: "support@7aceholidays.com", href: "mailto:support@7aceholidays.com" },
  { Icon: FileText, title: "Company Profile", sub: "Download the brochure", href: "/company-profile.pdf", download: true },
  { Icon: Globe, title: "Main Website", sub: "Visit 7aceholidays.com", href: "https://7aceholidays.com" },
  { Icon: MapPin, title: "Google Maps", sub: "Find our office", href: "https://maps.app.goo.gl/B7cG4Ae6ewFuXf2j9" },
  { Icon: Instagram, title: "Instagram", sub: "@7aceholidays", href: "https://www.instagram.com/7aceholidays/" },
  { Icon: Facebook, title: "Facebook", sub: "Follow our page", href: "https://www.facebook.com/7aceholidays" },
  { Icon: Youtube, title: "YouTube", sub: "@7AceHolidays", href: "https://www.youtube.com/@7AceHolidays" },
];

export function QuickConnect() {
  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      {/* Ambient light */}
      <div className="absolute inset-0 -z-10 opacity-70" style={{
        background:
          "radial-gradient(ellipse at 20% 0%, oklch(0.72 0.13 82 / 0.12), transparent 55%), radial-gradient(ellipse at 100% 100%, oklch(0.24 0.08 265 / 0.15), transparent 55%)",
      }} />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">
            Connect with <span className="italic">7ACE</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            Our travel specialists are ready to assist you — choose the channel you prefer.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              download={"download" in c && c.download ? "" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass group rounded-2xl p-5 flex flex-col gap-3 hover:ring-1 hover:ring-[var(--gold)] transition-all"
              data-cursor="pointer"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] group-hover:scale-110 transition-transform">
                <c.Icon size={18} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-semibold">{c.title}</h3>
                <p className="text-xs text-muted-foreground truncate">{c.sub}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
