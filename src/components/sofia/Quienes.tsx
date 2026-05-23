const cols = [
  {
    icon: "🎯",
    title: "Misión",
    desc: "Cultivar en cada estudiante una serenidad interior desde la cual pueda entrar en ese estado de fluidez donde la mente se vuelve ligera, lúcida y creativa. Desde esa armonía profunda —no desde la presión— acompañarles a desplegar su máximo potencial y a forjar un carácter que actúe con propósito, alegría y dignidad en el mundo.",
    color: "var(--brand-blue)",
  },
  {
    icon: "🌟",
    title: "Visión",
    desc: "Construir el ecosistema educativo más fuerte y querido del país, elegido por escuelas, docentes y familias por su impacto humano y profundo en la formación de nuestros niños, niñas y jóvenes.",
    color: "var(--brand-green)",
  },
  {
    icon: "🚀",
    title: "Objetivo 2030",
    desc: "Construir la comunidad educativa más grande de México con 2 millones de estudiantes, articulada con organizaciones escolares, empresariales, gobiernos de 27 estados y el magisterio, para convertirse en la red formativa más sólida, apreciada y transformadora del país.",
    color: "var(--brand-skyblue)",
  },
];

const FOUNDED = 2012;

const milestones = [
  { year: "2012", text: "Fundación de Sofía XT", color: "var(--brand-orange)" },
  { year: "2017", text: "1,000 escuelas en México", color: "var(--brand-blue)" },
  { year: "2021", text: "Expansión a Latinoamérica", color: "var(--brand-green)" },
  { year: "2025", text: "+30M ejercicios resueltos", color: "var(--brand-pink)" },
];

export function Quienes() {
  const yearsActive = new Date().getFullYear() - FOUNDED;

  return (
    <section id="quienes" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-green">
            Sobre nosotros
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink">
            Quiénes Somos
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cols.map((c) => (
            <div key={c.title} className="card-lift rounded-2xl bg-card p-8 border border-border shadow-sm">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white mb-4"
                style={{ background: c.color }}
              >
                {c.icon}
              </div>
              <h3 className="text-2xl font-black text-ink">{c.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-center text-xl md:text-2xl font-black text-ink mb-10">
            {yearsActive} años de historia
          </h3>
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-4 h-0.5 bg-border" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative flex flex-col items-center text-center">
                  <div
                    className="w-6 h-6 rounded-full ring-4 ring-background z-10 mb-4"
                    style={{ background: m.color }}
                  />
                  <div className="text-2xl font-black text-ink">{m.year}</div>
                  <div className="mt-1 text-sm text-ink-soft max-w-[180px]">{m.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
