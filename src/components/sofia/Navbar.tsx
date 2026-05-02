import { useEffect, useRef, useState } from "react";
import logo from "@/assets/sofia-logo.png";

const LOGIN_URL = "https://alumnos.sofiaxt.com";

const SOPORTE_URL = "https://support.sofiaxt.com/support/tickets/new";

const links = [
  { href: "#que-es", label: "¿Qué es Sofía XT?" },
  { href: "#quienes", label: "Quiénes Somos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
];

function LoginDropdown({ onClose }: { onClose: () => void }) {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div
      className="absolute right-0 top-full mt-3 w-72 rounded-2xl shadow-2xl overflow-hidden z-50 border border-white/10"
      style={{ background: "#3b3b3b" }}
      onMouseLeave={onClose}
    >
      <div className="p-5 space-y-3">
        {/* Usuario */}
        <input
          type="text"
          placeholder="Usuario"
          className="w-full rounded-lg px-4 py-2.5 text-sm bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
        />

        {/* Contraseña */}
        <div className="relative">
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Contraseña"
            className="w-full rounded-lg px-4 py-2.5 pr-10 text-sm bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
          />
          <button
            type="button"
            onClick={() => setShowPwd((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label={showPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPwd ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        </div>

        {/* ¿Olvidaste tu contraseña? */}
        <div className="text-right">
          <a
            href="/recuperar"
            className="text-xs text-white/50 hover:text-brand-orange transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Iniciar */}
        <a
          href={LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-lg py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ background: "#f5a623" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
          </svg>
          Iniciar
        </a>

        {/* Google */}
        <a
          href={`${LOGIN_URL}/google`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-lg py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-200 transition-colors hover:bg-gray-50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Iniciar sesión con Google
        </a>

        {/* Recordarme */}
        <label className="flex items-center gap-2 text-xs text-white/60 cursor-pointer select-none">
          <input type="checkbox" className="rounded accent-brand-orange" />
          ¿Recordarme?
        </label>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!loginOpen) return;
    const handler = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [loginOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-background transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_-8px_rgba(0,0,0,0.15)]" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Sofía XT" className="h-9 md:h-11 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
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

        <div className="flex items-center gap-2 md:gap-3">
          {/* Login hover button — desktop */}
          <div
            ref={loginRef}
            className="relative hidden lg:block"
            onMouseEnter={() => setLoginOpen(true)}
          >
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-blue transition-colors px-3 py-2 rounded-lg hover:bg-surface"
              onClick={(e) => {
                if (loginOpen) return;
                e.preventDefault();
                setLoginOpen(true);
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Iniciar Sesión
            </a>
            {loginOpen && <LoginDropdown onClose={() => setLoginOpen(false)} />}
          </div>

          <a
            href={SOPORTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-teal transition-colors px-3 py-2 rounded-lg hover:bg-surface"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0118 0v6"/>
              <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"/>
              <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z"/>
            </svg>
            Soporte
          </a>
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 md:px-5 py-2.5 text-sm font-bold text-white glow-orange transition-transform hover:scale-105"
          >
            Solicitar Demo
          </a>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Abrir menú"
            className="lg:hidden p-2 rounded-md text-ink"
          >
            {open ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              </svg>
            )}
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
            <li>
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-ink font-semibold hover:bg-surface"
              >
                Iniciar Sesión
              </a>
            </li>
            <li>
              <a
                href={SOPORTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md font-semibold hover:bg-surface"
                style={{ color: "var(--brand-teal)" }}
              >
                Soporte
              </a>
            </li>
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
