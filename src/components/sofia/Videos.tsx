import { useEffect, useRef, useState } from "react";

import copaCnep      from "@/assets/copa/cnep.jpg";
import copaDinisa    from "@/assets/copa/dinisa.jpg";
import copaExpreso   from "@/assets/copa/expreso.png";
import copaMeduca    from "@/assets/copa/sofia-meduca.jpg";
import copaTetakawi  from "@/assets/copa/tetakawi.jpg";

const copaSponsors = [
  { src: copaCnep,     alt: "CNEP" },
  { src: copaDinisa,   alt: "Dinisa" },
  { src: copaExpreso,  alt: "Expreso" },
  { src: copaMeduca,   alt: "Sofía XT Meduca" },
  { src: copaTetakawi, alt: "Tetakawi" },
];

const categories = [
  {
    label: "Eventos",
    videos: [
      { id: "pqtNWZSvQ-4", title: "Evento Sofía XT 2024", start: 1 },
      { id: "2iiluHr997M", title: "Copa Nacional Sofía XT" },
      { id: "JbIIfsq4FCE", title: "Logros y premios Sofía XT" },
    ],
  },
  {
    label: "Matemáticas",
    videos: [
      { id: "cxQHJdvrc-E", title: "Ejercicios de matemáticas" },
      { id: "M0fBr8x5GGQ", title: "Práctica matemática avanzada" },
      { id: "znySJge7578", title: "Resolución de problemas" },
      { id: "1uFBg1e1fTc", title: "Matemáticas divertidas" },
      { id: "UcTNg5eiXPY", title: "Retos matemáticos" },
    ],
  },
];

type Video = { id: string; title: string; start?: number };

function thumb(id: string) {
  return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

function embedUrl(v: Video) {
  const params = new URLSearchParams({ autoplay: "1", rel: "0", modestbranding: "1" });
  if (v.start) params.set("start", String(v.start));
  return `https://www.youtube.com/embed/${v.id}?${params}`;
}

export function Videos() {
  const [cat, setCat] = useState(0);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const videos = categories[cat].videos;
  const current = videos[idx];

  const startAutoplay = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setIdx((i) => (i + 1) % videos.length);
    }, 6000);
  };

  useEffect(() => {
    setIdx(0);
    setPlaying(false);
  }, [cat]);

  useEffect(() => {
    if (!playing) {
      startAutoplay();
    } else {
      if (timer.current) clearInterval(timer.current);
    }
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [playing, cat, videos.length]);

  const selectVideo = (i: number) => {
    setIdx(i);
    setPlaying(false);
    if (timer.current) clearInterval(timer.current);
    startAutoplay();
  };

  const prev = () => selectVideo((idx - 1 + videos.length) % videos.length);
  const next = () => selectVideo((idx + 1) % videos.length);

  return (
    <section id="videos" className="py-12 md:py-16 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-orange">
            Multimedia
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black">
            Sofía XT en acción
          </h2>
          <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">
            Descubre nuestros eventos, competencias y contenido educativo.
          </p>

          {/* Category tabs */}
          <div className="mt-8 inline-flex rounded-full bg-white/10 p-1 gap-1">
            {categories.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setCat(i)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  i === cat
                    ? "bg-brand-orange text-white shadow"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Main player */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl group">
              {playing ? (
                <iframe
                  key={current.id}
                  src={embedUrl(current)}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <>
                  <img
                    src={thumb(current.id)}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setPlaying(true)}
                      className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center shadow-xl transition-transform hover:scale-110 group-hover:scale-105"
                      aria-label="Reproducir video"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  {/* Prev / Next arrows on thumbnail */}
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                    aria-label="Anterior"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                    aria-label="Siguiente"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </button>
                </>
              )}
            </div>
            <p className="mt-3 font-bold text-white text-base md:text-lg">{current.title}</p>

            {/* Dot indicators */}
            <div className="mt-3 flex gap-2">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => selectVideo(i)}
                  aria-label={`Video ${i + 1}`}
                  className={`rounded-full transition-all ${
                    i === idx ? "w-6 h-2.5 bg-brand-orange" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail list */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible lg:max-h-[400px] pb-2 lg:pb-0 snap-x lg:snap-none px-1 lg:px-0">
            {videos.map((v, i) => (
              <button
                key={v.id}
                onClick={() => selectVideo(i)}
                className={`shrink-0 snap-start flex lg:flex-row items-center gap-3 rounded-xl p-2 transition-all text-left w-44 lg:w-auto ${
                  i === idx
                    ? "bg-white/15 ring-2 ring-brand-orange"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="relative shrink-0 w-24 lg:w-28 rounded-lg overflow-hidden aspect-video">
                  <img src={thumb(v.id)} alt={v.title} className="w-full h-full object-cover" />
                  {i === idx && (
                    <div className="absolute inset-0 bg-brand-orange/30 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-sm font-semibold text-white/85 leading-snug line-clamp-2">{v.title}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Copa Nacional sponsors — only shown on Eventos tab */}
        {cat === 0 && (
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-center text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
              Agradecemos a nuestros patrocinadores · 8va Copa Nacional
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {copaSponsors.map((s) => (
                <div
                  key={s.alt}
                  className="bg-white rounded-xl px-4 py-3 flex items-center justify-center h-24 w-44 shadow"
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
