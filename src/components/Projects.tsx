import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PROJECTS } from "../lib/data";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d: number) => setActive((a) => (a === null ? a : (a + d + PROJECTS.length) % PROJECTS.length)), []);

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close, step]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Projects" title="Construction projects and RMC plants in Khurja, Uttar Pradesh" />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={(i % 3) * 0.1}>
              <button
                type="button"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setActive(i);
                }}
                aria-label={`View ${p.title} larger`}
                className="group relative block aspect-[4/3] w-full overflow-hidden bg-navy text-left"
              >
                <img src={p.img} alt={p.alt} width={1280} height={960} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 translate-y-1 p-5 text-lg font-extrabold leading-snug text-white transition group-hover:translate-y-0">{p.title}</span>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={PROJECTS[active].title}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button ref={closeRef} type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
              <X size={26} />
            </button>
            <button type="button" aria-label="Previous project" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
              <ChevronLeft size={28} />
            </button>
            <button type="button" aria-label="Next project" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
              <ChevronRight size={28} />
            </button>
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={PROJECTS[active].img} alt={PROJECTS[active].alt} className="max-h-[78vh] w-auto max-w-full object-contain" />
              <figcaption className="mt-3 text-center text-lg font-bold text-white">{PROJECTS[active].title}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
