import about from "@/assets/equipo-foto.jpg";
import imgAlumnos from "@/assets/alumnos.jpg";
import imgMaestros from "@/assets/maestros.jpg";
import imgPadres from "@/assets/padres2.jpg";

const cards = [
  {
    icon: "🎓",
    title: "Para Alumnos",
    desc: "Practica ejercicios de forma personalizada y divertida, con retroalimentación inmediata.",
    color: "var(--brand-blue)",
    img: imgAlumnos,
  },
  {
    icon: "👩‍🏫",
    title: "Para Profesores",
    desc: "Registra tareas, exámenes y da seguimiento al avance de cada grupo y alumno.",
    color: "var(--brand-green)",
    img: imgMaestros,
  },
  {
    icon: "👨‍👩‍👧",
    title: "Para Padres",
    desc: "Monitorea el progreso de tus hijos en tiempo real y participa en su aprendizaje.",
    color: "var(--brand-orange)",
    img: imgPadres,
    imgPosition: "object-bottom",
  },
];

export function QueEs() {
  return (
    <section id="que-es" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue">
              Plataforma educativa
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink leading-tight">
              ¿Qué es Sofía XT?
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Sofía XT es un centro de investigación educativa que ofrece una plataforma
              virtual con herramientas para incrementar el nivel de aprendizaje de los
              alumnos, alineada al programa de la SEP y enriquecida con contenidos
              innovadores.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-blue/10 rounded-3xl rotate-2" />
            <img
              src={about}
              alt="Equipo Sofía XT"
              loading="lazy"
              width={1024}
              height={896}
              className="relative rounded-3xl w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="card-lift bg-card rounded-2xl shadow-sm border border-border relative overflow-hidden"
            >
              <div
                className="absolute top-0 inset-x-0 h-1.5"
                style={{ background: c.color }}
              />
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className={`w-full h-full object-cover ${c.imgPosition ?? "object-center"}`}
                />
              </div>
              <div className="p-7">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-xl font-black text-ink">{c.title}</h3>
                <p className="mt-2 text-ink-soft leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
