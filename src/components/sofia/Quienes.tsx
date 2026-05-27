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
  { year: "2012", text: "Fundación de Sofía XT", color: "var(--brand-orange)", future: false },
  { year: "2017", text: "1,000 escuelas en México", color: "var(--brand-blue)", future: false },
  { year: "2021", text: "Expansión a Latinoamérica", color: "var(--brand-green)", future: false },
  { year: "2025", text: "+30M ejercicios resueltos", color: "var(--brand-pink)", future: false },
  {
    year: "2030",
    text: "2 millones de estudiantes · 27 estados · la red formativa más grande de México",
    color: "var(--brand-amber)",
    future: true,
  },
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
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-black text-ink">
              {yearsActive} años construyendo historia
            </h3>
            <p className="mt-1 text-base font-semibold" style={{ color: "var(--brand-green)" }}>
              y seguimos construyendo
            </p>
          </div>
          <div className="relative">
            {/* Solid line for past milestones (first 4 of 5 = 80%) */}
            <div className="hidden md:block absolute left-0 top-4 h-0.5 bg-border" style={{ right: "20%" }} />
            {/* Dashed line for future segment (last 20%) */}
            <div
              className="hidden md:block absolute top-4 h-0.5"
              style={{
                left: "80%", right: 0,
                background: "repeating-linear-gradient(90deg, #9ca3af 0, #9ca3af 6px, transparent 6px, transparent 14px)",
              }}
            />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative flex flex-col items-center text-center">
                  {m.future ? (
                    <>
                      <div className="relative z-10 mb-4">
                        {/* Meta badge floating above the line */}
                        <span
                          className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{ background: "#ede9fe", color: "#7c3aed" }}
                        >
                          Meta
                        </span>
                        <div
                          className="w-6 h-6 rounded-full border-2 border-dashed flex items-center justify-center text-xs ring-4 ring-background"
                          style={{ borderColor: "#8b5cf6", background: "#ede9fe" }}
                        >
                          🎯
                        </div>
                      </div>
                      <div className="text-2xl font-black" style={{ color: "#7c3aed" }}>{m.year}</div>
                      <div className="mt-1 text-sm max-w-[160px] font-medium" style={{ color: "#8b5cf6" }}>{m.text}</div>
                    </>
                  ) : (
                    <>
                      <div
                        className="w-6 h-6 rounded-full ring-4 ring-background z-10 mb-4"
                        style={{ background: m.color }}
                      />
                      <div className="text-2xl font-black text-ink">{m.year}</div>
                      <div className="mt-1 text-sm text-ink-soft max-w-[160px]">{m.text}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
