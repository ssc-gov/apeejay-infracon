import { SERVICES_LIST } from "../lib/data";
import { Reveal, SectionHeading } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="What we do" title="Construction services: planning, modelling and management" />
      <ul className="grid gap-8 md:grid-cols-3">
        {SERVICES_LIST.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 0.12}>
              <article className="group overflow-hidden bg-white shadow-sm ring-1 ring-black/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.alt} width={300} height={225} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="border-t-4 border-accent p-6">
                  <span className="text-sm font-bold text-steel">0{i + 1}</span>
                  <h3 className="mt-1 text-xl font-extrabold text-navy">{s.title}</h3>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
