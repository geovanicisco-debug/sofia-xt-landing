import { useState } from "react";

const subjects = [
  { name: "Matemáticas", icon: "🧮", color: "var(--brand-blue)" },
  { name: "Español", icon: "📚", color: "var(--brand-green-soft)" },
  { name: "Ciencias Naturales", icon: "🌱", color: "var(--brand-teal)" },
  { name: "Ciencias Sociales", icon: "🌎", color: "var(--brand-skyblue)" },
  { name: "Inglés", icon: "🗣️", color: "var(--brand-orange)" },
  { name: "Habilidades Socioemocionales", icon: "💛", color: "var(--brand-cyan)" },
];

const levels = ["Preescolar", "Primaria", "Secundaria", "Preparatoria"];

export function Materias() {
  const [active, setActive] = useState("Primaria");

  return (
    <section className="py-12 md:py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-orange">
            Cobertura curricular
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink leading-tight">
            Contenido para todos los niveles
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            12 grados escolares cubiertos, alineados al programa SEP.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
          {subjects.map((s) => (
            <div
              key={s.name}
              className="card-lift rounded-2xl p-7 text-white relative overflow-hidden"
              style={{ background: s.color }}
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="text-lg md:text-xl font-black">{s.name}</div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/15" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => setActive(l)}
              className={`px-5 md:px-7 py-2.5 rounded-full text-sm md:text-base font-bold transition-all ${
                active === l
                  ? "bg-brand-orange text-white shadow-lg scale-105"
                  : "bg-card text-ink-soft border border-border hover:bg-surface"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
