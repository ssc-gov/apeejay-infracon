import { Reveal, SectionHeading } from "./Reveal";
import { FACTS } from "../lib/data";

export function About() {
  return (
    <section id="about" className="bg-navy py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <img src="/images/about.webp" alt="Aerial view of a construction site with a red crawler crane and concrete walls" width={706} height={410} loading="lazy" className="w-full object-cover shadow-2xl" />
        </Reveal>
        <div>
          <SectionHeading eyebrow="About us" title="Building complete constructions since 2001" light />
          <Reveal delay={0.1}>
            <p className="max-w-xl leading-relaxed text-white/80">
              Apeejay Infracon Private Limited is a privately held, non-government company incorporated on 5 December 2001 and registered with the Registrar of Companies, Delhi. The company is engaged in the building of complete constructions and railway-side work.
            </p>
          </Reveal>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {FACTS.map((f, i) => (
              <Reveal key={f.k} delay={0.15 + i * 0.08}>
                <div className="border-l-2 border-accent pl-4">
                  <dt className="text-lg font-extrabold">{f.k}</dt>
                  <dd className="mt-1 text-sm text-white/70">{f.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
