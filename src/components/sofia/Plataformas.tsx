const browsers = [
  {
    name: "Google Chrome",
    version: "40.0+",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" fill="#4285F4" />
        <circle cx="12" cy="12" r="4.2" fill="white" />
        <path d="M12 7.8h8.7A10 10 0 0112 22V17.8a5.8 5.8 0 005-2.8L12 7.8z" fill="#34A853" />
        <path d="M3.3 7.8L7.6 15A5.8 5.8 0 0112 17.8V22A10 10 0 013.3 7.8z" fill="#FBBC05" />
        <path d="M12 7.8H3.3A10 10 0 0112 2V7.8z" fill="white" />
        <path d="M20.7 7.8H12L7.6 15l4.4 2.8a5.8 5.8 0 005-7.8z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: "Mozilla Firefox",
    version: "36.0+",
    color: "#FF7139",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF7139" />
        <circle cx="12" cy="12" r="5" fill="#FFC200" />
        <circle cx="12" cy="12" r="2.5" fill="white" />
      </svg>
    ),
  },
  {
    name: "Microsoft Edge",
    version: "Todas",
    color: "#0078D4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
        <circle cx="12" cy="12" r="10" fill="#0078D4" />
        <path d="M7 8c1-3 5-4 7-2s2 6 0 8H7c-2 0-3-2-2-4l2-1" fill="#50E6FF" />
        <path d="M7 14h8c1 2 0 4-2 4H9c-2 0-3-2-2-4z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Safari",
    version: "5.1.7+",
    color: "#006CFF",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
        <circle cx="12" cy="12" r="10" fill="#006CFF" />
        <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="0.8" fill="none" />
        <line x1="12" y1="5" x2="12" y2="7" stroke="white" strokeWidth="1.5" />
        <line x1="12" y1="17" x2="12" y2="19" stroke="white" strokeWidth="1.5" />
        <line x1="5" y1="12" x2="7" y2="12" stroke="white" strokeWidth="1.5" />
        <line x1="17" y1="12" x2="19" y2="12" stroke="white" strokeWidth="1.5" />
        <polygon points="12,8 14.5,14.5 8,12" fill="white" opacity="0.9" />
      </svg>
    ),
  },
];

export function Plataformas() {
  return (
    <section className="py-10 md:py-12 bg-surface border-y border-border">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue">
          Compatibilidad
        </span>
        <h2 className="mt-3 text-2xl md:text-3xl font-black text-ink">
          Sofía XT funciona mejor con estos navegadores
        </h2>
        <p className="mt-3 text-ink-soft max-w-xl mx-auto">
          Para una experiencia óptima, te recomendamos usar la versión actualizada de cualquiera de estos navegadores.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {browsers.map((b) => (
            <div
              key={b.name}
              className="card-lift bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col items-center gap-3"
            >
              <div className="flex items-center justify-center">{b.icon}</div>
              <div>
                <div className="font-black text-ink text-sm">{b.name}</div>
                <div
                  className="text-xs font-bold mt-1 px-2 py-0.5 rounded-full inline-block text-white"
                  style={{ background: b.color }}
                >
                  {b.version}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          También disponible en dispositivos móviles con iOS y Android.
        </p>
      </div>
    </section>
  );
}
