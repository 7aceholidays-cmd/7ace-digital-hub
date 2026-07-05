import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import canton from "@/assets/dest-canton.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import bali from "@/assets/dest-bali.jpg";
import thailand from "@/assets/dest-thailand.jpg";
import singapore from "@/assets/dest-singapore.jpg";
import gulfood from "@/assets/dest-gulfood.jpg";

const items = [
  { title: "China Canton Fair", tag: "Trade Fair", desc: "The world's largest sourcing exhibition, curated with executive comfort.", img: canton },
  { title: "Dubai", tag: "Luxury City", desc: "Sky-high skylines, desert stillness, and hospitality without compromise.", img: dubai },
  { title: "Bali", tag: "Wellness Escape", desc: "Cliffside villas, quiet rituals, and sunsets that stay with you.", img: bali },
  { title: "Thailand", tag: "Cultural Journey", desc: "Grand palaces, coastal serenity, and warm, unhurried elegance.", img: thailand },
  { title: "Singapore & Malaysia", tag: "Twin Cities", desc: "Futuristic gardens paired with heritage streets and refined dining.", img: singapore },
  { title: "Gulfood Dubai", tag: "Business Tour", desc: "The global gastronomy summit — orchestrated end to end.", img: gulfood },
];

export function FeaturedExperiences() {
  return (
    <section id="experiences" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">Signature Journeys</p>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] tracking-tight">
            Featured <span className="italic">Experiences</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-xl">
            Discover our signature journeys and business travel experiences —
            each one considered, curated, and quietly extraordinary.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative block overflow-hidden rounded-2xl bg-card shadow-lux ring-1 ring-border hover:ring-[var(--gold)] transition-all duration-500"
              data-cursor="pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, oklch(0.08 0.05 265 / 0.85) 100%)" }} />
                <div className="absolute top-4 left-4">
                  <span className="glass text-[10px] tracking-[0.25em] uppercase text-white px-3 py-1.5 rounded-full">
                    {it.tag}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display text-2xl md:text-3xl font-light">{it.title}</h3>
                  <p className="mt-2 text-sm text-white/75 line-clamp-2">{it.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-[var(--gold)] text-sm font-medium transition-transform duration-500 group-hover:translate-x-1">
                    Explore
                    <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
