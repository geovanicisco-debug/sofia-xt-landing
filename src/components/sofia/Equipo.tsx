const team = [
  { name: "María Fernanda López", role: "Directora General", initials: "ML", color: "var(--brand-orange)", bio: "Lidera la visión pedagógica de la plataforma." },
  { name: "Jorge Ramírez", role: "Director de Tecnología", initials: "JR", color: "var(--brand-blue)", bio: "Arquitecto del motor adaptativo." },
  { name: "Ana Sofía Hernández", role: "Coordinadora Académica", initials: "AH", color: "var(--brand-green)", bio: "Diseña el contenido curricular SEP." },
  { name: "Luis Carrillo", role: "Líder de Producto", initials: "LC", color: "var(--brand-pink)", bio: "Conecta escuelas con la plataforma." },
  { name: "Patricia Mendoza", role: "Customer Success", initials: "PM", color: "var(--brand-teal)", bio: "Acompaña a más de 6,000 escuelas." },
  { name: "Diego Sánchez", role: "Investigación Educativa", initials: "DS", color: "var(--brand-skyblue)", bio: "Mide el impacto del aprendizaje." },
];

export function Equipo() {
  return (
    <section id="equipo" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((t) => (
            <div key={t.name} className="card-lift bg-card rounded-2xl p-7 border border-border shadow-sm flex items-start gap-5">
              <div
                className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-lg font-black text-ink">{t.name}</div>
                <div className="text-sm font-bold text-brand-blue">{t.role}</div>
                <p className="mt-2 text-sm text-ink-soft">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
