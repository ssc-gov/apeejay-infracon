import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "../lib/data";
import { enquirySchema, SERVICES, type EnquiryValues } from "../lib/schema";
import { Reveal, SectionHeading } from "./Reveal";

type Status = "idle" | "sent" | "error";
const field = "w-full border border-steel/30 bg-white px-4 py-3 text-navy placeholder:text-steel/60 focus:border-accent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({ resolver: zodResolver(enquirySchema), defaultValues: { service: SERVICES[0], website: "" } });

  const onSubmit = async (values: EnquiryValues) => {
    setStatus("idle");
    try {
      const r = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      reset();
    } catch (e) {
      setServerMsg(e instanceof Error ? e.message : "Something went wrong.");
      setStatus("error");
    }
  };

  const Err = ({ m }: { m?: string }) => (m ? <p role="alert" className="mt-1 text-sm font-semibold text-red-700">{m}</p> : null);

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Contact" title="Contact Apeejay Infracon for construction and RMC enquiries" />
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2" aria-label="Enquiry form">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-bold text-navy">Name</label>
              <input id="name" autoComplete="name" className={field} aria-invalid={!!errors.name} {...register("name")} />
              <Err m={errors.name?.message} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-bold text-navy">Email</label>
              <input id="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} {...register("email")} />
              <Err m={errors.email?.message} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-bold text-navy">Phone (optional)</label>
              <input id="phone" type="tel" autoComplete="tel" className={field} aria-invalid={!!errors.phone} {...register("phone")} />
              <Err m={errors.phone?.message} />
            </div>
            <div>
              <label htmlFor="service" className="mb-1 block text-sm font-bold text-navy">Service</label>
              <select id="service" className={field} {...register("service")}>
                {SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1 block text-sm font-bold text-navy">Message</label>
              <textarea id="message" rows={5} className={field} aria-invalid={!!errors.message} {...register("message")} />
              <Err m={errors.message?.message} />
            </div>
            {/* Honeypot: hidden from people and assistive tech, bots fill it in */}
            <div aria-hidden="true" className="absolute -left-[9999px]">
              <label htmlFor="website">Leave this empty</label>
              <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" disabled={isSubmitting} className="rounded-full bg-navy px-8 py-3.5 font-bold text-white transition hover:bg-accent active:scale-95 disabled:opacity-60">
                {isSubmitting ? "Sending…" : "Send enquiry"}
              </button>
              <div aria-live="polite" className="mt-4">
                {status === "sent" && <p className="font-semibold text-green-800">Thank you. Your enquiry has been sent and we will get back to you.</p>}
                {status === "error" && <p className="font-semibold text-red-700">{serverMsg} You can also call {CONTACT.phoneDisplay}.</p>}
              </div>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <ul className="space-y-4">
            <li><a href={CONTACT.phoneHref} className="flex items-center gap-4 bg-white p-5 ring-1 ring-black/5 transition hover:ring-accent"><Phone className="text-accent" aria-hidden /><span className="font-bold text-navy">{CONTACT.phoneDisplay}</span></a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 bg-white p-5 ring-1 ring-black/5 transition hover:ring-accent"><Mail className="text-accent" aria-hidden /><span className="break-all font-bold text-navy">{CONTACT.email}</span></a></li>
            <li><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-5 ring-1 ring-black/5 transition hover:ring-accent"><MessageCircle className="text-accent" aria-hidden /><span className="font-bold text-navy">WhatsApp enquiry</span></a></li>
          </ul>
          <div className="mt-6 aspect-[4/3] overflow-hidden bg-white ring-1 ring-black/5">
            <iframe title="Map: Apeejay Infracon RMC Plant, Khurja" src={CONTACT.mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full border-0" allowFullScreen />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
