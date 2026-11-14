import { LEADERS } from "../lib/data";
import { Reveal, SectionHeading } from "./Reveal";

export function Leadership() {
  return (
    <section id="leadership" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Leadership" title="The directors of Apeejay Infracon" />
        <ul className="grid gap-10 sm:grid-cols-2 lg:max-w-3xl">
          {LEADERS.map((l, i) => (
            <li key={l.name}>
              <Reveal delay={i * 0.12}>
                <figure className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-paper">
                    <img src={l.img} alt={`Portrait of ${l.name}`} width={607} height={810} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="border-t-4 border-accent pt-4">
                    <h3 className="text-xl font-extrabold text-navy">{l.name}</h3>
                    <p className="font-semibold text-steel">{l.role}</p>
                    <p className="text-sm text-steel">{l.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
