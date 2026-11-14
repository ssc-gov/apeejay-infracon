import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";

const LINES = ["Construction & infrastructure", "company in Delhi", "& Uttar Pradesh."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section id="top" ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy">
      <motion.img
        src="/images/project2.webp"
        alt=""
        width={1280}
        height={960}
        fetchPriority="high"
        style={{ y }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-20 h-[115%] w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-accent"
        >
          Apeejay Infracon Private Limited
        </motion.p>

        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {LINES.map((line, i) => (
            <Fragment key={line}>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
            {" "}
            </Fragment>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85"
        >
          Preconstruction planning, architectural modelling, construction management and ready-mix concrete (RMC) from our plant at Khurja, Uttar Pradesh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-white transition hover:bg-[#bf5a0b] active:scale-95">
            View projects <ArrowDownRight size={18} aria-hidden />
          </a>
          <a href="#contact" className="rounded-full border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-navy active:scale-95">
            Make an enquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
}
