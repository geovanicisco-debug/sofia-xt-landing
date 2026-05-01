import { useEffect, useState } from "react";
import logo from "@/assets/sofia-logo.png";

const links = [
  { href: "#que-es", label: "¿Qué es Sofía XT?" },
  { href: "#quienes", label: "Quiénes Somos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-background transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_-8px_rgba(0,0,0,0.15)]" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Sofía XT" className="h-9 md:h-11 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-ink hover:text-brand-blue transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-bold text-white glow-orange transition-transform hover:scale-105"
          >
            Solicitar Demo
          </a>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Abrir menú"
            className="lg:hidden p-2 rounded-md text-ink"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <ul className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-ink font-semibold hover:bg-surface"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-brand-orange px-5 py-2.5 text-white font-bold"
              >
                Solicitar Demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
