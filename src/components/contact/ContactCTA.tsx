export default function ContactCTA() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUM;
  const waConfigured = waNumber && waNumber !== 'TODO_NUMERO';
  const waHref = waConfigured ? `https://wa.me/${waNumber}` : null;

  return (
    <section id="contacto" className="bg-[var(--discco-charcoal)] py-[72px] md:py-[112px]">
      <div className="max-w-content mx-auto px-5 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2
            className="font-display uppercase text-[var(--discco-bone)] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            ¿Armamos algo para tu proyecto?
          </h2>

          {/* Sub-copy */}
          <p className="font-body text-[var(--discco-taupe)] mb-8 leading-relaxed">
            Tenemos experiencia en branding, desarrollo web y producción de audio. Cuéntanos qué necesitas y veamos si hacemos buena combinación.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WhatsApp button */}
            {waHref ? (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-body text-sm uppercase tracking-widest bg-[var(--discco-accent)] text-[var(--discco-ink)] px-8 py-4 rounded-lg hover:bg-[var(--discco-accent-dk)] transition-colors"
              >
                <WhatsAppIcon />
                Escribir por WhatsApp
              </a>
            ) : (
              <button
                disabled
                title="WhatsApp no configurado todavía"
                className="inline-flex items-center justify-center gap-2 font-body text-sm uppercase tracking-widest bg-[var(--discco-taupe)] text-[var(--discco-bone)] px-8 py-4 rounded-lg opacity-50 cursor-not-allowed"
              >
                <WhatsAppIcon />
                Escribir por WhatsApp
              </button>
            )}

            {/* Secondary: scroll to creatvo */}
            <a
              href="#creativo"
              className="inline-flex items-center justify-center gap-2 font-body text-sm uppercase tracking-widest border border-[var(--discco-taupe)] text-[var(--discco-bone)] px-8 py-4 rounded-lg hover:border-[var(--discco-bone)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              Ver servicios
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>

          {/* TODO note for developer */}
          {!waConfigured && (
            <p className="mt-4 font-body text-[10px] text-[var(--discco-taupe)] opacity-50">
              {/* TODO: Replace NEXT_PUBLIC_WA_NUM in .env.local with real WhatsApp number including country code (no + or 00) */}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
