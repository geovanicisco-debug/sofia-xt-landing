import heroImg from "@/assets/hero-mockup.png";

export function Hero() {
  return (
    <section id="top" className="relative pt-16 md:pt-20 hero-gradient overflow-hidden">
      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-8 w-16 h-16 rounded-full bg-brand-orange/40 float-slow" />
        <div className="absolute top-40 right-1/3 w-10 h-10 rounded-md rotate-12 bg-brand-green/50 float-slower" />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full border-4 border-brand-green-soft/40 float-slower" />
        <div className="absolute top-1/2 right-10 w-12 h-12 rounded-md rotate-45 bg-brand-pink/30 float-slow" />
        <div className="absolute bottom-32 right-1/4 text-white/20 text-6xl font-black select-none float-slow">+</div>
        <div className="absolute top-32 right-10 text-white/15 text-7xl font-black select-none float-slower">π</div>
        <div className="absolute bottom-10 left-10 text-white/15 text-6xl font-black select-none float-slow">∑</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-green-soft" />
            11 años transformando la educación
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            La plataforma educativa más popular de{" "}
            <span className="text-brand-orange">México</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl">
            Más de 30 millones de ejercicios resueltos. Contenido adaptado al programa SEP
            para preescolar hasta preparatoria.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-base font-bold text-white glow-orange transition-transform hover:scale-105"
            >
              Solicitar Demo
            </a>
            <a
              href="#que-es"
              className="inline-flex justify-center items-center gap-2 rounded-full border-2 border-white/80 px-7 py-3.5 text-base font-bold text-white hover:bg-white hover:text-ink transition-colors"
            >
              Conoce la Plataforma
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-white/10 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Plataforma Sofía XT en laptop y tablet"
            width={1024}
            height={896}
            className="relative w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
