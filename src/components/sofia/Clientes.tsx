const schools = [
  "COBACH Sonora",
  "Colegio Regis La Salle",
  "Instituto Regiomontano Cumbres La Salle",
  "Instituto La Salle Obregón",
  "Colegio EDIA",
  "Brighton Bilingual School",
  "Escuela Americana Palo Alto",
  "IMARC",
  "Liceo Tec",
  "Colegio Muñoz",
  "Centro Educativo Vallarta",
];

const colors = [
  "var(--brand-blue)",
  "var(--brand-green)",
  "var(--brand-orange)",
  "var(--brand-skyblue)",
  "var(--brand-teal)",
  "var(--brand-pink)",
  "var(--brand-cyan)",
  "var(--brand-amber)",
];

function Row({ speed, reverse = false }: { speed: "marquee" | "marquee-slow"; reverse?: boolean }) {
  const list = reverse ? [...schools].reverse() : schools;
  const doubled = [...list, ...list];
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${speed}`}>
        {doubled.map((s, i) => (
          <div
            key={`${s}-${i}`}
            className="shrink-0 rounded-full px-6 py-3 text-sm md:text-base font-bold text-white shadow-sm"
            style={{ background: colors[i % colors.length] }}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Clientes() {
  return (
    <section id="clientes" className="py-12 md:py-14 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-12">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-teal">
          Confianza institucional
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink">
          Escuelas que confían en nosotros
        </h2>
      </div>

      <div className="space-y-5">
        <Row speed="marquee" />
        <Row speed="marquee-slow" reverse />
      </div>
    </section>
  );
}
