import { useState } from "react";

const TABS = ["Licencias", "Preparación y Entrenamiento"] as const;
type Tab = typeof TABS[number];

const licencias = [
  {
    icon: "🌱",
    title: "Licencia Preescolar",
    subtitle: "Preescolar",
    color: "var(--brand-green)",
    items: [
      "Guía de matemáticas en físico (desarrollada por proyectos)",
      "Acceso a plataforma digital Sofía XT",
    ],
  },
  {
    icon: "⭐",
    title: "Premium Plus",
    subtitle: "Primaria · Secundaria · Preparatoria",
    color: "var(--brand-blue)",
    items: [
      "Licencia de matemáticas Premium Plus",
      "Smartbooks de matemáticas programa anterior SEP/DBG",
      "Smartbooks adaptados al programa NEM/MCC",
      "Tutor virtual",
    ],
  },
  {
    icon: "🏆",
    title: "Platinum",
    subtitle: "Primaria · Secundaria · Preparatoria",
    color: "var(--brand-orange)",
    items: [
      "Licencia de matemáticas Platinum",
      "Smartbooks de matemáticas SEP/DBG + otras materias",
      "Smartbooks NEM/MCC de matemáticas + otras materias",
      "Tutor virtual",
    ],
  },
  {
    icon: "📚",
    title: "Premium Plus Híbrido",
    subtitle: "1° Primaria a 4° Semestre Preparatoria",
    color: "var(--brand-teal)",
    items: [
      "Plataforma digital Sofía XT",
      "Guía de matemáticas en físico",
    ],
  },
];

const preparacion = [
  {
    icon: "🎓",
    title: "Preparación Prepa",
    desc: "Módulo especial que prepara a los alumnos para ingresar exitosamente a preparatoria.",
    color: "var(--brand-teal)",
  },
  {
    icon: "🏛️",
    title: "Entrenamiento Tec de Monterrey",
    desc: "Practica y refuerza los conocimientos necesarios para el examen de admisión del Tecnológico de Monterrey.",
    color: "var(--brand-green)",
  },
  {
    icon: "📖",
    title: "Programa NEM",
    desc: "Contenido alineado al programa Nueva Escuela Mexicana (NEM) para todos los niveles.",
    color: "var(--brand-orange)",
  },
];

export function Novedades() {
  const [active, setActive] = useState<Tab>("Licencias");

  return (
    <section id="novedades" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-pink">
            Soluciones Educativas
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink">
            Nuestros Productos
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Licencias y programas diseñados para cada nivel educativo y necesidad institucional.
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
                  ? "bg-brand-pink text-white border-brand-pink shadow-lg scale-105"
                  : "bg-card text-ink-soft border-border hover:bg-surface"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Licencias */}
        {active === "Licencias" && (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {licencias.map((l) => (
              <div
                key={l.title}
                className="card-lift rounded-2xl border border-border bg-card shadow-sm overflow-hidden flex flex-col"
              >
                <div className="p-6 text-white flex flex-col gap-2" style={{ background: l.color }}>
                  <div className="text-3xl">{l.icon}</div>
                  <h3 className="text-xl font-black leading-snug">{l.title}</h3>
                  <p className="text-xs font-semibold text-white/80">{l.subtitle}</p>
                </div>
                <ul className="p-5 space-y-2 flex-1">
                  {l.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-black" style={{ background: l.color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Preparación y Entrenamiento */}
        {active === "Preparación y Entrenamiento" && (
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {preparacion.map((p) => (
              <div
                key={p.title}
                className="card-lift rounded-2xl p-7 text-white relative overflow-hidden shadow-md"
                style={{ background: p.color }}
              >
                <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-white/15 pointer-events-none" />
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="text-xl font-black">{p.title}</h3>
                <p className="mt-2 text-sm text-white/85 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
