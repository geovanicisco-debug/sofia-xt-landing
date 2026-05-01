const directives = [
  {
    area: "Sofía XT Oficial",
    color: "var(--brand-blue)",
    members: [
      { name: "Dr. Dino A. Pardo", role: "Dirección General", initials: "DP" },
    ],
  },
  {
    area: "Escuelas Públicas",
    color: "var(--brand-green)",
    members: [
      { name: "Lic. Cristina Soberanes", role: "Dirección", initials: "CS" },
      { name: "María Laura Lugo", role: "Coordinación", initials: "ML" },
    ],
  },
  {
    area: "Escuelas Privadas",
    color: "var(--brand-orange)",
    members: [
      { name: "Lic. Mavira Durán P.", role: "Dirección", initials: "MD" },
      { name: "Lic. Martha Briseño V.", role: "Coord. Región Noroeste", initials: "MB" },
    ],
  },
];

const soporte = [
  { estado: "Sonora",          tel: "662 229 0291", email: "soporte.c19@sofiaxt.com",    color: "var(--brand-blue)" },
  { estado: "Guanajuato",      tel: "477 671 1813", email: "soportegto.c19@sofiaxt.com", color: "var(--brand-green)" },
  { estado: "Baja California", tel: "686 603 4133", email: "soportebc@sofiaxt.com",      color: "var(--brand-teal)" },
  { estado: "San Luis Potosí", tel: "662 104 7564", email: "mara.lugo@sofiaxt.com",      color: "var(--brand-skyblue)" },
  { estado: "Chihuahua",       tel: "662 155 0952", email: null,                          color: "var(--brand-orange)" },
];

export function Equipo() {
  return (
    <section id="equipo" className="py-12 md:py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-pink">
            Equipo
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Personas apasionadas por transformar la educación en Latinoamérica.
          </p>
        </div>

        {/* Directivos */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {directives.map((d) =>
            d.members.map((m) => (
              <div
                key={m.name}
                className="card-lift bg-card rounded-2xl p-6 border border-border shadow-sm flex items-start gap-4"
              >
                <div
                  className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg"
                  style={{ background: d.color }}
                >
                  {m.initials}
                </div>
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                    style={{ color: d.color }}
                  >
                    {d.area}
                  </div>
                  <div className="text-base font-black text-ink">{m.name}</div>
                  <div className="text-sm font-semibold text-ink-soft">{m.role}</div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Soporte técnico */}
        <div className="mt-10">
          <h3 className="text-xl font-black text-ink mb-5 flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm text-white"
              style={{ background: "var(--brand-blue)" }}
            >
              🛠
            </span>
            Soporte Técnico
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {soporte.map((s) => (
              <div
                key={s.estado}
                className="rounded-2xl p-5 border border-border bg-card shadow-sm flex flex-col gap-2"
              >
                <div
                  className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white w-fit"
                  style={{ background: s.color }}
                >
                  {s.estado}
                </div>

                <a
                  href={`tel:${s.tel.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm font-bold text-ink hover:text-brand-blue transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z"/>
                  </svg>
                  {s.tel}
                </a>

                {s.email && (
                  <a
                    href={`mailto:${s.email}`}
                    className="flex items-center gap-2 text-sm text-brand-blue hover:underline break-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    {s.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
