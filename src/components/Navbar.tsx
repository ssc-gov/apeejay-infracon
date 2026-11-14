import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { CONTACT, NAV } from "../lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${solid || open ? "bg-navy/95 shadow-lg backdrop-blur" : "bg-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Apeejay Infracon home" className="shrink-0">
          <img src="/images/logo.png" alt="Apeejay Infracon" width={1680} height={1249} className="h-12 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="group relative text-sm font-semibold tracking-wide text-white/90 hover:text-white">
                {n.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#bf5a0b] active:scale-95">
              <Phone size={16} aria-hidden /> {CONTACT.phoneDisplay}
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-navy px-5 pb-6 lg:hidden"
          >
            {NAV.map((n) => (
              <li key={n.href} className="border-b border-white/10">
                <a href={n.href} onClick={() => setOpen(false)} className="block py-4 text-lg font-semibold text-white">
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-white">
                <Phone size={18} aria-hidden /> Call {CONTACT.phoneDisplay}
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
