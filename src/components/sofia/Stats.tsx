import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "", prefix = "+" }: { end: number; suffix?: string; prefix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1800;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.floor(end * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-black tabular-nums">
      {prefix}
      {n.toLocaleString("es-MX")}
      {suffix}
    </div>
  );
}

const items = [
  { end: 6000, suffix: "", label: "Escuelas", icon: "🏫" },
  { end: 22000, suffix: "", label: "Grupos", icon: "👥" },
  { end: 30, suffix: "M", label: "Ejercicios resueltos", icon: "✏️" },
  { end: 30, suffix: "%", label: "Mejora en calificaciones en un ciclo escolar", icon: "📈", prefix: "+" },
];

export function Stats() {
  return (
    <section className="bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {items.map((it) => (
          <div key={it.label} className="flex flex-col items-center">
            <div className="text-4xl mb-3">{it.icon}</div>
            <Counter end={it.end} suffix={it.suffix} prefix={it.prefix ?? "+"} />
            <div className="mt-2 text-base md:text-lg font-semibold uppercase tracking-wider text-white/90">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
