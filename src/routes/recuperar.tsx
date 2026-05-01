import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/sofia-logo.png";

export const Route = createFileRoute("/recuperar")({
  head: () => ({
    meta: [{ title: "Recuperar contraseña — Sofía XT" }],
  }),
  component: Recuperar,
});

function Recuperar() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-4">
      {/* Card */}
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-border p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={logo} alt="Sofía XT" className="h-12 w-auto" />
          </Link>
        </div>

        {!sent ? (
          <>
            <h1 className="text-2xl font-black text-ink text-center">
              Recuperar contraseña
            </h1>
            <p className="mt-2 text-sm text-ink-soft text-center">
              Ingresa tu usuario o correo y te enviaremos instrucciones para restablecer tu contraseña.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div>
                <label className="block text-sm font-bold text-ink mb-1.5">
                  Usuario o correo electrónico
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@escuela.mx"
                  required
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand-orange py-3 text-sm font-bold text-white glow-orange transition-transform hover:scale-[1.02]"
              >
                Enviar instrucciones
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-brand-green/15 flex items-center justify-center mx-auto mb-5">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className="text-xl font-black text-ink">¡Correo enviado!</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
            </p>
          </div>
        )}

        {/* Back link */}
        <div className="mt-7 text-center">
          <Link
            to="/"
            className="text-sm font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sofía XT. Todos los derechos reservados.
      </p>
    </div>
  );
}
