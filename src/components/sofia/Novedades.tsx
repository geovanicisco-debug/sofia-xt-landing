const features = [
  { icon: "🧑‍🎨", title: "Avatar", desc: "Crea tu avatar y personaliza tu perfil con las novedades de la tienda.", color: "var(--brand-pink)" },
  { icon: "🏆", title: "Logros", desc: "Desbloquea insignias de nuestra lista, acepta el reto y aumenta tus habilidades.", color: "var(--brand-amber)" },
  { icon: "⚡", title: "Quick Test", desc: "Realiza una práctica libre y pon a prueba tus habilidades matemáticas cuando quieras.", color: "var(--brand-orange)" },
  { icon: "🎮", title: "Juegos", desc: "Aprende, diviértete y gana puntos con los juegos que tenemos para ti.", color: "var(--brand-blue)" },
  { icon: "📰", title: "Muro", desc: "Revisa noticias y actividades recientes de tu grupo en tu muro personal.", color: "var(--brand-teal)" },
  { icon: "💬", title: "Foro", desc: "Comenta dudas y solicita asistencia en nuestra sección de foro comunitario.", color: "var(--brand-skyblue)" },
  { icon: "📊", title: "Encuestas", desc: "Responde encuestas sobre gustos, inteligencias múltiples, autoestima y más.", color: "var(--brand-green)" },
  { icon: "📝", title: "Tareas", desc: "Realiza las actividades y tareas asignadas por tus maestros de manera sencilla.", color: "var(--brand-cyan)" },
  { icon: "🔬", title: "Diagnóstico", desc: "Pon a prueba tus conocimientos con los exámenes diagnóstico de Sofía XT.", color: "var(--brand-blue)" },
];

export function Novedades() {
  return (
    <section id="novedades" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-pink">
            Funcionalidades
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink">
            Todo lo que incluye la plataforma
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Herramientas pensadas para que el aprendizaje sea motivador, medible y divertido.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-lift rounded-2xl p-7 flex gap-5 items-start text-white shadow-md relative overflow-hidden"
              style={{ background: f.color }}
            >
              {/* decorative circle */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />

              <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
                {f.icon}
              </div>
              <div>
                <h3 className="text-xl font-black">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/85">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
