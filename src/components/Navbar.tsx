import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";

const primary = [
  { label: "Home", href: "#home" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

const landing = [
  { label: "Canton Fair", href: "#experiences" },
  { label: "Dubai", href: "#experiences" },
  { label: "Bali", href: "#experiences" },
  { label: "Thailand", href: "#experiences" },
  { label: "Singapore & Malaysia", href: "#experiences" },
  { label: "Gulfood", href: "#experiences" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/7aceholidays/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/7aceholidays", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@7AceHolidays", Icon: Youtube },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            scrolled ? "glass rounded-full mx-4 sm:mx-6 lg:mx-auto" : ""
          }`}
        >
          <nav className="flex items-center justify-between h-14">
            <a href="#home" aria-label="7ACE Holidays home" className="flex items-center">
              <Logo height={scrolled ? 40 : 52} priority />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {primary.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="relative text-sm tracking-wide text-foreground/85 hover:text-foreground transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:bg-[var(--gold)] after:transition-transform after:duration-500"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeSwitch />
              <a
                href="#experiences"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold-gradient text-[var(--navy)] text-sm font-medium px-5 py-2.5 shimmer-gold shadow-gold hover:scale-[1.02] transition-transform"
              >
                Explore
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open navigation menu"
                className="glass h-10 w-10 rounded-full grid place-items-center md:hidden"
              >
                <Menu size={18} />
              </button>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open full menu"
                className="glass h-10 w-10 rounded-full hidden md:grid place-items-center"
              >
                <Menu size={18} />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80]"
          >
            <div className="absolute inset-0 backdrop-blur-2xl" style={{ background: "oklch(0.14 0.03 265 / 0.85)" }} />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between px-6 py-5">
                <Logo height={44} animate={false} />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="glass h-11 w-11 rounded-full grid place-items-center text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-16 pt-8">
                <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-14">
                  <nav aria-label="Primary">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5">Explore</p>
                    <ul className="space-y-3">
                      {primary.concat({ label: "Main Website", href: "https://7aceholidays.com" }).map((l, i) => (
                        <motion.li
                          key={l.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <a
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="group inline-block text-4xl md:text-5xl font-display font-semibold text-white/90 hover:text-white transition-colors"
                          >
                            <span className="relative">
                              {l.label}
                              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--gold)] transition-transform duration-500 group-hover:scale-x-100" />
                            </span>
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  <div>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5">Landing Pages</p>
                    <ul className="space-y-2.5 mb-10">
                      {landing.map((l, i) => (
                        <motion.li
                          key={l.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + i * 0.05, duration: 0.5 }}
                        >
                          <a
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="text-lg text-white/70 hover:text-[var(--gold)] transition-colors"
                          >
                            {l.label}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-4">Follow</p>
                    <div className="flex gap-3">
                      {socials.map(({ label, href, Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="glass h-11 w-11 rounded-full grid place-items-center text-white hover:text-[var(--gold)] transition-colors"
                        >
                          <Icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
