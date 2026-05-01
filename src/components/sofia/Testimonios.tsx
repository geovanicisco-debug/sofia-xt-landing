import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Yo creo que tienen muy buena respuesta, se nota hasta en la conducta, porque cuando están trabajando en Sofía… no se escucha murmullo, no se escuchan voces, no se levantan de su lugar, casi ya no hay dudas, y pues eso es… para uno como docente, está bien padre, nos facilita mucho.",
    role: "Profesora de 6° grado",
    school: "Escuela privada · Hermosillo, Sonora",
    color: "var(--brand-blue)",
    initial: "P",
  },
  {
    quote:
      "A mí, Sofía sí me ha servido, como me estoy enfocando a segundo, voy a Sofía y ahí veo los ejercicios. Me apoya mucho para trabajar los aprendizajes esperados con mis alumnos.",
    role: "Profesora de 3° grado",
    school: "Escuela pública · Hermosillo, Sonora",
    color: "var(--brand-green)",
    initial: "M",
  },
  {
    quote:
      "Es muy similar al libro de texto, pero aparte trae ejercicios extras muy divertidos, muy padres. Mecanizaciones, por ejemplo, que es el área que yo estoy trabajando ahorita, en la que los niños presentan dificultad. Y ya trae muchos ejercicios de mecanizaciones, ya te los arroja el sistema.",
    role: "Profesora de 5° grado",
    school: "Escuela privada · Hermosillo, Sonora",
    color: "var(--brand-orange)",
    initial: "L",
  },
  {
    quote:
      "El niño está asimilando y está aprendiendo muy bien. El año pasado organizaron un Rally de matemáticas para niños de 6°, y nuestros alumnos resolvieron más rápido y correctamente los ejercicios que los de los otros planteles.",
    role: "Encargado del aula de medios",
    school: "Internado público · Hermosillo, Sonora",
    color: "var(--brand-teal)",
    initial: "E",
  },
  {
    quote:
      "Yo estaba batallando mucho con los números del 1 al 10, los niños estaban muy atrasaditos, y ya con el trabajo en Sofía, con la tecnología que se utiliza ahí, los niños han avanzado en gran medida — pudiera decir que del 100%, ya un 80% lograron el aprendizaje.",
    role: "Profesora de 1° grado",
    school: "Internado Cruz Gálvez · Sonora",
    color: "var(--brand-pink)",
    initial: "A",
  },
];

export function Testimonios() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    if (timer.current) clearInterval(timer.current);
    startTimer();
  };

  const t = testimonials[active];

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-teal">
          Lo que dicen los maestros
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink">
          Testimonios
        </h2>

        <div className="mt-12 relative min-h-[240px] flex flex-col items-center justify-center">
          <div
            key={active}
            className="animate-in fade-in duration-500 flex flex-col items-center"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mb-6 shadow-lg"
              style={{ background: t.color }}
            >
              {t.initial}
            </div>
            <svg
              className="mb-4 opacity-25"
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="currentColor"
            >
              <path d="M0 32V19.2C0 8.533 6.4 2.133 19.2 0l1.6 3.2C14.4 4.8 10.667 8 9.6 12.8H16V32H0zm24 0V19.2C24 8.533 30.4 2.133 43.2 0l1.6 3.2C38.4 4.8 34.667 8 33.6 12.8H40V32H24z" />
            </svg>
            <p className="text-lg md:text-xl text-ink-soft leading-relaxed italic max-w-2xl">
              "{t.quote}"
            </p>
            <div className="mt-6">
              <div className="font-black text-ink">{t.role}</div>
              <div className="text-sm text-muted-foreground mt-1">{t.school}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonio ${i + 1}`}
              className={`rounded-full transition-all ${
                i === active ? "w-7 h-3 bg-brand-blue" : "w-3 h-3 bg-border hover:bg-ink-soft"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
