import lasalleMexicoNorte from "@/assets/alianzas/lasalle-mexico-norte.png";
import cnepAlianza from "@/assets/alianzas/cnep.png";
import annepi from "@/assets/alianzas/annepi.png";

import activaIntegral from "@/assets/escuelas/activa-integral.jpg";
import alerce from "@/assets/escuelas/alerce.jpg";
import alfa from "@/assets/escuelas/alfa.jpg";
import arrizon from "@/assets/escuelas/arrizon.jpg";
import biculturalCobre from "@/assets/escuelas/bicultural-cobre.jpg";
import brighton from "@/assets/escuelas/brighton.jpg";
import cap from "@/assets/escuelas/cap.jpg";
import casaGrande from "@/assets/escuelas/casa-grande.jpg";
import centroCampogrande from "@/assets/escuelas/Centro Escolar Campogrande.png";
import cervino from "@/assets/escuelas/cervino.jpg";
import ceydi from "@/assets/escuelas/ceydi.jpg";
import colegioEdia from "@/assets/escuelas/colegio-edia.jpg";
import colegioEsperanza from "@/assets/escuelas/colegio-esperanza.jpg";
import colegioIntegral from "@/assets/escuelas/colegio-integral.jpg";
import colegioMarianos from "@/assets/escuelas/colegio-marianos.jpg";
import colegioMunoz from "@/assets/escuelas/Colegio Muñoz.jpg";
import colegioOsorioCoutino from "@/assets/escuelas/colegio-osorio-coutino.jpg";
import colegioReinaElizabeth from "@/assets/escuelas/colegio-reina-elizabeth.jpg";
import colegioRegisCiudadObregon from "@/assets/escuelas/Colegio Regis Ciudad Obregon.jpg";
import colegioRegisHermosillo from "@/assets/escuelas/Colegio Regis Hermosillo.jpg";
import colegioVallarta from "@/assets/escuelas/Colegio educativo vallarta.png";
import csa from "@/assets/escuelas/csa.jpg";
import ethelSutton from "@/assets/escuelas/ethel Sutton.jpg";
import excel from "@/assets/escuelas/excel.jpg";
import federicoFroebel from "@/assets/escuelas/federico-froebel.jpg";
import halil from "@/assets/escuelas/halil.jpg";
import hayas from "@/assets/escuelas/hayas.jpg";
import imarc from "@/assets/escuelas/Imarc.jpg";
import izcalli from "@/assets/escuelas/izcalli.jpg";
import lasalleCumbres from "@/assets/escuelas/lasalle-cumbres.jpg";
import liceoTec from "@/assets/escuelas/liceo tec de sonora.jpg";
import liceoThezia from "@/assets/escuelas/Liceo Thezia.png";
import lux from "@/assets/escuelas/lux.jpg";
import nuevosHorizontes from "@/assets/escuelas/nuevos-horizontes.jpg";
import paloAlto from "@/assets/escuelas/paloAlto.jpg";
import pestalozzi from "@/assets/escuelas/pestalozzi.jpg";
import sanCarlos from "@/assets/escuelas/sanCarlos.jpg";
import southernCopper from "@/assets/escuelas/southern-copper.jpg";
import treboles from "@/assets/escuelas/treboles.jpg";
import universidadPabloGuardado from "@/assets/escuelas/universidad-pablo-guardado.jpg";

