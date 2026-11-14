import { Reveal, SectionHeading } from "./Reveal";

export function ReadyMix() {
  return (
    <section id="rmc" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
      <Reveal>
        <img
          src="/images/project4.webp"
          alt="Ready-mix concrete (RMC) batching plant with cement silos at Khurja, Uttar Pradesh"
          width={910}
          height={681}
          loading="lazy"
          className="w-full object-cover shadow-xl"
        />
      </Reveal>
      <div>
        <SectionHeading eyebrow="Ready-mix concrete" title="RMC plant at Khurja, Uttar Pradesh" />
        <Reveal delay={0.1}>
          <p className="max-w-xl leading-relaxed text-steel">
            Apeejay Infracon operates AIPL ready-mix concrete (RMC) plant facilities at Khurja, Uttar Pradesh, alongside its building construction and railway-side work. Get in touch to discuss your concrete or construction requirement.
          </p>
          <a href="#contact" className="mt-8 inline-block rounded-full bg-accent px-7 py-3.5 font-bold text-white transition hover:bg-[#bf5a0b]">
            Enquire about RMC
          </a>
        </Reveal>
      </div>
    </section>
  );
}
