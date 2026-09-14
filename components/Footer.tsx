import { AtSign, MessageCircle, MapPin, Clock } from "lucide-react";
import { site, buildWhatsAppLink, navLinks } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-graphite/40 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-bold tracking-[0.1em] text-white">
              BRUNO SARKOZI <span className="text-cyan">ADS</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
              Gestão de Tráfego Pago e Estratégias Digitais para empresas do
              mercado de piscinas.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-mist/60">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-mist transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-mist/60">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm text-mist">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0 text-cyan" />
                {site.locale}
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="shrink-0 text-cyan" />
                {site.hours}
              </li>
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle size={14} className="shrink-0 text-cyan" />
                  WhatsApp: {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <AtSign size={14} className="shrink-0 text-cyan" />
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-mist/60">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist transition-colors hover:border-cyan/40 hover:text-white"
            >
              <AtSign size={15} />
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist transition-colors hover:border-cyan/40 hover:text-white"
            >
              <MessageCircle size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
