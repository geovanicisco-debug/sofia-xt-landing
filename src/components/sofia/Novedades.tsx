import { useState } from "react";

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
    subtitle: "Nivel Secundaria",
    color: "var(--brand-teal)",
    items: [
      "Módulo especial para ingresar exitosamente a preparatoria",
      "Práctica enfocada en los temas del examen de admisión",
    ],
  },
  {
    icon: "🏛️",
    title: "Entrenamiento Tec de Monterrey",
    subtitle: "Nivel Preparatoria",
    color: "var(--brand-green)",
    items: [
      "Refuerzo de conocimientos para el examen de admisión del Tecnológico de Monterrey",
      "Ejercicios alineados al formato y nivel de dificultad del examen",
    ],
  },
  {
    icon: "📖",
    title: "Programa NEM",
    subtitle: "Todos los niveles",
    color: "var(--brand-orange)",
    items: [
      "Contenido alineado al programa Nueva Escuela Mexicana (NEM)",
      "Smartbooks adaptados al currículo NEM/MCC vigente",
    ],
  },
];

const SECTIONS = [
  { key: "licencias", label: "Licencias", items: licencias },
  { key: "preparacion", label: "Preparación y Entrenamiento", items: preparacion },
] as const;

function Accordion({ items }: { items: typeof licencias }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-8 space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-surface transition-colors"
            >
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-black text-ink text-base">{item.title}</div>
                <div className="text-xs text-ink-soft font-semibold">{item.subtitle}</div>
              </div>
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className={`shrink-0 text-ink-soft transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-6 pb-5 pt-1 border-t border-border">
                <ul className="space-y-2.5 mt-3">
                  {item.items.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span
                        className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[11px] font-black"
                        style={{ background: item.color }}
                      >
                        ✓
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Novedades() {
  const [activeSection, setActiveSection] = useState<"licencias" | "preparacion">("licencias");
  const current = SECTIONS.find((s) => s.key === activeSection)!;

  return (
    <section id="novedades" className="py-12 md:py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
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

        {/* Section tabs */}
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          {SECTIONS.map((s) => (
            <button
              key={s.key}
              onClick={() => setActiveSection(s.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                activeSection === s.key
                  ? "bg-brand-pink text-white border-brand-pink shadow-lg scale-105"
                  : "bg-card text-ink-soft border-border hover:bg-surface"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <Accordion items={current.items as typeof licencias} />
      </div>
    </section>
  );
}
