import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  email: z.string().trim().email("Correo inválido").max(255),
  telefono: z.string().trim().min(7, "Teléfono inválido").max(20),
  institucion: z.string().trim().min(2, "Ingresa el nombre de la institución").max(150),
  tipo: z.string().min(1, "Selecciona el tipo de escuela"),
  niveles: z.array(z.string()).min(1, "Selecciona al menos un nivel"),
  mensaje: z.string().trim().min(5, "Cuéntanos un poco más").max(1000),
});

const NIVELES = ["Preescolar", "Primaria", "Secundaria", "Preparatoria"];

const bullets = [
  { icon: "⚡", title: "Demo personalizada", text: "Te mostramos la plataforma con contenido de tu nivel." },
  { icon: "🤝", title: "Acompañamiento", text: "Implementación y capacitación para tu equipo docente." },
  { icon: "📈", title: "Resultados medibles", text: "Reportes de avance por alumno, grupo y escuela." },
];

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Contacto() {
  const [niveles, setNiveles] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const toggleNivel = (n: string) =>
    setNiveles((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      nombre: String(fd.get("nombre") || ""),
      email: String(fd.get("email") || ""),
      telefono: String(fd.get("telefono") || ""),
      institucion: String(fd.get("institucion") || ""),
      tipo: String(fd.get("tipo") || ""),
      niveles,
      mensaje: String(fd.get("mensaje") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof Errors;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Revisa los campos del formulario.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("¡Solicitud enviada! Nos pondremos en contacto contigo pronto.");
    (e.target as HTMLFormElement).reset();
    setNiveles([]);
  };

  const inputBase =
    "w-full rounded-xl border bg-background px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition";
  const errCls = (k: keyof Errors) =>
    errors[k] ? "border-destructive" : "border-border";

  return (
    <section id="contacto" className="py-12 md:py-16 contact-gradient">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-orange">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-ink leading-tight">
            ¿Listo para transformar tu escuela?
          </h2>
          <p className="mt-4 text-lg text-ink-soft max-w-md">
            Solicita una demo gratuita y descubre cómo Sofía XT puede impulsar el
            aprendizaje en tu institución.
          </p>

          <ul className="mt-8 space-y-5">
            {bullets.map((b) => (
              <li key={b.title} className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-blue text-white flex items-center justify-center text-xl">
                  {b.icon}
                </div>
                <div>
                  <div className="font-black text-ink">{b.title}</div>
                  <div className="text-sm text-ink-soft">{b.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="bg-card rounded-3xl p-6 md:p-8 shadow-xl border border-border space-y-4"
        >
          <div>
            <label className="text-sm font-bold text-ink">Nombre completo</label>
            <input name="nombre" maxLength={100} className={`${inputBase} ${errCls("nombre")} mt-1.5`} placeholder="Tu nombre" />
            {errors.nombre && <p className="text-xs text-destructive mt-1">{errors.nombre}</p>}
          </div>

          <div className="grid xs:grid-cols-2 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-ink">Correo electrónico</label>
              <input name="email" type="email" maxLength={255} className={`${inputBase} ${errCls("email")} mt-1.5`} placeholder="tucorreo@escuela.mx" />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-bold text-ink">Teléfono</label>
              <input name="telefono" maxLength={20} className={`${inputBase} ${errCls("telefono")} mt-1.5`} placeholder="+52 ..." />
              {errors.telefono && <p className="text-xs text-destructive mt-1">{errors.telefono}</p>}
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-ink">Nombre de la institución</label>
            <input name="institucion" maxLength={150} className={`${inputBase} ${errCls("institucion")} mt-1.5`} placeholder="Colegio..." />
            {errors.institucion && <p className="text-xs text-destructive mt-1">{errors.institucion}</p>}
          </div>

          <div>
            <label className="text-sm font-bold text-ink">Tipo de escuela</label>
            <select name="tipo" defaultValue="" className={`${inputBase} ${errCls("tipo")} mt-1.5`}>
              <option value="" disabled>Selecciona una opción</option>
              <option>Escuela Pública</option>
              <option>Escuela Privada</option>
              <option>Universidad</option>
              <option>Otro</option>
            </select>
            {errors.tipo && <p className="text-xs text-destructive mt-1">{errors.tipo}</p>}
          </div>

          <div>
            <label className="text-sm font-bold text-ink">Nivel educativo de interés</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {NIVELES.map((n) => {
                const active = niveles.includes(n);
                return (
                  <button
                    type="button"
                    key={n}
                    onClick={() => toggleNivel(n)}
                    className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
                      active
                        ? "bg-brand-green text-white border-brand-green"
                        : "bg-background text-ink-soft border-border hover:bg-surface"
                    }`}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
            {errors.niveles && <p className="text-xs text-destructive mt-1">{errors.niveles}</p>}
          </div>

          <div>
            <label className="text-sm font-bold text-ink">¿Cómo podemos ayudarte?</label>
            <textarea name="mensaje" maxLength={1000} rows={4} className={`${inputBase} ${errCls("mensaje")} mt-1.5 resize-none`} placeholder="Cuéntanos sobre tu escuela..." />
            {errors.mensaje && <p className="text-xs text-destructive mt-1">{errors.mensaje}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-brand-orange px-7 py-3.5 text-base font-bold text-white glow-orange transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
          >
            {submitting ? "Enviando..." : "Enviar solicitud"}
          </button>
          <p className="text-xs text-center text-ink-soft">
            Nos pondremos en contacto contigo en menos de 24 horas.
          </p>
        </form>
      </div>
    </section>
  );
}