const schools: { src: string; alt: string }[] = [
  { src: activaIntegral, alt: "Activa Integral" },
  { src: alerce, alt: "Alerce" },
  { src: alfa, alt: "Alfa" },
  { src: arrizon, alt: "Arrízón" },
  { src: biculturalCobre, alt: "Bicultural Cobre" },
  { src: brighton, alt: "Brighton Bilingual School" },
  { src: cap, alt: "CAP" },
  { src: casaGrande, alt: "Casa Grande" },
  { src: centroCampogrande, alt: "Centro Escolar Campogrande" },
  { src: cervino, alt: "Cervino" },
  { src: ceydi, alt: "CEYDI" },
  { src: colegioEdia, alt: "Colegio EDIA" },
  { src: colegioEsperanza, alt: "Colegio Esperanza" },
  { src: colegioIntegral, alt: "Colegio Integral" },
  { src: colegioMarianos, alt: "Colegio Marianos" },
  { src: colegioMunoz, alt: "Colegio Muñoz" },
  { src: colegioOsorioCoutino, alt: "Colegio Osorio Coutiño" },
  { src: colegioReinaElizabeth, alt: "Colegio Reina Elizabeth" },
  { src: colegioRegisCiudadObregon, alt: "Colegio Regis Ciudad Obregón" },
  { src: colegioRegisHermosillo, alt: "Colegio Regis Hermosillo" },
  { src: colegioVallarta, alt: "Centro Educativo Vallarta" },
  { src: csa, alt: "CSA" },
  { src: ethelSutton, alt: "Ethel Sutton" },
  { src: excel, alt: "Excel" },
  { src: federicoFroebel, alt: "Federico Froebel" },
  { src: halil, alt: "Halil" },
  { src: hayas, alt: "Hayas" },
  { src: imarc, alt: "IMARC" },
  { src: izcalli, alt: "Izcalli" },
  { src: lasalleCumbres, alt: "La Salle Cumbres" },
  { src: liceoTec, alt: "Liceo Tec de Sonora" },
  { src: liceoThezia, alt: "Liceo Thezia" },
  { src: lux, alt: "Lux" },
  { src: nuevosHorizontes, alt: "Nuevos Horizontes" },
  { src: paloAlto, alt: "Escuela Americana Palo Alto" },
  { src: pestalozzi, alt: "Pestalozzi" },
  { src: sanCarlos, alt: "San Carlos" },
  { src: southernCopper, alt: "Southern Copper" },
  { src: treboles, alt: "Tréboles" },
  { src: universidadPabloGuardado, alt: "Universidad Pablo Guardado" },
];

const mid = Math.ceil(schools.length / 2);
const row1 = schools.slice(0, mid);
const row2 = schools.slice(mid);

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="shrink-0 w-48 h-28 md:w-56 md:h-32 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center px-4 py-3">
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full w-auto h-auto object-contain"
      />
    </div>
  );
}

function Row({
  items,
  speed,
  reverse = false,
}: {
  items: { src: string; alt: string }[];
  speed: "marquee" | "marquee-slow";
  reverse?: boolean;
}) {
  const list = reverse ? [...items].reverse() : items;
  const doubled = [...list, ...list];
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-5 ${speed}`}>
        {doubled.map((s, i) => (
          <LogoCard key={`${s.alt}-${i}`} src={s.src} alt={s.alt} />
        ))}
      </div>
    </div>
  );
}

const alianzas = [
  { src: lasalleMexicoNorte, alt: "La Salle México Norte" },
  { src: cnepAlianza,        alt: "CNEP" },
  { src: annepi,             alt: "Annepi" },
];

export function Clientes() {
  return (
    <section id="clientes" className="py-12 md:py-14 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-12">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-teal">
          Confianza institucional
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink">
          +40 Escuelas que han confiado en nosotros
          <span className="block mt-2 text-2xl md:text-3xl font-bold text-brand-teal">
            y alianzas que nos respaldan
          </span>
        </h2>
      </div>

      <div className="space-y-5">
        <Row items={row1} speed="marquee" />
        <Row items={row2} speed="marquee-slow" reverse />
      </div>

      {/* Alianzas */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-14">
        <h3 className="text-center text-xl font-black text-ink mb-8">Nuestras Alianzas</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {alianzas.map((a) => (
            <div
              key={a.alt}
              className="w-64 h-36 bg-white rounded-2xl shadow-md border border-border flex items-center justify-center px-6 py-4"
            >
              <img
                src={a.src}
                alt={a.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
