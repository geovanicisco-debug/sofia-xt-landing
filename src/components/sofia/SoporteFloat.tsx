const SOPORTE_URL = "https://support.sofiaxt.com/support/tickets/new";

export function SoporteFloat() {
  return (
    <a
      href={SOPORTE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir ticket de soporte"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full shadow-lg px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
      style={{ background: "var(--brand-teal)" }}
    >
      {/* headset icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0118 0v6"/>
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"/>
        <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z"/>
      </svg>
      Soporte
    </a>
  );
}
