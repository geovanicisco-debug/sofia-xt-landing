import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/sofia/Navbar";
import { Hero } from "@/components/sofia/Hero";
import { Stats } from "@/components/sofia/Stats";
import { QueEs } from "@/components/sofia/QueEs";
import { Materias } from "@/components/sofia/Materias";
import { Novedades } from "@/components/sofia/Novedades";
import { Videos } from "@/components/sofia/Videos";
import { Quienes } from "@/components/sofia/Quienes";
import { Equipo } from "@/components/sofia/Equipo";
import { Testimonios } from "@/components/sofia/Testimonios";
import { Clientes } from "@/components/sofia/Clientes";
import { Plataformas } from "@/components/sofia/Plataformas";
import { Contacto } from "@/components/sofia/Contacto";
import { Footer } from "@/components/sofia/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sofía XT — La plataforma educativa más popular de México" },
      {
        name: "description",
        content:
          "Plataforma educativa adaptativa para preescolar a preparatoria. Más de 6,000 escuelas, 22,000 grupos y 30M de ejercicios resueltos. Alineada al programa SEP.",
      },
      { property: "og:title", content: "Sofía XT — Plataforma educativa adaptativa" },
      {
        property: "og:description",
        content:
          "Matemáticas, Español, Ciencias, Sociales e Inglés para 12 grados escolares. Solicita una demo.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <QueEs />
      <Quienes />
      <Materias />
      <Novedades />
      <Equipo />
      <Testimonios />
      <Clientes />
      <Plataformas />
      <Videos />
      <Contacto />
      <Footer />
      <Toaster richColors position="top-right" />
    </main>
  );
}
