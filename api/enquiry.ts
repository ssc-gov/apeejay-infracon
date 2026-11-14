import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

// Server-side validation (keep in sync with src/lib/schema.ts).
const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().regex(/^[0-9+()\-\s]{7,20}$/).optional().or(z.literal("")),
  service: z.enum(["Preconstruction Planning", "Architectural Modelling", "Construction Management", "Ready-Mix Concrete", "Other"]),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional(), // honeypot: must stay empty
});

// Best-effort per-instance rate limit (5 requests / 10 min / IP).
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const site = process.env.SITE_URL;
  if (site && req.headers.origin && req.headers.origin !== site) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const ip = String(req.headers["x-forwarded-for"] ?? "unknown").split(",")[0].trim();
  if (limited(ip)) return res.status(429).json({ error: "Too many requests. Please try again later." });

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Please check the form fields and try again." });
  const d = parsed.data;

  const { RESEND_API_KEY, ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !ENQUIRY_TO_EMAIL || !ENQUIRY_FROM_EMAIL) {
    console.error("Enquiry endpoint is missing environment variables");
    return res.status(500).json({ error: "Enquiry service is not configured." });
  }

  const html = `<h2>New website enquiry</h2>
<p><b>Name:</b> ${esc(d.name)}<br><b>Email:</b> ${esc(d.email)}<br><b>Phone:</b> ${esc(d.phone || "-")}<br><b>Service:</b> ${esc(d.service)}</p>
<p style="white-space:pre-wrap">${esc(d.message)}</p>`;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: ENQUIRY_FROM_EMAIL,
      to: [ENQUIRY_TO_EMAIL],
      reply_to: d.email,
      subject: `Website enquiry: ${d.service} (${d.name.slice(0, 40)})`,
      html,
    }),
  });

  if (!r.ok) {
    console.error("Resend error", r.status, await r.text());
    return res.status(502).json({ error: "Could not send your enquiry. Please call us instead." });
  }
  return res.status(200).json({ ok: true });
}
