import logo from "@/assets/sofia-logo.png";

const navLinks = [
  { href: "#que-es", label: "¿Qué es Sofía XT?" },
  { href: "#quienes", label: "Quiénes Somos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/sofiaxt.official", color: "var(--brand-blue)", path: "M13 22v-8h3l1-4h-4V7.5C13 6.4 13.3 5.7 14.9 5.7H17V2.1C16.6 2 15.4 2 14 2c-3 0-5 1.8-5 5.1V10H6v4h3v8h4z" },
  { label: "Instagram", href: "https://www.instagram.com/sofiaxt_edu_publicas/", color: "var(--brand-pink)", path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 5.3a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.4a2.9 2.9 0 110-5.8 2.9 2.9 0 010 5.8zm5.7-7.6a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" },
  { label: "YouTube", href: "https://www.youtube.com/user/sofiaxt", color: "var(--brand-orange)", path: "M21.6 7.2s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.3c-.4.1-1.3.1-2 .9-.6.6-.8 2-.8 2S2 8.8 2 10.4v1.5C2 13.5 2.2 15 2.2 15s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.5.1 6.4.3 6.4.3s4 0 6.8-.3c.4-.1 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.5.2-3.1v-1.5c0-1.6-.2-3.1-.2-3.1zM10 14.3V8.6l5.2 2.9-5.2 2.8z" },
  { label: "LinkedIn", href: "https://mx.linkedin.com/company/sofia-xt", color: "var(--brand-skyblue)", path: "M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V10h2.6v8zM7 8.7c-.9 0-1.5-.7-1.5-1.5S6.1 5.7 7 5.7s1.5.7 1.5 1.5S7.9 8.7 7 8.7zM18.3 18h-2.6v-4.1c0-1 0-2.2-1.4-2.2s-1.6 1.1-1.6 2.2V18h-2.6V10h2.5v1.1c.3-.6 1.2-1.3 2.5-1.3 2.7 0 3.2 1.8 3.2 4.1V18z" },
  { label: "Twitter / X", href: "https://x.com/SofiaEscolar", color: "#000", isX: true },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white border-t-4 border-brand-green">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="bg-white inline-block rounded-xl p-3">
            <img src={logo} alt="Sofía XT" className="h-10 w-auto" />
          </div>
          <p className="mt-5 text-white/80 max-w-sm italic">
            "Aprendemos matemáticas... aprendemos para la vida."
          </p>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4">Navegación</h4>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/80 hover:text-brand-green-soft text-sm transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4">Redes Sociales</h4>
          <div className="flex gap-3 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: s.color }}
              >
                {s.isX ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d={s.path} />
                  </svg>
                )}
              </a>
            ))}
          </div>

          <h4 className="text-sm font-black uppercase tracking-wider text-white mt-8 mb-3">Legal</h4>
          <a href="#" className="text-white/80 hover:text-brand-green-soft text-sm transition-colors">
            Aviso de Privacidad
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 text-center text-sm text-white/70">
          © 2025 Sofía XT. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
