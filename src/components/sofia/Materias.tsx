import { useState } from "react";

const TABS = ["7 Ejes Articuladores", "4 Campos Formativos"] as const;
type Tab = typeof TABS[number];

const ejes = [
  { icon: "♿", title: "Inclusión", desc: "Fomento a la educación equitativa y atención a la diversidad.", color: "var(--brand-blue)" },
  { icon: "🔍", title: "Pensamiento Crítico", desc: "Capacidad para cuestionar y analizar la realidad.", color: "var(--brand-green)" },
  { icon: "🌍", title: "Interculturalidad Crítica", desc: "Reconocimiento y valoración de la diversidad cultural.", color: "var(--brand-teal)" },
  { icon: "⚖️", title: "Igualdad de Género", desc: "Promoción de la equidad y eliminación de brechas.", color: "var(--brand-pink)" },
  { icon: "🏃", title: "Vida Saludable", desc: "Conciencia sobre el bienestar físico, mental y social.", color: "var(--brand-orange)" },
  { icon: "📖", title: "Lectura y Escritura", desc: "Apropiación de las culturas a través de la lectoescritura como medio de aprendizaje.", color: "var(--brand-skyblue)" },
  { icon: "🎨", title: "Artes y Experiencias Estéticas", desc: "Valoración de la expresión artística.", color: "var(--brand-cyan)" },
];

const campos = [
  { icon: "💬", title: "Lenguajes", desc: "Abarca español, lenguas indígenas, inglés y artes.", color: "var(--brand-blue)" },
  { icon: "🔬", title: "Saberes y Pensamiento Científico", desc: "Comprende matemáticas y ciencias: biología, física y química.", color: "var(--brand-green)" },
  { icon: "🌱", title: "Ética, Naturaleza y Sociedades", desc: "Incluye geografía, historia y formación cívica y ética.", color: "var(--brand-orange)" },
  { icon: "🤝", title: "De lo Humano y lo Comunitario", desc: "Abarca educación física, tecnología, tutoría y educación socioemocional.", color: "var(--brand-teal)" },
];

export function Materias() {
  const [active, setActive] = useState<Tab>("7 Ejes Articuladores");
  const items = active === "7 Ejes Articuladores" ? ejes : campos;

  return (
    <section className="py-12 md:py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-orange">
            Plan de Estudios 2025
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink leading-tight">
            Alineado al Plan de Estudios SEP 2025
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Contenido organizado conforme a los 4 Campos Formativos y 7 Ejes Articuladores del programa nacional vigente.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                active === t
                  ? "bg-brand-orange text-white border-brand-orange shadow-lg scale-105"
                  : "bg-card text-ink-soft border-border hover:bg-background"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="card-lift rounded-2xl p-7 text-white relative overflow-hidden shadow-md"
              style={{ background: item.color }}
            >
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-white/15 pointer-events-none" />
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-black leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-white/85 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
