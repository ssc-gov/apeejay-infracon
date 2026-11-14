import { Reveal, SectionHeading } from "./Reveal";

// Keep in sync with the FAQPage JSON-LD in index.html.
const FAQS = [
  { q: "What does Apeejay Infracon Private Limited do?", a: "Apeejay Infracon Private Limited is engaged in building construction and railway-side work, and offers preconstruction planning, architectural modelling and construction management." },
  { q: "Where is Apeejay Infracon registered?", a: "The company was incorporated on 5 December 2001 and is registered with the Registrar of Companies, Delhi." },
  { q: "Does Apeejay Infracon provide ready-mix concrete (RMC)?", a: "The company operates AIPL ready-mix concrete plant facilities at Khurja, Uttar Pradesh. Contact us to discuss your requirement." },
  { q: "How can I contact Apeejay Infracon?", a: "Call +91 98734 10773, email apeejayinfra@gmail.com, or use the enquiry form or WhatsApp on this page." },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions about Apeejay Infracon" />
        <div className="divide-y divide-black/10 border-y border-black/10">
          {FAQS.map((f) => (
            <Reveal key={f.q}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-navy">
                  {f.q}
                  <span aria-hidden className="text-accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-steel">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
