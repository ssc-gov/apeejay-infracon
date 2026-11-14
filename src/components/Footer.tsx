import { CONTACT, NAV } from "../lib/data";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <img src="/images/logo.png" alt="Apeejay Infracon" width={1680} height={1249} loading="lazy" className="h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm">Apeejay Infracon Private Limited. Construction and infrastructure.</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 font-bold text-white">Explore</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-accent">{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="mb-3 font-bold text-white">Get in touch</p>
          <ul className="space-y-2 text-sm">
            <li><a href={CONTACT.phoneHref} className="hover:text-accent">{CONTACT.phoneDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-accent">{CONTACT.email}</a></li>
            <li><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a></li>
            <li><a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Facebook</a></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} Apeejay Infracon Private Limited. All rights reserved.</p>
    </footer>
  );
}
